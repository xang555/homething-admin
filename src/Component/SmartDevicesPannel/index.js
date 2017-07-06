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
           <SmartDeviceFilter/>
        </Row>

        <Row>
         
           <div style={{ marginLeft:"15%", marginTop: "3%" }}>

           <SmartDeviceLists/> 

           </div>     

        </Row>

    </Grid>

</div>   

);

}

}


export default SmartDevicesPannel;