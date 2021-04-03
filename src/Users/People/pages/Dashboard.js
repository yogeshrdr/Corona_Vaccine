import React, { useState, useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import response from '../utils/demo/tableData'
import {Link} from 'react-router-dom'
import Appointment from './Appointment'
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
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


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
      const token=localStorage.getItem('sepmToken')
      axios.get('http://localhost:4000/api/reg/register',{
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then((res)=>{
        console.log("HIIIIIII")
         if(res.data.success) {
           console.log(res)
           this.setState({response: res.data.data,totalResults: res.data.data.length})
           this.props.setUserData(res.data.data)
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
                        <p className="font-semibold">{user.ID}</p>
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
                    <span className="text-sm">{user.scheduled ? user.scheduleDate : <Link to={`/users/Appointment/${user.ID}`}>Appointment</Link>}</span>
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

// function Dashboard() {
//   const [page, setPage] = useState(1)
//   const [data, setData] = useState([])

//   // pagination setup
//   const resultsPerPage = 10
//   const totalResults = response.length

//   // pagination change control
//   function onPageChange(p) {
//     setPage(p)
//   }

//   // on page change, load new sliced data
//   // here you would make another server request for new data
//   useEffect(() => {
//     setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
//   }, [page])

//   return (
//     <>
//       <PageTitle>Vaccine Status</PageTitle>
//       <TableContainer>
//         <Table>
//           <TableHeader>
//             <tr>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Gender</TableCell>
//               <TableCell>Date Of Birth</TableCell>
//               <TableCell>Vaccination Date</TableCell>
//             </tr>
//           </TableHeader>
//           <TableBody>
//             {data.map((user, i) => (
//               <TableRow key={i}>
//                 <TableCell>
//                   <div className="flex items-center text-sm">
//                     <div>
//                       <p className="font-semibold">{user.id}</p>
//                     </div>
//                   </div>
//                 </TableCell>

//                 <TableCell>
//                   <span className="text-sm">{user.first_name} {user.last_name}</span>
//                 </TableCell>
//                 <TableCell>
//                   <Badge type={user.gender}>{user.gender}</Badge>
//                 </TableCell>
//                 <TableCell>
//                   <span className="text-sm">{user.date_of_birth}</span>
//                 </TableCell>
//                 <TableCell>
//                   <span className="text-sm">{user.Vaccination_date}</span>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <TableFooter>
//           <Pagination
//             totalResults={totalResults}
//             resultsPerPage={resultsPerPage}
//             label="Table navigation"
//             onChange={onPageChange}
//           />
//         </TableFooter>
//       </TableContainer>

//     </>
//   )
// }

const mapStateToProps=(state)=>{
  return{
     userData: state.user.userData
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setUserData: (data)=> dispatch({type: 'ADD_USER_REG_DATA',payload: data}),
    userAuth: ()=> dispatch({type: 'ADD_USER_AUTH'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dashboard))
