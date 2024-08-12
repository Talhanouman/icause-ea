import React from 'react';
import { connect } from 'react-redux';

import SearchedCampaignComponent from '../../components/app/Campaign/SearchedCampaign';

import * as actions from '../../actions/campaign/campaignListings';

const SearchedCampaign = (props) => {
  return (
    <SearchedCampaignComponent {...props} />
  );
};

export default connect(({ campaign }) => campaign.searchedCampaign, actions)(SearchedCampaign);

