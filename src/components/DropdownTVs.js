/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dropdownTVItems } from './NavItems';

function DropdownTV() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className="dropdown-menu show" onClick={() => setDropdown(!dropdown)}>
        {dropdownTVItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setDropdown(dropdown)}
              data-popper-placement="bottom-start"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DropdownTV;
