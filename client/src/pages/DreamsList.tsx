import React from 'react';
import { Box, Grid } from '@material-ui/core';

import { Dream } from '../components';
import { useDreamsQueryQuery } from '../generated/graphql';

const DreamList: React.FC = () => {
  const { loading, data, error } = useDreamsQueryQuery();

  if (loading) return <h4>Loading...</h4>;

  if (error) console.log(error);

  const { dreams } = data ?? {};

  if (!dreams) return null;

  return (
    <Box p={5}>
      <h1 className="display-4 my-4">Dreams</h1>
      <Grid container direction="row" spacing={3} justify="center">
        {dreams.map((dream: any, index: number) => (
          <Dream dream={dream} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default DreamList;
