import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select} from '@windmill/react-ui'
import { Card, CardBody } from '@windmill/react-ui'


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
            <PageTitle>Vaccinator Vaccination</PageTitle>


     

<Card>
  <CardBody>
    <p className="mb-10 font-bold text-black dark:text-gray-300">Refernce ID - 123R567AB</p>
      <div className="grid gap-4 mb-8 md:grid-cols-4">
        <p className="mb-4 font-bold text-black dark:text-gray-300">Name - RAM KUMAR</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">Gender - Male</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">Date of birth - 11/01/2001</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">Age - 20</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">Blood Group - B+</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">Any commodities - NO</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">date of vaccination- 20/03/2021</p>
      </div>
  </CardBody>

  <div className="mt-4 ">

      <button className="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
      >
      Vaccinate 
      </button>
  </div>

</Card>

         </div>
       )
   }

  return (
    <>
      <PageTitle >Vaccinator Quick Search</PageTitle>
      
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        
        <Label className="mt-4">
          <span>Enter Refernce number</span>
          <Input className="mt-1" placeholder="Enter ID Number"  onChange={this.myChangeHandler}/>
        </Label>

        <div className="mt-4 ">
        <button
      className="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
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
