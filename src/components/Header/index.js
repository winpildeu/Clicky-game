import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="bg-secondary rounded p-1">
      <h1 className="text-center">{props.children}</h1>
    </div>
  );
}

export default Header;