const initialState = {
  loading: false,
  customerReviews: []
};

const homepage = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CUSTOMER_REVIEWS_REQUEST':
    case 'GET_CUSTOMER_REVIEWS_FAILED':
    case 'GET_CUSTOMER_REVIEWS_SUCCESS': {
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

export default homepage;
