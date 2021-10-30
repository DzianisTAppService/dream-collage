import React, { FC } from 'react';
import { Box } from '@material-ui/core';

import { LoadingComponent } from '../../components';
import DreamsList from './DreamsList';
import { useDreamsQueryQuery } from './api.generated';

const DreamsListContainer: FC = () => {
  const { loading, data, error } = useDreamsQueryQuery();

  if (error) console.log(error);

  const dreams = data?.dreams;

  return (
    <Box>
      {loading && <LoadingComponent />}
      {dreams && <DreamsList data={dreams} />}
    </Box>
  );
};

export default DreamsListContainer;
