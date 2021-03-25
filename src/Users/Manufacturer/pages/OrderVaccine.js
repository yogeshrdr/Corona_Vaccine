import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'



function Forms() {
  return (
    <>
      <PageTitle >vaccine Order</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Number of vaccine Required</span>
          <Input className="mt-1" placeholder="Enter Number of vaccine Required" />
        </Label>

        <Label className="mt-4">
          <span>Select Delivery Option</span>
          <Select className="mt-1">
            <option>Quick Delivery</option>
            <option>2 Day dilvery</option>
            <option>1 Week dilvery</option>
          </Select>
        </Label>

        <Label className="mt-4">
          <span>Enter Password to confirm order</span>
          <Input className="mt-1" placeholder="Password" type="password" />
        </Label>

        <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
        
        <div className="mt-4 ">
        <button
      className="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      Order Vaccine
    </button>
        </div>



      </div>
    </>
  )
}

export default Forms
