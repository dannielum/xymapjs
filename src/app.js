import React, {Component} from 'react';
import XYMap from './components/XYMap';
import TileList from './components/TileList';
import TileProperties from './components/TileProperties';
import './assets/styles/app.css';
import './assets/styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          XY Map
        </div>
        <div className="app-body">
          <div className="map-panel">
            <XYMap />
          </div>
          <div className="side-panel">
            <TileList />
            <TileProperties />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
