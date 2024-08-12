const initialState = {
    loading: false,
    searchedCampaign: {},
    pagination: {
      pageNumber: 1,
      pageSize: 9
    }
  };
  
  const searchedCampaign = (state = initialState, action) => {
    switch (action.type) {
      case 'RESET_PAGINATION_FOR_CAMPAIGN_LISTINGS':
      case 'SET_PAGINATION_FOR_CAMPAIGN_LISTINGS':
      case 'GET_SEARCHED_CAMPAIGN_BY_NAME_REQUEST':
      case 'GET_SEARCHED_CAMPAIGN_BY_NAME_SUCCESS':
      case 'GET_SEARCHED_CAMPAIGN_BY_NAME_FAILED': {
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
  
  export default searchedCampaign;
  