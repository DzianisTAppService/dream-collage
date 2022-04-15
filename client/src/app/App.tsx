import React, { FC } from 'react';
import { Grid } from '@mui/material';

import { NavBar } from 'common';
import Routes from './Routes';
import { StyledAppContainer } from './App.styles';

const App: FC = () => (
  <StyledAppContainer>
    <Grid container direction="column">
      <Grid item>
        <NavBar />
      </Grid>

      <Grid item>
        <Routes />
      </Grid>
    </Grid>
  </StyledAppContainer>
);

export default App;
