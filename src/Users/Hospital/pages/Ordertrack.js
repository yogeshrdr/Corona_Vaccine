import React, { Component } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'
import data from '../utils/demo/VaccineDilvery'
import axios from 'axios'

class Profile extends Component {
   constructor()
   {
      super()
      this.state={
          orders: []
      }
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
             if(res.data.data.orders)
             {
                  this.setState({orders: obj.orders})
             }
            
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
  render(){
    return (
    <div>
        <PageTitle>Vaccine Track</PageTitle>
            
            {this.state.orders.map((diliver, i) => (
                <div key={i}>
                <Card className="mb-5">
                    <CardBody>
                   
                        <p className="mb-4 font-bold text-black dark:text-gray-300">Number of  Vaccine Ordered :- {diliver.orderedVaccine}</p>
                        <p className="mb-4 font-bold text-black dark:text-gray-300">Date of Order :- {diliver.orderedDate}</p>
                        <div>
                          <p className="mb-4 font-bold text-black dark:text-gray-300">Status  :- {diliver.orderStatus}</p>
                        </div>
                    </CardBody>
                </Card>
                </div>
            ))}
            <div>
                {
                    this.state.orders.length==0 ? <p>No orders Made Yet</p> : null
                }

            </div>
            


    </div>
)
}
}

export default Profile
