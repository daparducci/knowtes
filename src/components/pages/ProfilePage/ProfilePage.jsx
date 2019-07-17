import React, { Component } from "react";
import "./ProfilePage.css";
import { Link, Switch, Route } from "react-router-dom";
import { getUser, deleteDeck } from "../../../services/api";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
      deck_id: "",
      user_id: ""
    };
  }

  componentDidMount() {
    var id = this.props.user._id;
    var self = this;

    console.log("Componenet Did Mount:", id);

    getUser(id).then(function(user) {
      console.log("USER DECKS: ", user.decks);
      self.setState({
        decks: user.decks,
        user_id: user._id
      });
    });
  }

  handleDelete = deck_id => {
    console.log("THE USER: ", this.state.user_id);
    deleteDeck(this.state.user_id, deck_id).then(function(json) {
      window.location = "/profile";
    });
  };

  render() {
    var decks = this.state.decks.map((deck, idx) => {
      console.log("The IDX: ", deck);
      return (
        <div className="contain">
          <div className="colum">
            <Link className="card-name" to={`/study/${deck._id}`}>
              {deck.deckName}
            </Link>
          </div>
          <div className="edit">
            <Link className="btn btn-link" to={`/decks/${deck._id}/edit`}>
              Edit {deck.deckName}
            </Link>

            <a
              href="#"
              className="btn btn-link"
              onClick={() => this.handleDelete(deck._id, "delete")}
            >
              Delete
              <i className="fa fa-trash" />
            </a>
          </div>
        </div>
        // <div className="contain">
        //   <div className="colum">
        //     <li className="profile-li">
        //       <Link to={`/study/${deck._id}`}>Study</Link>
        //       <br />
        //       <br />
        //       <Link to={`/decks/${deck._id}/edit`}>Edit {deck.deckName}</Link>
        //       <br />
        //       <a
        //         href="#"
        //         className="btn btn-danger"
        //         onClick={() => this.handleDelete(deck._id, "delete")}
        //       >
        //         Delete
        //         <i className="fa fa-trash" />
        //       </a>
        //     </li>
        //   </div>
        // </div>
      );
    });
    console.log("Deck: ", this.state.deck_id);
    return (
      <div className="container">
        <div className="header">
          <h1 className="head">My Knowtes</h1>
        </div>
        <div>{decks}</div>
      </div>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-lg-4 col-sm-3">
      //       <div className="img">
      //         <Link to={`/study`}>{decks}</Link>
      //       </div>
      //     </div>
      //   </div>
      //   <Link to={"/create"}>Create A New Deck</Link>
      // </div>
    );
  }
}

export default ProfilePage;

{
  /* <Link to={"/create"} className="btn btn-primary btn-sm">
          Add Deck
        </Link> */
}
