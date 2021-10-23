import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import NavBar from './components/NavBar';
import { DreamCreate, DreamsList, DreamUpdate } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item>
            <NavBar />
          </Grid>
          <Switch>
            <Route path="/dreams/list" exact component={DreamsList} />
            <Route path="/dream/create" exact component={DreamCreate} />
            <Route path="/dream/update/:id" exact component={DreamUpdate} />
          </Switch>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
