import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col,Row, Grid} from 'react-bootstrap';
import App from './App';
import Navbar from './Component/Navbar';
import SmartDeviceInfo from './Component/SmartDeviceInfo';
import Login from './Component/Login';
import store from './Store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
        <Grid>
        <Row><Navbar/></Row>
        <Row>
        <Route path="/signin" component={Login}/>   
         <Route exact path="/" component={App}/> 
        <Route path="/device/:sdid" component={SmartDeviceInfo}/>
        </Row>    
        </Grid>
        </div>    
    </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
