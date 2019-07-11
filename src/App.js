import React, { Component } from "react";
import Index from "./components/Index";
import SignUp from "./components/SignUp";
import Login from "./components/login";
import NavBar from "./components/NavBar/NavBar";

import { Link, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
      // <div className="container">
      //   <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      //     <Link to={"/"} className="navbar-brand">
      //       knowtes
      //     </Link>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarSupportedContent"
      //       aria-controls="navbarSupportedContent"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon" />
      //     </button>
      //     <div
      //       className="collapse navbar-collapse justify-content-end mr-auto mt-2"
      //       id="navbarSupportedContent"
      //     >
      //       <ul className="navbar-nav">
      //         <li className="nav-item">
      //           <Link to={"/"} className="nav-link">
      //             Sign Up
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to={"/login"} className="nav-link">
      //             Login
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </nav>
      //   <Switch>
      //     <Route exact path="/" component={Index} />
      //     <Route exact path="/login" component={Login} />
      //     <Route exact path="/signup" component={SignUp} />
      //   </Switch>
      // </div>
    );
  }
}

export default App;
