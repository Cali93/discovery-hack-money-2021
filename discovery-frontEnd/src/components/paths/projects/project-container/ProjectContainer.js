import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link, useRouteMatch } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PostsIcon from '@material-ui/icons/LibraryBooksOutlined';
import Header from '../header/header';
import SideBar from '../sideBar/SideBar';
import Details from '../details/details';
import { DecryptedNavItems, MainNavItems } from '../sideBar/NavItems';
import { useHistory } from 'react-router-dom';
import { useSideBarStyles } from '../sideBar/sidebar.styles';
export default function ProjectContainer() {
  // TODO: replace this with id from props
  const id = 1;
  const classes = useSideBarStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const resetLinkStyle = { textDecoration: 'none', color: 'inherit' };
  const currentPath = history.location.pathname;
  const isDecrypted = currentPath.includes('/decrypted');
  return (
    <div>
      <Header />
      <SideBar
        navItems={
          isDecrypted
            ? <DecryptedNavItems history={history} match={match} />
            : <MainNavItems history={history} match={match} />
        }
        isOpen={true}
        classes={classes} />
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
      <Details />
    </div>
  )
}
