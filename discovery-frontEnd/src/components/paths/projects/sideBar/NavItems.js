import React from 'react';
import { Link } from 'react-router-dom';
// import { useStoreActions, useStoreState } from 'easy-peasy';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import BookmarksIcon from '@material-ui/icons/BookmarksOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PostsIcon from '@material-ui/icons/LibraryBooksOutlined';
import LikesIcon from '@material-ui/icons/ThumbUpAltOutlined';

const resetLinkStyle = { textDecoration: 'none', color: 'inherit' };

export const MainNavItems = ({ history, match }) => {
  console.log('main branced nav items')
  const isActive = (path) => history.location.pathname.includes(path);
  return (
    <div>
      <Link style={resetLinkStyle} to='/app/posts'>
        <ListItem button selected={isActive('/app/posts')}>
          <ListItemIcon>
            <PostsIcon color={isActive('/app/posts') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Posts' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/liked'>
        <ListItem button selected={isActive('/app/liked')}>
          <ListItemIcon>
            <LikesIcon color={isActive('/app/liked') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Liked posts' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/bookmarks'>
        <ListItem button selected={isActive('/app/bookmarks')}>
          <ListItemIcon>
            <BookmarksIcon color={isActive('/app/bookmarks') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Bookmarks' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/users'>
        <ListItem button selected={isActive('/app/users')}>
          <ListItemIcon>
            <PeopleIcon color={isActive('/app/users') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Users' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/profile'>
        <ListItem button selected={isActive('/app/profile')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('/app/profile') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItem>
      </Link>
    </div>
  );
};

export const DecryptedNavItems = ({ history, match }) => {
  console.log('is in Decrypted Nav Items')
  // TODO: same as for the ProjectContainer, refactor this and use id from props
  const isActive = (path) => history.location.pathname.includes(path);
  return (
    <>
      <Link style={resetLinkStyle} to='/app/posts'>
        <ListItem button selected={isActive('/app/posts')}>
          <ListItemIcon>
            <PostsIcon color={isActive('/app/posts') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Developer docs' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/liked'>
        <ListItem button selected={isActive('/app/liked')}>
          <ListItemIcon>
            <LikesIcon color={isActive('/app/liked') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Getting started' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/bookmarks'>
        <ListItem button selected={isActive('/app/bookmarks')}>
          <ListItemIcon>
            <BookmarksIcon color={isActive('/app/bookmarks') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Start-kits' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/users'>
        <ListItem button selected={isActive('/app/users')}>
          <ListItemIcon>
            <PeopleIcon color={isActive('/app/users') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Deploy' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/profile'>
        <ListItem button selected={isActive('/app/profile')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('/app/profile') ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItem>
      </Link>
    </>
  );
};