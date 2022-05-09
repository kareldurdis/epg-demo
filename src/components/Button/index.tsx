import React, { ReactNode } from 'react';
import * as classes from './styles.module.css';

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className={classes.nowButton} type="button">
      {children}
    </button>
  );
};

export default Button;
