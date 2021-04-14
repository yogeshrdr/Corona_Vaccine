import React from 'react'

import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import {  CartIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import {doughnutOptions,lineOptions,doughnutLegends,lineLegends,} from '../utils/demo/chartsData'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      stock: '',
      todayAppointment: '',
      totalAppointment: '',
      Vaccinated: ''
    }
  }
  componentDidMount(){
    const token=localStorage.getItem('hospitalToken')
     axios.get('http://localhost:4000/api/hospital/getDetails',{
       headers: {
        'authorization': `Bearer ${token}`
       }
     }).then((res)=> {
       console.log(res)
         if(res.data.success) 
         {
              const obj=res.data.data
              this.setState({stock: obj.stock,todayAppointment: obj.todayAppointment,totalAppointment: obj.totalAppointment,Vaccinated: obj.Vaccinated})
         }else{
           if(res.data.message==='User Not Authorized')
           {
                this.props.hospitalAuth();
           }else{
               window.alert(res.data.msg)
           }
         }

    }).catch((err)=>console.log(err))

  }
  render(){
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Vaccine Stock" value={this.state.stock}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title=" Today Appointments " value={this.state.todayAppointment}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Appointments" value={this.state.totalAppointment}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Vaccinated" value={this.state.Vaccinated}>
          <RoundIcon
            icon={CartIcon}
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
    </>
  )
}}

const mapDispatchToProps=(dispatch)=>{
  return{
    hospitalAuth: ()=>dispatch({type: 'ADD_HOSPITAL_AUTH'})
  }
}
const mapStateToProps=(state)=>{
  return{
    dev: "ji"
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

