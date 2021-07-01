import { useQuery } from '@apollo/client';
import React from 'react';
import { getCategories } from '../../../graphql/categories';
import { categoriesStyles } from './categories.styles.js';
import { Grid, Container } from '@material-ui/core';
import Filter from '../filter/Filter';
import CardComponent from '../card/Card';

export default function PathsCategories() {
  const { loading, error, data } = useQuery(getCategories);

  if (loading) return <h2 style={{ paddingTop: '3rem', minHeight: '600px' }}>Loading...</h2>;
  if (error) return <p>Error :(</p>;
  if (data?.getCategories) {
    console.log('data', data)
  }


  return (
    <Container >
      <Filter headerName={'Discovery Paths Categories'} />
      <Grid container spacing={3} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {
          data && data.getCategories ? data.getCategories.map(({ id, name, description, projects }) => {
            return (
              <CardComponent isCategories={true} key={id} name={name} description={description} projects={projects}
              />
            )
          }) : ""
        }
      </Grid>
    </Container>
  )
}
