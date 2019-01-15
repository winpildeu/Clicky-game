import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="container bg-light text-white mt-3 p-2 rounded">
      <h6>Container is here...</h6>
      {props.children}
    </div>
  );
}
export default Container;