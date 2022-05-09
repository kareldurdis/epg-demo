import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ChannelColumn from './index';
import Channel from '../Channel';

const channels = Array(10).fill(
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Sky_One_-_Logo_2020.png',
    name: 'Sky 1',
  },
  0
);

export default {
  title: 'Guide/ChannelColumn',
  component: ChannelColumn,
} as ComponentMeta<typeof ChannelColumn>;

export const Default = () => {
  return (
    <ChannelColumn>
      {channels.map((channel) => (
        <Channel logo={channel.logo} name={channel.name} />
      ))}
    </ChannelColumn>
  );
};
