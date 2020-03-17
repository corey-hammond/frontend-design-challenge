import React from "react";
import { Link } from "react-router-dom";

const menu = props => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/industries">Industries</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default menu;
