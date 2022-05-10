import React from 'react';
import classNames from 'classnames';
import Show from '../Show';
import { Schedule } from '../../hooks/useEpg';
import * as classes from './styles.module.css';

export type ChannelRowProps = {
  schedules: Schedule[];
  className?: string;
};

const ChannelRow = ({ schedules, className }: ChannelRowProps) => {
  return (
    <div className={classNames(classes.channelRow, className)}>
      {schedules.map(({ title, start, end }) => {
        return <Show key={`${start}-${end}-${title}`} title={title} start={start} end={end} />;
      })}
    </div>
  );
};

export default ChannelRow;
