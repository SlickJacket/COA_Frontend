import React, { Component } from "react";

class ProfilePage extends Component {
  state= {}
  render() {
    // console.log(localStorage.email)
    return <div><h1>Profile Page</h1>
    <h2>{this.props.email}</h2></div>;
  }
}

export default ProfilePage;
