import React from "react";

const headline = props => {
  
  if(!props.text){
    return(
      <div><h1>Lorem ipsum dolor sit amet</h1></div>
    )
  }else {
    return(
      <div><h1>{props.text}</h1></div>
    )
  }
};

export default headline;