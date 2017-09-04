/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../Icon/banner_about.png';
import { Link, Redirect } from 'react-router-dom';
import { islogout,verifyToken,logoutfromapp } from '../../Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SAVE_TOKEN } from '../../appconfig'
import { userIsAuthenticated } from '../../Auth';
import { logout } from '../../Actions';


const LogoutLink = userIsAuthenticated(({ logout }) => <NavItem eventKey={1} href="#" onClick={ () => logout()  }><span className="glyphicon glyphicon-log-out"/>Logout</NavItem>);

class HomethingNavbar extends Component {

    constructor(props){
        super(props);
    }


_handlelogout = () => {
this.props.logout();
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
                        <LogoutLink logout={ this._handlelogout } />
                   }   
                </Nav>
            </Navbar>
        );

    }

}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout},dispatch);
}

 export default connect(null,mapDispatchToProps)(HomethingNavbar);