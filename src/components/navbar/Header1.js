/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  /*   Tabs,
  Tab, */
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { dropdownItems, dropdownTVItems } from './NavItems';
// import MenuIcon from '@material-ui/icons/Menu';
/* import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LiveTvIcon from '@material-ui/icons/LiveTv'; */
// import DrawerComponent from "./DrawerComponent";

// customise component
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  openDrawer: {
    marginLeft: 'auto',
    cursor: 'pointer',
  },
}));

const NavbarComponet = () => {
  // css
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // theme customisation
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    /*     if (dropdown.current && dropdown.current.contains(event.target)) {
      return;
    } */

    setAnchorEl(false);
  };

  // const LinkBtn = (props) => <Button color="inherit" component={Link} {...props} />;

  return (
    <>
      <AppBar position="static">
        <Toolbar color="primary">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            MovieGuide
          </IconButton>

          {/* <MenuIcon onClick={setOpenDrawer} className={classes.openDrawer} /> */}
          {!isMatch && (
            <>
              <Button id="movies" aria-controls="movies" onClick={handleOpenMenu}>Movies</Button>
              <Button id="series" arial-controls="series" onClick={handleOpenMenu}>Tv Series</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Menu style={{ marginTop: '40px' }} id="movies" onClose={handleMenuClose} anchorEl={anchorEl} open={open}>
        {dropdownItems.map((item) => (
          <MenuItem key={item.id} onClick={handleMenuClose} color="inherit" component={Link} to={item.path}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
      {/* <Menu style={{ marginTop: '40px' }} id="series" onClose={handleMenuClose} anchorEl={anchorEl} open={open}>
        {dropdownTVItems.map((item) => (
          <MenuItem key={item.id} onClick={handleMenuClose} color="inherit" component={Link} to={item.path}>
            {item.title}
          </MenuItem>
        ))}
      </Menu> */}
      {/* Drawer */}
      {/* {isMatch && (
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      )} */}
    </>
  );
};

export default NavbarComponet;
