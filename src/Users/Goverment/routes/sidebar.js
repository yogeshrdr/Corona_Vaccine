const routes = [
  {
    path: '/gov/dashboard',
    icon: 'FormsIcon',
    name: 'Dashboard',
  },
  {
    icon: 'PagesIcon',
    name: 'Hospital',
    routes: [
      // {
      //   path: '/gov/Hospitallist', 
      //   icon: 'HomeIcon',
      //   name: 'Hospital List',
      // },
      {
        path: '/gov/HospitalAdd',
        icon: 'FormsIcon',
        name: 'Add Hospital',
      },
      {
        path: '/gov/SearchHospital',
        icon: 'FormsIcon',
        name: 'Search Hospital Details',
      },
    ],
  },
 
  {
    icon: 'PagesIcon',
    name: 'Vaccination Orders',
    routes: [
      {
        path: '/gov/orders', 
        icon: 'HomeIcon',
        name: 'Orders',
      }
     
    ],
  },
  
]

export default routes
