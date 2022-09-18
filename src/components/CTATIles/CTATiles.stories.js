import React from 'react';
import CTATiles from './CTATiles';
import CTATilesData from './data/model';

export default {
    title: 'CTATiles',
    component: CTATiles,
}

const Template = (args) => <CTATiles {...args} />

export const PrimaryNav = Template.bind({});

PrimaryNav.args = {
    ...CTATilesData
}

