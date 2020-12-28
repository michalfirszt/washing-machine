import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./router";
import Navbar from "./components/Navbar"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes />
      </Router>
    );
  }
}
