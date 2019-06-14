import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav"
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
