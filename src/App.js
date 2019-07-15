import React, { Component } from "react";
import SignupPage from "./components/pages/SignupPage/SignupPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import Index from "./components/Index/Index";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import userService from "./utils/userService";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import CreateDeck from "./components/CreateDeck/CreateDeck";
import CreateCards from "./components/CreateCards/CreateCards";
import ShowPage from "./components/pages/ShowPage/ShowPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="container">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={props =>
              userService.getUser() ? (
                <ProfilePage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route exact path="/signup" component={SignupPage} />
          <Route
            exact
            path="/create"
            render={props => <CreateDeck {...props} user={this.state.user} />}
          />
          <Route
            exact
            path="/decks/:id/cards/create"
            render={props => <CreateCards {...props} />}
          />
          <Route
            exact
            path="/decks/:id/"
            render={props => <ShowPage {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
