import React from "react";
import { Link } from "react-router-dom";
import Brain from '../../images/brain.svg'

function DashBoard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Научиться учиться</h1>
      <img className="dashboard__main-illustration" src={Brain} alt="эмодзи мозг" />
      <p className="dashboard__subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?
      </p>
      {/* <Link to="/techniques" className="link dashboard__link">узнать &#8594;</Link> */}
      <a className="link" href="#">узнать &#8594;</a>

     <div className="dashboard__square-pic rotation"></div>
  </div>
  )
}

export default DashBoard;
