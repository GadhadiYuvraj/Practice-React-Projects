import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo-Home"> React Project Hub</h1>
        <button className="toggle-Button"> Switch mode</button>
      </nav>
    </>
  );
}

export default Navbar;
