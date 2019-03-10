import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "./modules/routes";

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default withRouter(App);
