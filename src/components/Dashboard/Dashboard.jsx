import React from "react";
import { Link } from "react-router-dom";
import Brain from '../../images/brain.png'

function DashBoard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Научиться учиться</h1>
      <img className="dashboard__main-illustration" src={Brain} alt="эмодзи мозг" />
      <p className="dashboard__subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?
      </p>
      <Link to="techniques" className="link">узнать &#8594;</Link>
     <div className="dashboard__square-pic rotation"></div>
  </div>
  )
}

export default DashBoard;
