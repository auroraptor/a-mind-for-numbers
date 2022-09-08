import React from "react";
import './Header.css';
import '../../index.css'
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="Header">
      <Logo></Logo>
      <NavBar></NavBar>
    </header>
  )
}

export default Header;
