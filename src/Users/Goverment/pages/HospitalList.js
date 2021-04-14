import React, { useState, useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import response from '../utils/demo/tableData'
import {connect} from 'react-redux'
import axios from 'axios'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Badge,
  Pagination,
} from '@windmill/react-ui'
import { Link } from 'react-router-dom'



class Dashboard extends React.Component{
  constructor(props)
  {
     super(props)
    this.state={
      page: 1,
      resultsPerPage: 10,
      totalResults: 0,
      response: []
    }
  }
  onPageChange=(p)=>{
      this.setState({page: p})
  }
  componentDidMount(){
    const token=localStorage.getItem('hospitalToken')
    axios.post('http://localhost:4000/api/admin/getHospital',
      {
        stateID: this.props.stateID,
        districtID: this.props.districtID
      },{
      headers: {
        'authorization': `Bearer ${token}`
      }}
    ).then((res)=>{
      console.log("HIIIIIII")
       if(res.data.status) {
         console.log(res)
         this.setState({response: res.data.data,totalResults: res.data.data.length})
         this.props.setHospitalData(res.data.data)
       }
       else {
         this.props.userAuth()
         this.props.history.push('/users/login')
       }
    }).catch((error)=>{
      console.log(error)
    })
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.page!==this.state.page)
    {
      const {page,resultsPerPage}= this.state
      this.setState({response: this.props.hospitalData.slice((page - 1) * resultsPerPage, page * resultsPerPage)})
    }
    else if(prevProps.hospitalData.length>this.props.hospitalData.length)
    {
      this.setState({totalResults: this.props.hospitalData.length})
      this.setState({response: this.props.hospitalData})
    }else if(prevProps.districtID!==this.props.districtID)
    {
      const token=localStorage.getItem('sepmToken')
      axios.post('http://localhost:4000/api/admin/getHospital',
        {
          stateID: this.props.stateID,
          districtID: this.props.districtID
        },{
        headers: {
          'authorization': `Bearer ${token}`
        }}
      ).then((res)=>{
        console.log("HIIIIIII")
         if(res.data.status) {
           console.log(res)
           this.setState({response: res.data.data,totalResults: res.data.data.length})
           this.props.setHospitalData(res.data.data)
         }
         else {
           this.props.userAuth()
           this.props.history.push('/users/login')
         }
      }).catch((error)=>{
        console.log(error)
      })
      
    }
  }
  render(){
    return(
      <>
      <PageTitle>Vaccine Status</PageTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>ID</TableCell>
              <TableCell>Hospital Name</TableCell>
              <TableCell>Controller Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Button</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {this.state.response.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.hospitalID}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{user.name}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.email}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.vaccinationStatus ? "Active" : "Not Active"}</span>
                </TableCell>
                <TableCell>
                 <Link to={`/Government/hospitaldashboard/${user.hospitalID}`}> <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none  ">show status</button> </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={this.state.totalResults}
            resultsPerPage={this.state.resultsPerPage}
            label="Table navigation"
            onChange={this.onPageChange}
          />
        </TableFooter>
      </TableContainer>

    </>

    )
  }
}
const mapStateToProps=(state)=>{
  return{
     hospitalData: state.user.hospitalData
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setHospitalData: (data)=> dispatch({type: 'ADD_HOSPITAL_DATA',payload: data}),
    userAuth: ()=> dispatch({type: 'ADD_USER_AUTH'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
