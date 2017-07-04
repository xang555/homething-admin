/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { Panel,
    Form, FormControl,
    FormGroup, Col,
    Button,ControlLabel
} from 'react-bootstrap';

class DevicePannel extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const title = (
            <h3>Add SmartDevice</h3>
        );

        return (

            <Panel header={title} bsStyle="default">

                <Form horizontal>
                    <FormGroup controlId="formHorizontalDeviceId">
                        <Col componentClass={ControlLabel} sm={4}>
                            Email
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="DeviceId" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalDeviceCode">
                        <Col componentClass={ControlLabel} sm={4}>
                            Password
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Device Code" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={4}>
                            Select
                        </Col>
                        <Col sm={5}>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                <option value="other">...</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={4} sm={5}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>

            </Panel>

        );

    }


}

export default DevicePannel;