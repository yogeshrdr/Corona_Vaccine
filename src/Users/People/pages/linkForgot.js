import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label } from '@windmill/react-ui'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
class ChangePassword extends Component {
    constructor(props)
    {
      super(props)
      this.state={
        password: '',
        confirmPassword: ''
      }
    }
 
    handelChange=(events)=>{
       const {name,value}=events.target
       this.setState({[name]: value})
    }

    handelSubmit=(events)=>{
      events.preventDefault();
      const {password,confirmPassword}=this.state;
      console.log("HII")
      if(password!==confirmPassword)
      {
        alert('Passwords does not match')
      }else{
        const token=this.props.match.params.token
        //console.log(token)
            axios.post('http://localhost:4000/api/userAuth/setUserPassword',
            {
                password: password
            },{
                headers:{
                'authorization': `Bearer ${token}`
                }
                }
            ).then((res)=> {
                console.log(res)
                    if(res.data.success) 
                    {
                        window.alert("Your Password is Successfully Changed")
                      this.props.history.push("/users/login")
                    }else{
                    if(res.data.message==='User Not Authorized')
                    {
                        window.alert("You are not authorized to change Password, Please change Password")
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
        <form onSubmit={this.handelSubmit}>
        <PageTitle >Change Password</PageTitle>
     
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" value={this.state.password} placeholder="***************" type="password" name="password" onChange={this.handelChange} />
              </Label>


              <Label className="mt-4">
                <span>Confirm password</span>
                <Input className="mt-1" value={this.state.confirmPassword} placeholder="***************" type="password" name="confirmPassword" onChange={this.handelChange} />
              </Label>

          <div className="mt-4 ">
          <button
        className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        type="submit"
        style={{ transition: "all .15s ease" }}
      >
        Change Password
      </button>
          </div>
  
        </div>
        </form>
      </>
    
    )
    }
  }

export default withRouter(ChangePassword)
