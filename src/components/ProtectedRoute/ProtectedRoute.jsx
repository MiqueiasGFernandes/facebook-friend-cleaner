import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../constants/routes';

const ProtectedRoute = ({
  isAuthenticated, Component, path, exact,
}) => (
  <Route
    exact={exact}
    path={path}
    render={() => (isAuthenticated ? <Component /> : <Redirect to={routes.LOGIN} />)}
  />
);

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  Component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
