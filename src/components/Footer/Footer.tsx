import React from 'react';
import { Link } from 'react-router-dom';
import { basePath } from '../../utils/const';
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
            <li><Link className="footer__column-link" to={`${basePath}/`}>Главная</Link></li>
            <li><Link className="footer__column-link" to={`${basePath}/`}>Концепция</Link></li>
            <li><Link className="footer__column-link" to={`${basePath}/`}>Наставники</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer__column footer__column_content_social">
        <h4 className="footer__column-heading">Соцсети</h4>
        <nav className="footer__column-links">
          <ul className="footer__list">
            <li><Link className="footer__column-link" to={`${basePath}/`}><img className="footer__social-icon" src="./images/facebook_color_white.svg" alt="Facebook логотип" /> Facebook</Link></li>
            <li><Link className="footer__column-link" to={`${basePath}/`}><img className="footer__social-icon" src="./images/vk_color_white.svg" alt="ВКонтакте логотип" /> ВКонтакте</Link></li>
            <li><Link className="footer__column-link" to={`${basePath}/`}><img className="footer__social-icon" src="./images/instagram_color_white.svg" alt="Instagram логотип" /> Instagram</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
