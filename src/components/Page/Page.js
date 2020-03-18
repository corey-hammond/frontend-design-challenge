import React from "react";
import Headline from "../Headline/Headline";
import Subhead from "../Subhead/Subhead";
import Action from "../Action/Action";
import classes from './Page.module.css'

const page = props => {
  if (!props.data) {
    return (
      <div className={classes.Container}>
        <Headline />
        <Subhead />
        <Action />
      </div>
    );
  } else {
    return (
      <div className={classes.Container}>
        <Headline text={props.data.headline} />
        <Subhead text={props.data.subhead} />
        <Action text={props.data.cta} />
      </div>
    );
  }
};

export default page;
