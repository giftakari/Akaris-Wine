import React from "react";
import logo from "./logo.svg";
import Home from "./pages/Home";
import About from "./pages/About.js";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
