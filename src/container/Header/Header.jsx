import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Explore the new flavours"/>
      <h1 className='app__header-h1'>The Key to find Good Food</h1>
      <p className='p__opensans' style={{margin: '2.3rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi dolorum mollitia sit consequuntur asperiores nulla eos officia vitae atque.
      </p>
      <button type='button' className='custom__button'>Explore</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
