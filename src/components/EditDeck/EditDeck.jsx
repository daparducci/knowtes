import React, { Component } from "react";
import { getDeck, editDeck } from "../../services/api";

class EditDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      deckName: ""
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var self = this;

    getDeck(id).then(function(deck) {
      console.log("Looking for state: ", deck, id);
      self.setState({
        id: deck._id,
        deckName: deck.deckName
      });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    var self = this;
    editDeck(this.state).then(function(json) {
      console.log("helooooooooooo");
      window.location = "/profile";
    });
  };

  handleDeckName = e => {
    this.setState({ deckName: e.target.value });
  };

  render() {
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

export default EditDeck;
