import { BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import React from 'react';
import logo from '../../images/logo.svg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import west from '../../images/west.svg';
import mastercard from '../../images/mastercard.svg';
import paypal from '../../images/paypal.svg';
import visa from '../../images/visa.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <div className='footer__title'>
            <img src={logo} alt="Logo" />
            <p>{t('footer1')}</p>
          </div>
          <div className='footer__title'>
            <b>{t('follow')}</b>
            <p>{t('footer2')}</p>
            <div className="footer__icons">
              <a href="https://facebook.com/"><img src={facebook} alt="Facebook" /></a>
              <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
            </div>
          </div>
          <div className='footer__title'>
            <b>{t('contact')}</b>
            <p>{t('footer3')}</p>
          </div>
        </div>
        <div className="footer__card">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className='footer__imgs'>
            <img src={west} alt="West" />
            <img src={mastercard} alt="Mastercard" />
            <img src={paypal} alt="Paypal" />
            <img src={visa} alt="Visa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
