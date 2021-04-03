import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import {connect} from 'react-redux'
import Appointment from './pages/Appointment'
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

class People extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render(){
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
        
          <Route path="/users/login" render={()=>this.props.userAuth ? <Redirect to="/users/user"></Redirect> : <Login></Login>} />
          <Route path="/users/create-account"  render={()=>this.props.userAuth ? <Redirect to="/users/user"></Redirect> : <CreateAccount></CreateAccount>} />  
          <Route path="/users/forgot-password"  render={()=>this.props.userAuth ? <Redirect to="/users/user"></Redirect> : <ForgotPassword></ForgotPassword>}/>
          {/* Place new routes over this */}
          <Route  path="/users/user"  render={()=> this.props.userAuth ? <Layout>s</Layout>: <Redirect to="/users/login"></Redirect>} />
          <Route path="/users/Appointment/:userID" component={Appointment}></Route>
          {/* If you have an index page, you can remothis Redirect */}
          {/* <Redirect exact from="/users" to="/users/login" /> */}
        
        </Switch>
      </Router>
    </>
  )
  }
}
const mapStateToProps=(state)=>{
  return{
    userAuth : state.user.userAuth
  }
}

export default connect(mapStateToProps)(People)
