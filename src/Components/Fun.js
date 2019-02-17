import React, { Component } from "react";
import "../Styles/Fun.css";

class Fun extends Component {
  render() {
    return (
      <div className="fun">
        <text className="fun-title">For Fun</text>
        <text className="fun-description">
          Scroll on for a look at some of my favorite knitting projects!
        </text>
        <div className="projects">
          <div className="photo" />
          <div className="photo" />
          <div className="photo" />
          <div className="photo" />
        </div>
      </div>
    );
  }
}
export default Fun;
