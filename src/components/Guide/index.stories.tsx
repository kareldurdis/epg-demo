import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Guide from './index';
import useEpg from '../../hooks/useEpg';

type StoryProps = {
  epgUrl: string;
};

const Story = ({ epgUrl }: StoryProps) => {
  const { status, error, data } = useEpg(epgUrl);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const mockedLogoChannels = data.channels.map((channel) => {
    return {
      ...channel,
      images: {
        logo: `http://127.0.0.1:8080/logo_${channel.id}.png`,
      },
    };
  });

  const mockedData = {
    channels: mockedLogoChannels,
  };

  return <Guide epg={mockedData} />;
};

export default {
  title: 'Guide',
  component: Guide,
  argTypes: {
    epgUrl: {
      control: 'text',
      defaultValue: 'http://localhost:1337/epg',
    },
    epg: {
      control: 'object',
      disable: true,
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Story>;

export const Default = ({ epgUrl }: StoryProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Story epgUrl={epgUrl} />
    </QueryClientProvider>
  );
};
