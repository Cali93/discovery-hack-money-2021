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
import Details from '../details/Details';
import { DecryptedNavItems, MainNavItems } from '../sideBar/NavItems';
import { useHistory } from 'react-router-dom';
import { useSideBarStyles } from '../sideBar/sidebar.styles';
export default function ProjectContainer() {
  // TODO: replace this with id from props
  const id = 1;
  const classes = useSideBarStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const resetLinkStyle = {
    textDecoration: 'none', color: 'inherit', border: '#c9c9cc 2px solid', width: '250px', height: '50px'
  };
  const currentPath = history.location.pathname;
  const isDecrypted = currentPath.includes('/decrypted');
  return (
    <div>
      <Header />


      <Grid container style={{ paddingTop: '30px', paddingLeft: '20px', paddingBottom: '20px' }}>
        <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
          <Link style={resetLinkStyle} to={`/project/${id}`}>
            <ListItem button selected={!isDecrypted}>
              <ListItemIcon>
                <PostsIcon color={!isDecrypted ? 'secondary' : 'primary'} />
              </ListItemIcon>
              <ListItemText primary='Branched' />
            </ListItem>
          </Link>
          <Link style={resetLinkStyle} to={`/project/${id}/decrypted`}>
            <ListItem button selected={isDecrypted}>
              <ListItemIcon>
                <PostsIcon color={isDecrypted ? 'secondary' : 'primary'} />
              </ListItemIcon>
              <ListItemText primary='Decrypted' />
            </ListItem>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} align="right" style={{ paddingRight: '10px' }}>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#21b6ae",
              padding: "12px 30px",
              fontSize: "18px"
            }}
          >Enroll</Button>
        </Grid>
      </Grid>




      <Grid container style={{ paddingBottom: '250px' }}>
        <Grid item xs={4} sm={2} style={{ display: 'flex' }}>
          <SideBar
            navItems={
              isDecrypted
                ? <DecryptedNavItems history={history} match={match} />
                : <MainNavItems history={history} match={match} />
            }
            isOpen={true}
            classes={classes} />
        </Grid>
        <Grid item xs={20} sm={10} align="left" style={{ paddingLeft: '30px' }}>
          <Details />
        </Grid>
      </Grid>
    </div >
  )
}
