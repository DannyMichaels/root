import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives';
import TransportationTypes from './screens/TransportationType/TransportationTypes';
import Header from "./components/shared/Header/Header";
import Footer from './components/shared/Footer/Footer';
import ManageTransportationTypes from './screens/ManageTransportationType/ManageTransportationType';
import AddTransportationType from './screens/AddTransportationType/AddTransportationType.jsx';
import SanFranPolicy from './screens/SanFranPolicy/SanFranPolicy'
import PlanRoute from './screens/PlanRoute/PlanRoute';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/policies-and-initiatives' component={PoliciesInitiatives} />
        <Route exact path='/policies-and-initiatives/san-fransisco' component={SanFranPolicy} />
        <Route exact path="/" component={Home} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path='/transportation-types' component={TransportationTypes} />
        <Route exact path='/manage-transportation-types' component={ManageTransportationTypes} />
        <Route exact path='/add-transportation-type' component={AddTransportationType} />
        <Route exact path='/plan-your-route' component={PlanRoute} />
      </Switch>
    </div>
  );
}

export default App;
