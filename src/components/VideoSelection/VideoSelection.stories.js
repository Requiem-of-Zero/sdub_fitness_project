import React from "react";
import VideoSelection from "./VideoSelection";
import videoSelectionData from "./data/model";

export default {
  title: "VideoSelection",
  component: VideoSelection,
};

const Template = (args) => <VideoSelection {...args} />;

export const FooterVideoSelection = Template.bind({});

FooterVideoSelection.args = {
    ...videoSelectionData
};
