import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import resume from "../Images/Olivia_Shiah_Resume.pdf";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div>
          <Link to="" className="item">
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" className="item">
            About Me
          </Link>
        </div>
        <div>
          <Link to="/fun" className="item">
            For Fun
          </Link>
        </div>
        <div>
          <a href={resume} className="item">
            Resume
          </a>
        </div>
        <div>
          <Link to="/contact" className="item">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
