import React from 'react';
import { Grid } from '@material-ui/core';
import { headerStyles } from './header.styles';
import polygonImg from './../../../../img/Polygon-Logo.png';

import githubImg from './../../../../img/github.jpeg';
import twitterImg from './../../../../img/twitter.png';
import redditImg from './../../../../img/reddit.png';
import websiteImg from './../../../../img/website.png';
import discordImg from './../../../../img/discord.png';
import { POLYGON_DESCRIPTION } from '../../../../utils';


export default function Header({ id, logo, banner, name, description, token }) {
  const classes = headerStyles();
  const isMatic = name.toLowerCase() === 'matic';
  return (
    <div className={classes.root} >
      <Grid container className={classes.mainGrid}>
        <Grid item xs={6} sm={3}>
          <img src={isMatic ? polygonImg : logo} alt="polygon" className={classes.logo} />
        </Grid>
        <Grid item xs={6} sm={4} align="left" style={{ marginLeft: '-15px' }}>
          <h2>{isMatic ? 'Polygon (previously Matic)' : name}</h2>
          <p>{isMatic ? POLYGON_DESCRIPTION : description}</p>
          {token?.id && (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p style={{marginBottom: 0}}>Contract address:</p>
              <a style={{textDecoration: 'none', color: '#b4f8c8'}} href={`https://etherscan.io/address/${token.id}`} target="_blank" rel="noreferrer noopener">{token.id}</a>
            </div>
          )}
        </Grid>
        <Grid item xs={10} sm={5} >
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
          {token?.id && (
            <Grid item align="right" style={{ paddingRight: '20px' }}>
              <p>Symbol: {token.symbol}</p>
              <p>{token.symbol} / {token.priceUSDT ? 'USDT' : 'wETH'}: {token.priceUSDT || token.pricewETH}</p>
              <p>Trade volume: {token.tradeVolume}</p>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div >
  )
};
