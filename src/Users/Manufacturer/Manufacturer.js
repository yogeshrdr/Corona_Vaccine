import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/Manufacturers/login" component={Login} />
          <Route path="/Manufacturers/create-account" component={CreateAccount} />
          <Route path="/Manufacturers/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/Manufacturers/manufacturer" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/Manufacturers" to="/Manufacturers/login" />
        </Switch>
      </Router>
    </>
  )
}

export default App
