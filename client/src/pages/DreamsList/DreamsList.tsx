import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Link, Typography } from '@material-ui/core';

import { Dream } from '../../components';
import { useDreamsQueryQuery } from '../../generated/graphql';

const DreamList: FC = () => {
  const { loading, data, error } = useDreamsQueryQuery();

  if (loading) return <h4>Loading...</h4>;

  if (error) console.log(error);

  const { dreams } = data ?? {};

  if (!dreams) return null;

  return (
    <Box p={5}>
      <Box mb={4}>
        <Typography variant="h4" align="center">
          Dreams
        </Typography>
      </Box>

      <Grid container direction="row" spacing={3} justifyContent="center">
        {dreams.length ? (
          dreams.map((dream: any) => <Dream dream={dream} key={dream._id} />)
        ) : (
          <Box display="flex" alignItems="center" alignSelf="start">
            <h3>You have no dreams yet, lets create the first:</h3>
            <Box ml={2}>
              <RouterLink
                component={Link}
                to="/dream/create"
                className="nav-link"
              >
                Create Dream
              </RouterLink>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default DreamList;
