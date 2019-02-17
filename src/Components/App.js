import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Fun from "./Fun";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Home} />
          <Route name="about" exact path="/about" component={About} />
          <Route name="contact" exact path="/contact" component={Contact} />
          <Route name="fun" exact path="/fun" component={Fun} />
        </div>
      </Router>
    );
  }
}
export default App;
