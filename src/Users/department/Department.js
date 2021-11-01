import React from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../Hospital/assets/img/login-office.jpg'
import ImageDark from '../Hospital/assets/img/login-dark.jpg'


function Department() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-blue-900 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
             <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
            
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Choose Your Department</h1>


              <Link to="/Hospitals"> <div className="mt-4 ">
              <button  className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: "all .15s ease" }}
                >
                Hospital
              </button>
            </div></Link>


             


             <Link to="/Government/login"> <div className="mt-4 ">
              <button  className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: "all .15s ease" }}
                >
                Government
              </button>
            </div></Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Department;


