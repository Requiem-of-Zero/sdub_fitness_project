import React from "react";
import MemberTestimonials from "./MemberTestimonials";
import memberTestimonialsData from "./data/model";

export default {
  title: "MemberTestimonials",
  component: MemberTestimonials,
};

const Template = (args) => <MemberTestimonials {...args} />;

export const Testimonials = Template.bind({});

Testimonials.args = {
    ...memberTestimonialsData
};
