import React, { Component } from "react";
import "./ProfilePage.css";
import { Link, Switch, Route } from "react-router-dom";
import { getUser } from "../../../services/api";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
      deck_id: ""
    };
  }

  componentDidMount() {
    var id = this.props.user._id;
    var self = this;

    console.log("Componenet Did Mount:", id);

    getUser(id).then(function(user) {
      console.log("USER DECKS: ", user.decks);
      self.setState({
        decks: user.decks
      });
    });
  }

  render() {
    var decks = this.state.decks.map((deck, idx) => {
      console.log("The IDX: ", deck);
      return (
        <div>
          <Link to={`/study/${deck._id}`}>{deck.deckName}</Link>
        </div>
      );
    });
    console.log("Deck: ", this.state.deck_id);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-3">
            <div className="img">
              <Link to={`/study`}>{decks}</Link>
            </div>
          </div>
        </div>
        <Link to={"/create"}>Create A New Deck</Link>
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
