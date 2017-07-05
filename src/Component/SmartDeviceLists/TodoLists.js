import React, { Component } from 'react';
import { Col,Row, Grid,Panel,Thumbnail,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import thumbnail from '../../Icon/thumbnail.png';


class TodoLists extends Component {

constructor(props){
    super(props);
}


GeneratItem = (itemperrow,startindex,destinetion) => {

    let count = 0;
    let curentindex = 0;
    let coulume = [];
    for(let i =startindex ; i < itemperrow.length;i++){

        if(count != 3){        
            coulume.push(itemperrow[i]);
            if(i === itemperrow.length - 1){
             destinetion.push(<Row key={i}> { coulume } </Row>);
            }
            count++;
            curentindex = i + 1;
            continue;
        }
        
        destinetion.push(<Row key={i}>{ coulume } </Row>);
        break;
    }

return curentindex;

}


itemRenders = () => {

let items = [];

for(let i =0 ; i < this.props.devices.length;i++){
 items.push(<SmartDeviceItem key={this.props.devices[i].sdid} deviceId={this.props.devices[i].sdid} deviceName={ this.props.devices[i].sdname } />);
}

return items;

}

render(){

let items = this.itemRenders();

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
     <Image src={thumbnail} rounded responsive/>
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