/**
 * Created by xang on 04/07/2017.
 */
import React , { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../Icon/banner_about.png';
import { Link } from 'react-router-dom';


class HomethingNavbar extends Component {

    constructor(props){
        super(props);
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
                    <NavItem eventKey={1} href="#"><span className="glyphicon glyphicon-log-out"/>  Logout</NavItem>
                </Nav>
            </Navbar>
        );

    }

}

export default HomethingNavbar;