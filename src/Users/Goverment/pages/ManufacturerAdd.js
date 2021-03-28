import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select, Textarea} from '@windmill/react-ui'
import data from '../utils/demo/State'
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { reference_Id: '' };
  }

  myChangeHandler = (event) => {
    this.setState({reference_Id: event.target.value});
  }

  render(){
  return (
    <>
      <PageTitle >New Manufacturer Add</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Manufacturer Name</span>
          <Input className="mt-1" placeholder="Enter Manufacturer Name" required/>
        </Label>

        <Label>
          <span>Enter Address line </span>
          <Textarea className="mt-1" rows="2" placeholder="Enter Address" />
        </Label>

        <div className="grid gap-0 mb-2 mt-4 md:grid-cols-6 xl:grid-cols-2">
        <Label >
        <span>Enter State</span>
          <Select className="mt-1" onChange={this.myChangeHandler} required>
          {data.map((states, i) => (
                  <option key={i} >{states.state}</option> 
            ))}    
            </Select>
          </Label>

              
          {data.map((states, i) => (
                  <div key={i}>{states.state === this.state.reference_Id 
                  ? <Label >
                  <span>Enter District</span>
                  <Select className="mt-1" required>
                    {states.districts.map((district, i) => (
                    <option key={i}  >{district}</option>
                    ))}   
                    </Select> 
                    </Label>
                  : null
                  }
                  </div>
            ))}    
            
        </div>

        <Label>
          <span>Enter Pincode</span>
          <Input placeholder="Enter Pincode" required/>
        </Label>
        <Label>
          <span>Enter Email id</span>
          <Input className="mt-1" placeholder="Enter Email Id" required/>
        </Label>

        <div className="mt-4 ">
        <button
      className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="submit"
      style={{ transition: "all .15s ease" }}
    >
      Add Manufacturer
    </button>
        </div>

      </div>
    </>
  
  )
  }
}

export default Forms
