const initialState = {
  loading: false,
  openings: []
};

const categoryListings = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLEDGE_OF_THE_DAY_FOR_CATEGORY_SUCCESS':
    case 'GET_PLEDGE_OF_THE_DAY_FOR_CATEGORY_FAILED':
    case 'GET_PLEDGE_OF_THE_DAY_FOR_CATEGORY_REQUEST':
    case 'GET_FEATURED_CAMPAIGNS_FOR_CATEGORY_LISTINGS_SUCCESS':
    case 'GET_FEATURED_CAMPAIGNS_FOR_CATEGORY_LISTINGS_FAILED':
    case 'GET_FEATURED_CAMPAIGNS_FOR_CATEGORY_LISTINGS_REQUEST':
    case 'GET_CATEGORY_FOR_CATEGORY_LISTING_SUCCESS':
    case 'GET_CATEGORY_FOR_CATEGORY_LISTING_FAILED':
    case 'GET_CATEGORY_FOR_CATEGORY_LISTING_REQUEST':
    case 'GET_CUSTOMER_REVIEWS_FOR_CATEGORY_LISTING_REQUEST':
    case 'GET_CUSTOMER_REVIEWS_FOR_CATEGORY_LISTING_FAILED':
    case 'GET_CUSTOMER_REVIEWS_FOR_CATEGORY_LISTING_SUCCESS': {
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

export default categoryListings;
