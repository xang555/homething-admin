import React, { Component } from 'react';
import { Panel,Col,Row, Grid} from 'react-bootstrap';
import '../../Style/filter.css';
import Search from './Search';
import Option from './Option';

class FilterSmartDevice extends Component {

constructor(props){
    super(props);
}

render(){

return (
<div>
<Grid>
    <Row>
       <div className="fillter-pannel">
        <Col xs={3} md={3}>
        <Option/>
        </Col>
        <Col xs={5} md={6}>
        <Search/>
        </Col>
       </div>
    </Row>   
</Grid>

</div>
);

}

}


export default FilterSmartDevice;