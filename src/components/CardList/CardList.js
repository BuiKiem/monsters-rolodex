import React from 'react';

import classes from './CardList.module.css';

export const CardList = (props) => (
  <div className={classes.cardList}>{props.children}</div>
);
