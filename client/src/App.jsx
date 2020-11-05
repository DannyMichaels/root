import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives';
import TransportationTypes from './screens/TransportationType/TransportationTypes';
import ManageTransportationTypes from './screens/ManageTransportationType/ManageTransportationType';
import AddTransportationType from './screens/AddTransportationType/AddTransportationType.jsx';
import SanFranPolicy from './screens/SanFranPolicy/SanFranPolicy'
import PlanRoute from './screens/PlanRoute/PlanRoute';
import Error from './screens/Error/Error'
import CreateAccount from './screens/CreateAccount/CreateAccount'
import ManageAccount from './screens/ManageAccount/ManageAccount';
import Sad from './screens/SadToSeeYouGo/:(.jsx'
import Login from './screens/Login/Login';
import Burger from './components/shared/Header/Burger'


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div>

      <Switch>
        <Route exact path='/fjdahslfghadklughflu'>
          <Burger loggedInUser={loggedInUser} />
        </Route>
        <Route exact path='/policies-and-initiatives' component={PoliciesInitiatives} />
        <Route exact path='/san-fransisco' component={SanFranPolicy} />
        <Route exact path="/" component={Home} />
        <Route exact path='/transportation-types' component={TransportationTypes} />
        <Route exact path='/manage-transportation-types' component={ManageTransportationTypes} />
        <Route exact path='/add-transportation-type' component={AddTransportationType} />
        <Route exact path='/plan-your-route' component={PlanRoute} />
        <Route path='/create-your-account' exact component={CreateAccount} />
        <Route path='/sad-to-see-you-go' exact component={Sad} />
        <Route path='/manage-your-account' >
          <ManageAccount loggedInUser={loggedInUser} />
        </Route>
        <Route path="/login" >
          <Login loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        </Route>
        <Route component={Error} /> {/* keep this the lowest route */}
      </Switch>
    </div>
  );
}

export default App;
