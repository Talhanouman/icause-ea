import React from 'react';
import { connect } from 'react-redux';

import LoginComponent from '../../components/app/Authentication/Login';
import * as actions from '../../actions/user';

const Login = (props) => {
  return (
    <LoginComponent 
      {...props}
    />
  );
};

export default connect(({ user }) => user, actions)(Login);
