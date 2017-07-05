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
    sdid:"3432432432",
    sdname:"dcdscdscds"
},

{
    sdid:"452875287587",
    sdname:"fgbsfsfdsf"
},

{
    sdid:"42505252",
    sdname:"vcdscscds4353"
},
{
    sdid:"41245425425",
    sdname:"435435vfdvfdvfd"
},
{
    sdid:"542343354",
    sdname:"435435vfdvfdvfd"
},
{
    sdid:"41245425425",
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