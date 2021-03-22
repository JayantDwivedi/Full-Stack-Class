import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import Right from "./Pages/Rightnavbar";
import MyCard from "./component/Card";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Right />
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </switch>
        <MyCard />
      </div>
    </Router>
  );
}
