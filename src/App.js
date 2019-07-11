import React, { Component } from "react";
import SignupPage from "./components/pages/SignupPage/SignupPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";

import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import userService from "./utils/userService";

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
      <div>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
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
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
