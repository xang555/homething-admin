/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validationID, validationDeviceCode,
         selectSmartDevice,getSmartDevices,
         insertSmartDevice } from '../../Actions';
import { Panel,
    Form, FormControl,
    FormGroup, Col,
    Button,ControlLabel
} from 'react-bootstrap';
import '../../Style/AddSmartDevice.css';

const StateButton = ({stateAdd}) => stateAdd ? <div>Adding</div>:<div>Add Device</div>;
const FailureText = ({isFailure}) => isFailure ? <div style={{color : "#f00fff"}}>Add SmartDevice Failure</div> : null

class DevicePannel extends Component {

    constructor(props){
        super(props);
    }


getValidationStateIdTextbox = () => {
    const length = this.props.validate.IdInput.length;
    if (length === 13) return 'success';
    else if (length > 0) return 'error';
}

getValidationStateDeviceCodeTextbox = () => {
    const length = this.props.validate.DeviceCodeInput.length;
    if (length === 8) return 'success';
    else if (length > 0) return 'error';
}

isDisable = () =>{
const inputIdlength = this.props.validate.IdInput.length;
 const inputDeviceCodelength = this.props.validate.DeviceCodeInput.length;
if(inputIdlength === 13 && inputDeviceCodelength === 8){
    return false;
}
return true;
}


handleSubmit = (event) => {

 event.preventDefault();

let sdid = this.props.validate.IdInput;
let dpasswd = this.props.validate.DeviceCodeInput;
let dtype = this.props.validate.dtype;

this.props.insertSmartDevice(sdid,dpasswd,dtype); //add smart device

}



 render(){

        const title = (
            <h3>Add HomeThing Device</h3>
        );

        return (

           <div className="add-smartdevice-pannel">

             <Panel bsStyle="default">

              <div className="smartdevice-pannel-title">{title}</div>  

                <Form horizontal>
                    <FormGroup controlId="formHorizontalDeviceId" bsSize="large" validationState={this.getValidationStateIdTextbox()}>
                        <Col componentClass={ControlLabel} sm={3}>
                              ID
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="DeviceId" value = {this.props.validate.IdInput} onChange={(e) =>  this.props.validationID(e.target.value)} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalDeviceCode" bsSize="large"  validationState={this.getValidationStateDeviceCodeTextbox()}>
                        <Col componentClass={ControlLabel} sm={3}>
                            Device Code
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="Device Code" value = {this.props.validate.DeviceCodeInput} onChange={(e) => this.props.validationDeviceCode(e.target.value)} />
                        </Col>
                    </FormGroup>

                    <FormGroup bsSize="large">
                        <Col componentClass={ControlLabel} sm={3}>
                             Type
                        </Col>
                        <Col sm={7}>
                            <FormControl componentClass="select" value = {this.props.validate.dtype}  onChange ={(e) => this.props.selectSmartDevice(e.target.value)} placeholder="SmartDevice Type">
                                <option value="0">Smart Switch</option>
                                <option value="1">humidity and temperature Sensor</option>
                                <option value="2">Gass sensor</option>
                                <option value="3">Smart alarm</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={4} sm={5}>
                            <Button bsSize="large" bsStyle="success" type="submit" onClick ={this.handleSubmit} block disabled={ this.isDisable() }> 
                               <StateButton stateAdd = {this.props.add_state.isadding}/>
                            </Button>
                        </Col> 
                    </FormGroup>

                <FailureText isFailure = {this.props.add_state.is_failure}/>

                </Form>

            </Panel>

           </div>     

        );

    }


}


const mapStateToProps  = (state) => {
return {validate: state.validationinput,add_state : state.addSmartDevice}
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({ 
    validationID,
    validationDeviceCode,
    selectSmartDevice,
    getSmartDevices,
    insertSmartDevice},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DevicePannel);