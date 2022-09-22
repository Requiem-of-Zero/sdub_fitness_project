import React, { useState } from "react";
import {
  VideoSelectionWrapper,
  LabelWrapper,
  LabelContainer,
  VideoTiles,
  TileImg,
} from "./VideoSelection.styles";
const VideoSelection = ({ videos }) => {
  const [currVideoId, setCurrVideoId] = useState(0),
    [playing, setPlaying] = useState(false);
  const { redirectUrl, redirectLabel, subLabel } = videos[currVideoId].link,
    { videoUrl: currVidUrl, videoAlt: currVidAlt } = videos[currVideoId];

  return (
    <VideoSelectionWrapper>
      <iframe src={currVidUrl}></iframe>
      <VideoTiles>
        {videos.map((video, i) => {
          const key = "video_selection-" + i;
          const { previewUrl, videoAlt } = video;
          const selected = currVidAlt === videoAlt ? true : false;
          return (
            <li
              key={key}
              onClick={() => {
                setCurrVideoId(i);
                setPlaying(false);
              }}
            >
              <TileImg src={previewUrl} alt={videoAlt} selected={selected} />
            </li>
          );
        })}
      </VideoTiles>
      <LabelWrapper playing={playing} onClick={() => setPlaying(true)}>
        <LabelContainer>
          <h4>Featured Videos Previews</h4>
          <a href={redirectUrl}>{currVidAlt}</a>
          <p>{subLabel}</p>
        </LabelContainer>
      </LabelWrapper>
    </VideoSelectionWrapper>
  );
};

export default VideoSelection;
