import React from 'react';
import { FaInstagram } from 'react-icons/fa'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images,data } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04
  ]

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: "#AAA", marginTop: '2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore eius iste, recusandae neque in deserunt pariatur a. Deserunt, quidem.
        </p>
        <button type='button' className='custom__button'>view more</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, idx) => (
            <div className='app__gallery-images_card flex__center' key={`gallery-image-${idx+1}`}>
              <img src={image} alt='gallery img'/>
              <FaInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrows'>
          <BsArrowLeftCircleFill className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightCircleFill className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
    
  )
};

export default Gallery;
