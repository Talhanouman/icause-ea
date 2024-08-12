import React from 'react';
import { connect } from 'react-redux';

import ForgotPasswordComponent from '../../components/app/Authentication/ForgotPassword';
import * as actions from '../../actions/user';

const ForgotPassword = (props) => {
  return (
    <ForgotPasswordComponent {...props} />
  );
};

export default connect(({ user }) => ({ user }), actions)(ForgotPassword);
