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
      hospitalLimit: ''
   };
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
             <span style={{fontWeight: 700}}>HOSPITAL NAME-</span> <span style={{paddingLeft: '30px'}}> Devesh</span>
         </div>
         <div style={{marginBottom: '20px'}}>
         <span style={{fontWeight: 700}}>DISTRICT NAME-</span> <span style={{paddingLeft: '30px'}}> Devesh</span>
         </div>
         <div style={{marginBottom: '20px'}}>
         <span style={{fontWeight: 700}}>STATE NAME-</span> <span style={{paddingLeft: '30px'}}> Devesh</span>
         </div>
         <div style={{marginBottom: '20px'}}>
         <span style={{fontWeight: 700}}>SCHEDULED DATE-</span> <span style={{paddingLeft: '30px'}}> Devesh</span>
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