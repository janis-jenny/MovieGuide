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
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import DrawerComponent from './Drawer';
import Logo from '../../images/logoM..jpg';
import headertStyle from '../../style/header.module.css';
import loadable from '@loadable/component'

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
  const [openDrawer, setOpenDrawer] = useState(false);

  // theme customisation 
  const theme = useTheme(); // to access a default theme inside this component like breakpoints
  const isMatch = useMediaQuery(theme.breakpoints.down('sm')); // it's a boolean if matches the breakpoints (true) or not (false) 

  const DropdownMovies = loadable(() => import('./DropdownMovies'))
  const DropdownSeries = loadable(() => import('./DropdownSeries'))

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
              <DropdownMovies />
              &nbsp;&nbsp;&nbsp;
              <DropdownSeries />
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
