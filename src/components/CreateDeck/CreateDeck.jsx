import React, { Component } from "react";
import "./CreateDeck.css";
import { createDeck } from "../../services/api";

class CreateDeck extends Component {
  constructor() {
    super();
    this.state = {
      deckName: ""
    };
  }

  handleDeckName = e => {
    this.setState({ deckName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    createDeck(this.state).then(function(deck) {
      // console.log(deck);
      window.location = `/decks/${deck._id}/cards/create`;
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Create Deck</label>
          <br />
          <input onChange={this.handleDeckName} value={this.state.deckName} />
          <br />

          <input
            type="submit"
            className="btn btn-primary"
            value="Submit Deck"
          />
        </form>
      </div>
    );
  }
}

export default CreateDeck;
