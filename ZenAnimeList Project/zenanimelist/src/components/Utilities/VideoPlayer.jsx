"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

export const VideoPlayer = ({ youtubeId }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoButton = () => {
    // prevState adalah kondisi state sblmnya. jika prevState "true" maka !prevState adalah "false" dan sebaliknya
    setIsVisible((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoButton}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1 hover:bg-color-accent cursor-pointer transition-all"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video trailer tidak tersedia")}
        />
      </div>
    );
  };

//   component button openTrailer
  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoButton}
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent hover:text-color-dark cursor-pointer transition-all shadow-xl"
      >
        Tonton Trailer
      </button>
    );
  };

  //   ketika isVisible/video trailernya open.. "?" sama seperti if dan ":" adalah else
  return isVisible ? <Player /> : <ButtonOpenTrailer />;
};
