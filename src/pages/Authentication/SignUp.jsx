import React from 'react';
import { connect } from 'react-redux';

import SignUpComponent from '../../components/app/Authentication/SignUp';
import * as actions from '../../actions/user';

const SignUp = (props) => {
  return (
    <SignUpComponent {...props} />
  );
};

export default connect(({ user }) => ({ user }), actions)(SignUp);
