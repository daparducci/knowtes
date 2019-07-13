import React, { Component } from "react";
import "./ProfilePage.css";
import { Link, Switch, Route } from "react-router-dom";
import CreateDeck from "../../CreateDeck/CreateDeck";

class ProfilePage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to={"/create"}>
              <div className="img" />
            </Link>
          </div>
          <div className="col">
            <Link>
              <div className="img" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <Link to={"/create"} className="btn btn-primary">
              Add Deck
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
