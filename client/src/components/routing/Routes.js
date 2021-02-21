import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';

import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import Alert from 'react-bootstrap/Alert';
const Routes = (props) => {
  return (
    <>
      {/* <Alert variant="primary" /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
