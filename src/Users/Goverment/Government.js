import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import HospitalDashboard from './pages/HospitalDashboard'
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function Government() {
  return (
    <>  
     <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
        <Route path="/Government/login" component={Login} />
          <Route path="/Government/create-account" component={CreateAccount} />
          <Route path="/Government/forgot-password" component={ForgotPassword} />
          <Route path="/Government/gov" component={Layout} />
          <Redirect exact from="/Government" to="/Government/login" />
          <Route path="/Goverment/gov/hospitaldashboard" component={HospitalDashboard} />
        </Switch>
      </Router>
    </>
  )
}

export default Government
