import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import {
  MoonIcon,
  SunIcon,
  MenuIcon,

} from '../icons'
import {WindmillContext } from '@windmill/react-ui'
import { Link } from 'react-router-dom'

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext)
  const { toggleSidebar } = useContext(SidebarContext)

  

  return (
    <header className="z-40 py-4 bg-white shadow-bottom bg-blue-900 dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-white font-bold">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32 text-2xl">
          CO -VMS
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
         
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <Link to="/Manufacturers/login">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              aria-label="Account"
              aria-haspopup="true"
            >
             Log out
            </button>
            </Link>
           
           
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
