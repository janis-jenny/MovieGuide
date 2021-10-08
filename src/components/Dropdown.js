/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dropdownItems } from './NavItems';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className="dropdown-menu show" onClick={() => setDropdown(!dropdown)}>
        {dropdownItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={item.cName}
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

export default Dropdown;
