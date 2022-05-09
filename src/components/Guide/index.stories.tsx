import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Guide from './index';

export default {
  title: 'Guide',
  component: Guide,
} as ComponentMeta<typeof Guide>;

export const Default = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Guide epgUrl="http://localhost:1337/epg" />
    </QueryClientProvider>
  );
};
