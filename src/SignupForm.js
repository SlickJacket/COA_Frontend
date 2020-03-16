import React, { Component } from "react";

class SignupForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        first_name: "sylvia",
        last_name: "woods",
        email: "SyLvIawOOds29@gmail.com",
        password: "whatscooking",
        bio: "This is a sample bio."
      })
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.token);
        if (!data.errors) {
          localStorage.token = data.jwt;
          console.log(localStorage.token);
          console.log(data.user);
          localStorage.email = data.user.email;
          localStorage.id = data.user.id;
          console.log(localStorage.email)
          console.log(localStorage.id)
          this.props.getProfile();
          this.props.history.push("/profile");
        } else {
          alert("You need to upload a photo");
        }
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
