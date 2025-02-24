import { AiFillStar } from "react-icons/ai";
import axios from '../../api';
import { useState, useEffect } from 'react';
import './Cards.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  const renderStars = (rating) => {
    const stars = Math.min(rating, 5); 
    return Array.from({ length: stars }, (_, index) => (
      <AiFillStar key={index} />
    ));
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='cards'>
      <div className="container">
        <h2 className="cards__title">{t("products")}</h2>
        <div className="cards__wrapper">
          {products.map((product) => (
            <div className='card' key={product.id}>
              <div className="card__img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card__text">
                <h3 className="card__title">{product.name}</h3>
                <p className="card__rating">{renderStars(product.rating)}</p>
                <div className="card__info">
                  <p className="card__price">${product.price}</p>
                  <p className="card__discount">${product.price + 150}</p>
                  <p className='card__sale'>24% OFF</p>
                </div>
                <Link to={`/SinglePage/${product.id}`} className="card__btn">{t('view')}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
