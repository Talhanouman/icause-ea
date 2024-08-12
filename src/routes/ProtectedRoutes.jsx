import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import UserLayout from '../layouts/UserLayout';

import EventCreation from '../pages/Events/EventCreation';

import * as actions from '../actions/user';

const ContainerRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} />
  )} />
);

const ProtectedRoutes = (props) => {
  const { user, getUser, history, location } = props;
  const { pathname } = location;
  const [authToken,] = useState(localStorage.getItem('loginToken'));
  useEffect(() => {
    if (authToken) {
      getUser(authToken)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  if (!authToken) {
    return <Redirect
      to={{
        pathname: '/auth/login',
        state: { redirectUrl: pathname }
      }}
    />
  }
  return (
    <UserLayout history={history}>
      <Switch>
        <ContainerRoute path='/user/create-event' history={history} user={user} component={EventCreation} />
        <Redirect from='*' to='/homepage' />
      </Switch>
    </UserLayout>
  );
}

export default connect(({ user }) => ({ user }), actions)(withRouter(ProtectedRoutes));
