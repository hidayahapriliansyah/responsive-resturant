import React, { useState } from 'react';
import  { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevplayVideo => !prevplayVideo));

    if (playVideo) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };
  
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        autoPlay
        controls={false}
        muted
      >
      </video>

      <div className="app__video-overlay flex__center">
        <div className={`app__video-overlay_circle flex__center
        ${ playVideo ? 'hide' : '' }`}
          onClick={handleVideo}
        >
          {
            playVideo
            ? <BsFillPlayFill color="#fff" fontSize={30} />
            : <BsPauseFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
