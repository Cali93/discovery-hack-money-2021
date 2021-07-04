import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link, useRouteMatch } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PostsIcon from '@material-ui/icons/LibraryBooksOutlined';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Header from '../header/header';
import SideBar from '../sideBar/SideBar';
import { DecryptedNavItems, MainNavItems } from '../sideBar/NavItems';
import { useHistory } from 'react-router-dom';
import { projectContainerStyles } from './projectContainer.styles';
import LessonRoutes from '../details/LessonRoutes'
import { useQuery } from '@apollo/client';
import { getProjectById } from '../../../../graphql/projects';
import { Code } from '@material-ui/icons';

export default function ProjectContainer() {
  const history = useHistory();
  const match = useRouteMatch();
  console.log(match);
  const currentPath = history.location.pathname;
  const projectId = match.params.id
  console.log({projectId});
  const isDecrypted = currentPath.includes('/decrypted');
  const classes = projectContainerStyles();
  const { loading, error, data } = useQuery(getProjectById, {
    variables: {
      id: projectId
    }
  });
  const resetLinkStyle = {
    textDecoration: 'none', color: 'inherit', border: '#c9c9cc 2px solid', width: '250px', height: '50px'
  };

  if (loading) return <h2 style={{ paddingTop: '3rem', minHeight: '600px' }}>Loading...</h2>;
  if (error) return <p>Error :(</p>;
  if (data?.getProjectById) {
    console.log('data', data)
  }

  const sectionItems = data?.getProjectById?.lessons.find((lesson) => lesson.type === 'BRANCHED')?.sections

  return (
    <>
      <Header id={data.getProjectById.id} name={data.getProjectById.name} description={data.getProjectById.description} logo={data.getProjectById.logo} token={data.getProjectById.token} />
      {/* Buttons Gruop for branched, decrypted & Enrolled  */}
      <Grid container className={classes.gridContainer} >
        <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
          <Link style={resetLinkStyle} to={`/project/${projectId}`}>
            <ListItem button selected={!isDecrypted}>
              <ListItemIcon>
                <PostsIcon color={!isDecrypted ? 'action' : 'error'} />
              </ListItemIcon>
              <ListItemText primary='Branched' />
            </ListItem>
          </Link>
          <Link style={resetLinkStyle} to={`/project/${projectId}/decrypted`}>
            <ListItem button selected={isDecrypted}>
              <ListItemIcon>
                <Code color={isDecrypted ? 'action' : 'error'} />
              </ListItemIcon>
              <ListItemText primary='Decrypted' />
            </ListItem>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} align="right" style={{ paddingRight: '10px', }}>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#21b6ae",
              padding: "12px 30px",
              fontSize: "15px"
            }}
          >Enroll</Button>
          <Button
            component={Link}
            to="/categories"
            variant="contained"
            size="large"
            style={{
              backgroundColor: "red",
              padding: "12px 30px",
              fontSize: "15px"
            }}
          >Exit</Button>
        </Grid>
      </Grid>

      {/* SideBar and Project content */}
      <Grid container>
        <Grid item xs={4} sm={2} style={{ display: 'flex' }}>
          <SideBar
            navItems={
              isDecrypted
                ? <DecryptedNavItems history={history} match={match} />
                : <MainNavItems history={history} match={match} sectionItems={sectionItems.map(section => section.title)} />
            }
            isOpen={true}
            classes={classes} />
        </Grid>
        <Grid item xs={12} sm={10} align="left" style={{ paddingLeft: '30px' }}>
          <LessonRoutes sections={sectionItems} />
        </Grid>
      </Grid>
    </>
  )
}
