import React, { Component } from 'react';
import { Col,Row, Grid, Panel,Image,
    Button,FormGroup,FormControl,Form,Well} from 'react-bootstrap';
import QRCode from 'qrcode.react';
import thumbnail from '../../Icon/thumbnail.png';
import { verifyToken, logout } from '../../Actions';
import { Redirect } from 'react-router-dom';
import { SAVE_TOKEN } from '../../appconfig';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SmartDeviceInfo extends Component {

constructor(props){
    super(props);
}


_getlocalToken = () =>{
        return localStorage.getItem(SAVE_TOKEN);
    }

_getSessionToken = () =>{
        return sessionStorage.getItem(SAVE_TOKEN);
    }

componentWillMount(){
    let token = null;
    if(this._getlocalToken()){
        token = this._getlocalToken();
    }else if(this._getSessionToken()){
        token = this._getSessionToken();
    }
    this.props.verifyToken(token);
}


render(){

this.props.logout(false); //set state logout

if(this.props.logout.handle_login){
    return <Redirect to="/signin"/>;
}

if(this.props.verify.isverifying){
    return (<div className='verify-loading loader'/>);
 }else {

   if(this.props.verify.status_code === 401 || this.props.verify.err){
       
       return (<Redirect to='/signin'/>);      
    }

 }


let { match } = this.props;

return (

<Grid>

<Row>
<div style={{  marginTop:"10%",marginLeft:"18%" }}>

<Col xs={3} md={3} >

<div>
<Image src={thumbnail} rounded responsive/>
<div><h3 style={{ color:"#286090" }}> Smart switch </h3></div>
<div><h5> { "ID : "+ match.params.sdid } </h5></div>    
</div>

<div style={{ marginTop:"2%" }}><QRCode value={match.params.sdid} size={173}/></div>

</Col>

<Col xs={5} md={5}>

<Form>
<Panel>
<h4>Change SmartDevice Type</h4>    
<FormGroup bsSize="large">
<FormControl componentClass="select" placeholder="SmartDevice Type">
<option value="0">Smart Switch</option>
<option value="1">humidity and temperature Sensor</option>
<option value="2">Gass sensor</option>
<option value="3">Smart alarm</option>
</FormControl>
</FormGroup>
</Panel>        
<div style={{ marginTop:"5%" }}><Button type="submit" bsStyle="primary" bsSize="large" block>Save Change</Button></div>
</Form>    

<div style={{ marginTop:"15%", color:"#ef7f3e" }}>
 <Well bsSize="large">Please check your Change befor save.
      Also you can delete this smartDevice by click delete button</Well>    
</div>

<div style={{ marginTop:"5%" }}><Button type="submit" bsStyle="default" block><span style={{color:"#e61125"}}>Delete</span></Button></div>

</Col>
</div> 
</Row>    


</Grid>  

);

}

}


const mapStateToProps = (state) => {
    return {verify : state.TokenCheck,logout : state.logout};
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({verifyToken,logout},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SmartDeviceInfo);