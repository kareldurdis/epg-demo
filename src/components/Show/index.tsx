import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import * as classes from './styles.module.css';

export type ShowProps = {
  title: string;
  start: string;
  end: string;
};

const MINUTE_SIZE = 9;

const Show = ({ title, start, end }: ShowProps) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const now = dayjs();
  const isActive = now.isAfter(startDate) && now.isBefore(endDate);

  const duration = endDate.diff(startDate, 'minutes');

  return (
    <div
      className={classNames(classes.show, isActive ? classes.active : undefined)}
      style={{ width: duration * MINUTE_SIZE }}
    >
      <span className={classes.title}>{title}</span>
      <span className={classes.time}>
        {startDate.format('HH:mm')} - {endDate.format('HH:mm')}
      </span>
    </div>
  );
};

export default Show;
