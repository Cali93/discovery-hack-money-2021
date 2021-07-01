import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../filter/Filter';
import { Grid } from '@material-ui/core';
import CardComponent from '../card/Card';

export default function Subcategories() {
  const { state = {} } = useLocation();
  return (
    <div>
      <Filter headerName={state.name + ` Projects`} />
      <Grid container spacing={3} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {
          state && state.projects ? state.projects.map(({ id }) => {
            return <CardComponent key={id} name={id} />
          }) : ""
        }
      </Grid>
    </div>
  )
}
