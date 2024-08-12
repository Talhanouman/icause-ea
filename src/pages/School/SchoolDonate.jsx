

import React from 'react';
import {
  StripeProvider,
  Elements
} from 'react-stripe-elements';
import { connect } from 'react-redux';

import SchoolDonateComponent from '../../components/app/School/SchoolDonate';

import * as actions from '../../actions/school/school-donate';

const SchoolDonate = (props) => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST_KEYS}>
      <Elements>
        <SchoolDonateComponent {...props} />
      </Elements>
    </StripeProvider>
  );
};

export default connect(({ school, user }) => ({ schoolDonate: school.schoolDonate, user }), actions)(SchoolDonate);
