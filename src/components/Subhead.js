import React from "react";

const subhead = props => {
  if(!props.text){
    return(
      <div><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p></div>
    )
  }else {
    return(
      <div><p>{props.text}</p></div>
    )
  }
};

export default subhead;