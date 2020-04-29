import React from 'react';
import logo from './logo.svg';
import Home from "./pages/Home";
import About from "./pages/About.js";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div className="App">
      
     <Router>
       <Route exact path ="/"
/><Home/> 

   </Router>
    </div>
  );
}

export default App;
