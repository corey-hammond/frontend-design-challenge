import React from "react";

const action = props => {
  if (!props.text) {
    return (
      <div>
        <h3>Nemo enim ipsam voluptatem quia voluptas.</h3>
        <button>LET'S TALK &rarr;</button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{props.text}</h3>
        <button>LET'S TALK &rarr;</button>
      </div>
    );
  }
};

export default action;
