import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import Appointment from './pages/Appointment'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function People() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
        
          <Route path="/users/login" component={Login} />
          <Route path="/users/create-account" component={CreateAccount} />
          <Route path="/users/forgot-password" component={ForgotPassword} />
          <Route path="/users/Appointment" component={Appointment} />
          {/* Place new routes over this */}
          <Route path="/users/user" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/users" to="/users/login" />
        
        </Switch>
      </Router>
    </>
  )
}

export default People
