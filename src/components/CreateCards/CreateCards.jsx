import React, { Component } from "react";
import "./CreateCards.css";
import { createCard } from "../../services/api";
import tokenService from "../../utils/tokenService";
import { Link } from "react-router-dom";

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
    var self = this;
    e.preventDefault();
    createCard(this.state).then(function(card) {
      self.setState({
        frontCard: "",
        backCard: ""
      });
      //window.location = "/profile";
    });
  };

  render() {
    console.log();
    return (
      <div className="container">
        <div className="header">
          <h1>Add a New Card</h1>
        </div>
        <hr />
        <div className="card-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label className="card-label">Front of Card</label>
            <br />
            <textarea
              onChange={this.handleCardFront}
              value={this.state.frontCard}
            />
            <br />

            <label className="card-label">Back of Card</label>
            <br />
            <textarea
              onChange={this.handleCardBack}
              value={this.state.backCard}
            />
            <br />

            <input
              type="submit"
              className="btn btn-link"
              value="Add Another Card"
            />
            <Link to="/profile" className="btn btn-link">
              Go Back To Profile
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCards;
