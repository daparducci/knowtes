import React, { Component } from "react";
import { getDeck } from "../../../services/api";

class StudyPage extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      cards: [],
      deckName: "",
      index: 0
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var self = this;

    getDeck(id).then(function(deck) {
      console.log("Looking for state: ", deck, id);
      self.setState({
        id: deck._id,
        deckName: deck.deckName,
        cards: deck.cards
      });
    });
  }

  handleNext = e => {
    e.preventDefault();
    var newIdx = this.state.index + 1;
    this.setState({ index: newIdx });
  };
  handlePrev = e => {
    e.preventDefault();
    var newIdx = this.state.index - 1;
    this.setState({ index: newIdx });
  };
  handleFlip = e => {
    e.preventDefault();
    if (e.target.parentNode.firstChild.style.display == "") {
      e.target.parentNode.firstChild.style.display = "none";
      // console.log(e.target.parentNode.lastChild);
      e.target.parentNode.lastChild.style.display = "";
    } else if (e.target.parentNode.lastChild.style.display == "") {
      e.target.parentNode.lastChild.style.display = "none";
      // console.log(e.target.parentNode.lastChild);
      e.target.parentNode.firstChild.style.display = "";
    }
  };

  render() {
    console.log("Cards: ", this.state.cards);
    var cards = this.state.cards.map((card, idx) => {
      return idx == this.state.index ? (
        <div key={idx}>
          <li>{card.frontCard}</li>

          <li style={{ display: "none" }}>{card.backCard}</li>
        </div>
      ) : (
        <div key={idx} style={{ display: "none" }}>
          <li>{card.frontCard}</li>
          <li style={{ display: "none" }}>{card.backCard}</li>
        </div>
      );
    });

    return (
      <div>
        <p className="card" onClick={this.handleFlip}>
          {cards}
        </p>
        <button className="btn - btn-primary" onClick={this.handlePrev}>
          {" "}
          Previous
        </button>
        <button className="btn - btn-primary" onClick={this.handleNext}>
          Next
        </button>
        <button className="btn">Home</button>
      </div>
    );
  }
}

export default StudyPage;
