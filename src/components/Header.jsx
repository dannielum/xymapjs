import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            XY Map
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={1} title="Map" id="map-nav-dropdown">
            <MenuItem eventKey={1.1}>New</MenuItem>
            <MenuItem eventKey={1.2}>Load</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={2} title="Tile" id="tile-nav-dropdown">
            <MenuItem eventKey={2.1}>Import Tile Library</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
