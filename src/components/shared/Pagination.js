/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: 0,
    zIndex: 200,
    backgroundColor: '#3e3f3a',
    padding: '10px 80px',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    width: '100%',
    height: '50px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
}));

const Pagination = ({ setPageNumber, pageNumber, latestData }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={classes.root}
      >
        <IconButton
          color="grey"
          onClick={() => setPageNumber(
            (page) => Math.max(page - 1, 1),
          )}
          disabled={pageNumber === 1}
        >
          <ArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="grey"
          onClick={() => setPageNumber(
            (page) => (!latestData ? page + 1 : page),
          )}
          disabled={pageNumber === 5}
        >
          <ArrowRightIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
