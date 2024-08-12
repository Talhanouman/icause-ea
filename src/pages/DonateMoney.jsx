import React from 'react';
import {
  StripeProvider,
  Elements
} from 'react-stripe-elements';
import { connect } from 'react-redux';
import DonateMoneyComponent from '../components/app/DonateMoney/DonateMoney';
import * as actions from '../actions/donate-money';

const DonateMoney = (props) => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST_KEYS}>
      <Elements>
        <DonateMoneyComponent {...props} />
      </Elements>
    </StripeProvider>
  );
};

export default connect(({ donateMoney, user }) => ({ donateMoney, user }), actions)(DonateMoney);

