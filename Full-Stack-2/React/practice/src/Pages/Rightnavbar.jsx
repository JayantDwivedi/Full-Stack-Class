import React from "react";
import "./Right.css";

import { Link } from "react-router-dom";

export default function Rightnavbar() {
  return (
    <div className="right">
      <a href="#">Physics</a>
      <a href="#">Chemistry</a>
      <a href="#">Mathematics</a>
    </div>
  );
}
