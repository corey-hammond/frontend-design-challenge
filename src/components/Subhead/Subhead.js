import React from "react";
import classes from "./Subhead.module.css";

const subhead = props => {
  if (!props.text) {
    return (
      <div className={classes.Subhead}>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    );
  } else {
    return (
      <div className={classes.Subhead}>
        <p>{props.text}</p>
      </div>
    );
  }
};

export default subhead;
