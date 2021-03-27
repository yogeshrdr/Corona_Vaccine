import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'
import { Input, Label, Select} from '@windmill/react-ui'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { vaccine_num: 5000,
                    vaccine_ava: 3000
                  };
  }

  render(){

    let order_required = (<p className="mb-10 font-bold text-black dark:text-gray-300">Vaccine Requirement :: Not Required</p>);
    
    if((this.state.vaccine_ava - this.state.vaccine_num) <0)
    {
      order_required = (<p className="mb-10 font-bold text-black dark:text-gray-300">Vaccine Requirement :: {(-1)* (this.state.vaccine_ava - this.state.vaccine_num) }</p>)
    }

     let vaccine_order = null;
    if((this.state.vaccine_ava - this.state.vaccine_num) <0 )
    { vaccine_order = (
      <div>
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
               <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: "all .15s ease" }}
               >
                    Order Vaccine
               </button>
             </div>

      </div>
    </div>
    )

    }

  return (
    <div>
      <PageTitle>Stock Detail</PageTitle>


      
        <Card>
          <CardBody>
          <p className="mb-10 font-bold text-black dark:text-gray-300">No of Vaccinator/Next week :: {this.state.vaccine_num}</p>
          <p className="mb-10 font-bold text-black dark:text-gray-300">Vaccinine Availble :: {this.state.vaccine_ava}</p>
          {order_required}
          
          </CardBody>

          <div className="mt-4 ">
               <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: "all .15s ease" }}
               >
                   
               </button>
             </div>

        </Card>

      {vaccine_order}


    </div>
  )
  }
}

export default Profile
