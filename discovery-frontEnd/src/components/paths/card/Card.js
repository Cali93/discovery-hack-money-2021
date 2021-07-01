import React from 'react';
import { Grid, Card, CardContent, Typography, Chip, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CardComponent({ name, description, projects, isCategories }) {
  return (
    <Grid item xs={3}>

      <Card style={{ height: `100%` }}>
        <CardContent>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" component="p" align="left">
            {description}
            <br />
          </Typography>

          {
            isCategories ? <Link to={{ pathname: `/subcategories`, state: { name: name, projects: projects } }}
              style={{ textDecoration: 'none', paddingTop: '50px', fontSize: '0.9rem' }} align="left">
              Number of projects:
              <Chip size="small" color="primary" label={projects && projects.length ? projects.length : 0} style={{ marginLeft: '5px', cursor: 'pointer' }} />
            </Link> :
              <Button size="small" variant="contained" color="primary" component={Link} to="/">Details</Button>
          }
        </CardContent>
      </Card>
    </Grid>
  )
};
