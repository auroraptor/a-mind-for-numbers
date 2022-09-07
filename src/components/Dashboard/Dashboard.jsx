import React from "react";
import Brain from '../../images/brain.svg'
// import './Dashboard.css';

function DashBoard() {
  return (
    <div className="header">
      <h1 className="header__title">Научиться учиться</h1>
      <img className="header__main-illustration" src={Brain} alt="эмодзи мозг" />
      <p className="header__subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?
      </p>
      <a className="link header__link" href="#">узнать &#8594;</a>

     <div className="header__square-pic rotation"></div>
  </div>
  )
}

export default DashBoard;
