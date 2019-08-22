import React from 'react';

import classes from './SearchBox.module.css';

export const SearchBox = ({ placeholder, handleOnChange }) => (
  <input className={classes.search} type="search" placeholder={placeholder} onChange={ handleOnChange } />
);
