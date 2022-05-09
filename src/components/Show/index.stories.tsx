import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Show from './index';

export default {
  title: 'Guide/Show',
  component: Show,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Awesome show',
    },
    start: {
      control: 'date',
      defaultValue: new Date('2022-05-09T00:00:00+02:00'),
    },
    end: {
      control: 'date',
      defaultValue: new Date('2022-05-09T00:20:00+02:00'),
    },
    active: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Show>;

export const Default = ({ title, start, end }) => {
  return <Show title={title} start={start} end={end} />;
};
