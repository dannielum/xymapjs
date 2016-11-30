import React, { Component } from 'react';
import TileList from './TileList';
import TileProperties from './TileProperties';

class SideBar extends Component {
  render() {
    return (
      <div>
        <TileList />
        <TileProperties />
      </div>
    );
  }
}

export default SideBar;
