import React, { PropTypes, Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import Tile from '../Tile';


class TileList extends Component {
  render() {
    return (
      <Panel header={'Tiles'} bsStyle="info">
        <Row>
          <Col xs={4} md={3}>
            <Tile displayType="thumbnail" />
          </Col>
        </Row>
      </Panel>
    );
  }
}

TileList.propTypes = {
  tileListName: PropTypes.string,
};

export default TileList;
