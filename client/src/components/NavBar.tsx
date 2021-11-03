import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Link } from '@material-ui/core';

const NavBar: FC = () => {
  const NavItems = [
    {
      name: 'Dreams',
      url: '/dreams',
    },
    {
      name: 'Create Dream',
      url: '/dream/create',
    },
  ];

  return (
    <Box
      p={2}
      style={{
        boxShadow:
          '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      }}
    >
      <Grid container>
        {NavItems.map(({ name, url }) => (
          <Grid item key={name}>
            <Box mr={2}>
              <RouterLink component={Link} to={url}>
                {name}
              </RouterLink>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NavBar;
