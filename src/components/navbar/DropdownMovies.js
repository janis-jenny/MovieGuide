import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { dropdownItems } from './NavItems';
import headertStyle from '../../style/header.module.css';

function DropdownMovies() {
  const [anchorElMovies, setAnchorElMovies] = useState(false);

  const open = Boolean(anchorElMovies);

  const handleOpenMenuMovies = (e) => {
    setAnchorElMovies(e.currentTarget);
  };

  const handleMenuCloseMovies = () => {
    setAnchorElMovies(!anchorElMovies);
  };

  return (
    <>
      <Button id="movies" aria-controls="movies" onClick={handleOpenMenuMovies}>Movies</Button>
      <Menu style={{ marginTop: '40px' }} id="movies" onClose={handleMenuCloseMovies} anchorEl={anchorElMovies} open={open}>
        {dropdownItems.map((item) => (
          <MenuItem
            key={item.id}
            onClick={handleMenuCloseMovies}
            component={Link}
            to={item.path}
            className={headertStyle.links}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default DropdownMovies;
