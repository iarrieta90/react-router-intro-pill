import React from "react";
import { NavLink } from "react-router-dom";

function Header({ isAuthenticated, login, logout }) {
  return (
    <header className="bg-light p-2">
      <nav className="container d-flex align-items-center">
        <NavLink className="navbar-brand" to="/" exact activeClassName="active">
          Home
        </NavLink>
        <div className="navbar navbar-expand">
          <NavLink
            className="nav-item nav-link"
            to="/beers/find"
            activeClassName="active"
          >
            Find
          </NavLink>
        </div>
        <div className="d-flex ml-auto">
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              <p className="mb-0 mr-3">Hello!</p>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
