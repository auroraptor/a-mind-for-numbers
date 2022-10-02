import React from "react";
import { Link } from "react-router-dom";
import './Logo.css';

function Logo () {
  return (
    <Link to="about-us" className="logo logo_place_header"/>
  )
}

export default Logo;
