import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <div className="router">
          <h1 className="title">Welcome to my blog</h1>
          <Nav />
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
            Posts
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
