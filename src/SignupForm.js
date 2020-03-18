import React, { Component } from "react";

class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        phone_number: this.state.phoneNumber,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          localStorage.token = data.jwt;
          localStorage.email = data.user.email;
          localStorage.id = data.user.id;
          this.props.getProfile();
          this.props.history.push("/profile");
        } else {
          alert("You need to upload a photo");
        }
      });
  };

  handleFirstName = e => {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
  };

  handleLastName = e => {
    e.preventDefault();
    this.setState({ lastName: e.target.value });
  };

  handleEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  handlePhoneNumber = e => {
    e.preventDefault();
    this.setState({ phoneNumber: e.target.value });
  };

  handlePassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="signupPageContainer">
        <div className="signupContainer">
          <form className="signupForm" onSubmit={this.handleSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              name="first name"
              onChange={this.handleFirstName}
            />
            <label>Last Name:</label>
            <input
              type="text"
              name="last name"
              onChange={this.handleLastName}
            />
            <label>Email:</label>
            <input type="text" name="email" onChange={this.handleEmail} />
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone number"
              onChange={this.handlePhoneNumber}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handlePassword}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
