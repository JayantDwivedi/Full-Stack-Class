import React from "react";
import "./Navbar.css";
import notfoundimage from "../images/png404.png";

const Notfound = () => {
  return (
    <div className="content">
     <h1>Page not found</h1>
      <img src={notfoundimage} alt="" className="image-404" />
    </div>
  );
};

export default Notfound;
