import React from 'react';
import { connect } from 'react-redux';

import CommunityListingComponent from '../../components/app/Community/CommunityListing';

import * as actions from '../../actions/community/community-listings';

const CommunityListing = (props) => {
  return (
    <CommunityListingComponent {...props} />
  );
};

export default connect(({ community, user }) => ({ communityListings: community.communityListings, user }), actions)(CommunityListing);

