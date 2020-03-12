import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className={`backdrop ${props.open ? 'open' : ''}`}
      onClick={props.onClick}
    />,
    document.querySelector("#backdrop")
  );
};

export default Backdrop;
