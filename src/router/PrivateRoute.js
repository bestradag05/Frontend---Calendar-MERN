import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to={'/login'} />;
  }

  return <Outlet />;
};
