import React from 'react';
import { ComponentMeta } from '@storybook/react';
import TimeRow from './index';

export default {
  title: 'Components/TimeRow',
  component: TimeRow,
} as ComponentMeta<typeof TimeRow>;

export const Default = () => {
  return <TimeRow startHour={9} endHour={23} />;
};
