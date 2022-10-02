import React from "react";
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__link">Домой</NavLink>
      <NavLink to="/techniques" className="menu__link">Техники обучения</NavLink>
      <NavLink to="/about-me" className="menu__link">Обо мне</NavLink>
      {/* <NavLink to="/about-us" className="menu__link">О Практикуме</NavLink> */}
    </nav>
  )
}

export default NavBar;
