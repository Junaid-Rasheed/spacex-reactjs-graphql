
import React from "react";
import { NavLink,Flex } from "theme-ui";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex as="nav">
      <Link to='/'>
        <NavLink p={2}>
          Home
        </NavLink>
      </Link>

      <Link to='/Launch'>
        <NavLink p={2}>
        Launches
        </NavLink>
      </Link>
    </Flex>
  );
};
