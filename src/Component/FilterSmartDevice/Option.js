import React, { Component } from 'react';
import { Panel,
    Form, FormControl,
    FormGroup, Col,
    Button,ControlLabel
} from 'react-bootstrap';


class Option extends Component {

constructor(props){
    super(props);
}

render(){

return(

<FormGroup bsSize="large">
<FormControl componentClass="select" placeholder="SmartDevice Type">
<option value="0">Smart Switch</option>
<option value="1">humidity and temperature Sensor</option>
<option value="2">Gass sensor</option>
<option value="3">Smart alarm</option>
</FormControl>
</FormGroup>

);

}

}

export default Option;