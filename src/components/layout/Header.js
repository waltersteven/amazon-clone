import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__logo' src='amazon-logo.png' alt='Amazon Logo' />
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        {/* Logo */}
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Walter!</span>
          <span className='header__optionLineOne'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineOne'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineOne'>Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
