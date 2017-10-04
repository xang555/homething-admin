import React, { Component } from 'react';
import { Col,Row, Grid, Panel,Image,
    Button,FormGroup,FormControl,Form,Well} from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSmartDevice } from '../../Actions';
import { Redirect } from 'react-router-dom';
import { SAVE_TOKEN } from '../../appconfig';
import ic_switch from '../../Icon/ic_switch.svg';
import ic_alarm from '../../Icon/ic_alarm.svg';
import ic_gass_sensor from '../../Icon/ic_gass_sensor.svg';
import ic_temp_hump from '../../Icon/ic_temp_and_humi.svg';
import ic_smartplug from '../../Icon/ic_smartplug.svg';


const UpdateTypeState = ({isupdating}) => isupdating ? <div>updating...</div> : <div>Save Change</div>
const UpdateTypeFailure = ({isUpdateFailure}) => isUpdateFailure ? <div style={{ color:"red" }}>update SmartDevice Failure</div> : null;

class SmartDeviceInfo extends Component {

constructor(props){
    super(props);

    this.state = {
        opt : '-1'
    }

}


_handleSelectDeviceType = (event) => {
    this.setState({
        opt : event.target.value
    });
}

_handleUpdateSmartDeviceType = (event) => {

    event.preventDefault();

    let { match } = this.props;
    let sdid = match.params.sdid;
    let dtype = this.state.opt;

    if(dtype === "-1") {
        window.alert("Please Select Device Type");
    }else {
        this.props.updateSmartDevice(sdid,dtype);
    }

}


render(){

if(this.props.update.is_update_success){
   return <Redirect to="/"/>;
}

let { match,location } = this.props;
let params = new URLSearchParams(location.search);
let dtype = params.get('dtype'); 
let dname = params.get('dname');

let img = null;

    switch(parseInt(dtype)){

        case 0 :
            img = ic_switch;
            break;
        case 1:
            img = ic_temp_hump;
            break;
        case 2:
            img = ic_gass_sensor;
            break;
        case 3:
            img = ic_alarm;
            break
        case 4 :
            img = ic_smartplug;

    }

    console.log(this.props.update.is_updating);

return (

<Grid>

<Row>
    <div style={{  marginTop:"6%",marginLeft:"18%" }}>

<Col xs={3} md={3} >

    <div>
        <Image src={img} rounded responsive/>
        <div><h3 style={{ color:"#286090" }}> {dname} </h3></div>
        <div><h5> { "ID : "+ match.params.sdid } </h5></div>    
    </div>

    <div style={{ marginTop:"2%" }}><QRCode value={match.params.sdid} size={173}/></div>

</Col>

<Col xs={6} md={6}>

<Form>
    <Panel>
        <h4>Change SmartDevice Type</h4>    
        <FormGroup bsSize="large">
            <FormControl componentClass="select" value={this.state.opt} onChange={this._handleSelectDeviceType} placeholder="SmartDevice Type">
                <option value="-1">------ Select Device Type ------</option>
                <option value="0">Smart Switch</option>
                <option value="1">humidity and temperature Sensor</option>
                <option value="2">Gass sensor</option>
                <option value="3">Smart alarm</option>
                <option value="4">Smart Plug</option>
            </FormControl>
        </FormGroup>
        
        <UpdateTypeFailure isUpdateFailure={this.props.update.is_update_failure}/>

    </Panel>        
    <div style={{ marginTop:"5%" }}><Button onClick={this._handleUpdateSmartDeviceType} type="submit" bsStyle="primary" bsSize="large" block>
        <UpdateTypeState isupdating={this.props.update.is_updating}/>
        </Button></div>
</Form>    

<Form style={{ marginTop:"12px" }}>
    <Panel>
        <h4>Change smartDevice Password</h4>    
        <FormGroup bsSize="large">
            <FormControl type="text" placeholder="New Password" />
      </FormGroup>
    </Panel>        
    <div style={{ marginTop:"5%" }}><Button type="submit" bsStyle="info" bsSize="large" block>Change Password</Button></div>
</Form>


<div style={{ marginTop:"15px", color:"#ef7f3e" }}>
 <Well bsSize="large">Please check your Change befor save.
      Also you can delete this smartDevice by click delete button</Well>    
</div>

<div style={{ marginTop:"12px" }}><Button type="submit" bsStyle="default" block><span style={{color:"#e61125"}}>Delete</span></Button></div>

</Col>

</div> 

</Row>    


</Grid>  

);

}

}


const mapStateToProps = (state) => {
    return {update : state.update};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateSmartDevice},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SmartDeviceInfo);