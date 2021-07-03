import React from 'react';
import { Grid, Card, CardContent, Typography, Chip, Button, makeStyles, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SubCategoryChip from '../../atoms/subcategory-chip';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
const resetLinkStyle = { textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', width: '100%', textAlign: 'center', padding: '5px' };
export default function CardComponent({ name, description, projects, subcategories, isCategories }) {
  const classes = useStyles();
  const hasSubcategories = subcategories && subcategories.length > 0;
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
          {hasSubcategories
            ? (
              <div className={classes.root}>
                {subcategories.map(subcat => <SubCategoryChip key={subcat.id} name={subcat.name} description={subcat.description} projects={subcat.projects} />)}
              </div>
            )
            : ""
          }
          {
            isCategories ? <Link style={resetLinkStyle} to={{ pathname: `/subcategories`, state: { name, projects, subcategories } }}>
              <Chip
                avatar={<Avatar>{projects.length}</Avatar>}
                label="Projects"
                clickable
                color="primary"
              />
            </Link> :
              <Button size="small" variant="contained" color="primary" component={Link} to="/project/1">Details</Button>
          }

        </CardContent>
      </Card>
    </Grid>
  )
};
