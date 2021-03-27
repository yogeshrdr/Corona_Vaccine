import MainPage from './MainPage/MainPage';
import People from "./Users/People/People";
import Hospital from './Users/Hospital/Hospital'
import Department from './Users/department/Department'
import Manufacturer from './Users/Manufacturer/Manufacturer'
import Covid from './Users/Covid/Covid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
     <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/users'  component={People} />
        <Route path='/Department'  component={Department} />
        <Route path='/Hospitals'  component={Hospital} />
        <Route path='/Manufacturers'  component={Manufacturer} />
        <Route path='/Covid'  component={Covid} />
      </Switch>
      </Router>
    </>
  );
}

export default App;