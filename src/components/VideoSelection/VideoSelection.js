import React, { useState } from "react";
import {
  VideoSelectionWrapper,
  LabelWrapper,
  LabelContainer,
  VideoTiles,
} from "./VideoSelection.styles";
const VideoSelection = ({ videos }) => {
  const [currVideoId, setCurrVideoId] = useState(0);
  const { redirectUrl, redirectLabel, subLabel } = videos[currVideoId].link,
    { videoUrl: currVidUrl, videoAlt: currVidAlt } = videos[currVideoId];

  return (
    <VideoSelectionWrapper>
      <iframe src={currVidUrl}></iframe>
      <VideoTiles>
        {videos.map((video, i) => {
          const key = "video_selection-" + i;
          const { previewUrl, videoAlt } = video;
          return (
            <li key={key} onClick={() => setCurrVideoId(i)}>
              <img src={previewUrl} alt={videoAlt} />
            </li>
          );
        })}
      </VideoTiles>
      <LabelWrapper>
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
