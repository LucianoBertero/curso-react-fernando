import { Link, NavLink } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark rounded-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Use Context
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : " "}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : " "}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : " "}`
                }
              >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
