import React, { Component } from "react";
import "./CreateDeck.css";
import { createDeck } from "../../services/api";

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: "",
      user: this.props.user
    };
  }

  handleDeckName = e => {
    this.setState({ deckName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    createDeck(this.state).then(function(deck) {
      // console.log(deck);
      //window.location = `/decks/${deck._id}/cards/create`;
    });
  };

  render() {
    console.log("Test User: ", this.state.user);
    return (
      <div className="container">
        <div className="wrap-deck">
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
      </div>
    );
  }
}

export default CreateDeck;
