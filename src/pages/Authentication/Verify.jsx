import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/user';
import VerifyComponent from '../../components/app/Authentication/Verify';

const Verify = (props) => {
  return (
    <VerifyComponent {...props} />
  );
};

export default connect(({ user }) => ({ user }), actions)(Verify);
