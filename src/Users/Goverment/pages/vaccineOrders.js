import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select, Textarea} from '@windmill/react-ui'
import data from '../utils/demo/State'
import axios from 'axios'
class vaccineOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      stateID: '',
      districtID: '',
      stateData: [],
      districtData: [],
      email: '',
      name: ''
   };
  }
  componentDidMount(){
    console.log("HI")
     axios.post('http://localhost:4000/api/reg/getData/state')
     .then((response)=>{
        console.log(response)
        this.setState({stateData: response.data.data,districtData: [],districtID: ''})
     }).catch((err)=>console.log(err))
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.stateID!==this.state.stateID)
    {
      axios.post('http://localhost:4000/api/reg/getData/district',{
        stateID: this.state.stateID
      })
     .then((response)=>{
          console.log(response)
          this.setState({districtData: response.data.data})
     }).catch((err)=>console.log(err))
    }
  }

  myChangeHandler = (event) => {
    console.log("HIII")
    const {name,value}=event.target
    this.setState({[name]: value});
  }
  handelSubmit=(event)=>{
    event.preventDefault()
    const {stateID,districtID,email,name}=this.state;
    const obj={
      stateCode: stateID,
      districtCode: districtID,
      email: email,
      name: name,
      hospitalID: String(Date.now())
    }
    if(stateID==='' || districtID==='')
    {
      window.alert('Select Have not selected all details')
    }else{
      const token=localStorage.getItem('hospitalToken')
     axios.post('http://localhost:4000/api/admin/addHospital',
      obj,{
          headers:{
           'authorization': `Bearer ${token}`
          }
         }
        ).then((res)=> {
          console.log(res)
             if(res.data.status) 
             {
               window.alert("Hospital Successfully Added")
               this.setState({stateID:'',districtID: '',stateData: [],districtData: [],email: '',name: ''})
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
  }

  render(){
  return (
    <>
      <PageTitle >New Hospital Add</PageTitle>
      <form onSubmit={this.handelSubmit}>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Hospital Name</span>
          <Input value={this.state.name}  name="name" onChange={this.myChangeHandler} className="mt-1" placeholder="Enter Hospital Name" required/>
        </Label>

        <div className="grid gap-0 mb-2 mt-4 md:grid-cols-6 xl:grid-cols-2">
        <Label >
        <span>Enter State</span>
          <Select className="mt-1" name="stateID" onChange={this.myChangeHandler} required>
          <option value="">Select State</option>
          {this.state.stateData.map((states, i) => (
                  <option key={i} name="stateID" value={states.stateID}>{states.name}</option> 
            ))}    
            </Select>
          </Label>

              
          {
                
                this.state.stateID!=='' ? 
                <Label>
                  <span>Enter District</span>
                  <Select className="mt-1" name="districtID" onChange={this.myChangeHandler} required>
                  <option value="">Select District</option>
                    {this.state.districtData.map((district, i) => (
                    <option key={i}  value={district.districtID}>{district.name}</option>
                    ))}   
                    </Select> 
                </Label>
                : null
                
          }  
            
        </div>
        <Label>
          <span>Enter Email</span>
          <Input name="email" type="email" value={this.state.email} onChange={this.myChangeHandler} className="mt-1" placeholder="Enter Email Id" required/>
        </Label>

        <div className="mt-4 ">
        <button
      className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="submit"
      style={{ transition: "all .15s ease" }}
    >
      Add Hospital
    </button>
        </div>

      </div>
      </form>
    </>
  
  )
  }
}

export default vaccineOrder
