import React from 'react';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

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
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
