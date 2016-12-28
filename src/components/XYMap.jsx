import React, { PropTypes, Component } from 'react';
import { Panel } from 'react-bootstrap';
// import { Loop, Stage, TileMap } from 'react-game-kit';

class XYMap extends Component {
  render() {
    if (!this.props.map) {
      return (
        <div>
          Loading <i className="glyphicon glyphicon-repeat" />
        </div>
      );
    }
    const { id, name, data } = this.props.map;

    return (
      <Panel header={name || 'New Map'} bsStyle="info">
        <div>
          id: {id}<br />
          name: {name}<br />
          map: {JSON.stringify(data)}
        </div>
      </Panel>
    );

      // <Loop>
      //   <Stage>
      //     <TileMap
      //       style={{ top: Math.floor(64 * this.context.scale) }}
      //       src="../assets/images/empty-tile.png"
      //       tileSize={128}
      //       columns={24}
      //       rows={4}
      //       layers={this.props.map} />
      //   </Stage>
      // </Loop>
  }
}

XYMap.propTypes = {
  map: PropTypes.object
};

export default XYMap;
