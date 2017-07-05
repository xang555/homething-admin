import React, { Component } from 'react';
import SmartDeviceFilter from '../FilterSmartDevice';
import SmartDeviceLists from '../SmartDeviceLists';
import { Panel,Col,Row, Grid} from 'react-bootstrap';

class SmartDevicesPannel extends Component {


render(){

return (

<div>

   <Grid>

        <Row>
            <Col xs={12} md={12}><SmartDeviceFilter/></Col>
        </Row>

        <Row>

            <Col xs={12} md={12}><SmartDeviceLists/></Col>

        </Row>

    </Grid>

</div>   

);

}

}


export default SmartDevicesPannel;