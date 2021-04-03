import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import data from '../../Goverment/utils/demo/State'
class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = { reference_Id: '' };
  }

  myChangeHandler = (event) => {
    this.setState({reference_Id: event.target.value});
  }
  
  render()
  {
  return (
    <>
    <div>
    <div
      className={'flex h-screen bg-gray-200 dark:bg-gray-900 overflow-hidden'}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="m-5 ">
      <PageTitle >Appointment</PageTitle>
      
      
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 text-white ">
        <div>
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
          <span>Vaccinator Center</span>
          <Select className="mt-1" >
            <option>Vaccinator Center 1</option>
            <option>Vaccinator Center 2</option>
            <option>Vaccinator Center 3</option>
            <option>Vaccinator Center 4</option>
            <option>Vaccinator Center 5</option>
          </Select>
        </Label> 
       

        <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
        
        <div className="mt-4 bottom-0">
        <button
      className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      Book Appointment
    </button>
        </div>
        </div>

      </div>
      </div></div>
      </div>
    </>
  )
  }
}

export default Appointment
