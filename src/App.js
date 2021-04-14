import MainPage from './MainPage/MainPage';
import People from "./Users/People/People";
import Hospital from './Users/Hospital/Hospital'
import Department from './Users/department/Department'
import Manufacturer from './Users/Manufacturer/Manufacturer'
import Government from './Users/Goverment/Government'
import Covid from './Users/Covid/Covid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import Appointment from './Users/People/pages/Appointment'

class App extends React.Component{
  constructor(props)
  {
    super(props);
  }
  componentDidMount()
  {
    const token=localStorage.getItem('sepmToken')
    const token2=localStorage.getItem('hospitalToken')
    console.log(token)
    if(token)
    {
      axios.get('http://localhost:4000/api/userAuth/authCheck',{
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then((res)=>
         {
           if(res.data.success)
           {
              this.props.setUserAuth();
           }
         }
      )
      .catch((er)=> console.log(er))
    }
    if(token2)
    {
      axios.get('http://localhost:4000/api/userAuth/authCheck',{
        headers: {
          'authorization': `Bearer ${token2}`
        }
      }).then((res)=>
         {
           if(res.data.success)
           {
              this.props.setHospitalAuth();
           }
         }
      )
      .catch((er)=> console.log(er))

    }
  }
  render(){
  return (
    <>
    <Router>
     <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/users'  component={People} />
        <Route path='/Department'  component={Department} />
        <Route path='/Hospitals'  component={Hospital} />
        <Route path='/Manufacturers'  component={Manufacturer} />
        <Route path='/Government'  component={Government} />
        <Route path='/Covid'  component={Covid} />
      </Switch>
      </Router>
    </>
  );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
     setUserAuth: ()=> dispatch({type: 'ADD_USER_AUTH'}),
     setHospitalAuth: ()=> dispatch({type: 'ADD_HOSPITAL_AUTH'})

  }
}
const mapStateToProps=(state)=>{
  return{
    user: state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)