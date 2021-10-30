import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Link, Typography } from '@material-ui/core';

import DreamContainer from '../DreamContainer/DreamContainer';

import { DreamsQueryQuery } from './api.generated';

interface Props {
  data: NonNullable<DreamsQueryQuery['dreams']>;
}

const DreamList: FC<Props> = ({ data }) => (
  <Box p={5}>
    <Box mb={4}>
      <Typography variant="h4" align="center">
        Dreams
      </Typography>
    </Box>

    <Grid container direction="row" spacing={3} justifyContent="center">
      {data.length ? (
        data.map((dream: any) => (
          <DreamContainer dream={dream} key={dream._id} />
        ))
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

export default DreamList;
