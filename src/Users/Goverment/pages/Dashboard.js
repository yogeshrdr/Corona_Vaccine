import React from 'react'
import axios from 'axios'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import {doughnutOptions,lineOptions,doughnutLegends,lineLegends,} from '../utils/demo/chartsData'

class Dashboard extends React.Component{
  constructor(){
     super()
     this.state={
       data: {}
     }
  }
  componentDidMount(){
    const token=localStorage.getItem('adminToken')
    axios.get('http://localhost:4000/api/admin/getAdminData',{
      headers:{
        'authorization': `Bearer ${token}`
      }
    })
    .then((res)=>{
      console.log(res)
      if(res.data.status){

        this.setState({data: res.data.data})
      }else{
        window.alert(res.data.message)
      }
    })
    .catch((error)=>console.log(error))
  }
  render(){
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="People Vaccinated" value={this.state.data.totalVaccinated}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="People Registered for Vaccine " value={this.state.data.totalRegistered}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Vaccine Manufactured" value="7376">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Hospitals Availablity" value={this.state.data.hospitals}>
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
        <ChartCard title="Vaccination">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Vaccination">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </>
  )
}}

export default Dashboard

