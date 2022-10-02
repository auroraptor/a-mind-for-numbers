import React from "react";
import { NavLink } from 'react-router-dom';
import { basePath } from "../../utils/const";
import './NavBar.css'

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to={`${basePath}/`} className="menu__link">Домой</NavLink>
      <NavLink to={`${basePath}/techniques`} className="menu__link">Техники обучения</NavLink>
      <NavLink to={`${basePath}/about-me`} className="menu__link">Обо мне</NavLink>
      {/* <NavLink to="/about-us" className="menu__link">О Практикуме</NavLink> */}
    </nav>
  )
}

export default NavBar;
