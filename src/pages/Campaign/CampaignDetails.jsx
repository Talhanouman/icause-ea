import React from 'react';
import { connect } from 'react-redux';

import CampaignDetailsComponent from '../../components/app/Campaign/Details';

import * as actions from '../../actions/campaign/campaignDetails';

const CampaignDetails = (props) => {
  return (
    <CampaignDetailsComponent {...props}/>
  );
};

export default connect(({ campaign, user }) => ({ campaignDetails: campaign.campaignDetails, user }), actions)(CampaignDetails);
