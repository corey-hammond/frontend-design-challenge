import React from "react";
import Headline from "./Headline";
import Subhead from "./Subhead";
import Action from "./Action";

const page = props => {
  if (!props.data) {
    return (
      <div>
        <Headline />
        <Subhead />
        <Action />
      </div>
    );
  } else {
    return (
      <div>
        <Headline text={props.data.headline} />
        <Subhead text={props.data.subhead} />
        <Action text={props.data.cta} />
      </div>
    );
  }
};

export default page;
