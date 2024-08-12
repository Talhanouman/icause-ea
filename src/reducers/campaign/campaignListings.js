const initialState = {
  loading: false,
  recentCauses: {},
  pagination: {
    pageNumber: 1,
    pageSize: 9
  }
};

const campaignListings = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_PAGINATION_FOR_CAMPAIGN_LISTINGS':
    case 'SET_PAGINATION_FOR_CAMPAIGN_LISTINGS':
    case 'GET_RECENT_CAUSES_FOR_CAMPAIGN_LISTINGS_REQUEST':
    case 'GET_RECENT_CAUSES_FOR_CAMPAIGN_LISTINGS_SUCCESS':
    case 'GET_RECENT_CAUSES_FOR_CAMPAIGN_LISTINGS_FAILED': {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default campaignListings;
