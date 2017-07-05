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
<div className="fillter-pannel">

<Panel header="Search SmartDevice" bsStyle="default">

<Grid>
    <Row>
        <Col xs={2} md={2}>
        <Option/>
        </Col>
        <Col xs={5} md={6}>
        <Search/>
        </Col>
    </Row>
</Grid>

</Panel>

</div>
);

}

}


export default FilterSmartDevice;