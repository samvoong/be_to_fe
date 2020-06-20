import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PostsPage from "./pages/postsPage";
import FormPage from "./pages/formPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/styled-components/wrapper";

export default class RouterConfig extends Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Header />
          <Wrapper>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/posts",
    component: PostsPage
  },
  {
    path: "/form",
    component: FormPage
  }
];
