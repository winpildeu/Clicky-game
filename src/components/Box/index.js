import React from "react";
import "./style.css";

function Box(props) {
  // confirm data
  // console.log(`Box props: ${props}`);
  return (
    <img key={props.id} src={props.image} className="img-thumbnail m-2" alt={props.name} onClick={() => props.checkBox(props.id)} />
  );
}

export default Box;