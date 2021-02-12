import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav"
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
