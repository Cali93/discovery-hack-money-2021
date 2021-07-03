import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Container, Grid, Link, Typography } from '@material-ui/core';
import { footerStyles } from './footer.styles';
import logo from '../../../img/LogoOfficial.png';

export default () => {
  const classes = footerStyles();
  return (
    <footer style={{
      marginTop: 'calc(5% + 60px)',
      bottom: 0
  }}>
      <AppBar className="primary-color marginT-3 pad-2" position="static">
        <Grid component={Container} container>
          <Grid item xs={12} sm={3}>
            <img src={logo} className={classes.logo} alt="Logo" />
          </Grid>

          <Grid item xs={12} sm={9} className={classes.links} >
            <Link className={classes.link} component={RouterLink} to="/">
              Home
            </Link>
            <span>/</span>

            <Link className={classes.link} component={RouterLink} to="/">
              Contact Us
            </Link>
            <span>/</span>

            <Link className={classes.link} component={RouterLink} to="/courses">
              Courses
            </Link>
            <span>/</span>

            <Link className={classes.link} component={RouterLink} to="/">
              Get Started
             </Link>
            <span>/</span>

            <Link className={classes.link} component={RouterLink} to="/">
              Terms
           </Link>
            <span>/</span>

            <Link className={classes.link} component={RouterLink} to="/">
              Privacy
            </Link>
          </Grid>

          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.copyright}>
              Copyright &copy;{new Date().getFullYear()} Discovery
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </footer>
  );
};
