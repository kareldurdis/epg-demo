import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
  title: 'Guide/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => {
  return <Button>Now</Button>;
};
