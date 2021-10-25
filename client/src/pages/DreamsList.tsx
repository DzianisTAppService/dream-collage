import React, { FC } from 'react';
import { Box, Grid } from '@material-ui/core';

import { Dream } from '../components';
import { useDreamsQueryQuery } from '../generated/graphql';

const DreamList: FC = () => {
  const { loading, data, error } = useDreamsQueryQuery();

  if (loading) return <h4>Loading...</h4>;

  if (error) console.log(error);

  const { dreams } = data ?? {};

  if (!dreams) return null;

  return (
    <Box p={5}>
      <h1 className="display-4 my-4">Dreams</h1>
      <Grid container direction="row" spacing={3} justify="center">
        {dreams.map((dream: any) => (
          <Dream dream={dream} key={dream._id} />
        ))}
      </Grid>
    </Box>
  );
};

export default DreamList;
