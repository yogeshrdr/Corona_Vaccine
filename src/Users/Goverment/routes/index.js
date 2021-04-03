import { lazy } from 'react'

const Hospitallist = lazy(() => import('../pages/HospitalList'))
const Hospitalsearch = lazy(() => import('../pages/Hospitalsearch'))
const Hospitaladd = lazy(() => import('../pages/HospitalAdd'))
const stockdetail = lazy(() => import('../pages/StockDetail.js'))
const Page404 = lazy(() => import('../pages/404'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Manufacturerlist = lazy(() => import('../pages/Manufacturerlist'))
const Manufacturersearch = lazy(() => import('../pages/ManufacturerSearch'))
const Manufactureradd = lazy(() => import('../pages/ManufacturerAdd'))
const Hospitaldel = lazy(() => import('../pages/HospitalDelete'))
const Manufacturerdel = lazy(() => import('../pages/ManufacturerDel'))

const routes = [
  {
    path: '/Hospitallist', 
    component: Hospitallist, 
  },
  {
    path: '/HospitalAdd', 
    component: Hospitaladd , 
  },
  {
    path: '/SearchHospital', 
    component: Hospitalsearch, 
  },
  {
    path: '/HospitalDel', 
    component: Hospitaldel, 
  },
  {
    path: '/Manufacturerlist', 
    component: Manufacturerlist, 
  },
  {
    path: '/SearchManufacturer', 
    component: Manufacturersearch, 
  },
  {
    path: '/ManufacturerAdd', 
    component: Manufactureradd, 
  },
  {
    path: '/ManufacturerDel', 
    component: Manufacturerdel, 
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
]

export default routes
