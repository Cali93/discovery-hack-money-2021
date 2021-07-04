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
import { Typography } from '@material-ui/core';
import { toKebabCase } from '../../../../utils';

const resetLinkStyle = {
  textDecoration: 'none', color: 'inherit'
};



export const MainNavItems = ({ history, match, sectionItems }) => {
  console.log('main branced nav items', sectionItems)
  const isActive = (path) => history.location.pathname.includes(path);
  const { id } = match.params;
  return (
    <div>
      {sectionItems && sectionItems.length > 0 && sectionItems.map((sectionTitle, i) => {
        return (
          <Link style={resetLinkStyle} to={`/project/${id}/${toKebabCase(sectionTitle)}`}>
            <ListItem button selected={isActive(toKebabCase(sectionTitle))}>
              <Typography variant='subtitle2'>{i + 1 + "."}</Typography>
              <ListItemText disableTypography primary={<Typography variant='subtitle2'>{sectionTitle}</Typography>} />
            </ListItem>
          </Link>
        )
      })}
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
            <PostsIcon color={isActive('/app/posts') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText primary='Developer docs' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/liked'>
        <ListItem button selected={isActive('/app/liked')}>
          <ListItemIcon>
            <LikesIcon color={isActive('/app/liked') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText primary='Getting started' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/bookmarks'>
        <ListItem button selected={isActive('/app/bookmarks')}>
          <ListItemIcon>
            <BookmarksIcon color={isActive('/app/bookmarks') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText primary='Start-kits' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/users'>
        <ListItem button selected={isActive('/app/users')}>
          <ListItemIcon>
            <PeopleIcon color={isActive('/app/users') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText primary='Deploy' />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to='/app/profile'>
        <ListItem button selected={isActive('/app/profile')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('/app/profile') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItem>
      </Link>
    </>
  );
};
