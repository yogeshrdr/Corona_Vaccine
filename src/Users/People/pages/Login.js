import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ImageLight from '../assets/img/login-office.jpg'
import ImageDark from '../assets/img/login-dark.jpg'
import { Label, Input } from '@windmill/react-ui'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Login extends React.Component{
  constructor(props)
  {
     super(props)
     this.state={
       email: '',
       password: ''
     }
  }
  handelChange=(events)=>{
      const {name,value}=events.target;
      this.setState({[name]: value})
  }
  handelSubmit=(events)=>{
    console.log("hiii")
    events.preventDefault()
    const {email,password}=this.state;
    axios.post('http://localhost:4000/api/userAuth/Login',{
      email: email,
      password: password
    },{headers:{
      'Content-Type': 'application/json;charset=utf-8'
    }}).then((response)=>{
       console.log(response.data)
       if(!response.data.success) alert(response.data.message)
       else{
         localStorage.setItem('sepmToken',response.data.token)
         this.props.setUserAuth()
         this.props.history.push("/users/user")
       }
    }).then(()=>{
      
       console.log("HII" + this.props.authState)
    })
    .catch((err)=>console.log(err))
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
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" value={this.state.email} name="email" placeholder="Enter your Email" onChange={this.handelChange} />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type="password" value={this.state.password} name="password" placeholder="***************" onChange={this.handelChange}/>
              </Label>
            <div className="mt-4 ">
               <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
               >
                     Log in
               </button>
             </div>


              
              <hr className="my-8" />


              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-blue-900 dark:text-purple-400 hover:underline"
                  to="/users/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-blue-900 dark:text-purple-400 hover:underline"
                  to="/users/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
           </form>
          </main>
        </div>
      </div>
    </div>
  )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
        setUserAuth:()=> dispatch({type: 'ADD_USER_AUTH'})
   }
}
const mapStateToProps=(state)=>{
  console.log(state)
  return {
    authState: state.user.userAuth
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))
