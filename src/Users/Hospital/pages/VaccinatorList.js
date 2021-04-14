import React, { useState, useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import response from '../utils/demo/tableData'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link,withRouter} from 'react-router-dom'
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



class Dashboard extends React.Component{
  constructor(props)
  {
     super(props)
    this.state={
      page: 1,
      resultsPerPage: 10,
      totalResults: 0,
      response: [],
      dateToday: ''
    }
  }
  onPageChange=(p)=>{
      this.setState({page: p})
  }
  componentDidMount(){
    var newDate=new Date()
    newDate.setDate(newDate.getDate())
    newDate=newDate.toISOString().substr(0,10)
   this.setState({dateToday: newDate})
    const token=localStorage.getItem('hospitalToken')
    axios.get('http://localhost:4000/api/hospital/userList',{
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((res)=>{
      console.log("HIIIIIII")
       if(res.data.success) {
         console.log(res)
         console.log(res.data.data)
         this.setState({response: res.data.data,totalResults: res.data.data.length})
         this.props.setUserData(res.data.data)
       }
       else if(res.data.message==='User Not Authorized') {
         this.props.userAuth()
         this.props.history.push('/Hospitals/login')
       }
    }).catch((error)=>{
      console.log(error)
    })
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.page!==this.state.page)
    {
      const {page,resultsPerPage}= this.state
      this.setState({response: this.props.userData.slice((page - 1) * resultsPerPage, page * resultsPerPage)})
    }
    else if(prevProps.userData.length>this.props.userData.length)
    {
      this.setState({totalResults: this.props.userData.length})
      this.setState({response: this.props.userData})
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
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Vaccination Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {this.state.response.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.userID}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{user.Name}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.gender}>{user.Gender}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.DOB}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.scheduleDate<this.state.dateToday ? "Vaccinated" : user.scheduleDate}</span>
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
     userData: state.user.hospitaluserData
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setUserData: (data)=> dispatch({type: 'ADD_HOSPITAL_USER_DATA',payload: data}),
    userAuth: ()=> dispatch({type: 'ADD_USER_AUTH'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dashboard))

