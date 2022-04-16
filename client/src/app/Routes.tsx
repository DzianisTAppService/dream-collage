import React, { FC } from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { DreamCreate, DreamsListContainer, DreamUpdate } from 'pages';
import PATHS from 'constants/routes-paths';

const Routes: FC = () => (
  <ReactRouterRoutes>
    <Route path={PATHS.dreams} element={<DreamsListContainer />} />
    <Route path={PATHS.dreamCreate} element={<DreamCreate />} />
    <Route path={`${PATHS.dreamUpdate}/:id`} element={<DreamUpdate />} />

    <Route
      path={PATHS.noRoute}
      element={<Navigate to={PATHS.dreams} replace />}
    />
  </ReactRouterRoutes>
);

export default Routes;
