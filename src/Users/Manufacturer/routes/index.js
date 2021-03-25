import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const orderlist = lazy(() => import('../pages/Orderlist'))
const Forms = lazy(() => import('../pages/Quicksearch'))
const stockdetail = lazy(() => import('../pages/StockDetail.js'))
const Page404 = lazy(() => import('../pages/404'))
const profile = lazy(() => import('../pages/UpdateOrder'))
const ordervaccine = lazy(() => import('../pages/OrderVaccine'))


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
    path: '/orderlist', // the url
    component: orderlist, // view rendered
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
    path: '/profile',
    component: profile,
  },
  {
    path: '/ordervaccine',
    component: ordervaccine,
  },
]

export default routes
