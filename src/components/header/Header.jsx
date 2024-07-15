import { AiFillStar } from "react-icons/ai";
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';
import img from '../../images/hero2.png';
import mc1 from '../../images/mc1.svg';
import mc2 from '../../images/mc2.svg';
import mc3 from '../../images/mc3.svg';
import h3 from '../../images/3.png';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__title">
              <h3>{t("adidas")}</h3>
              <p>{t("adidasDesc")}</p>
              <Link className='header__btn' to={"/"}>{t("adidasBtn")}</Link>
            </div>
            <img className='header__img' src={img} alt="Adidas Banner" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mini__cards">
          <div className="mini__card">
            <img src={mc1} alt="Mini Card 1" />
            <p>{t("minicard1")}</p>
            <small>{t("minicardtext")}</small>
          </div>
          <div className="mini__card">
            <img src={mc2} alt="Mini Card 2" />
            <p>{t("minicard2")}</p>
            <small>{t("minicardtext")}</small>
          </div>
          <div className="mini__card">
            <img src={mc3} alt="Mini Card 3" />
            <p>{t("minicard3")}</p>
            <small>{t("minicardtext")}</small>
          </div>
        </div>

        <div className='rated'>
          <h3 className="rated__title">{t("most")}</h3>

          <div className='rated__wrapper'>
            {[1, 2, 3].map((index) => (
              <div className='rated__card' key={index}>
                <img src={h3} alt={`Product ${index}`} />
                <div>
                  <h4>{t("nike")}</h4>
                  <p>
                    {[...Array(5)].map((_, starIndex) => (
                      <AiFillStar key={starIndex} className="rated__star" />
                    ))}
                  </p>
                  <div>
                    <b>$499</b>
                    <span>$599</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
