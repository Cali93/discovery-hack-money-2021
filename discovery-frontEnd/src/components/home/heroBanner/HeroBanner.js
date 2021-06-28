
import React, { Component } from 'react';
import { Container, Button } from '@material-ui/core';
import { bannerStyles } from './heroBanner.styles';
import { Link } from 'react-router-dom';

export default () => {
  const classes = bannerStyles();
  return (
    <div className={classes.content}>
      <div className={classes.container}>

        <div className={classes.flexContainer}>
          <div className={classes.flexChild}>
            <h1 className={classes.title}>We are redefining the way we learn </h1>
            <p className={classes.description}>
              Next generation decentralized education platform built to support the use and the growth of DeFi projects by interactive learning tools and incentivization programs.
          </p>
            <Button
              component={Link}
              to="/courses"
              className={classes.btn}
              variant="contained"
              color="primary">
              Explore
            </Button>
          </div>

          <div className={classes.flexChild}>
            <img src="https://github.githubassets.com/images/modules/site/home/globe.jpg" alt="Globe" className={classes.imageBanner} />
          </div>
        </div>



      </div>

    </div>

  );
}
