import React from 'react';
import Show from '../Show';
import { Schedule } from '../../hooks/useEpg';
import * as classes from './styles.module.css';

type ChannelRowProps = {
  schedules: Schedule[];
};

const ChannelRow = ({ schedules }: ChannelRowProps) => {
  return (
    <div className={classes.channelRow}>
      {schedules.map(({ title, start, end }) => {
        return <Show title={title} start={start} end={end} />;
      })}
    </div>
  );
};

export default ChannelRow;
