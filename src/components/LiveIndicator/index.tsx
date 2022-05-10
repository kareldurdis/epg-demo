import React, { CSSProperties } from 'react';
import * as classes from './styles.module.css';

type LiveIndicatorProps = {
  style?: CSSProperties;
};

const LiveIndicator = ({ style }: LiveIndicatorProps) => {
  return (
    <div className={classes.container} style={style}>
      <div className={classes.needle} />
      <div className={classes.line} />
    </div>
  );
};

export default LiveIndicator;
