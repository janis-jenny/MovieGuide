/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './NavItems';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div>
      <Link to="/" className="navbar-brand px-4 mx-0">MovieGuide</Link>
    </div>
    <ul className="nav-items dropdown d-flex justify-content-center m-0">
      {navItems.map((item) => {
        if (item.title === 'Movies') {
          return (
            <li
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              key={item.id}
              className={item.cName}
/*               onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)} */
            >
              {item.title}
              {/* {dropdown && <Dropdown />} */}
            </li>
          );
        }
        return (
          <li
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            key={item.id}
            className={item.cName}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  </nav>
);
export default Header;
