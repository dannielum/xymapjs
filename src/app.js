import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import SideBar from './components/side-bar/SideBar';
import XYMap from './components/XYMap';
import {
  DESIGNER_MAP_WIDTH_XS, DESIGNER_MAP_WIDTH_MD,
  DESIGNER_SIDE_PANEL_WIDTH_XS, DESIGNER_SIDE_PANEL_WIDTH_MD
} from './constants/configs';

import { newMap, loadMap } from './actions/map';
import { loadAssets } from './actions/assets';

class App extends Component {
  render() {
    const actions = {
      onNewMap: this.props.newMap,
      onLoadMap: this.props.loadMap,
      onLoadAssets: this.props.loadAssets
    };

    return (
      <div>
        <Header {...actions} />
        <div className="wrapper container">
          <Row>
            <Col xs={DESIGNER_MAP_WIDTH_XS} md={DESIGNER_MAP_WIDTH_MD}>
              <XYMap map={this.props.map} />
            </Col>
            <Col xs={DESIGNER_SIDE_PANEL_WIDTH_XS} md={DESIGNER_SIDE_PANEL_WIDTH_MD}>
              <SideBar assets={this.props.assets} selectedTile={this.props.selectedTile} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  newMap: PropTypes.func,
  loadMap: PropTypes.func,
  loadAssets: PropTypes.func,
  map: PropTypes.object,
  assets: PropTypes.object,
  selectedTile: PropTypes.object
};

const mapStateToProps = (state) => ({
  map: state.map,
  assets: state.assets,
  selectedTile: state.selectedTile
});

const mapDispatchToProps = {
  newMap,
  loadMap,
  loadAssets
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
