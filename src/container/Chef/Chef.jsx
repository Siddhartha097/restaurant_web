import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit asperiores exercitationem.</p>
        </div>
        <p className='p__opensans'> Ipsam aspernatur esse accusamus eius nesciunt sunt nulla excepturi aliquam perferendis molestias ea quas dolorem voluptatum iure consequatur. Sint a dignissimos pariatur recusandae reprehenderit.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Head Chef & Co-founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
