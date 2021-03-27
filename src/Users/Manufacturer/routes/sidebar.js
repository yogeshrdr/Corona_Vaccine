/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
  {
    path: '/manufacturer/orderlist', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Order List', // name that appear in Sidebar
  },
  {
    path: '/manufacturer/forms',
    icon: 'FormsIcon',
    name: 'Quick Search',
  },
  {
    path: '/manufacturer/profile',
    icon: 'FormsIcon',
    name: 'Update Order',
  },
  
]

export default routes
