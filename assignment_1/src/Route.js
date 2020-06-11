import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2 className="mb-3">Router Thing</h2>
          <Nav />
          <hr />
          {routes.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    );
  }
}

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/posts",
    component: PostsPage
  }
];
