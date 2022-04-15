import React, { FC } from 'react';
import { Box, LinearProgress } from '@mui/material';

const LoadingComponent: FC = () => (
  <Box sx={{ width: '100%' }} position="absolute" top={0}>
    <LinearProgress />
  </Box>
);

export default LoadingComponent;
