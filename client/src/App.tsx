import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { DreamCreate, DreamUpdate, DreamsListContainer } from './pages';
import { NavBar } from './components';

const App: FC = () => (
  <div className="App">
    <Grid container direction="column">
      <Grid item>
        <NavBar />
      </Grid>

      <Grid item>
        <Switch>
          <Route path="/dreams" exact component={DreamsListContainer} />
          <Route path="/dream/create" exact component={DreamCreate} />
          <Route path="/dream/update/:id" exact component={DreamUpdate} />

          <Redirect to="/dreams" />
        </Switch>
      </Grid>
    </Grid>
  </div>
);

export default App;
