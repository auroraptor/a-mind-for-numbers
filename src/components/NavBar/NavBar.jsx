import React from "react";
import { NavLink } from 'react-router-dom';
import { basePath } from "../../utils/const";
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.menu}>
      <NavLink to={`${basePath}/`} className={styles.link}>Домой</NavLink>
      <NavLink to={`${basePath}/techniques`} className={styles.link}>Техники обучения</NavLink>
      <NavLink to={`${basePath}/about-me`} className={styles.link}>Обо мне</NavLink>
      {/* <NavLink to="/about-us" className="menu__link">О Практикуме</NavLink> */}
    </nav>
  )
}

export default NavBar;
