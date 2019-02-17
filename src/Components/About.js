import React, { Component } from "react";
import "../Styles/About.css";
import photo from "../Images/OliviaShiah_Prof.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <img className="image" src={photo} alt="Olivia Shiah" />
          <text className="title-text">About Me</text>
        </div>
        <div className="content">
          <text className="content-text">
            <p>
              Hi there! I'm Olivia Shiah, a sophomore Computer Science student
              at UC Berkeley. I'm originally from San Diego, but I've grown to
              love the colder Bay Area weather and unique Berkeley culture! I'm
              passionate about web development and enjoy tinkering with personal
              projects. I also have a passion for teaching and am currently
              tutoring for Berkeley's introductory class (CS 61A). I love
              bringing students with varying levels of computer science
              experience together and watching them learn and grow throughout
              the course.
            </p>
            <p>
              Outside of computer science, I also enjoy yoga, hiking, and doing
              anything artistic and creative. You can also catch me knitting all
              around campus. Check out the For Fun page for some of my favorite
              projects!
            </p>
          </text>
        </div>
      </div>
    );
  }
}
export default About;
