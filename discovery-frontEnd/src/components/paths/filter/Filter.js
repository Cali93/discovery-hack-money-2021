import React from 'react';
import { categoriesStyles } from './categories.styles';
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Filter({ headerName }) {
  const classes = categoriesStyles();
  return (
    <div>
      <Grid container spacing={3} style={{ paddingTop: '4rem' }}>
        <Grid item xs={6} align="left">
          <h1>{headerName} </h1>
        </Grid>
        <Grid item xs={6} style={{ paddingTop: '2.3rem' }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'poppins': ' search' }}
            endAdornment={<SearchIcon />}
            className={classes.search}
          />
        </Grid>

      </Grid>
    </div>
  )
}
