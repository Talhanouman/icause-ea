import React from 'react';
import { connect } from 'react-redux';

import SchoolDetailComponent from '../../components/app/School/SchoolDetails';

import * as actions from '../../actions/school/school-details';

const SchoolDetail = (props) => {
  return (
    <SchoolDetailComponent {...props} />
  );
};

export default connect(({ school, user }) => ({ schoolDetails: school.schoolDetails, user }), actions)(SchoolDetail);
