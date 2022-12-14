import React from "react";
import Footer from "./Footer";
import footerData from "./data/model";

export default {
  title: "Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const MainFooter = Template.bind({});

MainFooter.args = {
  ...footerData  
};
