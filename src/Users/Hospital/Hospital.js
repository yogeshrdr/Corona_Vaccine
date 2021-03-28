import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function Hospital() {
  return (
    <>  
     <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
        <Route path="/Hospitals/login" component={Login} />
          <Route path="/Hospitals/create-account" component={CreateAccount} />
          <Route path="/Hospitals/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/Hospitals/Hospital" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/Hospitals" to="/Hospitals/login" />
        </Switch>
      </Router>
    </>
  )
}

export default Hospital
