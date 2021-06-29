import React, { Component } from 'react';
import { Container, Button, Paper, Grid, GridList, GridListTile, GridListTileBar, IconButton, Card, CardActionArea, CardMedia, CardActions, CardContent, Typography, } from '@material-ui/core';
import commnityImg from './../../../img/community.png';
import personImg from './../../../img/person.jpg';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
  render() {
    return (
      <div className={styles.getStarted}>
        <span className={styles.verticalLine}></span>
        <h2>Contribute</h2>
        <span className={styles.verticalLine}></span>

        <div className={styles.testimonials}>
          <img src={personImg} alt="Person" />
          <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
          <cite>- Jane Doe</cite>
        </div>
      </div>
    );
  }
}
