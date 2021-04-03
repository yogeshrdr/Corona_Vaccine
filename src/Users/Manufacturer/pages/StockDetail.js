import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'


function Profile() {
  return (
    <>
      <PageTitle>Stock Detail</PageTitle>


      
        <Card>
          <CardBody>
          <p className="mb-10 font-bold text-black dark:text-gray-300">No of Vaccinator/Next week - 3000</p>
          <p className="mb-10 font-bold text-black dark:text-gray-300">Vaccinine Availble : - 4000</p>
          <p className="mb-10 font-bold text-black dark:text-gray-300">Vaccinine Required :- Not Required </p>
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

    </>
  )
}

export default Profile
