import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>News</h1>
      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sports">sports</Link>
        </li>
        <li>
          <Link to="/cinema">cinema</Link>
        </li>
        <li>
          <Link to="/technews">technews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
