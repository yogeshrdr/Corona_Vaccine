import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ImageLight from '../assets/img/login-office.jpg'
import ImageDark from '../assets/img/login-dark.jpg'
import { Input, Label } from '@windmill/react-ui'
import {withRouter} from 'react-router-dom'
class Login extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      email: '',
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
    const {email,password,confirmPassword}=this.state;
    if(password!==confirmPassword)
    {
      alert('Passwords does not match')
    }else{
      axios.post('http://localhost:4000/api/userAuth/SignUp',{
        email: email,
        password: password
      },{headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }}).then((response)=>{
        console.log(response)
          if(!response.data.success) alert(response.message)
          else { 
           
            this.props.history.push("/users/Login")
          }
      })  
      .catch((err)=>console.log(err))
    }
  }
  render(){
  return (
    <div className="flex items-center min-h-screen p-6 bg-blue-100 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <form onSubmit={this.handelSubmit}>
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create Account
              </h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" value={this.state.email} type="email" name="email" placeholder="Enter Email" onChange={this.handelChange} />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" value={this.state.password} placeholder="***************" type="password" name="password" onChange={this.handelChange} />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input className="mt-1" value={this.state.confirmPassword} placeholder="***************" type="password" name="confirmPassword" onChange={this.handelChange} />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>
              
              
              <div className="mt-4 ">
              <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
              Register
              </button>
            </div>
            


              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-blue-900 dark:text-purple-400 hover:underline"
                  to="/users/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  )}
}

export default withRouter(Login)
