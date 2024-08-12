import React from 'react';
import { connect } from 'react-redux';

import HomepageComponent from '../components/app/Homepage/Homepage';

import * as actions from '../actions/homepage';

const Homepage = (props) => {  
  return (
    <HomepageComponent {...props}/>
  );
};

export default connect(({ homepage, user }) => ({ homepage, user }), actions)(Homepage);

