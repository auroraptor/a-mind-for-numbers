import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DashBoard from '../Dashboard/Dashboard';
import Techniques from '../Techniques/Techniques';
import AboutMe from '../AboutMe/AboutMe';
import AboutUs from '../AboutUs/AboutUs';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <DashBoard />
        </Route>
        <Route path='/techniques'>
          <Techniques />
        </Route>
        <Route path='/about-me'>
          <AboutMe />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
