import React from 'react';
import { Grid } from '@material-ui/core';
import { headerStyles } from './header.styles';
import polygonImg from './../../../../img/polygon.jpeg';

import githubImg from './../../../../img/github.jpeg';
import twitterImg from './../../../../img/twitter.png';
import redditImg from './../../../../img/reddit.png';
import websiteImg from './../../../../img/website.png';
import discordImg from './../../../../img/discord.png';


export default function Header({ logo, banner, name, description, token }) {
  const classes = headerStyles();
  return (
    <div className={classes.root} >
      <Grid container className={classes.mainGrid}>
        <Grid item xs={6} sm={3}>
          <img src={logo || polygonImg} alt="polygon" className={classes.logo} />
        </Grid>
        <Grid item xs={4} sm={2} align="left" style={{ marginLeft: '-15px' }}>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Contract address: {token.id}</p>
        </Grid>
        <Grid item xs={12} sm={7} >
          <Grid container direction="row" alignItems="flex-end" justify="flex-end" >
            <Grid item align="center">
              <img src={githubImg} alt="github" className={classes.icons} />
              <img src={twitterImg} alt="twitterImg" className={classes.icons} />
              <img src={redditImg} alt="redditImg" className={classes.icons} />
              <img src={discordImg} alt="discordImg" className={classes.icons} />
              <img src={websiteImg} alt="websiteImg" className={classes.icons} />
            </Grid>
          </Grid>
          <br />
          <Grid item align="right" style={{paddingRight: '20px'}}>
            <p>Symbol: {token.symbol}</p>
            <p>{token.symbol} / USDT: {token.priceUSDT}</p>
            <p>Traded volume: {token.tradeVolume}</p>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
};
