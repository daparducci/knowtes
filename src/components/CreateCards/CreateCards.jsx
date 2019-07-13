import React, { Component } from "react";
import "./CreateCards.css";
import { createCard } from "../../services/api";
import tokenService from "../../utils/tokenService";

class CreateCards extends Component {
  constructor() {
    super();
    this.state = {
      frontCard: "",
      backCard: "",
      user_id: tokenService.getUserFromToken()._id,
      deck_id: ""
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    this.setState({ deck_id: id });
  }

  handleCardFront = e => {
    this.setState({ frontCard: e.target.value });
  };

  handleCardBack = e => {
    this.setState({ backCard: e.target.value });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    createCard(this.state).then(function(card) {
      console.log(card);
      //   window.location = "/profile";
    });
  };

  render() {
    return (
      <div>
        <h1>Add a New Card</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>Front of Card</label>
          <br />
          <textarea
            onChange={this.handleCardFront}
            value={this.state.frontCard}
          />
          <br />

          <label>Back of Card</label>
          <br />
          <textarea
            onChange={this.handleCardBack}
            value={this.state.backCard}
          />
          <br />

          <input
            type="submit"
            className="btn btn-primary"
            value="Submit Post"
          />
        </form>
      </div>
    );
  }
}

export default CreateCards;
