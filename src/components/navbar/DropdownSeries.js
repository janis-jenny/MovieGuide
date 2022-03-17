import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { dropdownTVItems } from './NavItems';
import headertStyle from '../../style/header.module.css';

function DropdownSeries() {
  const [anchorElSeries, setAnchorElSeries] = useState(false);

  const open = Boolean(anchorElSeries);

  const handleOpenMenuSeries = (e) => {
    setAnchorElSeries(e.currentTarget);
  };

  const handleMenuCloseSeries = () => {
    setAnchorElSeries(!anchorElSeries);
  };

  return (
    <>
      <Button id="movies" aria-controls="movies" onClick={handleOpenMenuSeries}>Series</Button>
      <Menu style={{ marginTop: '40px' }} id="movies" onClose={handleMenuCloseSeries} anchorEl={anchorElSeries} open={open}>
        {dropdownTVItems.map((item) => (
          <MenuItem
            key={item.id}
            onClick={handleMenuCloseSeries}
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

export default DropdownSeries;
