import React from 'react';
import Navbar from './Navbar';
import navBarData from './data/model';

export default {
    title: 'Navbar',
    component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const PrimaryNav = Template.bind({});

PrimaryNav.args = {
    ...navBarData
}

