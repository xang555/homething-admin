import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
