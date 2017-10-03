import React, { Component } from 'react';
import { Panel,
    Form, FormControl,
    FormGroup,
    InputGroup,
    DropdownButton,
    MenuItem,Button,Glyphicon
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { search_box_change,searchdevice } from '../../Actions';

class Search extends Component {

constructor(props){
    super(props);
}


_handleSearch = (event) => {

  this.props.search_box_change(event.target.value);

  let dtype = this.props.search.opt;
  let word = event.target.value;

  this.props.searchdevice(word,dtype);

}

render(){

return (
  <FormGroup bsSize="large">
      <InputGroup>
        <FormControl type="text" value = {this.props.search.word} onChange={this._handleSearch} placeholder="Device ID" />
        <InputGroup.Addon>
          <Glyphicon glyph="search" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>
);

}

}

const mapStateToProps = (state) => {
  return {search : state.search};
}

const mapDispatchToProps =(dispatch) =>{
  return bindActionCreators({search_box_change,searchdevice},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);