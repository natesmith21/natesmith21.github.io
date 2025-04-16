import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import './nav.css';

const NavBar = () => {
    return (
        <div className="navContainer">
        <Navbar expand="fluid">
          <NavLink className='home' to="/">
            natesmith
          </NavLink>
          <Nav className="ml-auto mainNav" navbar>
            <NavItem>
              <NavLink to="/aboutme">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/resume">My Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">My Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/connect">Connect With Me</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
}

export default NavBar;