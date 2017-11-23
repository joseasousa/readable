import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const AppBar = () => (
  <div>
    <Navbar brand="Readable" right>
      <NavItem href="/add">
        <Icon>add</Icon>
      </NavItem>
    </Navbar>
  </div>
);

export default AppBar;
