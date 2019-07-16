import React, { Component } from "react";
import { getCard } from "../../../services/api";

class StudyPage extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      frontCard: "",
      backCard: "",
      deck: ""
    };
  }
  async componentDidMount() {
    // console.log(this.props.match.params.id);
    var id = this.props.match.params.id;
    // var self = this;
    var card = await getCard(id);
    this.setState({
      deck: card
    });
    console.log("DECK: ", this.state.deck);
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
