import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Hello from './index';

export default {
  title: 'Example/Hello',
  component: Hello,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Hello>;

export const Default = () => <Hello />;
