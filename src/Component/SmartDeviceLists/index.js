import React, { Component } from 'react';
import { Col,Row, Grid, Panel} from 'react-bootstrap';
import TodoLists from './TodoLists';
import '../../Style/SmartDeviceLists.css';
import thumbnail from '../../Icon/thumbnail.png';

class SmartDeviceLists extends Component {

constructor(props){
    super(props);
}

render(){

let mydata = [

{
    sdid:"1234567890123",
    sdname:"dcdscdscds",
    img: thumbnail
},

{
    sdid:"1234567890576",
    sdname:"fgbsfsfdsf",
    img: thumbnail
},

{
    sdid:"1234567890098",
    sdname:"vcdscscds4353",
    img: thumbnail
},
{
    sdid:"1234567890782",
    sdname:"435435vfdvfdvfd",
    img: thumbnail
},
{
    sdid:"1234567890291",
    sdname:"435435vfdvfdvfd",
    img: thumbnail
},
{
    sdid:"1234567890238",
    sdname:"435435vfdvfdvfd",
    img: thumbnail
},
{
    sdid:"1234567890310",
    sdname:"435435vfdvfdvfd",
    img: thumbnail
},
{
    sdid:"1234567890945",
    sdname:"435435vfdvfdvfd",
    img: thumbnail
},
{
    sdid:"1234567890900",
    sdname:"435435vfdv",
    img: thumbnail
},
{
    sdid:"1234567890710",
    sdname:"435435vfdvf",
    img: thumbnail
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