import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';

import reportWebVitals from './reportWebVitals';

const AppProvider = lazy(() => import('./app/AppProvider'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <AppProvider />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
