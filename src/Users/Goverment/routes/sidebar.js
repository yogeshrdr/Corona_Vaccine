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
      {
        path: '/gov/Hospitallist', 
        icon: 'HomeIcon',
        name: 'Hospital List',
      },
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
    name: 'Manufacturer',
    routes: [
      {
        path: '/gov/Manufacturerlist', 
        icon: 'HomeIcon',
        name: 'Manufacturer List',
      },
      {
        path: '/gov/ManufacturerAdd',
        icon: 'FormsIcon',
        name: 'Add Manufacturer',
      },
      {
        path: '/gov/SearchManufacturer',
        icon: 'FormsIcon',
        name: 'Search Manufacturer Details',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Vaccination Control',
    routes: [
      {
        path: '/gov/HospitalDel', 
        icon: 'HomeIcon',
        name: 'Delete Hospital',
      },
      {
        path: '/gov/ManufacturerDel',
        icon: 'FormsIcon',
        name: 'Delete Manufacturer',
      },
      {
        path: '/gov/Policychange',
        icon: 'FormsIcon',
        name: 'Change Policy',
      },
    ],
  },
  
]

export default routes
