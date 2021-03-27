import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'


class Appointment extends Component {

  render()
  {
  return (
    <>
      <PageTitle >Appointment</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 text-">
        <Label>
          <span>Enter Pincode</span>
          <Input className="mt-1" placeholder="Enter Pincode" />
        </Label>

        <div className="flex flex-col flex-wrap mb-8 space-y-4  md:flex-row md:items-end md:space-x-40">
        <Label>
          <span>Vaccinator Center</span>
          <Select className="mt-1" multiple >
            <option>Vaccinator Center 1</option>
            <option>Vaccinator Center 2</option>
            <option>Vaccinator Center 3</option>
            <option>Vaccinator Center 4</option>
            <option>Vaccinator Center 5</option>
          </Select>
        </Label>
        <div>
        <Label className="mt-4">
          <span>Choose Date</span>
          <Input className="mt-1" type="date" />
        </Label>

        <Label className="mt-4">
          <span>Choose Time</span>
          <Input className="mt-1" type="time" />
        </Label>
        </div>
        </div>

        <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
        
        <div className="mt-4">
        <button
      className="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      Book Appointment
    </button>
        </div>

      </div>
    </>
  )
  }
}

export default Appointment
