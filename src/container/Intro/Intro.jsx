import React, { useState } from 'react';
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from 'react-icons/tb';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = useState(false)
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video 
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo 
            ? <TbPlayerPauseFilled color='var(--color-golden)' fontSize={30} />
            : <TbPlayerPlayFilled color='var(--color-golden)' fontSize={30} />}
        </div>
      </div>
    </div>
)};

export default Intro;
