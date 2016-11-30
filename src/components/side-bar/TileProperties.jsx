import React, { PropTypes, Component } from 'react';
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import Tile from '../Tile';

class TileProperties extends Component {
  render() {
    return (
      <Panel header={'Tile Properties'} bsStyle="info">
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              Tile
            </Col>
            <Col sm={9}>
              <Tile displayType="rounded" />
            </Col>
          </FormGroup>
          <FormGroup controlId="tileName">
            <Col componentClass={ControlLabel} sm={3}>
              Name
            </Col>
            <Col sm={9}>
              <FormControl type="text" placeholder="Tile Name" />
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}

TileProperties.propTypes = {
  tileId: PropTypes.string,
};

export default TileProperties;
