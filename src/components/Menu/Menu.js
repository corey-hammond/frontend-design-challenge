import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const menu = props => {
  return (
    <nav className={classes.Menu}>
      <ul className={classes.Nav}>
        <li>
          <Link to="/industries">Industries</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default menu;
