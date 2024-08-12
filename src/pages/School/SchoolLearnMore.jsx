import React from 'react';
import { connect } from 'react-redux';

import SchoolLearnMoreComponent from '../../components/app/School/SchoolLearnMore';

import * as actions from '../../actions/school/school-details';

const SchoolLearnMore = (props) => {
  return (
    <SchoolLearnMoreComponent {...props} />
  );
};

export default connect(({ school, user }) => ({ schoolDetails: school.schoolDetails, user }), actions)(SchoolLearnMore);
