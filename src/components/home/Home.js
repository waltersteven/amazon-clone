import React from 'react';
import './Home.css';
import Product from '../product/Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        I am the Home Component.
        <div className='home__row'>
          <Product
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
            rating={5}
          />
          <Product />
        </div>
        <div className='home__row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home__row'>{/** Product */}</div>
      </div>
    </div>
  );
};

export default Home;
