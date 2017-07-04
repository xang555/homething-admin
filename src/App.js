import React, { Component } from 'react';
import './Style/App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import DevicePannel from './Component/AddDevicePannel';

class App extends Component {
  render() {
    return (

        <Router>

        <div>

            <DevicePannel/>

        </div>



        </Router>
        
    );
  }
}

export default App;
