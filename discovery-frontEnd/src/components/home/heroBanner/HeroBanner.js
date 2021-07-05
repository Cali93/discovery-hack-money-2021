
import React from 'react';
import { bannerStyles } from './heroBanner.styles';
export const HeroBanner = () => {
  const classes = bannerStyles();
  return (
    <div className={classes.heroImage}>
      {/* <div className={classes.container}>

        <div className={classes.flexContainer}>
          <div className={classes.flexChild}>
            <h1 className={classes.title}>We are redefining the way we learn </h1>
            <p className={classes.description}>
              Next generation decentralized education platform built to support the use and the growth of DeFi projects by interactive learning tools and incentivization programs.
            </p>
            <Button
              component={Link}
              to="/categories"
              className={classes.btn}
              variant="contained"
              color="primary">
              Explore
            </Button>
          </div>

          <div className={classes.flexChild}>
            <img src="" alt="Globe" className={classes.imageBanner} />
          </div>
        </div>



      </div> */}

    </div>

  );
}
