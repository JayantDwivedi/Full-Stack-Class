import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import Right from "./Pages/Rightnavbar";
import MyCard from "./component/Card";

// importing React Event
import Event from "./Events/Events";

export default function App() {
  return (
    <div className="App">
      <Event />
    </div>
  );
}
