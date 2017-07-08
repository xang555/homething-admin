import React, { Component } from 'react';
import { Col,Row, Grid, Panel,Image} from 'react-bootstrap';
import QRCode from 'qrcode.react';
import thumbnail from '../../Icon/thumbnail.png';

class SmartDeviceInfo extends Component {

constructor(props){
    super(props);

    console.log(this.props);
}

render(){

let { match } = this.props;

return (

<div style={{  marginTop:"10%" }}>

<Grid>

<Row>

<Col xs={6} md={6} >

<Grid>

<Row>

<div>
<Image src={thumbnail} rounded responsive/>
<div><h3 style={{ color:"#286090" }}> Smart switch </h3></div>
<div><h5> { "ID : "+ match.params.sdid } </h5></div>    
</div>

</Row>

<Row>

<div style={{ marginTop:"2%" }}><QRCode value={match.params.sdid} size={173}/></div>

</Row>

</Grid>



</Col>

<Col xs={6} md={6}>

  

</Col>

</Row>    

</Grid>  

</div>  

);

}


}


export default SmartDeviceInfo;