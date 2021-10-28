import React, { FC } from 'react';
import { Box, LinearProgress } from '@material-ui/core';

const LoadingComponent: FC = () => (
  <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>
);

export default LoadingComponent;
