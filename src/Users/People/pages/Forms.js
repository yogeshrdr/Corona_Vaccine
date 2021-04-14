import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state={
      Name: '',
      DOB: this.getDefaultDate(),
      Gender: '',
      ID: ''
    }
  }
  getDefaultDate=()=>{
     var d=new Date()
     d.setFullYear(d.getFullYear()-45)
     d=d.toISOString().substr(0,10);
    return d;
  }
  handelSubmit=(events)=>{
    events.preventDefault();
    const {Name,DOB,Gender,ID}=this.state
    console.log(Name+" "+DOB+" "+Gender+" "+ID)
    console.log(DOB)
    const token=localStorage.getItem('sepmToken')
     console.log(token)
   axios.post('http://localhost:4000/api/reg/register',
      {
       Name: Name,
       DOB: DOB,
       Gender: Gender,
       ID: ID},{
         headers:{
          'authorization': `Bearer ${token}`
         }
        }
       ).then((res)=> {
         console.log(res)
            if(res.data.success) 
            {
              this.props.history.push("/users/user/dashboard")
            }else{
              if(res.data.message==='User Not Authorized')
              {
                   this.props.userAuth();
              }else{
                  window.alert(res.data.msg)
              }
            }

       }).catch((err)=>console.log(err))
  }
 handelChange=(events)=>{
      const{name,value}= events.target
      if(name==='DOB')
      {
          const data=value.split('-')
          if(data[0]>1976)
          {
            window.alert('Only Patient of Age Above 45 are allowed')
            return;
          }  
      }
      this.setState({[name]: value}) 
 }
  render(){
  return (
    <>
      <form onSubmit={this.handelSubmit}>
      <PageTitle >New Vaccine Registration</PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Name</span>
          <Input value={this.state.Name} name="Name" className="mt-1" placeholder="Enter Your Name" onChange={this.handelChange} required/>
        </Label>

        <Label className="mt-4">
          <span>Date of Birth</span>
          <Input  value={this.state.DOB} name="DOB" className="mt-1" type="date" onChange={this.handelChange} required/>
        </Label>


        <div className="mt-4">
          {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
          <Label>Gender</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="Male" name="Gender" onChange={this.handelChange}/>
              <span className="ml-2">Male</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="Female" name="Gender" onChange={this.handelChange}/>
              <span className="ml-2">Female</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="Other" name="Gender" onChange={this.handelChange}/>
              <span className="ml-2">Other</span>
            </Label>
          </div>
        </div>

        {/* <Label className="mt-4">
          <span>Select ID</span>
          <Select className="mt-1" required>
            <option>Addhar Card</option>
            <option>Driving license</option>
            <option>Pan Card</option>
            <option>Other</option>
          </Select>
        </Label> */}

        <Label className="mt-4">
          <span>Aadhar Number</span>
          <Input className="mt-1" name="ID" value={this.state.ID} placeholder="Enter ID Number" onChange={this.handelChange} required/>
        </Label>

        <Label className="mt-6" check>
          <Input type="checkbox" required/>
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
        
        <div className="mt-4 ">
        <button
      className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="submit"
      style={{ transition: "all .15s ease" }}
    >
      Register
    </button>
        </div>

      </div>
      </form>
    </>
  
  )
  }
}

const mapStateToProps=(State)=>{
  return{
      user: State.user
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    userAuth: ()=> dispatch({type: 'ADD_USER_AUTH'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Forms))
