import React from "react";
import { Link } from "react-router-dom";
import { basePath } from "../../utils/const";
import './Logo.css';

function Logo () {
  return (
    <Link to={`${basePath}/`} className="logo logo_place_header"/>
  )
}

export default Logo;
