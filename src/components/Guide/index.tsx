import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { EPG } from '../../hooks/useEpg';
import * as classes from './styles.module.css';
import ChannelRow, { ChannelRowProps } from '../ChannelRow';
import Channel, { ChannelProps } from '../Channel';
import ChannelColumn from '../ChannelColumn';
import TimeRow from '../TimeRow';
import {MINUTE_SIZE} from "../../utils/constants";
import LiveIndicator from "../LiveIndicator";

dayjs.extend(customParseFormat);

type Props = {
  epg: EPG;
};

const Guide = ({ epg }: Props) => {
  console.log(epg);

  const channels: ChannelProps[] = [];
  const schedules: ChannelRowProps[] = [];
  let startHour = 0;
  let endHour = 0;

  epg.channels.forEach((channel) => {
    channels.push({
      name: channel.title,
      logo: channel.images.logo,
    });
    schedules.push({ schedules: channel.schedules });
  });

  // Get lowest hour of first show and highest hour of last show on any channel
  schedules.forEach((channel) => {
    if (channel.schedules.length > 0) {
      const firstHour = dayjs(channel.schedules[0].start).hour();
      const lastHour = dayjs(channel.schedules[channel.schedules.length - 1].end).hour();
      if (firstHour < startHour) {
        startHour = firstHour;
      }
      if (lastHour > endHour) {
        endHour = lastHour;
      }
    }
  });

  const minutesFromStart = dayjs().diff(dayjs(`${startHour}:00:00`, 'H:mm:ss'), 'minutes');
  // const liveOffset = minutesFromStart * MINUTE_SIZE;
  const liveOffset = 200;

  return (
    <div className={classes.container}>
      <div className={classes.guide}>
        <div className={classes.channelColumn}>
          <ChannelColumn>
            {channels.map(({ logo, name }) => (
              <Channel key={name} logo={logo} name={name} />
            ))}
          </ChannelColumn>
        </div>
        <div>
          <LiveIndicator style={{ position: 'absolute', left: liveOffset }} />
          <TimeRow startHour={startHour} endHour={endHour} />
          {schedules.map((channel, index) => {
            return (
              <ChannelRow
                key={channels[index].name}
                schedules={channel.schedules}
                className={classes.scheduleLine}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Guide;
