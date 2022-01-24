import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import data from '../../Goverment/utils/demo/State'
import axios from 'axios'
class AppointmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      stateID: '',
      districtID: '',
      hospitalID: '',
      selectedDate: '',
      stateData: [],
      districtData: [],
      hospitalData: [],
      availableDates: [],
      hospitalLimit: '',
      userName: ''
   };
  }
  componentDidMount(){
    const userID=this.props.match.params.userID
    const token=localStorage.getItem('sepmToken')
    console.log(token)
  axios.post('http://localhost:4000/api/reg/getAppointData',
     {
      userID: userID
    },{
        headers:{
         'authorization': `Bearer ${token}`
        }
       }
      ).then((res)=> {
        console.log(res)
           if(res.data.success) 
           {
             console.log(res.data.data)
             this.setState({selectedDate: res.data.data.scheduleDate,userName: res.data.data.Name,hospitalID: res.data.data.name,districtID: res.data.data.districtName,stateID: res.data.data.stateName})
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
  render(){
  return (
    <>
    <div>
    <div
      className={'flex h-screen bg-gray-200 dark:bg-gray-900 overflow-hidden'}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="m-5 ">
      <PageTitle >Appointment Details</PageTitle>
      <div className="flex flex-col px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 text-black ">
         <div style={{marginBottom: '20px'}}>
             <span style={{fontWeight: 700}}>HOSPITAL NAME-</span> <span style={{paddingLeft: '30px'}}> {this.state.hospitalID}</span>
         </div>
         <div style={{marginBottom: '20px'}}>
         <span style={{fontWeight: 700}}>DISTRICT NAME-</span> <span style={{paddingLeft: '30px'}}>{this.state.districtID}</span>
         </div>
         <div style={{marginBottom: '20px'}}>
         <span style={{fontWeight: 700}}>STATE NAME-</span> <span style={{paddingLeft: '30px'}}> {this.state.stateID}</span>
         </div>
         <div style={{marginBottom: '20px'}}>
         <span style={{fontWeight: 700}}>SCHEDULED DATE-</span> <span style={{paddingLeft: '30px'}}> {this.state.selectedDate}</span>
         </div>
      </div>
      </div>
      </div></div>
      </div>
    </>
  )
  }
}

export default AppointmentDetails