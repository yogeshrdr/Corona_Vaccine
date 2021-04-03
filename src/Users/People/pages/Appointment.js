import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import data from '../../Goverment/utils/demo/State'
import axios from 'axios'
class Appointment extends Component {
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
      availableDates: []
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
          this.setState({districtData: response.data.data,hospitalData: [],hospitalID: ''})
     }).catch((err)=>console.log(err))
    }else if(prevState.districtID!==this.state.districtID)
    {

      axios.post('http://localhost:4000/api/reg/getData/hospital',{
        districtID: this.state.districtID
      })
     .then((response)=>{
          console.log(response)
          this.setState({hospitalData: response.data.data,hospitalID: '',selectedDate: ''})
     }).catch((err)=>console.log(err))
    }else if(prevState.hospitalID!==this.state.hospitalID)
    {

       const data=this.state.hospitalData.filter((e)=> e.hospitalID===this.state.hospitalID)
       if(data[0])
          this.setState({availableDates: data[0].availableDates,selectedDate: ''},()=> console.log(this.state.availableDates))
        
    }
  }

  myChangeHandler = (event) => {
    console.log("HIII")
    const {name,value}=event.target
    this.setState({[name]: value});
  }

  handelSubmit=(event)=>{
    event.preventDefault()
    const {stateID,districtID,hospitalID,selectedDate}=this.state;
    // console.log(stateID)
    // console.log(districtID)
    // console.log(hospitalID)
    // console.log(selectedDate)
    // console.log(this.props.match.params.userID)
    const obj={
      hospitalID: hospitalID,
      stateID: stateID,
      districtID: districtID,
      selectedDate: selectedDate,
      ID: this.props.match.params.userID
    }
    if(stateID==='' || districtID==='' || hospitalID==='' || selectedDate==='')
    {
      window.alert('Select Have not selected all details')
    }else{
      const token=localStorage.getItem('sepmToken')
     axios.post('http://localhost:4000/api/reg/schedule',
      obj,{
          headers:{
           'authorization': `Bearer ${token}`
          }
         }
        ).then((res)=> {
          console.log(res)
             if(res.data.success) 
             {
               this.props.history.push("/users/user/dashboard")
             }else{
               if(res.data.message==='User Not Authorized')
               {
                    this.props.userAuth();
               }else{
                   window.alert(res.data.msg)
               }
             }
        }).catch((err)=>console.log(err))
    }
  }
  
  render(){
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
      
      
      <form onSubmit={this.handelSubmit}>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 text-white ">
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
                
                this.state.stateData!=='' ? 
                <Label>
                  <span>Enter District</span>
                  <Select className="mt-1" name="districtID" onChange={this.myChangeHandler} required>
                    {this.state.districtData.map((district, i) => (
                    <option key={i}  value={district.districtID}>{district.name}</option>
                    ))}   
                    </Select> 
                </Label>
                : null
                
              }
          {/* {data.map((states, i) => (
                  <div key={i}>{states.state === this.state.reference_Id 
                  ? <Label >
                  <span>Enter District</span>
                  <Select className="mt-1" required>
                    {this.state.districtData.map((district, i) => (
                    <option key={i}  >{district}</option>
                    ))}   
                    </Select> 
                    </Label>
                  : null
                  }
                  </div>
            ))}     */}
        </div>

       {
         this.state.districtID!==''?
        <Label>
          <span>Vaccinator Center</span>
          <Select name="hospitalID" className="mt-1" onChange={this.myChangeHandler}>
          {this.state.hospitalData.map((hospital, i) => (
                    <option key={i} name="hospitalID" value={hospital.hospitalID}>{hospital.name}</option>
          ))}   
          </Select>
        </Label> :
        null
      }
       {
         this.state.hospitalID!==''?
        <Label>
          <span>Available Dates</span>
          <Select name="selectedDate" className="mt-1" onChange={this.myChangeHandler}>
          {this.state.availableDates.map((dates, i) => (
                    <option key={i} name="selectedDate" value={dates.Date}>{dates.Date}</option>
          ))}   
          </Select>
        </Label> :
        null
      }

        <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
        
        <div className="mt-4 bottom-0">
        <button
      className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="submit"
      style={{ transition: "all .15s ease" }}
    >
      Book Appointment
    </button>
        </div>
        </div>
        </form>

      </div>
      </div></div>
      </div>
    </>
  )
  }
}

export default Appointment