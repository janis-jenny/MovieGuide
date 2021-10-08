/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { dropdownItems } from './NavItems';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  /*   const categoryMovieHandler = (e) => {
    e.preventDefault();

    if (category === 'Popular') {
      dispatch(fetchPopularMovie());
    } else {
      dispatch(fetchUpcomingMovie());
    }
  }; */

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
