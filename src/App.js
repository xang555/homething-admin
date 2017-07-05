import React, { Component } from 'react';
import './Style/App.css';
import { Col,Row, Grid} from 'react-bootstrap';
import Navbar from './Component/Navbar';
import DevicePannel from './Component/AddDevicePannel';
import FilterSmartDevice from './Component/FilterSmartDevice';

class App extends Component {
  render() {
    return (

          <Grid>

            <Row>
              <Navbar/>
            </Row>

            <Row>
              <DevicePannel/>
            </Row>

            <Row>
              <FilterSmartDevice/>
            </Row>

          </Grid>
        
    );
  }
}

export default App;
