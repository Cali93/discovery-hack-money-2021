import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Container, Button, Paper, Grid, GridList, GridListTile, GridListTileBar, IconButton, Card, CardActionArea, CardMedia, CardActions, CardContent, Typography, } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import commnityImg from './../../img/community.png';
import communityImg from './../../img/a.png';
import metamakImg from './../../img/metamask.png';
import exploreImg from './../../img/de-fi.jpeg';
import learnImg from './../../img/learn.png';
import dotImg from './../../img/dots.svg';
import basicsImg from './../../img/basics.jpeg';


import styles from './Home.module.css';
import HeroBanner from './heroBanner/HeroBanner';
import Reviews from './reviews/Reviews';

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


          <div className="welcome-section">
            <h2 className={styles.welcome}>Welcome to Discovery</h2>
            <p className={styles.description}>
              An Ecosystem built to support the use and the growth of DeFi projects by enabling participants to actively get involved in the network via theoretical and interactive educational content provided by the active communities of established DeFi projects.
              </p>
          </div>

          <div className="join-section">
            <Grid container spacing={3}>
              <Grid item xs={3}  >
                <Paper className={styles.paper}>
                  <img src={communityImg} alt="" className={styles.steps} />
                  <h3>Join Discovery</h3>
                  <p>
                    Discovery is dedicated space for your community to come together, ask and answer questions, and have open-ended conversations.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={3}  >
                <Paper className={styles.paper}>
                  <img src={metamakImg} alt="" className={styles.steps} />
                  <h3>Set up Metamask</h3>
                  <p>
                    A crypto wallet & gateway to blockchain apps
                    Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={3}  >
                <Paper className={styles.paper}>
                  <img src={exploreImg} alt="" className={styles.steps} />
                  <h3>Explore</h3>
                  <p>
                    Blockchain-based networks, decentralized apps (DApps), and distributed ledgers are becoming the foundation of much of your digital life.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={3}  >
                <Paper className={styles.paper}>
                  <img src={learnImg} alt="" className={styles.steps} />
                  <h3>Learn & Earn</h3>
                  <p>
                    It's a program that supports people who create content for the Web 3 Knowledge Base. Creators receive tokens and get to showcase their knowledge.
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </div>



          <section className={styles.featureSection}>
            <h2 className={styles.getStarted}>Get Started</h2>
            <Grid container spacing={2} className={styles.featuresContainer}>
              <Grid item xs={12} sm={6} align="center" display="inline-block">
                <Card className={styles.featuresImg}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.media}
                      image={learnImg}
                      title="Learn the basics"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Learn the Basics
                        </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Learn how to start using the most popular blockchain Network with JavaScript API and Dicovery platform.
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                      </Button>
                    <Button size="small" color="primary">
                      Start Learning
                      </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} align="center">
                <Card className={styles.featuresImg}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.media}
                      image={learnImg}
                      title="Learn the basics"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Start Building with Blockchain
                        </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Learn how to  building with blockchain technologies abd  start using the most popular blockchain Networks.
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                      </Button>
                    <Button size="small" color="primary">
                      Start Learning
                      </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} align="center">
                <Card className={styles.featuresImg}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.media}
                      image={learnImg}
                      title="Learn the basics"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Bounty Hub
                        </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Software security researchers are increasingly engaging with internet companies.
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                      </Button>
                    <Button size="small" color="primary">
                      Start Learning
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} align="center">
                <Card className={styles.featuresImg}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.media}
                      image={learnImg}
                      title="Learn the basics"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Challenges & Prizes
                        </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Learn how to start using the most popular blockchain technologies and  win prizes.
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                      </Button>
                    <Button size="small" color="primary">
                      Start Learning
                      </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </section>



          <Reviews />
          <br />
          {/* <div className={styles.getStarted}>
            <span className={styles.verticalLine}></span>
            <h2>Contribute</h2>
            <span className={styles.verticalLine}></span>
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





 */}

          <main>






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
