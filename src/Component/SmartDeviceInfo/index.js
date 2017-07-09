import React, { Component } from 'react';
import { Col,Row, Grid, Panel,Image,
    Button,FormGroup,FormControl,Form,Well} from 'react-bootstrap';
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


<Grid>

<Row>
<div style={{  marginTop:"10%",marginLeft:"18%" }}>

<Col xs={3} md={3} >

<div>
<Image src={thumbnail} rounded responsive/>
<div><h3 style={{ color:"#286090" }}> Smart switch </h3></div>
<div><h5> { "ID : "+ match.params.sdid } </h5></div>    
</div>

<div style={{ marginTop:"2%" }}><QRCode value={match.params.sdid} size={173}/></div>

</Col>

<Col xs={5} md={5}>

<Form>
<Panel>
<h4>Change SmartDevice Type</h4>    
<FormGroup bsSize="large">
<FormControl componentClass="select" placeholder="SmartDevice Type">
<option value="0">Smart Switch</option>
<option value="1">humidity and temperature Sensor</option>
<option value="2">Gass sensor</option>
<option value="3">Smart alarm</option>
</FormControl>
</FormGroup>
</Panel>        
<div style={{ marginTop:"5%" }}><Button type="submit" bsStyle="primary" bsSize="large" block>Save Change</Button></div>
</Form>    

<div style={{ marginTop:"15%", color:"#ef7f3e" }}>
 <Well bsSize="large">Please check your Change befor save.
      Also you can delete this smartDevice by click delete button</Well>    
</div>

<div style={{ marginTop:"5%" }}><Button type="submit" bsStyle="default" block><span style={{color:"#e61125"}}>Delete</span></Button></div>

</Col>
</div> 
</Row>    


</Grid>  

 

);

}


}


export default SmartDeviceInfo;