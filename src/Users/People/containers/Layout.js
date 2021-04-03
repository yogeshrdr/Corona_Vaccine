import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect , useLocation} from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../../context/SidebarContext'
import {connect} from 'react-redux'
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Page404 = lazy(() => import('../pages/404'))
const Appointment = lazy(() => import('../pages/Appointment'))


function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])


  return (
    <div
      className={`flex h-screen bg-gray-200 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
          
            <Switch>
             {/* {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/users/user${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              })}  */}
               <Route exact path='/users/user/dashboard' component={Dashboard}></Route>
              <Route exact path='/users/user/forms' component={Forms}></Route>
              {/* <Route exact path='/users/user/Appointment' component={Appointment}></Route> */}
              <Route exact path='/users/user/404' component={Page404}></Route> 
              <Redirect exact from="/users/user" to="/users/user/dashboard" />
            </Switch> 
           
          </Suspense>
        </Main>
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  console.log(state)
  return{
     myState: state
  }
}
export default connect(mapStateToProps)(Layout)
