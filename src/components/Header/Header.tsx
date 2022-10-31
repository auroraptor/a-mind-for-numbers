import React from "react";
import styles from './Header.module.css';
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className={styles.header}>
      <Logo></Logo>
      <NavBar></NavBar>
    </header>
  )
}

export default Header;
