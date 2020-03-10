import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Users from "./Users";
import ProfilePage from "./ProfilePage";
import UserProfile from "./UserProfile";
import HomePage from "./HomePage";
import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    userId: ""
  };

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(res => res.json())
        .then(user =>
          this.setState({
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            userId: user.id
          })
        );
    } else {
      this.props.history.push("/loginsignup");
    }
  }

  getProfile = () => {
    fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          userId: user.id
        });
      });
  };
  render() {
    return (
      
      <Switch>
        <Route
          path={"/profile"}
          render={routerProps => (
            <ProfilePage
              {...routerProps}
              email={this.state.email}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
            />
          )}
        />
        <Route
          path={"/admin/login"}
          render={routerProps => (
            <LoginForm {...routerProps} getProfile={this.getProfile} />
          )}
        />
        <Route
          path={"/admin/signup"}
          render={routerProps => (
            <SignupForm {...routerProps} getProfile={this.getProfile} />
          )}
        />
        <Route
          path={"/userprofile"}
          render={routerProps => (
            <UserProfile {...routerProps} getProfile={this.getProfile} />
          )}
        />
        <Route path={"/users"} component={Users} />
        <Route path={"/"} component={HomePage} />
      </Switch>
    );
  }
}

export default withRouter(App);
