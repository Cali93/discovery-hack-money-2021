import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, List } from '@material-ui/core';

const Sidebar = ({ isOpen, handleToggleDrawer, classes, navItems }) => {
  return (
    <Drawer
      variant='permanent'
      classes={{
        root: classes.sidebarContainer,
        paper: clsx(classes.drawerPaper, !isOpen && classes.drawerPaperClose)
      }}
      open={isOpen}
    >
      <Divider />
      <List>
        {navItems}
      </List>
      {/* <Divider />
      <List>
        <SecondaryNavItems />
      </List> */}
    </Drawer>
  );
};

export default Sidebar;