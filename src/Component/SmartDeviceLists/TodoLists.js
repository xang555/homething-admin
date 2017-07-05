import React, { Component } from 'react';
import { Col,Row, Grid,Panel,Thumbnail,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import thumbnail from '../../Icon/thumbnail.png';


class TodoLists extends Component {

constructor(props){
    super(props);
}


render(){

let items = [];

for(let i =0 ; i < this.props.devices.length;i++){
 items.push(<SmartDeviceItem key={i} deviceId={this.props.devices[i].sdid} deviceName={ this.props.devices[i].sdname } />);
}


return (

<Grid>

{

items

}

</Grid>

);

}

}


class SmartDeviceItem extends Component {

constructor(props){
    super(props);
}

render(){

return (

    <Col xs={6} md={3}>
     <div className="card-item">
     <Panel>
    <Link to={"/device/"+this.props.deviceId}>
     <div>
      <div><h4 className="title-top">{this.props.deviceName}</h4></div>  
     <Image src={thumbnail} thumbail responsive/>
     <div><h4 className="title-bottom">ID: {this.props.deviceId}</h4></div>
     </div>
     </Link>  
    </Panel>
        </div>
    </Col> 

);

}
    
}

export default TodoLists;