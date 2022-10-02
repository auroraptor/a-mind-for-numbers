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
import { basePath } from '../../utils/const';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={`${basePath}/`} element={<DashBoard />} />
        <Route path={`${basePath}/techniques`} element={<Techniques />}>
          <Route element={<Feynman />} path="feynman"/>
          <Route element={<Oakley />} path="oakley"/>
          <Route element={<Kaufman />} path="kaufman"/>
        </Route>
        <Route path={`${basePath}/about-me`} element={<AboutMe />} />
        <Route path={`${basePath}/about-us`} element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
