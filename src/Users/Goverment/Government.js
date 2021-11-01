import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import Dashboard from './pages/HospitalDashboard'
import {connect} from 'react-redux'
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

class Government extends React.Component{
  constructor(props)
  {
    super(props)
  }
  
  render(){
  return (
    <>  
     <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/Government/login" render={()=>this.props.AdminAuth ? <Redirect to="/Government/gov/dashboard"></Redirect> : <Login></Login>}/>
          <Route path="/Government/create-account" component={CreateAccount} />
          <Route path="/Government/gov" render={()=>this.props.AdminAuth ? <Layout></Layout> : <Redirect to="/Government/login"></Redirect>}component={Layout} />
          
          <Route path="/Government/hospitaldashboard/:hospitalID" component={Dashboard} />
        </Switch>
      </Router>
    </>
  )
}}
const mapStateToProps=(state)=>{
  return{
    AdminAuth: state.user.adminAuth
  }
}
export default connect(mapStateToProps)(Government)
