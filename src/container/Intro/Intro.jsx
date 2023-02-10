import React, { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const videRef = useRef();
  const [playVideo, setplayVideo] = useState(false);

  const handelVideo = () => {
    setplayVideo(!playVideo);

    if (playVideo) {
      videRef.current.pause();
    } else {
      videRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={videRef}
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handelVideo}
        >
          {playVideo ? (
            <>
              <BsPauseFill color="#fff" fontSize={30} />
            </>
          ) : (
            <>
              <BsFillPlayFill color="#fff" fontSize={30} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
