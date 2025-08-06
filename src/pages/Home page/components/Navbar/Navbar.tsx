import React from "react";
import "./Navbar-style.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix-logo"
        className="netflix-logo"
      />

      <div className="navbar-tags">
        <a href="#" className="navbar-elements">
          Home
        </a>
        <a href="#" className="navbar-elements">
          Series
        </a>
        <a href="#" className="navbar-elements">
          Movies
        </a>
        <a href="#" className="navbar-elements">
          Originals
        </a>
        <a href="#" className="navbar-elements">
          Recently Added
        </a>
        <a href="#" className="navbar-elements">
          My List
        </a>
      </div>

      <img
        src="./src/search.svg.png"
        alt="Search Icon"
        className="search-icon"
      ></img>

      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
        className="avatar-logo"
      ></img>
    </div>
  );
}

export default Navbar;
