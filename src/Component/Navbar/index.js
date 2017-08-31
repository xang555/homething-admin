/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../Icon/banner_about.png';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SAVE_TOKEN } from '../../appconfig'

class HomethingNavbar extends Component {

    constructor(props){
        super(props);

        this.state = {
            is_logout : true
        }

    }


_getlocalToken = () =>{
        return localStorage.getItem(SAVE_TOKEN);
    }

_getSessionToken = () =>{
        return sessionStorage.getItem(SAVE_TOKEN);
    }


_handlelogout = (event) => {

localStorage.removeItem(SAVE_TOKEN);
sessionStorage.removeItem(SAVE_TOKEN);
<Redirect to="/signin"/>
event.preventDefault();

}


componentWillMount(){

    if(this._getlocalToken() || this._getSessionToken()){
        this.setState({
            is_logout: false
        });
    }else {
         this.setState({
            is_logout: true
        });
    }

}

    render(){

        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><img src={logo} alt="homething admin" className="logo-homething"/></Link>
                        <Link to="/"><span className="band-text-color">Homething Admin</span></Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                   {
                       !this.state.is_logout ? ( <NavItem eventKey={1} href="#" onClick={this._handlelogout}><span className="glyphicon glyphicon-log-out"/>  Logout</NavItem>):null
                   }
                </Nav>
            </Navbar>
        );

    }

}

export default HomethingNavbar;