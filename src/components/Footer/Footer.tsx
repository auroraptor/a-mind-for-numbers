import React from 'react';
import '../../index.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer__columns">
      <div className="footer__column footer__column_content_copyright">
        <div className="logo logo_place_footer"></div>
        <p className="footer__author">&copy; 2022. Аврора Ренард</p>
      </div>
      <div className="footer__column footer__column_content_info">
        <h4 className="footer__column-heading">О Практикуме</h4>
        <nav className="footer__column-links">
          <ul className="footer__list">
            <li><a className="footer__column-link" href="#">Главная</a></li>
            <li><a className="footer__column-link" href="#">Концепция</a></li>
            <li><a className="footer__column-link" href="#">Наставники</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer__column footer__column_content_social">
        <h4 className="footer__column-heading">Соцсети</h4>
        <nav className="footer__column-links">
          <ul className="footer__list">
            <li><a className="footer__column-link" href="#"><img className="footer__social-icon" src="./images/facebook_color_white.svg" alt="Facebook логотип" /> Facebook</a></li>
            <li><a className="footer__column-link" href="#"><img className="footer__social-icon" src="./images/vk_color_white.svg" alt="ВКонтакте логотип" /> ВКонтакте</a></li>
            <li><a className="footer__column-link" href="#"><img className="footer__social-icon" src="./images/instagram_color_white.svg" alt="Instagram логотип" /> Instagram</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
