import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h1>Internship Assistant</h1>
        <h1>Internships available</h1>
      </div>
      <Link to="/sign" className="navbar-bt">
        Sign up!
      </Link>
    </div>
  );
};

export default Navbar;
