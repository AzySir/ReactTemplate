import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Nav extends Component {  
  render() {
    return (
            <div className="nav">
                <div className="nav_logo">
                    <li><img src={require('./assets/logo.png')} height="80" width="180"/></li>
                </div>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to={'/about'}><li>About</li></Link>
                    <Link to={'/contact'}><li>contact</li></Link>
                    <Link to={'/faq'}><li>faq</li></Link>
                    <Link to={'/help'}><li>Help</li></Link>
            </div>
    );
  }
}

export default Nav;
