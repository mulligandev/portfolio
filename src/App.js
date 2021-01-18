import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Work from "./Work/Work.js";
import Blog from "./Blog/Blog.js";
import Contact from "./Contact/Contact.js";

// CSS
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <Link id="site-logo" to="/">
            <span id="logo-text">MM</span>
          </Link>
          <nav>
            <div>
              <Link to="/about">about</Link>
              <Link to="/work">work</Link>
              <Link to="/blog">blog</Link>
              <Link to="/contact">contact</Link>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
