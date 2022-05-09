import React, { ReactNode } from 'react';
import * as classes from './styles.module.css';

export type ChannelColumnProps = {
  children: ReactNode;
};

const ChannelColumn = ({ children }: ChannelColumnProps) => {
  return <div className={classes.channelColumn}>{children}</div>;
};

export default ChannelColumn;
