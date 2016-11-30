import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import SideBar from './components/side-bar/SideBar';
import XYMap from './components/XYMap';
import './assets/styles/app.css';
import './assets/styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper container">
          <Row>
            <Col xs={12} md={8}>
              <XYMap />
            </Col>
            <Col xs={12} md={4}>
              <SideBar />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
