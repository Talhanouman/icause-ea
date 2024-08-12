
import React from 'react';
import {
  StripeProvider,
  Elements
} from 'react-stripe-elements';
import { connect } from 'react-redux';

import CommunityDonateComponent from '../../components/app/Community/CommunityDonate';

import * as actions from '../../actions/community/community-donate';

const CommunityDonate = (props) => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST_KEYS}>
      <Elements>
        <CommunityDonateComponent {...props} />
      </Elements>
    </StripeProvider>
  );
};

export default connect(({ community, user }) => ({ communityDonate: community.communityDonate, user }), actions)(CommunityDonate);
