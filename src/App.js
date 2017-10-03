import React,{ Component } from 'react';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col,Row, Grid} from 'react-bootstrap';
import SmartDeviceInfo from './Component/SmartDeviceInfo';
import Login from './Component/Login';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { userIsNotAuthenticatedRedir,userIsAuthenticatedRedir } from './Auth';

class App extends Component {


constructor(props){
  super(props);
}


render() {

return (
     <Router>
    <div>
        <Grid>
        <Row><Navbar/></Row>
        <Row>
        <Route path="/login" component={userIsNotAuthenticatedRedir(Login)}/>   
        <Route exact path="/" component={userIsAuthenticatedRedir(Home)}/> 
        <Route path="/device/:sdid" component={userIsAuthenticatedRedir(SmartDeviceInfo)}/>
        </Row>    
        </Grid>
    </div> 
       
    </Router>
)

  }

}

const mapStateToProps = (state) => {
    return {auth : state.auth};
}

export default connect(mapStateToProps,null)(App);
