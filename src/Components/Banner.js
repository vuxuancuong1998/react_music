import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container">
        {/* Heading Row */}
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("../img/logo.jpg")}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">MUSIC</h1>
            <p>
              {" "}
              And what avails skill in music, if there is no chance to display
              it? When I hear a note of music, can I not at once strike its
              chord? With a nod and a smile, Aspasia said, "Continue the music,
              I pray you." Yet the voice of Plato would be pleasant to my ears,
              as music on the waters in the night-time.{" "}
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
