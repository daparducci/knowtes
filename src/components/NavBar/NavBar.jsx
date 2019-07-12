import React, { Component } from "react";
import Index from "../../components/Index/Index";
import SignupPage from "../pages/SignupPage/SignupPage";
import SignupForm from "../SignupForm/SignupForm";
import LoginPage from "../pages/LoginPage/LoginPage";
import userService from "../../utils/userService";
import { Link, Switch, Route } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          knowtes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end mr-auto mt-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {props.user ? (
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link"
                  onClick={props.handleLogout}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <div className="link-div">
                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
