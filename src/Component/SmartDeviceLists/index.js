import React, { Component } from 'react';
import { Col,Row, Grid, Panel, Alert} from 'react-bootstrap';
import TodoLists from './TodoLists';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reqdevices } from '../../Actions';
import '../../Style/SmartDeviceLists.css';
import '../../Style/Loading.css';
import { SAVE_TOKEN } from '../../appconfig';


class SmartDeviceLists extends Component {

constructor(props){
    super(props);
}

componentDidMount(){
let token = this._getsessionToken();   
this.props.reqdevices(token); //loading devices
}

_getsessionToken = () =>{
    return sessionStorage.getItem(SAVE_TOKEN);
}

render(){

let isfetch = this.props.fetchdevices.isFetching;
let devices = this.props.fetchdevices.devices;
let errmsg = this.props.fetchdevices.errmsg;
let content = null;

if(isfetch){
content = <div className='loader'/>;
}else if(!isfetch && devices.length !=0){
content = <TodoLists devices={devices}/>;
}else if(!isfetch && errmsg != undefined){
content = <Alert bsStyle="danger"><strong>Loading Devices Failure</strong>{errmsg}</Alert>;
}

return (
<div className="smartdevice-margin-left">
 {content}
</div>
);

}

}

const mapStateToProps = (state) =>{
    return {fetchdevices: state.FetchDevices};
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({reqdevices},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SmartDeviceLists);