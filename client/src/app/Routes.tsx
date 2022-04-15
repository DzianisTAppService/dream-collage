import React, { FC } from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import { DreamCreate, DreamsListContainer, DreamUpdate } from '../pages';

const Routes: FC = () => (
  <ReactRouterRoutes>
    <Route path="/dreams" element={<DreamsListContainer />} />
    <Route path="/dream/create" element={<DreamCreate />} />
    <Route path="/dream/update/:id" element={<DreamUpdate />} />

    <Route path="*" element={<Navigate to={'/dreams'} replace />} />
  </ReactRouterRoutes>
);

export default Routes;
