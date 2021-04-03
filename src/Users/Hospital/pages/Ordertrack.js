import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'
import data from '../utils/demo/VaccineDilvery'

class Profile extends Component {
 
  render(){

    return (
    <div>
        <PageTitle>Vaccine Track</PageTitle>

            {data.map((diliver, i) => (
                <div key={i}>
                <Card className="mb-5">
                    <CardBody>
                    <p className="mb-4 font-bold text-black dark:text-gray-300 text-2xl">Order ID - {diliver.id}</p>
                        <p className="mb-4 font-bold text-black dark:text-gray-300">Number of  Vaccine Ordered :- {diliver.Vaccine}</p>
                        <p className="mb-4 font-bold text-black dark:text-gray-300">Date of Order :- {diliver.OrderTime}</p>
                        <div>
                        {diliver.Diliver_status
                         ?  <button className="bg-green-300 p-2 text-1xl text-green-600 rounded-full" >Dilivered</button>
                         : <div> <button className="bg-red-300 p-2 text-1xl text-red-600 rounded-full mb-2" >Dilivery in Progress</button>
                        <div>
                        {diliver.Dilvery
                         ?  <p className="mb-4 font-bold text-black dark:text-gray-300">Order Accepted BY Manufacurer & ready to transport</p>
                         : <p className="mb-4 font-bold text-black dark:text-gray-300">Order Status in Progress</p>
                         }
                         </div>
                        </div>
                         }
                         </div>
                    </CardBody>
                </Card>
                </div>
            ))}
            
            


    </div>
)
}
}

export default Profile
