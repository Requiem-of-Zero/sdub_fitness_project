import React from "react";
import CoverItem from "./CoverItem";
import coverData from "./data/model";

export default {
  title: "CoverItem",
  component: CoverItem,
};

const Template = (args) => <CoverItem {...args} />;

export const PrimaryCover = Template.bind({});

PrimaryCover.args = {
  ...coverData,
};
