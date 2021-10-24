import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Link } from '@material-ui/core';

const NavBar: FC = () => (
  <Box
    p={2}
    style={{
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    }}
  >
    <Grid container>
      <Grid item>
        <Box mr={2}>
          <RouterLink component={Link} to="/dreams/list" className="nav-link">
            Dreams
          </RouterLink>
        </Box>
      </Grid>
      <Grid item>
        <RouterLink component={Link} to="/dream/create" className="nav-link">
          Create Dream
        </RouterLink>
      </Grid>
    </Grid>
  </Box>
);

export default NavBar;
