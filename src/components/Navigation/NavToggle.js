import React from "react";
import "./NavToggle.css";

const NavToggle = props => {
  return (
    <div className="navigation-mobile">
      <div className={`drawer-button ${props.open ? 'open' : 'close'}`} onClick={props.onClick}>
        <span className="line top"></span>
        <span className="line middle"></span>
        <span className="line bottom"></span>
      </div>
    </div>
  );
};

export default NavToggle;
