/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validationID, validationDeviceCode,
         selectSmartDevice,getSmartDevices,
         insertSmartDevice,set_mac_address_smartdevice,set_secret_smartdevice } from '../../Actions';
import { Panel,
    Form, FormControl,
    FormGroup, Col,
    Button,ControlLabel
} from 'react-bootstrap';
import '../../Style/AddSmartDevice.css';

const StateButton = ({stateAdd}) => stateAdd ? <div>Adding</div>:<div>Add Device</div>;
const FailureText = ({isFailure}) => isFailure ? <div style={{color : "#f00fff",marginLeft:"45%"}}>Add SmartDevice Failure</div> : null

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

getvalidationStateSecret = () => {
    const dsecretCount = this.props.validate.scret_id.length;
    if (dsecretCount >= 20) return 'success';
    else if (dsecretCount > 0) return 'error';
}

getvalidationStateMacdress = () => {
    const dmac_addressCount = this.props.validate.mac_address.length;
    if (dmac_addressCount === 17) return 'success';
    else if (dmac_addressCount > 0) return 'error';
}

isDisable = () =>{
const inputIdlength = this.props.validate.IdInput.length;
 const inputDeviceCodelength = this.props.validate.DeviceCodeInput.length;
 const dsecretCount = this.props.validate.scret_id.length;
 const dmac_addressCount = this.props.validate.mac_address.length;

if(inputIdlength === 13 && inputDeviceCodelength === 8 && dsecretCount >= 20 && dmac_addressCount === 17){
    return false;
}
return true;
}


handleSubmit = (event) => {

 event.preventDefault();

let sdid = this.props.validate.IdInput;
let dpasswd = this.props.validate.DeviceCodeInput;
let dtype = this.props.validate.dtype;
let dsecret = this.props.validate.scret_id;
let dmac_address = this.props.validate.mac_address;

this.props.insertSmartDevice(sdid,dpasswd,dtype,dsecret,dmac_address); //add smart device

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

                    <FormGroup controlId="formHorizontalDeviceCode" bsSize="large" validationState={this.getvalidationStateSecret()}>
                        <Col componentClass={ControlLabel} sm={3}>
                            Device Secret
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="Device Secret" value = {this.props.validate.scret_id} onChange={(e) => this.props.set_secret_smartdevice(e.target.value)} />
                        </Col>
                    </FormGroup>


                    <FormGroup controlId="formHorizontalDeviceCode" bsSize="large" validationState={this.getvalidationStateMacdress()}>
                        <Col componentClass={ControlLabel} sm={3}>
                           Mac Address
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="Mac Address" value = {this.props.validate.mac_address} onChange={(e) => this.props.set_mac_address_smartdevice(e.target.value)} />
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
                                <option value="4">Smart Plug</option>
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
    set_mac_address_smartdevice,
    set_secret_smartdevice,
    insertSmartDevice},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DevicePannel);