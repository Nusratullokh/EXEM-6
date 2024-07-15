import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';
import './Nav.css';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="container">
      <nav>
        <select className='selectLanguage' value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="tr">TR</option>
        </select>
        <div className="nav__wrapper">
          <ul>
            <li><Link className='link' to={"/Login"}><img src={profile} alt="Profile" />{t('profile')}</Link></li>
            <li><Link to={"/"}><img src={logo} alt="Logo" /></Link></li>
            <li><Link to={"/cart"}><img src={cart} alt="Cart" /></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
