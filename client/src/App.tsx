import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { DreamCreate, DreamsList, DreamUpdate } from './pages';
import { NavBar } from './components';

const App: FC = () => (
  <div className="App">
    <Grid container direction="column">
      <Grid item>
        <NavBar />
      </Grid>

      <Grid item>
        <Switch>
          <Route path="/dreams/list" exact component={DreamsList} />
          <Route path="/dream/create" exact component={DreamCreate} />
          <Route path="/dream/update/:id" exact component={DreamUpdate} />
        </Switch>
      </Grid>
    </Grid>
  </div>
);

export default App;
