import React from 'react';

import classes from './Card.module.css';

export const Card = (props) => (
  <div className={classes.cardContainer}>
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
    <h2>{ props.monster.name }</h2>
    <p>{ props.monster.email }</p>
  </div>
);
