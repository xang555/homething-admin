import React,{ Component } from 'react';
import { Panel,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import ic_switch from '../../Icon/ic_switch.svg';
import ic_alarm from '../../Icon/ic_alarm.svg';
import ic_gass_sensor from '../../Icon/ic_gass_sensor.svg';
import ic_temp_hump from '../../Icon/ic_temp_and_humi.svg';

class TodoLists extends React.PureComponent {

constructor(props){
    super(props);
}
 
itemRenders = () => {
let items = [];
for(let i =0 ; i < this.props.devices.length;i++){

    let img = null;

    switch(this.props.devices[i].type){

        case 0 :
            img = ic_switch;
            break;
        case 1:
            img = ic_temp_hump;
            break;
        case 2:
            img = ic_gass_sensor;
            break;
        case 3:
            img = ic_alarm;

    }

 items.push(<SmartDeviceItem key={this.props.devices[i].sdid} img={img} sdid={this.props.devices[i].sdid} sdname={ this.props.devices[i].nicname } />);
}
return items;
}

render(){

let items = this.itemRenders();

return (

   <Masonry
      disableImagesLoaded={false} 
      updateOnEachImageLoad={false} 
    >
                
    { items }      

   </Masonry>

);

}

}

class SmartDeviceItem extends Component {

constructor(props){
    super(props);
}

render(){

return (
<Panel>
    <Link to={"/device/"+this.props.sdid}>
      <div><h4 className="title-top">{this.props.sdname}</h4></div>  
     <img src={this.props.img} className="img-card"/>
     <div><h4>ID: {this.props.sdid}</h4></div>
     </Link>  
</Panel>

);

}
    
} 


export default TodoLists;



