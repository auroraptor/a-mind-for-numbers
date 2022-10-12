import React from "react";
import { Link } from "react-router-dom";
import { basePath } from "../../utils/const";
import styles from './Logo.module.css';

function Logo () {
  return (
    <Link to={`${basePath}/`} className={styles.logo}/>
  )
}

export default Logo;
