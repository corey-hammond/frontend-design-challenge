import React from "react";
import classes from "./Headline.module.css";

const headline = props => {
  if (!props.text) {
    return (
      <div className={classes.Headline}>
        <h1 className={classes.HeadlineText}>Lorem ipsum dolor sit amet</h1>
      </div>
    );
  } else {
    return (
      <div className={classes.Headline}>
        <h1 className={classes.HeadlineText}>{props.text}</h1>
      </div>
    );
  }
};

export default headline;
