import Index from './Components/Index/Index';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import Chef from './Components/Chef/Chef';
import Dashboard from './Components/AdminView/dashboard';
import ChefView from './Components/AdminView/Chef/ChefView';
import ChefForm from './Components/AdminView/Chef/ChefForm';
import PartyRoom from './Components/AdminView/PartyRoom/PartyRoom';
import PartyRoomForm from './Components/AdminView/PartyRoom/PartyRoomForm';
import FoodItem from './Components/AdminView/Food/FoodItem';
import FoodForm from './Components/AdminView/Food/FoodForm';
import PartyRooms from './Components/PartyRooms/PartyRooms';
import Food from './Components/FoodView/Food';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chart from './Components/AdminView/Charts/Chart';
import NotFound from './Components/NotFound';
import DelUserForm from './Components/AdminView/DeliveryPerson/DelUserForm';
import { useHistory } from 'react-router-dom';

function App(props) {
  setTimeout(RemoveId(), 60000 * 20);
  function RemoveId() {
    let history = useHistory();
    localStorage.removeItem('userId');
    //history.push('/login');
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/food/:code'>
            <Food />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path={'/chefView'}>
            <ChefView />
          </Route>
          <Route path={'/delUser'} component={DelUserForm} />

          <Route path={'/addChef'} component={ChefForm}></Route>
          <Route path={'/editChef/:chefId'} component={ChefForm}></Route>
          <Route path={'/partyRoomView'}>
            <PartyRoom />
          </Route>
          <Route
            path={'/editPartyRoom/:roomId'}
            component={PartyRoomForm}
          ></Route>
          <Route path={'/addPartyRoom'} component={PartyRoomForm}></Route>
          <Route path={'/foodView'} exact>
            <FoodItem />
          </Route>
          <Route path={'/addFood'} component={FoodForm}></Route>
          <Route path={'/editFood/:code'} component={FoodForm}></Route>
          <Route path='/chart' component={Chart} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
