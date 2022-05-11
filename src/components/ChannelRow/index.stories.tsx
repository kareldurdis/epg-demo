import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ChannelRow from './index';
import data from './data.json';

export default {
  title: 'Components/ChannelRow',
  component: ChannelRow,
} as ComponentMeta<typeof ChannelRow>;

export const Default = () => {
  return <ChannelRow schedules={data.schedules} />;
};
