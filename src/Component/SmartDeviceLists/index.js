import React, { Component } from 'react';
import { Col,Row, Grid, Panel} from 'react-bootstrap';
import TodoLists from './TodoLists';
import '../../Style/SmartDeviceLists.css';

class SmartDeviceLists extends Component {

constructor(props){
    super(props);
}


render(){


let mydata = [

{
    sdid:"1234567890123",
    sdname:"dcdscdscds"
},

{
    sdid:"1234567890576",
    sdname:"fgbsfsfdsf"
},

{
    sdid:"1234567890098",
    sdname:"vcdscscds4353"
},
{
    sdid:"1234567890782",
    sdname:"435435vfdvfdvfd"
},
{
    sdid:"1234567890291",
    sdname:"435435vfdvfdvfd"
},
{
    sdid:"1234567890238",
    sdname:"435435vfdvfdvfd"
}

]


return (
<div className="smartdevice-margin-left">
<TodoLists devices={mydata}/>
</div>    
);

}


}


export default SmartDeviceLists;