/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">MovieGuide</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Movies</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Popular</a>
              <a className="dropdown-item" href="#">Now Playing</a>
              <a className="dropdown-item" href="#">Upcoming</a>
              <a className="dropdown-item" href="#">Top Rated</a>
            </div>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
);
export default Header;
