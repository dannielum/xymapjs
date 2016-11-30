import React, { PropTypes, Component } from 'react';
import { Panel } from 'react-bootstrap';

class XYMap extends Component {
  render() {
    return (
      <Panel header={'Map name'} bsStyle="info">
        map canvas
      </Panel>
    );
  }
}

XYMap.propTypes = {
  mapId: PropTypes.string,
};

export default XYMap;
