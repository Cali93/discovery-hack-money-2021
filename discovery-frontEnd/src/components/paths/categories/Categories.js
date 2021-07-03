import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Filter from '../filter/Filter';
import CardComponent from '../card/Card';

export default function Categories({ categories }) {
  return (
    <Container >
      <Filter headerName={'Discovery Paths Categories'} />
      <Grid container spacing={3} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {
          categories.map(({ id, name, description, projects, subcategories }) => {
            if (subcategories.length > 0) {
              return <CardComponent key={id} id={id} isCategories={true} name={name} description={description} subcategories={subcategories} projects={projects}
              />
            }
            return (
              <CardComponent id={id} isCategories={true} key={id} name={name} description={description} projects={projects}
              />
            )
          })
        }
      </Grid>
    </Container>
  )
}
