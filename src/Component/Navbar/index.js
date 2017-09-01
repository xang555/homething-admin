/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../Icon/banner_about.png';
import { Link, Redirect } from 'react-router-dom';
import { logout,logoutFromApp } from '../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SAVE_TOKEN } from '../../appconfig'

class HomethingNavbar extends Component {

    constructor(props){
        super(props);
    }


_handlelogout = (event) => {

event.preventDefault();
localStorage.removeItem(SAVE_TOKEN);
sessionStorage.removeItem(SAVE_TOKEN);

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
                   {/* {
                       !this.props.logout_state.islogout ? ( <NavItem eventKey={1} href="#" onClick={this._handlelogout}><span className="glyphicon glyphicon-log-out"/>  Logout</NavItem>):null
                   }  */}
                </Nav>
            </Navbar>
        );

    }

}

const mapStateToProps = (state) => {
    return ({ logout_state : state.logout});
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logoutFromApp},dispatch);    
}

 //export default connect(mapStateToProps,mapDispatchToProps)(HomethingNavbar);
 export default HomethingNavbar;