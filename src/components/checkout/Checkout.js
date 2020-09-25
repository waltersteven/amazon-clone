import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/01/XX/XCM_Manual_1234444_1239469_US_us_ce_evergreen_3191766_1500x90_en_US.jpg'
          alt=''
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>{' '}
        </div>
      </div>
      <div className='checkout__right'>
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
