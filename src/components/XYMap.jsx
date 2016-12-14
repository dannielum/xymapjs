import React, { PropTypes, Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { loadMap } from '../actions/map';

class XYMap extends Component {
  componentDidMount() {
    this.props.loadMap();
  }

  render() {
    if (!this.props.map) {
      return <div>Loading...</div>;
    }

    return (
      <Panel header={'Map name'} bsStyle="info">
        id: {this.props.mapId}<br />
        map: {JSON.stringify(this.props.map)}
      </Panel>
    );
  }
}

XYMap.propTypes = {
  loadMap: PropTypes.func,
  mapId: PropTypes.string,
  map: PropTypes.array
};

const mapStateToProps = (state) => ({
  map: state.map
});

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(loadMap, dispatch)
// });

// export default connect(null, mapDispatchToProps)(XYMap);
export default connect(mapStateToProps, { loadMap })(XYMap);
