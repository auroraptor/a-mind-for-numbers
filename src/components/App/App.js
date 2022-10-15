import React from "react";
import { Routes, Route } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Header from "../Header/Header";
import DashBoard from "../Dashboard/Dashboard";
import Techniques from "../Techniques/Techniques";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";
import Feynman from "../Feynman/Feynman";
import Oakley from "../Oakley/Oakley";
import Kaufman from "../Kaufman/Kaufman";
import { basePath } from "../../utils/const";
import styles from './App.module.css'

function App() {
  const size = useWindowSize();


  return size.width < 880 ? (
    <p>Скоро тут будет мобильная версия </p>
  ) : (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path={`${basePath}/`} element={<DashBoard />} />
        <Route path={`${basePath}/techniques`} element={<Techniques />}>
          <Route path="feynman" element={<Feynman />} />
          <Route path="oakley" element={<Oakley />} />
          <Route path="kaufman" element={<Kaufman />} />
        </Route>
        <Route path={`${basePath}/about-me`} element={<AboutMe />} />
        <Route path={`${basePath}/about-us`} element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
