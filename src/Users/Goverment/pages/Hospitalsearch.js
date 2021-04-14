import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import {  Label, Select } from '@windmill/react-ui'
import data from '../utils/demo/State'
import HospitalList from './HospitalList'
import axios from 'axios'
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      stateID: '',
      districtID: '',
      hospitalID: '',
      selectedDate: '',
      stateData: [],
      districtData: [],
      hospitalData: [],
      availableDates: [],
      fluctuate: 0
   };
  }
  componentDidMount(){
    console.log("HI")
     axios.post('http://localhost:4000/api/reg/getData/state')
     .then((response)=>{
        console.log(response)
        this.setState({stateData: response.data.data,districtData: [],hospitalData: [],hospitalID: ''})
     }).catch((err)=>console.log(err))
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.stateID!==this.state.stateID)
    {
      axios.post('http://localhost:4000/api/reg/getData/district',{
        stateID: this.state.stateID
      })
     .then((response)=>{
          console.log(response)
          this.setState({districtData: response.data.data,hospitalData: [],hospitalID: '',fluctuate: 0})
     }).catch((err)=>console.log(err))
    }else if(prevState.districtID !== this.state.districtID)
    {
      console.log(this.state.fluctuate)
      var x=Date.now()
      this.setState({fluctuate: x})
    }
  }

  myChangeHandler = (event) => {
    console.log("HIII")
    const {name,value}=event.target
    this.setState({[name]: value});
  }

  
render(){

  let searchhospital = null;

  if(this.state.fluctuate!==0){
      searchhospital = (
        <div>
           <HospitalList districtID={this.state.districtID} stateID={this.state.stateID}/>
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
          <Select className="mt-1" name="stateID" onChange={this.myChangeHandler} required>
          {this.state.stateData.map((states, i) => (
                  <option key={i} name="stateID" value={states.stateID}>{states.name}</option> 
            ))}    
            </Select>
          </Label>

              
          {
                
                this.state.stateID!=='' ? 
                <Label>
                  <span>Enter District</span>
                  <Select className="mt-1" name="districtID" onChange={this.myChangeHandler} required>
                    {this.state.districtData.map((district, i) => (
                    <option key={i}  name="districtID" value={district.districtID}>{district.name}</option>
                    ))}   
                    </Select> 
                </Label>
                : null
                
              }
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
