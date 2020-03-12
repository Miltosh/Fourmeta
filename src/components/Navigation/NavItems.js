import React from "react";
import "./NavItems.css";

const NavItems = (props) => {
  return (
    <div className="navigation-items">
      <ul>
        <li>
          <div className="button" onClick={props.loadHandler}>Load</div>
        </li>
        <li>
        <div className="button" onClick={props.saveHandler}>Save</div>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
