import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useUserContext } from '../../contexts/user';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useUserContext();

  return <Route {...rest}>{!user ? <Redirect to="/auth" /> : children}</Route>;
};

export default ProtectedRoute;
