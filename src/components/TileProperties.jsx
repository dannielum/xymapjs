import React, {PropTypes, Component} from 'react';

class TileProperties extends Component {
  render() {
    return (
      <div className="tile-properties-container">
        Tile Properties
      </div>
    );
  }
}

TileProperties.propTypes = {
  tileId: PropTypes.string,
};

export default TileProperties;
