import React, { PropTypes, Component } from 'react';
import { Image } from 'react-bootstrap';
import emptyTileFile from '../assets/images/empty-tile.png';

class Tile extends Component {
  render() {
    let tile;
    switch (this.props.displayType) {
      case 'thumbnail':
        tile = <Image src={emptyTileFile} thumbnail />;
        break;
      case 'rounded':
        tile = <Image src={emptyTileFile} rounded />;
        break;
      default:
        tile = <Image src={emptyTileFile} />;
        break;
    }
    return (
      <div>
        {tile}
      </div>
    );
  }
}

Tile.propTypes = {
  tileName: PropTypes.string,
  displayType: PropTypes.string.isRequired
};

export default Tile;
