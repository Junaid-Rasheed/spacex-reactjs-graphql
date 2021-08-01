import './Navbar.css'
import React from "react";
import { NavLink,Flex } from "theme-ui";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
 
    <Flex as="nav" className="Navbar-div"  >
      <Link to='/'>
        <NavLink p={3} className="Navbar-main">
          Home
        </NavLink>
      </Link>

      <Link to='/Launch'>
        <NavLink p={3} className="Navbar-main">
        Launches
        </NavLink>
      </Link>
    </Flex>
   
  );
};
