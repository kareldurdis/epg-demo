import React from 'react';
import { ComponentMeta } from '@storybook/react';
import LiveIndicator from './index';

export default {
  title: 'Guide/LiveIndicator',
  component: LiveIndicator,
} as ComponentMeta<typeof LiveIndicator>;

export const Default = () => {
  return (
    <div style={{ height: '400px', width: '20px' }}>
      <LiveIndicator />
    </div>
  );
};
