import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'


function Forms() {
  return (
    <>
      <PageTitle >Vaccinator Quick Search</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        
        <Label className="mt-4">
          <span>Enter Refernce number</span>
          <Input className="mt-1" placeholder="Enter ID Number" />
        </Label>

        <Label className="mt-4">
          <span>Enter Hospital Name</span>
          <Input className="mt-1" placeholder="Enter Hospital Name" />
        </Label>

        <div className="mt-4 ">
        <button
      className="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      Search
    </button>
        </div>

      </div>
    </>
  )
}

export default Forms
