import React, { Component } from 'react';
import { connect } from 'react-redux';
import TileList from './TileList';
import TileProperties from './TileProperties';
import { loadTile } from '../../actions/tile';

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

const mapStateToProps = (state) => ({
  tiles: loadTile(state)
});

export default connect(mapStateToProps)(SideBar);
