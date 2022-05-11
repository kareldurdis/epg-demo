import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Channel, { ChannelProps } from './index';

export default {
  title: 'Components/Channel',
  component: Channel,
  argTypes: {
    logo: {
      control: 'text',
      defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Sky_One_-_Logo_2020.png',
    },
    name: {
      control: 'text',
      defaultValue: 'Sky 1',
    },
  },
} as ComponentMeta<typeof Channel>;

export const Default = ({ logo, name }: ChannelProps) => {
  return <Channel logo={logo} name={name} />;
};
