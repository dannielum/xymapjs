import React, {PropTypes, Component} from 'react';

class TileList extends Component {
  render() {
    return (
      <div className="tile-list-container">
        TileList
      </div>
    );
  }
}

TileList.propTypes = {
  tileListName: PropTypes.string,
};

export default TileList;
