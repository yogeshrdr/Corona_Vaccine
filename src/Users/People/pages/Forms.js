import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'



class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { registered: false,
                  };
  }

  render(){
  return (
    <>
      <PageTitle >New Vaccine Registration</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Name</span>
          <Input className="mt-1" placeholder="Enter Your Name" required/>
        </Label>

        <Label className="mt-4">
          <span>Date of Birth</span>
          <Input className="mt-1" type="date" required/>
        </Label>


        <div className="mt-4">
          {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
          <Label>Gender</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="male" name="accountType" />
              <span className="ml-2">Male</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="female" name="accountType" />
              <span className="ml-2">Female</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="female" name="accountType" />
              <span className="ml-2">Other</span>
            </Label>
          </div>
        </div>

        <Label className="mt-4">
          <span>Select ID</span>
          <Select className="mt-1" required>
            <option>Addhar Card</option>
            <option>Driving license</option>
            <option>Pan Card</option>
            <option>Other</option>
          </Select>
        </Label>

        <Label className="mt-4">
          <span>ID Number</span>
          <Input className="mt-1" placeholder="Enter ID Number" required/>
        </Label>

        <Label className="mt-6" check>
          <Input type="checkbox" required/>
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
        
        <div className="mt-4 ">
        <button
      className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="submit"
      style={{ transition: "all .15s ease" }}
    >
      Register
    </button>
        </div>

      </div>
    </>
  
  )
  }
}

export default Forms
