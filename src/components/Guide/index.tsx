import React from 'react';
import { EPG } from '../../hooks/useEpg';
import * as classes from './styles.module.css';
import ChannelRow, { ChannelRowProps } from '../ChannelRow';
import Channel, { ChannelProps } from '../Channel';
import ChannelColumn from '../ChannelColumn';

type Props = {
  epg: EPG;
};

const Guide = ({ epg }: Props) => {
  console.log(epg);

  const channels: ChannelProps[] = [];
  const schedules: ChannelRowProps[] = [];

  epg.channels.forEach((channel) => {
    channels.push({
      name: channel.title,
      logo: channel.images.logo,
    });
    schedules.push({ schedules: channel.schedules });
  });

  return (
    <div className={classes.guide}>
      <div className={classes.channelColumn}>
        <ChannelColumn>
          {channels.map(({ logo, name }) => (
            <Channel logo={logo} name={name} />
          ))}
        </ChannelColumn>
      </div>
      <div className={classes.schedules}>
        {schedules.map((channel) => {
          return <ChannelRow schedules={channel.schedules} />;
        })}
      </div>
    </div>
  );
};

export default Guide;
