import React, { PropTypes, Component } from 'react';
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import Tile from '../Tile';

class TileProperties extends Component {
  renderEmpty() {
    return <div>Select a tile</div>;
  }

  renderTileDetails() {
    const { id, name } = this.props.selectedTile;
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            ID
          </Col>
          <Col sm={9}>
            <FormControl type="text" placeholder="Tile Name" value={id} disabled />
          </Col>
        </FormGroup>
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
            <FormControl type="text" placeholder="Tile Name" value={name} />
          </Col>
        </FormGroup>
      </Form>
    );
  }

  render() {
    return (
      <Panel header={'Tile Properties'} bsStyle="info">
        {this.props.selectedTile.id ? this.renderTileDetails() : this.renderEmpty()}
      </Panel>
    );
  }
}

TileProperties.propTypes = {
  selectedTile: PropTypes.object,
};

export default TileProperties;
