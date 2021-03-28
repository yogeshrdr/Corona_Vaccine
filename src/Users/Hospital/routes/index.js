import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Vaccinatorlist = lazy(() => import('../pages/VaccinatorList'))
const Forms = lazy(() => import('../pages/Quicksearch'))
const stockdetail = lazy(() => import('../pages/StockDetail.js'))
const Page404 = lazy(() => import('../pages/404'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const OrderTrack = lazy(() => import('../pages/Ordertrack'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/vaccinatorlist', // the url
    component: Vaccinatorlist, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/stockdetail',
    component: stockdetail,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/ordertrack',
    component: OrderTrack,
  },
]

export default routes
