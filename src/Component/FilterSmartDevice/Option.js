import React, { Component } from 'react';
import { Panel,
    Form, FormControl,
    FormGroup, Col,
    Button,ControlLabel
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search_option_change } from '../../Actions';

class Option extends Component {

constructor(props){
    super(props);
}


render(){

return(

<FormGroup bsSize="large">
<FormControl componentClass="select" onChange = {(event) => this.props.search_option_change(event.target.value)} placeholder="SmartDevice Type">
<option value="0">Smart Switch</option>
<option value="1">humidity and temperature Sensor</option>
<option value="2">Gass sensor</option>
<option value="3">Smart alarm</option>
</FormControl>
</FormGroup>

);

}

}

const mapDisPatchToProps = (dispatch) => {
    return bindActionCreators({search_option_change},dispatch);
}

export default connect(null,mapDisPatchToProps)(Option);