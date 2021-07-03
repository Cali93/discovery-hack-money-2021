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

const resetLinkStyle = {
  textDecoration: 'none', color: 'inherit'
};

export const MainNavItems = ({ history, match }) => {
  console.log('main branced nav items')
  const isActive = (path) => history.location.pathname.includes(path);
  const { id } = match.params;
  return (
    <div>
      <Link style={resetLinkStyle} to={`/project/${id}/dashboard-metrics`}>
        <ListItem button selected={isActive(`dashboard-metrics`)} >
          <ListItemIcon >
            <PostsIcon color={isActive(`dashboard-metrics`) ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Dashboard Metrics</Typography>} />
        </ListItem>
      </Link>

      <Link style={resetLinkStyle} to={`/project/${id}/introduction`}>
        <ListItem button selected={isActive(`introduction`)}>
          <ListItemIcon>
            <LikesIcon color={isActive(`introduction`) ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Introduction</Typography>} />
        </ListItem>
      </Link>
      <Link style={resetLinkStyle} to={`/project/${id}/governance`} >
        <ListItem button selected={isActive('governance')}>
          <ListItemIcon>
            <BookmarksIcon color={isActive('governance') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Governance</Typography>} />
        </ListItem>
      </Link>

      <Link style={resetLinkStyle} to={`/project/${id}/main-products`}>
        <ListItem button selected={isActive('main-products')}>
          <ListItemIcon>
            <PeopleIcon color={isActive('main-products') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Features</Typography>} />
        </ListItem>
      </Link>

      {/* nested list  */}
      <Link style={resetLinkStyle} to={`/project/${id}/fixed-interest`}>
        <ListItem button selected={isActive('fixed-interest')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('fixed-interest') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Fixed Interest</Typography>} />
        </ListItem>
      </Link>


      <Link style={resetLinkStyle} to={`/project/${id}/zero-coupon`}>
        <ListItem button selected={isActive('zero-coupon')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('zero-coupon') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Zero Coupon</Typography>} />
        </ListItem>
      </Link>

      <Link style={resetLinkStyle} to={`/project/${id}/floating-rate`}>
        <ListItem button selected={isActive('floating-rate')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('floating-rate') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Floating Rate</Typography>} />
        </ListItem>
      </Link>

      <Link style={resetLinkStyle} to={`/project/${id}/structured-products`}>
        <ListItem button selected={isActive('structured-products')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('structured-products') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Structured Products</Typography>} />
        </ListItem>
      </Link>

      <Link style={resetLinkStyle} to={`/project/${id}/security-audit`}>
        <ListItem button selected={isActive('security-audit')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('security-audit') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>Security Audits</Typography>} />
        </ListItem>
      </Link>

      <Link style={resetLinkStyle} to={`/project/${id}/mphv3`}>
        <ListItem button selected={isActive('mphv3')}>
          <ListItemIcon>
            <SettingsIcon color={isActive('mphv3') ? 'error' : 'action'} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant='h6'>88MPH V3</Typography>} />
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
