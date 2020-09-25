import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='amazon-logo.png' alt='Amazon Logo' />
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Walter!</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
