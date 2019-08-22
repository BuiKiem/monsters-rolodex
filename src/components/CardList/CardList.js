import React from 'react';

import { Card } from '../Card/Card';

import classes from './CardList.module.css';

export const CardList = (props) => (
  <div className={classes.cardList}>
    {
      props.monsters.map((monster) => <Card key={monster.id} monster={monster}/>)
    }
  </div>
);
