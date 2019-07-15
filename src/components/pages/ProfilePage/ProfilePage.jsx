import React, { Component } from "react";
import "./ProfilePage.css";
import { Link, Switch, Route } from "react-router-dom";
import { getUser } from "../../../services/api";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    var id = this.props.user._id;
    var self = this;

    console.log("Componenet Did Mount:", id);

    getUser(id).then(function(user) {
      self.setState({
        // id: user._id,
        decks: user.decks
      });
    });
  }

  render() {
    var decks = this.state.decks.map((deck, idx) => {
      return (
        <div>
          <li key={idx}>{deck.deckName}</li>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-3">
            <div className="img">
              <Link to={"/create"}>Title</Link>
            </div>
          </div>
          <div className="col-lg-3" />
          <div className="col-lg-4 col-sm-3">
            <Link>
              <div className="img" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

{
  /* <Link to={"/create"} className="btn btn-primary btn-sm">
          Add Deck
        </Link> */
}
