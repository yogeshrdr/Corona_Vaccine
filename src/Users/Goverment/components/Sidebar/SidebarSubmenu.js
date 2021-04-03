import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DropdownIcon } from '../../icons'
import * as Icons from '../../icons'
import { Transition } from '@windmill/react-ui'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarSubmenu({ route }) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen)
  }

  return (
    <li className="relative md:text-white px-6 py-3" key={route.name}>
      <button
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-yellow-400 dark:hover:text-purple-400"
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
          <span className="ml-4">{route.name}</span>
        </span>
        <DropdownIcon className="w-4 h-4" aria-hidden="true" />
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25 max-h-0"
        enterTo="opacity-100 max-h-xl"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-xl"
        leaveTo="opacity-0 max-h-0"
      >
        <ul
          className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium md:text-white rounded-md shadow-inner md:bg-blue-900 dark:text-white dark:bg-gray-800"
          aria-label="submenu"
          
        >
          {route.routes.map((r) => (
            
            <li
              className="inline-flex px-2 py-1 transition-colors duration-150  hover:text-yellow-400 dark:hover:text-purple-600"
              key={r.name}
            >
              <Icon className="w-5 h-5 mr-1" aria-hidden="true" icon={r.icon} />
              <Link className="w-full" to={`/Government${r.path}`}>
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </li>
  )
}

export default SidebarSubmenu
