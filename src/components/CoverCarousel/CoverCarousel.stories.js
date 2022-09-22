import React from "react";
import CoverCarousel from "./CoverCarousel";
import coversData from "./data/model";

export default {
  title: "CoverCarousel",
  component: CoverCarousel,
};

const Template = (args) => <CoverCarousel {...args} />;

export const MainCarousel = Template.bind({});

MainCarousel.args = {
    ...coversData
};
