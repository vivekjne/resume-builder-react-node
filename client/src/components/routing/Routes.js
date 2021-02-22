import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';

import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import Alert from '../layout/Alert';
import PrivateRoute from './PrivateRoute';
import Container from 'react-bootstrap/Container';
import NewResume from '../resume/NewResume';
const Routes = (props) => {
  return (
    <>
      <Container
        fluid="md"
        className="fill-height"
        style={{ paddingTop: '60px' }}
      >
        <Alert />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/resume/new" component={NewResume} />

          <PrivateRoute exact path="/" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
};

export default Routes;
