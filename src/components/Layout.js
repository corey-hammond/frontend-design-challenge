import React from "react";
import { Link } from "react-router-dom";
import SVG from "./SVG";
import Menu from "./Menu";

const layout = props => {
  return (
    <header>
      <Link to="/">
        <SVG />
      </Link>

      <Menu />
      <div className="contact">
        <button className="btn-contact">Contact Us</button>
      </div>
    </header>
  );
};

export default layout;
