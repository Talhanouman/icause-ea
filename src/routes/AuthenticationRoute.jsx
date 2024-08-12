import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Spin } from 'antd';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthLayout from '../layouts/AuthLayout';

import Loader from '../components/customComponents/Loader';

import Login from '../pages/Authentication/Login';
import SignUp from '../pages/Authentication/SignUp';
import ForgotPassword from '../pages/Authentication/ForgotPassword';

import * as actions from '../actions/user';
import Verify from '../pages/Authentication/Verify';

const ContainerRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} />
  )} />
);

const AuthenticationRoute = (props) => {
  const { user, getUser, history } = props;
  const [loadingForFetchingUser, setLoadingForFetchingUser] = useState(false);
  const [authToken,] = useState(localStorage.getItem('loginToken'));

  useEffect(() => {
    if (authToken && (!user || !user.id)) {
      setLoadingForFetchingUser(true);
      getUser(authToken)
        .then(() => {
          actions.checkUserLoginStatusOnDashboard(authToken)
            .then(() => setLoadingForFetchingUser(false))
            .catch(() => setLoadingForFetchingUser(false))
        })
        .catch(() => setLoadingForFetchingUser(false))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  if (loadingForFetchingUser) {
    return (<Spin tip="Please Wait" indicator={Loader} spinning={true} style={{ 'marginTop': '20%' }}> </Spin>);
  }
  if (user && user.id && user.isLogin) {
    return (<Redirect to='/homepage' />);
  }
  return (
    <AuthLayout history={history}>
      <Switch>
        <ContainerRoute history={history} path="/auth/signup" component={SignUp} />
        <ContainerRoute history={history} path="/auth/verification" component={Verify} />
        <ContainerRoute history={history} path="/auth/login" component={Login} />
        <ContainerRoute history={history} path="/auth/forgot/password" component={ForgotPassword} />
        <Redirect from='*' to='/homepage' />
      </Switch>
    </AuthLayout>
  );
}

export default connect(({ user }) => ({ user }), actions)(withRouter(AuthenticationRoute));
