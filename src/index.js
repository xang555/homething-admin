import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Col,Row, Grid} from 'react-bootstrap';
import App from './App';
import Navbar from './Component/Navbar';
import SmartDeviceInfo from './Component/SmartDeviceInfo';
import Login from './Component/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
        <Grid>
        <Row><Navbar/></Row>
        <Row>
          <Route path="/login" component={Login}/>   
         <Route exact path="/" component={App}/>
         <Route path="/device/:sdid" component={SmartDeviceInfo}/>
        </Row>    
        </Grid>
        </div>    
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
