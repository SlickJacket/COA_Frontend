import React, { Component } from "react";

class ProfilePage extends Component {
  state = {};

  handleClick = e => {
    e.preventDefault();

    localStorage.clear();
    this.props.history.push("/admin/signup");
  };
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <h2>{this.props.email}</h2>
        <button onClick={this.handleClick} />
      </div>
    );
  }
}

export default ProfilePage;
