import React, { Component } from 'react';
import './Style/App.css';
import { Col,Row, Grid} from 'react-bootstrap';
import Navbar from './Component/Navbar';
import DevicePannel from './Component/AddDevicePannel';
import SmartDevicePannel from './Component/SmartDevicesPannel';


class App extends Component {
  render() {
    return (

          <Grid>

            <Row>
              <Col xs={12} md={12}><Navbar/></Col>
            </Row>

            <Row>
              <Col xs={12} md={12}><DevicePannel/></Col>
            </Row>

            <Row>
              <Col xs={12} md={12}><SmartDevicePannel/></Col>
            </Row>

          </Grid>
        
    );
  }
}

export default App;
