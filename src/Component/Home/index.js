import React, { Component } from 'react';
import '../../Style/App.css';
import { Col,Row, Grid} from 'react-bootstrap';
import DevicePannel from '../AddDevicePannel';
import SmartDevicePannel from '../SmartDevicesPannel';
import { verifyToken } from '../../Actions';

class Home extends Component {


render(){

  return (
  <Grid><Row><Col xs={12} md={12}><DevicePannel/></Col></Row>
  <Row><Col xs={12} md={12}><SmartDevicePannel/></Col></Row></Grid>       
    ); 

}

}

export default Home;