import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'
import { Input, Label, Select} from '@windmill/react-ui'


function Profile() {
  return (
    <>
    <div>
      <PageTitle>Order Summary</PageTitle>


      
        <Card>
          <CardBody>
          <p className="mb-10 font-bold text-black dark:text-gray-300">Refernce ID - 123R567AB</p>
          <div className="grid gap-4 mb-8 md:grid-cols-3">
            <p className="mb-4 font-bold text-black dark:text-gray-300">Hospital Name - Sir GangaRam Hospital</p>
            <p className="mb-4 font-bold text-black dark:text-gray-300">Date Of Order - 11/04/2021</p>
            <p className="mb-4 font-bold text-black dark:text-gray-300">Mode - Quick dilvery</p>
            
            </div>
            <p className="mb-4 font-bold text-black dark:text-gray-300">Vaccine Qunatity - 100000</p>
            <p className="mb-4 font-bold text-black dark:text-gray-300">Address - Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, New Rajinder Nagar, New Delhi, Delhi 110060</p>
          </CardBody>

          <div className="mt-4 ">
        <div
      className="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      
    </div>
        </div>

        </Card>

        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Number of vaccine Dilvered</span>
          <Input className="mt-1" placeholder="Enter Number of vaccine Dilivered" />
        </Label>

        <Label className="mt-4">
          <span>Select Delivery COmpany</span>
          <Select className="mt-1">
            <option>Airphine courier</option>
            <option>Lemo courier</option>
            <option>Speedify transport</option>
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
      Vaccine dilvered 
    </button>
        </div>
        </div>
        
        </div>


    </>
  )
}

export default Profile
