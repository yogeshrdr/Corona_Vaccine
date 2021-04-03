import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label } from '@windmill/react-ui'
import { Card, CardBody } from '@windmill/react-ui'
import Dashbord from '../../Manufacturer/pages/Dashboard'

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { reference_Id: '' };
  }

  myChangeHandler = (event) => {
    this.setState({reference_Id: event.target.value});
  }

  

render(){

  let hello = null;

  if(this.state.reference_Id === "1234"){
      hello = (
        <div>
            <PageTitle>Manufacturer Dashboard</PageTitle>

<Card>
  <CardBody>
    <Dashbord />
  </CardBody>
</Card>

    </div>
      )
  }

  return (
    <>
      <PageTitle >Manufacturer Quick Search</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        
        <Label className="mt-4">
          <span>Enter Refernce number</span>
          <Input className="mt-1" placeholder="Enter ID Number"  onChange={this.myChangeHandler}/>
        </Label>

        <div className="mt-4 ">
                <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: "all .15s ease" }}
                >
                Search
                </button>
        </div>
      </div>

        {hello}
    </>
  )
 }
}

export default Forms
