import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'
import { Input, Label, Select} from '@windmill/react-ui'
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { vaccine_num: 360,
                    vaccine_ava: 0,
                    dailyLimit: 0,
                    required: 0
                  };
  }
  componentDidMount()
  {
    const token=localStorage.getItem('hospitalToken')
     axios.get('http://localhost:4000/api/hospital/getDetails',{
       headers: {
        'authorization': `Bearer ${token}`
       }
     }).then((res)=> {
       console.log(res)
         if(res.data.success) 
         {
              const obj=res.data.data
              this.setState({vaccine_ava: obj.totalVaccineStock,dailyLimit: obj.dailyLimit})
         }else{
           if(res.data.message==='User Not Authorized')
           {
                this.props.hospitalAuth();
           }else{
               window.alert(res.data.msg)
           }
         }

    }).catch((err)=>console.log(err))

  }
  handelChange=(event)=>{
     this.setState({required: event.target.value})
  }
  handelSubmit=(event)=>{
    event.preventDefault();
    if(this.state.required<=0)
    {
      window.alert('Enter the genuine Value')
    }else{
      const token=localStorage.getItem('hospitalToken')
      const uniqueID=Date.now()
      axios.post('http://localhost:4000/api/hospital/orderVaccine',{
        required: this.state.required,
        orderID: uniqueID
      },{
        headers: {
          'authorization': `Bearer ${token}`
        }
      }
      ).then((res)=>{
         if(res.data.success)
         {
           window.alert(res.data.message)
           this.setState({required : 0})
         }else{
             window.alert(res.data.message)
         }
      }).catch((err)=>{
        console.log(err)
      })
    }
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
      <form onSubmit={this.handelSubmit}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Label>
            <span>Number of vaccine Required</span>
            <Input className="mt-1" type="number" name="required" value={this.state.required} onChange={this.handelChange} placeholder="Enter Number of vaccine Required" required/>
          </Label>

          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
              I am authorized <span className="underline">to order</span>
            </span>
          </Label>
          
          <div className="mt-4 ">
                <button className="bg-blue-900 dark:bg-purple-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                      Order Vaccine
                </button>
              </div>

        </div>
      </form>
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
