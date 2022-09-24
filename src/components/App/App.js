import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DashBoard from '../Dashboard/Dashboard';
import Techniques from '../Techniques/Techniques';
import AboutMe from '../AboutMe/AboutMe';
import AboutUs from '../AboutUs/AboutUs';
import Feynman from '../Feynman/Feynman';
import Oakley from '../Oakley/Oakley';
import Kaufman from '../Kaufman/Kaufman';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<DashBoard />} />
        <Route path='/techniques' element={<Techniques />}>
          <Route element={<Feynman />} path="feynman"/>
          <Route element={<Oakley />} path="oakley"/>
          <Route element={<Kaufman />} path="kaufman"/>
        </Route>
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
