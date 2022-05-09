import React from 'react';
import * as classes from './styles.module.css';

export type ChannelProps = {
  logo: string;
  name: string;
};
const Channel = ({ logo, name }: ChannelProps) => {
  return (
    <div className={classes.channel}>
      <img src={logo} alt={name} />
    </div>
  );
};

export default Channel;
