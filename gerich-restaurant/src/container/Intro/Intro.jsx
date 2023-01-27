import React, { useState } from 'react';
import  { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [pauseVideo, setPauseVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPauseVideo((prevPauseVideo => !prevPauseVideo));

    if (pauseVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      >
      </video>

      <div className="app__video-overlay flex__center">
        <div className={`app__video-overlay_circle flex__center
        ${ pauseVideo ? 'hide' : '' }`}
          onClick={handleVideo}
        >
          {
            pauseVideo
            ? <BsFillPlayFill color="#fff" fontSize={30} />
            : <BsPauseFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
