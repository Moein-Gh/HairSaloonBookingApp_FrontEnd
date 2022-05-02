import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ navItem, setShow }) => {
  return (
    <>
      <div className={`navLinkContainer`}>
        <NavLink
          to={navItem.link}
          className={`nav-link d-flex`}
          onClick={() => {
            setShow(false);
          }}
        >
          {navItem.iconTag && navItem.iconTag}
          <h3 className="navLinkText">{navItem.title}</h3>
        </NavLink>
      </div>
    </>
  );
};

export default NavItem;
