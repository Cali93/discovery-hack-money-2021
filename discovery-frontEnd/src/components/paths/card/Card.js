import React from 'react';
import { Grid, Card, CardActions, CardContent, Typography, Chip, Button, makeStyles, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SubCategoryChip from '../../atoms/subcategory-chip';
import { POLYGON_DESCRIPTION } from '../../../utils';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween'
  },
  cardContent: {
   flexGrow: 1
  },
  cardActions: {
    margin: 'auto'
  }
}));
const resetLinkStyle = { textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', width: '100%', textAlign: 'center', padding: '5px' };
export default function CardComponent({ id, name, description, projects, subcategories, isCategories, isFeatured }) {
  const classes = useStyles();
  const hasSubcategories = subcategories && subcategories.length > 0;
  return (
    <Grid item xs={3}>
      <Card className={classes.card} style={{ boxShadow: isFeatured ? `0 0 2px #fff, 0 0 10px #fff, 0 0 20px #A0E7E5, 0 0 30px #0ba9ca` : null}}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            {name.toLowerCase() === 'matic' ? 'Polygon' : name}
          </Typography>
          <Typography variant="body2" component="p" align="left">
            {name.toLowerCase() === 'matic' ? POLYGON_DESCRIPTION : description}
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
        </CardContent>
        <CardActions className={classes.cardActions}>
        {
            isCategories ? <Link style={resetLinkStyle} to={{ pathname: `/subcategories`, state: { name, projects, subcategories } }}>
              <Chip
                avatar={<Avatar>{projects.length}</Avatar>}
                label="Projects"
                clickable
                color="primary"
              />
            </Link> :
              <Button size="small" variant="contained" color="primary" component={Link} to={`/project/${id}`}>Details</Button>
          }
        </CardActions>
      </Card>
    </Grid>
  )
};
