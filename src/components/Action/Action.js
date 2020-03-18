import React from "react";
import classes from './Action.module.css'

const action = props => {
  if (!props.text) {
    return (
      <div className={classes.Container}>
        <h3 className={classes.CTAText}>Nemo enim ipsam voluptatem quia voluptas.</h3>
        <button className={classes.CTAButton}>LET'S TALK. <span className={classes.Arrow}>&rarr;</span></button>
      </div>
    );
  } else {
    return (
      <div className={classes.Container}>
        <h3 className={classes.CTAText}>{props.text}</h3>
        <button className={classes.CTAButton}>LET'S TALK. <span className={classes.Arrow}>&rarr;</span> </button>
      </div>
    );
  }
};

export default action;
