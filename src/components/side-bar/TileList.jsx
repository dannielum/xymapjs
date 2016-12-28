import React, { PropTypes, Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import Tile from '../Tile';
import { DESIGNER_TILE_LIST_WIDTH_XS, DESIGNER_TILE_LIST_WIDTH_MD } from '../../constants/configs';

class TileList extends Component {
  render() {
    const tileMap = this.props.tileMap || [];
    return (
      <Panel header={'Tile Map'} bsStyle="info">
        <Row>
          {
            tileMap.map((tile) => (
              <Col key={tile.id} xs={DESIGNER_TILE_LIST_WIDTH_XS} md={DESIGNER_TILE_LIST_WIDTH_MD}
                onClick={() => this.props.onTileSelect(tile)}>
                <Tile displayType="thumbnail" />
              </Col>
            ))
          }
        </Row>
      </Panel>
    );
  }
}

TileList.propTypes = {
  tileMap: PropTypes.array,
  onTileSelect: PropTypes.func
};

export default TileList;
