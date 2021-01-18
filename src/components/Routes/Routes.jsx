import { Dashboard } from '@material-ui/icons';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../../constants/routes';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login';

const Routes = () => {
  const [isAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          Component={Dashboard}
          isAuthenticated={isAuthenticated}
          path={routes.HOME}
          exact
        />
        <Route
          exact
          path={routes.LOGIN}
          component={Login}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
