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
      <div className="profilePageContainer">
        <div className="profileMainInfo">Profile main info</div>
        <div className="projectVideos">project videos</div>
        <div className="projectGallery">project gallery</div>
        <div className="posts">posts</div>
        <div>
        <button className="logout-button" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
