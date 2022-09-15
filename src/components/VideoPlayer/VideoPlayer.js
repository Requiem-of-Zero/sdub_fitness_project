import React from "react";
import { VideoPlayerWrapper } from "./VideoPlayer.styles";

const VideoPlayer = () => {
  return (
    <VideoPlayerWrapper>
      <iframe
        src="https://drive.google.com/file/d/1j2xkL98FBF8cDGkjCnrPMeKg0DMJQJDS/preview"
        width="1080"
        height="500"
        allow="autoplay"
        loading="lazy"
        quality="720"
      ></iframe>
    </VideoPlayerWrapper>
  );
};

export default VideoPlayer;
