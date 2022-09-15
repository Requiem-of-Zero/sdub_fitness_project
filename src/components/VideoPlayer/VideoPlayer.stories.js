import React from "react";
import VideoPlayer from "./VideoPlayer";

export default {
  title: "VideoPlayer",
  component: VideoPlayer,
};

const Template = (args) => <VideoPlayer {...args} />;

export const MainPlayer = Template.bind({});

MainPlayer.args = {

};
