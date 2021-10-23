// https://habr.com/ru/company/ruvds/blog/445268/
import React from 'react';
import { Box, Grid } from '@material-ui/core';

import { Dream } from '../components';
import { useDreamsQueryQuery } from '../generated/graphql';

const DreamList: React.FC = () => {
  const { loading, data, error } = useDreamsQueryQuery();
  console.log(loading, 'loading');
  console.log(data, 'useDreamsQueryQuery');
  return (
    <Box p={5}>
      <h1 className="display-4 my-4">Dreams</h1>
      {/*<Query query={DREAMS_QUERY} fetchPolicy="network-only">*/}
      {/*  {({ loading, error, data = {} }: TQuery): null | React.ReactElement => {*/}
      {/*    if (loading) return <h4>Loading...</h4>;*/}
      {/*    if (error) console.log(error);*/}
      {/*    const { dreams = [] } = data;*/}
      {/*    if (!dreams.length) return null;*/}
      {/*    return (*/}
      {/*      <Grid container direction="row" spacing={3} justify="center">*/}
      {/*        {dreams.map((dream: any, index: number) => (*/}
      {/*          <Dream dream={dream} key={index} />*/}
      {/*        ))}*/}
      {/*      </Grid>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*</Query>*/}
    </Box>
  );
};

export default DreamList;

interface TQuery {
  loading: boolean;
  error?: any;
  data: any;
}
