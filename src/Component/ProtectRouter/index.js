import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../Style/Loading.css';
import { verifyToken } from '../../Actions';

class ProtectRouter extends Comment {


render(){

       
    
    

}


}


const mapStateToProps = (state) => {
    return {verify : state.TokenCheck};
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({verifyToken},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProtectRouter)


