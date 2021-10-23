import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    padding: '16px',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid item>
        <Link to="/dreams/list" className="nav-link">
          Dreams
        </Link>
      </Grid>
      <Grid item>
        <Link to="/dream/create" className="nav-link">
          Create Dream
        </Link>
      </Grid>
    </Grid>
  );
};

export default NavBar;
