import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <>
      <NavLink
        to={navItem.link}
        className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
      >
        {navItem.title}
      </NavLink>
    </>
  );
};

export default NavItem;
