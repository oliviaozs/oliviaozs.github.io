import React, { Component } from "react";
import "../Styles/Contact.css";
import github from "../Images/github.png";
import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <text className="text">Contact Me</text>
        <div className="logos">
          <a href="https://github.com/oliviaozs" className="link">
            <img className="logo-image" src={github} alt="Github" />
            <text className="logo-text">Github</text>
          </a>
          <a href="mailto:oshiah@berkeley.edu" className="link">
            <img className="logo-image" src={email} alt="Email" />
            <text className="logo-text">Email</text>
          </a>
          <a href="https://www.linkedin.com/in/olivia-shiah/" className="link">
            <img className="logo-image" src={linkedin} alt="LinkedIn" />
            <text className="logo-text">LinkedIn</text>
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;
