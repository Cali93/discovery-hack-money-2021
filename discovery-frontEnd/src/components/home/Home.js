import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Container, Button, Paper, Grid, GridList, GridListTile, GridListTileBar, IconButton, Card, CardActionArea, CardMedia, CardActions, } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import commnityImg from './../../img/community.png';
import styles from './Home.module.css';
import HeroBanner from './heroBanner/HeroBanner'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


export default class Home extends Component {
  render() {
    const tileData = [
      {
        title: "Facebook",
        img: "https://images.unsplash.com/photo-1620942240269-6e289102d28a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
      {
        title: "J.P.Morgan",
        img: "https://images.unsplash.com/photo-1620942240269-6e289102d28a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
      {
        title: "Facebook",
        img: "https://images.unsplash.com/photo-1620942240269-6e289102d28a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
      {
        title: "J.P.Morgan",
        img: "https://images.unsplash.com/photo-1620942240269-6e289102d28a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
    ]

    return (
      <div className="d">
        <HeroBanner />
        <Container maxWidth="lg">


          <main>
            <div className="d">
              <div className="">
                <h2>Welcome to Discovery</h2>
                <p className="heroText">
                  An Ecosystem built to support the use and the growth of DeFi projects by enabling participants to actively get involved in the network via theoretical and interactive educational content provided by the active communities of established DeFi projects.
              </p>
              </div>
              <Grid container spacing={3}>
                <Grid item xs={3}  >
                  <Paper className="k">
                    <img src={commnityImg} alt="" className={styles.steps} />
                    <h2>Join Discovery</h2>
                    <p className="steps-description">
                      Discovery lets
                      sit amet consectetur adipisicing elit. Adipisci quas atque neque non molestias at sapiente repellat nam dignissimos dicta assumenda, quod saepe repellendus dolores tempore ex perspiciatis animi quaerat?
                  </p>
                  </Paper>
                </Grid>

                <Grid item xs={3}  >
                  <Paper className={useStyles.paper}>
                    <img src={commnityImg} alt="" className={styles.steps} />
                    <h2>Join Discovery</h2>
                    <p className="getStatedDescription">
                      Discovery lets
                      sit amet consectetur adipisicing elit. Adipisci quas atque neque non molestias at sapiente repellat nam dignissimos dicta assumenda, quod saepe repellendus dolores tempore ex perspiciatis animi quaerat?
                  </p>
                  </Paper>
                </Grid>

                <Grid item xs={3}  >
                  <Paper className={useStyles.paper}>
                    <img src={commnityImg} alt="" className={styles.steps} />
                    <h2>Join Discovery</h2>
                    <p className="getStatedDescription">
                      Discovery lets
                      sit amet consectetur adipisicing elit. Adipisci quas atque neque non molestias at sapiente repellat nam dignissimos dicta assumenda, quod saepe repellendus dolores tempore ex perspiciatis animi quaerat?
                  </p>
                  </Paper>
                </Grid>

                <Grid item xs={3}  >
                  <Paper className={useStyles.paper}>
                    <img src={commnityImg} alt="" className={styles.steps} />
                    <h2>Join Discovery</h2>
                    <p className="getStatedDescription">
                      Discovery lets
                      sit amet consectetur adipisicing elit. Adipisci quas atque neque non molestias at sapiente repellat nam dignissimos dicta assumenda, quod saepe repellendus dolores tempore ex perspiciatis animi quaerat?
                  </p>
                  </Paper>
                </Grid>
              </Grid>
            </div>





            <div className="get-started">
              <h2>Get Started</h2>

              <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                  <Paper className={useStyles.paper}>

                    <img src={commnityImg} alt="" className={styles.steps} />
                    <Button size="small" color="primary">Join Discovery</Button>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper className={useStyles.paper}>
                    <img src={commnityImg} alt="" className={styles.steps} />
                    <Button size="small" color="primary">Learn More</Button>
                  </Paper>
                </Grid>

              </Grid>

            </div>

            <div className=" partnerships">
              <h2>Partnerships</h2>
              <div>
                <GridList className={styles.gridList} cols={2.5}>
                  {tileData.map((tile, id) => (
                    <GridListTile key={id}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        className={
                          styles.root, styles.titleBar, styles.title
                        }
                        actionIcon={
                          <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={styles.title} />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>

            </div>
          </main>
        </Container>

      </div>

    );
  }
}
