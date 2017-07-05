import React, { Component } from 'react';
import { Panel,
    Form, FormControl,
    FormGroup,
    InputGroup,
    DropdownButton,
    MenuItem,Button,Glyphicon
} from 'react-bootstrap';


class Search extends Component {

constructor(props){
    super(props);
}

render(){

return (
  <FormGroup>
      <InputGroup>
        <FormControl type="text" placeholder="Device ID" />
        <InputGroup.Addon>
          <Glyphicon glyph="search" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>
);

}


}

export default Search;