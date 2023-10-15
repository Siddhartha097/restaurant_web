import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { RiInstagramLine, RiFacebookFill, RiTwitterXFill } from 'react-icons/ri'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>1st floor, 31chowringhee road,Bangur BFL Estate Landmark- Near Park street Metro,opposite Park Hotel, Kolkata, West Bengal, 700016</p>
        <p className='p__opensans'>+91 123-456-7890</p>
        <p className='p__opensans'>+91 234-456-6789</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.abarkhaboo} alt='footer_logo' />
        <p className='p__opensans'>"The Best Way to reach one's heart is through his/her stomach."</p>
        <img src={images.spoon} className='spoon__img' alt='spoon' style={{marginTop: 20}} />
        <div className='app__footer-links_icons'>
          <RiFacebookFill />
          <RiTwitterXFill />
          <RiInstagramLine />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 AbarKhabo. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
