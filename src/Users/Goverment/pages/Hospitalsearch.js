import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import {  Label, Select } from '@windmill/react-ui'
import data from '../utils/demo/State'
import HospitalList from './HospitalList'
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { reference_Id: '',
                   district_Id: ''};
  }

  myChangeHandler = (event) => {
    this.setState({reference_Id: event.target.value});
  }

  districtChangeHandler = (event) => {
    this.setState({district_Id: event.target.value});
  }


  

render(){

  let searchhospital = null;

  if(this.state.district_Id === "Rewari"){
      searchhospital = (
        <div>
<HospitalList />

    </div>
      )
  }

  return (
    <>
      <PageTitle >Hospital Quick Search</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        
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
                  <Select className="mt-1" onChange={this.districtChangeHandler} required>
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

        <div className="mt-4 ">
                <div className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                style={{ transition: "all .15s ease" }}
                >
                </div>
        </div>
      </div>

        {searchhospital}
    </>
  )
 }
}

export default Forms
