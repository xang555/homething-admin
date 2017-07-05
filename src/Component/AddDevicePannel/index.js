/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { Panel,
    Form, FormControl,
    FormGroup, Col,
    Button,ControlLabel
} from 'react-bootstrap';
import '../../Style/AddSmartDevice.css';

class DevicePannel extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const title = (
            <h3>Add SmartDevice</h3>
        );

        return (

           <div className="add-smartdevice-pannel">

             <Panel bsStyle="default">

              <div className="smartdevice-pannel-title">{title}</div>  

                <Form horizontal>
                    <FormGroup controlId="formHorizontalDeviceId" bsSize="large">
                        <Col componentClass={ControlLabel} sm={3}>
                             SmartDevice ID
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="DeviceId" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalDeviceCode" bsSize="large">
                        <Col componentClass={ControlLabel} sm={3}>
                            Device Code
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="Device Code" />
                        </Col>
                    </FormGroup>

                    <FormGroup bsSize="large">
                        <Col componentClass={ControlLabel} sm={3}>
                            SmartDevice Type
                        </Col>
                        <Col sm={7}>
                            <FormControl componentClass="select" placeholder="SmartDevice Type">
                                <option value="0">Smart Switch</option>
                                <option value="1">humidity and temperature Sensor</option>
                                <option value="2">Gass sensor</option>
                                <option value="3">Smart alarm</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={4} sm={5}>
                            <Button bsSize="large" bsStyle="success" type="submit" block>
                                Add Device
                            </Button>
                        </Col> 
                    </FormGroup>
                </Form>

            </Panel>

           </div>     

        );

    }


}

export default DevicePannel;