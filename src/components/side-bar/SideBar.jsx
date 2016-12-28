import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import TileList from './TileList';
import TileProperties from './TileProperties';

import { tileSelect } from '../../actions/tile';

class SideBar extends Component {
  render() {
    const { tileMap } = this.props.assets;

    return (
      <div>
        <TileList tileMap={tileMap} onTileSelect={this.props.tileSelect} />
        <TileProperties selectedTile={this.props.selectedTile} />
      </div>
    );
  }
}

SideBar.propTypes = {
  selectedTile: PropTypes.object,
  assets: PropTypes.object,
  tileSelect: PropTypes.func
};

const mapDispatchToProps = {
  tileSelect
};

export default connect(null, mapDispatchToProps)(SideBar);
