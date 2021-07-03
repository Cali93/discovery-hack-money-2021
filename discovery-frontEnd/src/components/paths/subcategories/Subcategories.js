import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../filter/Filter';
import { Container, Grid } from '@material-ui/core';
import CardComponent from '../card/Card';
import SubCategoryChip from '../../atoms/subcategory-chip';

export default function Subcategories() {
  const { state = {} } = useLocation();
  return (
    <Container>
      <Filter headerName={state.name + ` Projects`} />
      <Grid container spacing={3} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {
          state && state.subcategories ? state.subcategories.map(({ id, name, description, projects }) => {
            return <SubCategoryChip key={id} name={name} description={description} projects={projects} />
          }) : ""
        }
      </Grid>
      <Grid container spacing={3} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {
          state && state.projects ? state.projects.map(({ id, name, description }) => {
            return <CardComponent id={id} key={id} name={name} description={description} />
          }) : ""
        }
      </Grid>
    </Container>
  )
}
