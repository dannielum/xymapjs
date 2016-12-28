import React, { PropTypes, Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  componentDidMount() {
    this.props.onNewMap();
  }

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
            <MenuItem eventKey={1.1} onClick={this.props.onNewMap}>New</MenuItem>
            <MenuItem eventKey={1.2} onClick={this.props.onLoadMap}>Load</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={2} title="Assets" id="tile-nav-dropdown">
            <MenuItem eventKey={2.1} onClick={this.props.onLoadAssets}>Import Assets</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

Header.propTypes = {
  onNewMap: PropTypes.func,
  onLoadMap: PropTypes.func,
  onLoadAssets: PropTypes.func,
  map: PropTypes.object,
  assets: PropTypes.object
};

export default Header;
