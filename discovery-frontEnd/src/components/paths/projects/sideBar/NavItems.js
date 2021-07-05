import React from 'react';
import { Link } from 'react-router-dom';
// import { useStoreActions, useStoreState } from 'easy-peasy';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import { toKebabCase } from '../../../../utils';

const resetLinkStyle = {
  textDecoration: 'none', color: 'inherit'
};



export const MainNavItems = ({ history, match, sectionItems }) => {
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

export const DecryptedNavItems = ({ history, match, sectionItems }) => {
  const isActive = (path) => history.location.pathname.includes(path);
  const { id } = match.params;
  return (
    <div>
      {sectionItems && sectionItems.length > 0 && sectionItems.map((sectionTitle, i) => {
        return (
          <Link style={resetLinkStyle} to={`/project/${id}/decrypted/${toKebabCase(sectionTitle)}`}>
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
