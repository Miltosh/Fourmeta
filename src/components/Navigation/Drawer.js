import React from "react";
import ReactDOM from "react-dom";

import NavItems from "./NavItems";
import NavToggle from "./NavToggle";
import "./Drawer.css";

const Drawer = props => {
  return ReactDOM.createPortal(
    <div className={`drawer ${props.open && 'open'}`} id="drag">
      <NavToggle open={props.open} onClick={props.onClick} />
      <NavItems saveHandler={props.saveHandler} loadHandler={props.loadHandler}/>
    </div>,
    document.getElementById("drawer")
  );
};

export default Drawer;
