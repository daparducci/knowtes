import React, { Component } from "react";
import tokenService from "../../../utils/tokenService";
import { Link } from "react-router-dom";
import getDeck from "../../CreateDeck/CreateDeck";

class ShowPage extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      user_id: tokenService.getUserFromToken()._id,
      deck_id: ""
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var self = this;

    getDeck(id).then(function(deck) {
      self.setState({
        deck_id: id,
        cards: deck.cards,
        name: deck.name
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Hello From Show</h1>
      </div>
    );
  }
}

export default ShowPage;
