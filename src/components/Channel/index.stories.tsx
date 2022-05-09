import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Channel from './index';

export default {
  title: 'Guide/Channel',
  component: Channel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Channel>;

export const Default = () => {
  return (
    <Channel
      logo="https://upload.wikimedia.org/wikipedia/commons/1/14/Sky_One_-_Logo_2020.png"
      name="Sky 1"
    />
  );
};
