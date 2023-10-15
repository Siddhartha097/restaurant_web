import React from 'react';
import{ HiMenu } from 'react-icons/hi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useState } from 'react';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
    return (
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.abarkhaboo} alt='app logo' />
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='app__navbar-login'>
          <a className='p__opensans' href='#login'>Log In / Register</a>
          <div />
          <a href='/' className='p__opensans'>Book a Table</a>
        </div>
        <div className='app__navbar-smallscreen'>
          <HiMenu className='menu-icon' color='#fff' fontSize={30} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={28} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#menu'>Menu</a></li>
                <li className='p__opensans'><a href='#awards'>Awards</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
    </nav>
  );
};
export default Navbar;
