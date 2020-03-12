import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";
import NavItems from "./NavItems";
import NavToggle from "./NavToggle";
import Drawer from "./Drawer";
import Backdrop from "./Backdrop";

const Navigation = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <Drawer
        open={drawerOpen}
        onClick={closeDrawer}
        saveHandler={props.saveHandler}
        loadHandler={props.loadHandler}
      />
      <Backdrop open={drawerOpen} onClick={closeDrawer} />
      <div className="navigation">
        <div className="brand">
            <Link to="/">spacex</Link>
        </div>
        <div className="spacex_input">
          <input
            id="search"
            type="text"
            placeholder="Search"
            onChange={props.searchHandler}
          />
        </div>
        <div className="spacer"/>
        <NavItems
          saveHandler={props.saveHandler}
          loadHandler={props.loadHandler}
        />
        <NavToggle open={drawerOpen} onClick={openDrawer} />
      </div>
    </React.Fragment>
  );
};

export default Navigation;
