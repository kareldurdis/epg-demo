import React from 'react';
import * as classes from './styles.module.css';

type Props = {
  logo: string;
  name: string;
};
const Channel = ({ logo, name }: Props) => {
  return (
    <div className={classes.channel}>
      <img src={logo} alt={name} />
    </div>
  );
};

export default Channel;
