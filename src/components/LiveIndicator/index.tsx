import React, { CSSProperties } from 'react';
import * as classes from './styles.module.css';

type LiveIndicatorProps = {
  style?: CSSProperties;
};

const LiveIndicator = React.forwardRef<HTMLDivElement, LiveIndicatorProps>(({ style }, ref) => {
  return (
    <div className={classes.container} style={style} ref={ref}>
      <div className={classes.needle} />
      <div className={classes.line} />
    </div>
  );
});

export default LiveIndicator;
