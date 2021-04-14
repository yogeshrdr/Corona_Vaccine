import React from 'react'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import {  CartIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import {doughnutOptions,lineOptions,doughnutLegends,lineLegends,} from '../utils/demo/chartsData'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: {},
      vaccinationStatus: false,
      temp: 0
    }
  }
  componentDidMount(){
    console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHs")
    console.log(this.props.match.params.hospitalID)
    axios.post('http://localhost:4000/api/admin/getOneHospital',
      {
        hospitalID: this.props.match.params.hospitalID
      }
    ).then((res)=>{
       if(res.data.status) {
         console.log(res)
         this.setState({data: res.data.data})
         this.setState({vaccinationStatus: res.data.data.vaccinationStatus})
       }
       else if(res.data.message==='User Not Authorized'){
         this.props.userAuth()
         this.props.history.push('/users/login')
       }else{
           window.alert(res.data.message)
       }
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  handelHospitalStatus=()=>{
    axios.post('http://localhost:4000/api/admin/changeStatus',{
      hospitalID: this.state.data.hospitalID,
      vaccinationStatus: this.state.vaccinationStatus
    },{
      headers: {
        'Content-type': 'application/json'
      }
    }).then((res)=>{
      if(res.data.status) {
        console.log(res)
        this.setState({vaccinationStatus: !this.state.vaccinationStatus})
        
      }
      else if(res.data.message==='User Not Authorized'){
        this.props.userAuth()
        this.props.history.push('/users/login')
      }else{
          window.alert(res.data.message)
      }
   }).catch((error)=>{
     console.log(error)
   })
  }
  render(){
  return (
    <>
     <div
      className={'flex h-screen bg-gray-200 dark:bg-gray-900 '}
    >
      <Sidebar />
   
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="m-2">
        <h1 className="m-1 text-2xl font-semibold text-gray-700 dark:text-gray-200">Hospital Name- {this.state.data.name}</h1>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Vaccine Stock" value={this.state.data.totalVaccineStock}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title=" Today Appointments " value={this.state.data.todayAppointment}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Appointments" value={this.state.data.totalAppointment}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Vaccinated" value={this.state.data.totalVaccinated}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
      <div className="mt-4 ">
                <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={this.handelHospitalStatus}
                >{this.state.vaccinationStatus ? 
                  "Block Hospital" : "Unblock Hospital"}
                </button>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}}

export default withRouter(Dashboard)

