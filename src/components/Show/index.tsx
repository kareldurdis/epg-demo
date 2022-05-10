import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { MINUTE_SIZE } from '../../utils/constants';
import * as classes from './styles.module.css';

export type ShowProps = {
  title: string;
  start: string;
  end: string;
};

const Show = ({ title, start, end }: ShowProps) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const now = dayjs();
  const isActive = now.isAfter(startDate) && now.isBefore(endDate);

  const duration = endDate.diff(startDate, 'minutes');
  const showWidth = duration * MINUTE_SIZE;

  return (
    <div
      className={classNames(classes.show, isActive ? classes.active : undefined)}
      style={{ width: showWidth, minWidth: showWidth, maxWidth: showWidth }}
    >
      <span className={classes.title}>{title}</span>
      <span className={classes.time}>
        {startDate.format('HH:mm')} - {endDate.format('HH:mm')}
      </span>
    </div>
  );
};

export default Show;
