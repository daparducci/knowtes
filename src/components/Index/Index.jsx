import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./Index.css";

class Index extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="wrap">
        <h1>Knowtes</h1>
        <div className="background" />
        <div>
          <Link to={"/signup"} className="btn btn-info">
            Sign Up
          </Link>

          <Link to={"/login"} className="btn btn-info">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Index;
