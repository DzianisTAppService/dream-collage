import React, { FC } from 'react';
import { Grid } from '@mui/material';

import NavBar from 'common/NavBar';
import Routes from './Routes';
import { StyledAppContainer } from './App.styles';
import PATHS from 'constants/routes-paths';

const navItems = [
  { text: 'Dreams', linkTo: PATHS.dreams },
  { text: 'Create dream', linkTo: PATHS.dreamCreate },
];

const App: FC = () => (
  <StyledAppContainer>
    <Grid container direction="column">
      <Grid item>
        <NavBar links={navItems} />
      </Grid>

      <Grid item>
        <Routes />
      </Grid>
    </Grid>
  </StyledAppContainer>
);

export default App;
