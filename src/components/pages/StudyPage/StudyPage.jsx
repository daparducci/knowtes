import React, { Component } from "react";
import { getCard } from "../../../services/api";

class StudyPage extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      frontCard: "",
      backCard: ""
    };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    var self = this;

    getCard(id).then(function(card) {
      console.log("The CARD: ", card);
      self.setState({
        id: card._id,
        // deck: card.decks,
        frontCard: card.frontCard,
        backCard: card.backCard
      });
    });
    // console.log(this.state.deck);
  }

  render() {
    return (
      <div>
        <h1>Hello From Study Page</h1>
        <h3>{this.props.match.params.id}</h3>
      </div>
    );
  }
}

export default StudyPage;
