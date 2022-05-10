import React from 'react';
import * as classes from './styles.module.css';
import { MINUTE_SIZE } from '../../utils/constants';

type TimeRowProps = {
  startHour: number;
  endHour: number;
};

const TimeRow = ({ startHour, endHour }: TimeRowProps) => {
  const hours = [];
  const hourWidth = 60 * MINUTE_SIZE;
  for (let i = startHour; i <= endHour; i += 1) {
    hours.push(
      <div
        className={classes.hourBox}
        style={{ width: hourWidth, maxWidth: hourWidth, minWidth: hourWidth }}
      >
        <span className={classes.time}>{i}:00</span>
        <div className={classes.marker} />
      </div>
    );
  }
  return <div className={classes.timeRow}>{hours}</div>;
};

export default TimeRow;
