/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable */
/* eslint-disable react/linebreak-style */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { dropdownItems, dropdownTVItems } from './NavItems';
import DrawerComponent from './Drawer';
import Logo from '../../images/logoM..jpg';
import headertStyle from '../../style/header.module.css';

// customise component
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  name: {
    marginRight: theme.spacing(4),
  },
  openDrawer: {
    marginLeft: 'auto',
    cursor: 'pointer',
  },
}));

const NavbarComponet = () => {
  // css
  const classes = useStyles();
  const [anchorElMovies, setAnchorElMovies] = useState(false);
  const [anchorElSeries, setAnchorElSeries] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const open = Boolean(anchorElMovies);
  const open2 = Boolean(anchorElSeries)

  // theme customisation 
  const theme = useTheme(); // to access a default theme inside this component like breakpoints
  const isMatch = useMediaQuery(theme.breakpoints.down('sm')); // it's a boolean if matches the breakpoints (true) or not (false) 

  const handleOpenMenuOne = (e) => {
    setAnchorElMovies(e.currentTarget);
  };

  const handleOpenMenuTwo = (e) => {
    setAnchorElSeries(e.currentTarget);
  };

  const handleMenuCloseOne = () => {
    setAnchorElMovies(!anchorElMovies);
  };

  const handleMenuCloseTwo = () => {
    setAnchorElSeries(!anchorElSeries);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar color="primary">
          <IconButton
            edge="start"
            className={`${classes.name} ${headertStyle.links}`}
            aria-label="menu"
            component={Link}
            to="/"
          >
            <img src={Logo} className={headertStyle.img}/>
          </IconButton>
          {!isMatch && (
            <div>
              <Button id="movies" aria-controls="movies" onClick={handleOpenMenuOne}>Movies</Button>
              <Menu style={{ marginTop: '40px' }} id="movies" onClose={handleMenuCloseOne} anchorEl={anchorElMovies} open={open}>
                {dropdownItems.map((item) => (
                <MenuItem key={item.id} onClick={handleMenuCloseOne} component={Link} to={item.path} className={headertStyle.links}>
                  {item.title}
                </MenuItem>
                ))}
              </Menu>
              &nbsp;&nbsp;&nbsp;
              <Button id="series" arial-controls="series" onClick={handleOpenMenuTwo}>Tv Series</Button>
              <Menu style={{ marginTop: '40px' }} id="series" onClose={handleMenuCloseTwo} anchorEl={anchorElSeries} open={open2}>
              {dropdownTVItems.map((item) => (
              <MenuItem key={item.id} onClick={handleMenuCloseTwo} color="inherit" component={Link} to={item.path}>
                {item.title}
              </MenuItem>
              ))}
              </Menu>
            </div>
          )}
          <IconButton edge="end" onClick={() => setOpenDrawer(!openDrawer)} className={`${classes.openDrawer} ${headertStyle.links}`}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <DrawerComponent
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </>
  );
};

export default NavbarComponet;
