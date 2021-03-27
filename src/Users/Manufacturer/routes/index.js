import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const orderlist = lazy(() => import('../pages/Orderlist'))
const Forms = lazy(() => import('../pages/Quicksearch'))
const stockdetail = lazy(() => import('../pages/StockDetail.js'))
const Page404 = lazy(() => import('../pages/404'))
const profile = lazy(() => import('../pages/UpdateOrder'))
const ordervaccine = lazy(() => import('../pages/OrderVaccine'))
const dashboard = lazy(() => import('../pages/Dashboard'))


const routes = [
  {
    path: '/dashboard', 
    component: dashboard, 
  },
  {
    path: '/orderlist', 
    component: orderlist, 
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
