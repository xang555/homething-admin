import React,{ Component } from 'react';
import { Panel,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class TodoLists extends React.PureComponent {

constructor(props){
    super(props);
}
 
itemRenders = () => {
let items = [];
for(let i =0 ; i < this.props.devices.length;i++){
 items.push(<SmartDeviceItem key={this.props.devices[i].sdid} img={this.props.devices[i].img} sdid={this.props.devices[i].sdid} sdname={ this.props.devices[i].sdname } />);
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
     <Image src={this.props.img} rounded responsive/>
     <div><h4>ID: {this.props.sdid}</h4></div>
     </Link>  
</Panel>

);

}
    
} 


export default TodoLists;



