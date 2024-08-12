const initialState = {
  loading: false,
  schools: [],
  featuredCampaigns: [],
  pagination: {
    pageNumber: 1,
    pageSize: 9
  },
  filter: {
    name: ''
  },
  states: []
};

const schoolListings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER_FOR_SCHOOL_LISTINGS':
    case 'SET_PAGINATION_FOR_SCHOOL_LISTINGS':
    case 'FOLLOW_COMPANY_REQUEST':
    case 'FOLLOW_COMPANY_SUCCESS':
    case 'FOLLOW_COMPANY_FAILED':
    case 'GET_FEATURED_CAMPAIGNS_REQUEST':
    case 'GET_FEATURED_CAMPAIGNS_SUCCESS':
    case 'GET_FEATURED_CAMPAIGNS_FAILED':
    case 'GET_SCHOOL_LISTINGS_REQUEST':
    case 'GET_SCHOOL_LISTINGS_SUCCESS':
    case 'GET_SCHOOL_LISTINGS_FAILED':
    case 'GET_STATES_LISTINGS_REQUEST':
    case 'GET_STATES_LISTINGS_SUCCESS':
    case 'GET_STATES_LISTINGS_FAILED':
    case 'GET_PLEDGE_OF_THE_DAY_SUCCESS':
    case 'GET PLEDGE OF THE DAY':
    case 'GET_PLEDGE_OF_THE_DAY_FAILED': {
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

export default schoolListings;
