import React from "react";
import DropDown from "./DropDown";
import dropDownData from "./data/model";

export default {
  title: "DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const MainDropDown = Template.bind({});

MainDropDown.args = {
  ...dropDownData,
};
