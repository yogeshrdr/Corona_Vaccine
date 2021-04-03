import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label } from '@windmill/react-ui'
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
            <PageTitle>Hospital Delete</PageTitle>


     

<Card>
  <CardBody>
    <p className="mb-10 font-bold text-black dark:text-gray-300">Hospital ID - 123R567AB</p>
      <div className="grid gap-4 mb-8 md:grid-cols-4">
        <p className="mb-4 font-bold text-black dark:text-gray-300">Hospital Name - Artemis Hospital</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">State - Haryana</p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">District - Gurgoan </p>
        <p className="mb-4 font-bold text-black dark:text-gray-300">Pincode - 123401</p>
      </div>
  </CardBody>

  <div className="mt-4 ">

      <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      type="button"
      style={{ transition: "all .15s ease" }}
      >
      Delete Hospital 
      </button>
  </div>

</Card>

         </div>
       )
   }

  return (
    <>
      <PageTitle >Search Hospital Delete</PageTitle>
      
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
