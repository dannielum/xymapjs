import React, {PropTypes, Component} from 'react';

class XYMap extends Component {
  render() {
    return (
      <div className="xymap-container">
        Map
      </div>
    );
  }
}

XYMap.propTypes = {
  mapId: PropTypes.string,
};

export default XYMap;
