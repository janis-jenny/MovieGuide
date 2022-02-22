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
    backgroundColor: 'yellow',
    padding: '10px 80px',

    color: 'white',
    width: '100%',
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
  // handle change
  /* const handleChange = page => {
      setPage(page);
      window.scroll(0, 0);
    }; */
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        {/* <Pagination
            onChange={e => handleChange(e.target.textContent)}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            variant="outlined"
            count={pageNumber}
            /> */}
        <IconButton
          color="primary"
          onClick={() => setPageNumber(
            (page) => Math.max(page - 1, 1),
          )}
          disabled={pageNumber === 1}
        >
          <ArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
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
