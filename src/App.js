import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar";

import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import userService from "./utils/userService";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
