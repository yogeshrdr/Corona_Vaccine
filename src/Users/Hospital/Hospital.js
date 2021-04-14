import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import {connect} from 'react-redux'
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))


class Hospital extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.HospitalAuth)
  }
  render(){
  return (
    <>  
     <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
        <Route path="/Hospitals/login" render={()=> this.props.HospitalAuth ? <Redirect to="/Hospitals/Hospital/Dashboard"></Redirect> : <Login></Login>}/>
        <Route path="/Hospitals/create-account" render={()=> this.props.HospitalAuth ? <Redirect to="/Hospitals/Hospital/Dashboard"></Redirect> : <CreateAccount></CreateAccount>} />
          <Route path="/Hospitals/forgot-password" render={()=> this.props.HospitalAuth ? <Redirect to="/Hospitals/Hospital/Dashboard"></Redirect> : <ForgotPassword></ForgotPassword>}/>

          {/* Place new routes over this */}
          <Route path="/Hospitals/Hospital" render={()=> this.props.HospitalAuth ?  <Layout></Layout> : <Redirect to="/Hospitals/login"></Redirect>} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/Hospitals" to="/Hospitals/login" />
        </Switch>
      </Router>
    </>
  )
}}
const mapStateToProps=(state)=>{
  return{
    HospitalAuth: state.user.hospitalAuth
  }
}


export default connect(mapStateToProps)(Hospital)
