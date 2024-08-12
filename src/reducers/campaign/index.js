import { combineReducers } from 'redux';

import campaignDetails from './campaignDetails';
import campaignListings from './campaignListings';
import searchedCampaign from './searchedCampaign';

export default combineReducers({
  campaignListings,
  campaignDetails,
  searchedCampaign
});
