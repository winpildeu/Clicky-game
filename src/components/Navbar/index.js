import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <ul className="nav bg-primary text-white justify-content-center p-2 sticky-top shadow">
      <li className="nav-item">
        <span className="nav-link font-weight-bold">{props.title}</span>
      </li>
      <li className="nav-item">
        <span className="nav-link">{props.rules}</span>
      </li>
      <li className="nav-item">
        <span className="nav-link">Score: {props.score}</span>
      </li>
      <li className="nav-link">||</li>
      <li className="nav-item">
        <span className="nav-link">Top Score: {props.topScore}</span>
      </li>
    </ul>
  );
}

export default Navbar;