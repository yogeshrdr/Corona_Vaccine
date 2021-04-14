import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label } from '@windmill/react-ui'
import { Card, CardBody } from '@windmill/react-ui'
import {connect} from 'react-redux'
import axios from 'axios'

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      reference_Id: '',
      userID: '',
      userData: []
   };
  }
  
  myChangeHandler = (event) => {
    const {name,value}=event.target
    this.setState({[name]: value});
  }
  handelSubmit=(event)=>{
    event.preventDefault()
   const data= this.props.user.filter((e)=> e.userID===this.state.userID)
   if(data.length!==0)
   {
     this.setState({userData: data})
   }
  }
  handelVaccinate=()=>{
    const obj=this.state.userData[0]
    const token=localStorage.getItem('hospitalToken')
    console.log(token)
   axios.post('http://localhost:4000/api/hospital/vaccinate',
     obj,{
        headers:{
         'authorization': `Bearer ${token}`
        }
       }
      ).then((res)=> {
        console.log(res)
           if(res.data.success) 
           {
              window.alert("User is Successfully Registered As Vaccinated")
              this.setState({userID: '',userData: []})
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

  handelRenderofVaccinate(){
   var date= new Date()
   date=date.toISOString().substr(0,10);
   if(this.state.userData[0].DOB!==date)
   {
     return false;
   }
   return true;
  }

 render(){

   let hello = null;

   if(this.state.userData.length !== 0){
       hello = (
         <div>
            <PageTitle>Vaccinator Vaccination</PageTitle>
                  <Card>
                    <CardBody>
                      <p className="mb-10 font-bold text-black dark:text-gray-300">Refernce ID - {this.state.userData[0].userID}</p>
                        <div className="grid gap-4 mb-8 md:grid-cols-4">
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Name - {this.state.userData[0].Name}</p>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Gender - {this.state.userData[0].Gender}</p>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Date of birth - {this.state.userData[0].DOB}</p>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Age - 20</p>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Blood Group - B+</p>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Any commodities - NO</p>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">date of vaccination- {this.state.userData[0].scheduleDate}</p>
                        </div>
                    </CardBody>
                  {
                    this.handelRenderofVaccinate() ?
                    <div className="mt-4 ">

                        <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={this.handelVaccinate}
                        >
                        Vaccinate 
                        </button>
                    </div> : null
                  }

                  </Card>

         </div>
       )
   }

  return (
    <>
      <PageTitle >Vaccinator Quick Search</PageTitle>
      <form onSubmit={this.handelSubmit}>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      
        <Label className="mt-4">
          <span>Enter Refernce number</span>
          <Input className="mt-1" placeholder="Enter ID Number" name="userID" onChange={this.myChangeHandler}/>
        </Label>

        <div className="mt-4 ">
               <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
               >
                     Search
               </button>
             </div>
        </div>
      

       {hello}
       </form>
    </>
  )
 }
}
const mapStateToProps=(state)=>{
  return{
      user: state.user.hospitaluserData
  }
}
export default connect(mapStateToProps,)(Forms)
