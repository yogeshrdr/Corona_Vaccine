import React, { useState, useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import response from '../utils/demo/tableData'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
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



class VaccineOrder extends React.Component{
    constructor(props)
    {
       super(props)
      this.state={
        page: 1,
        resultsPerPage: 10,
        totalResults: 0,
        response: [],
        temp: 0
      }
    }
    onPageChange=(p)=>{
        this.setState({page: p})
    }
    componentDidMount(){
        const token=localStorage.getItem('adminToken')
        axios.get('http://localhost:4000/api/admin/getOrders',
          {
          headers: {
            'authorization': `Bearer ${token}`
          }}
        ).then((res)=>{
            console.log(res)
           if(res.data.status) {
             console.log(res)
             this.setState({response: res.data.data,totalResults: res.data.data.length})
             this.props.addOrderData(res.data.data)
           }
           else {
             this.props.adminAuth()
             this.props.history.push('/Government/login')
           }
        }).catch((error)=>{
          console.log(error)
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.page!==this.state.page)
        {
          const {page,resultsPerPage}= this.state
          this.setState({response: this.props.orderData.slice((page - 1) * resultsPerPage, page * resultsPerPage)})
        }
        else if(prevProps.orderData.length>this.props.orderData.length)
        {
          this.setState({totalResults: this.props.orderData.length})
          this.setState({response: this.props.orderData})
        }
    }
    handelAccept=(event)=>{
        const value= event.target.value
        const Value=JSON.parse(value) 
        console.log(Value)
        axios.post('http://localhost:4000/api/admin/acceptOrder',{
            ...Value
        }).then(res=>{
            console.log(res)
            if(res.data.status)
            {
                window.alert(res.data.message)
                
            }else{
                window.alert(res.data.message)
            }
        }).catch(error=>{
            console.log(error)
        })

    }
    handelReject=(event)=>{
        const value= event.target.value
        const Value=JSON.parse(value) 
        console.log(Value)
        axios.post('http://localhost:4000/api/admin/rejectOrder',{
            ...Value
        }).then(res=>{
            console.log(res)
            if(res.data.status)
            {
                window.alert(res.data.message)
                
            }else{
                window.alert(res.data.message)
            }
        }).catch(error=>{
            console.log(error)
        })

    }
    render(){
      return(
        <>
        <PageTitle>Vaccine Status</PageTitle>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Hospital Name</TableCell>
                <TableCell>State</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Vaccination Order</TableCell>
                <TableCell>Acceptance</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {this.state.response.map((user, i) => (
                user ?
                <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{user.districtCode}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.gender}>{user.stateCode}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.orderedVaccine}</span>
                </TableCell>
                  <TableCell>
                  <span className="text-sm">  <button className="bg-green-600 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                type="button"
                style={{ transition: "all .15s ease" }}
                
                value={JSON.stringify({hospitalID: user.hospitalID, orderID: user.orderID,orderedVaccine: user.orderedVaccine})}
                onClick={this.handelAccept}
               >
                     Accept
               </button>

               <button className="bg-red-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 "
                type="button"
                value={JSON.stringify({hospitalID: user.hospitalID, orderID: user.orderID,orderedVaccine: user.orderedVaccine})}
                onClick={this.handelReject}
                style={{ transition: "all .15s ease" }}
               >
                     Cancel
               </button>
               </span>
                  </TableCell>
                </TableRow>: null
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
        orderData: state.user.adminOrderData
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addOrderData: (data)=> dispatch({type: 'ADD_ADMIN_ORDER_DATA',payload: data}),
        adminAuth: ()=> dispatch({type: 'ADD_ADMIN_AUTH'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VaccineOrder)
