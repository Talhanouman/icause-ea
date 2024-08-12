import React from 'react';
import { connect } from 'react-redux';

import CommunityDetailComponent from '../../components/app/Community/CommunityDetail';

import * as actions from '../../actions/community/community-details';

const CommunityDetail = (props) => {
  return (
    <CommunityDetailComponent {...props} />
  );
};

export default connect(({ community, user }) => ({ communityDetails: community.communityDetails, user }), actions)(CommunityDetail);
