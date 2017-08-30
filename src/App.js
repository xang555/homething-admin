import React, { Component } from 'react';
import './Style/App.css';
import { Col,Row, Grid} from 'react-bootstrap';
import DevicePannel from './Component/AddDevicePannel';
import SmartDevicePannel from './Component/SmartDevicesPannel';
import { verifyToken } from './Actions';
import { Redirect } from 'react-router-dom';
import { SAVE_TOKEN } from './appconfig';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {


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

render() {

let content = null;
 
 if(this.props.verify.isverifying){
     content = <div className='verify-loading loader'/>;
 }else {

    if(this.props.verify.status_code === 0){

       content =(<Grid><Row><Col xs={12} md={12}><DevicePannel/></Col></Row>
            <Row><Col xs={12} md={12}><SmartDevicePannel/></Col></Row></Grid>
              ); 
     
    }else if(this.props.verify.status_code === 401){
       content = <Redirect to='/signin'/>;      
    }else if(this.props.verify.err){
       content = <Redirect to='/signin'/>;   
    }

 }

    return content;
  }

}

const mapStateToProps = (state) => {
    return {verify : state.TokenCheck};
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({verifyToken},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
