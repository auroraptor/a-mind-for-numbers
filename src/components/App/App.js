import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DashBoard from '../Dashboard/Dashboard';
import Techniques from '../Techniques/Techniques';
import AboutMe from '../AboutMe/AboutMe';
import AboutUs from '../AboutUs/AboutUs';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/techniques/*' element={<Techniques />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
