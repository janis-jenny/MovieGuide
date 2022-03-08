/* eslint-disable react/prop-types */

import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemText,
  ListItem,
  makeStyles,
  ListItemIcon,
} from '@material-ui/core';

import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.common.drawer,
  },
  link: {
    color: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();

  // history
  const history = useHistory();

  const navigation = (link) => {
    history.push(`/${link}`);
  };

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      open={openDrawer}
      onClose={setOpenDrawer}
    >
      <List className={classes.link}>
        <ListItem>
          <ListItemIcon>
            <MovieFilterIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText onClick={() => navigation('popular')} primary="Popular Movies" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MovieFilterIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText onClick={() => navigation('upcoming')} primary="Upcoming Movies" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalMoviesIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText onClick={() => navigation('popularTV')} primary="Popular Series" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalMoviesIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText onClick={() => navigation('topRated')} primary="Top Rated Series" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
