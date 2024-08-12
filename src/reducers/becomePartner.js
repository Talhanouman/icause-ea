const initialState = {
  loading: false
};

const becomePartner = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_COMPANY_REQUEST':
    case 'REGISTER_COMPANY_FAILED':
    case 'SET_SEARCH_FILTER_FOR_SCHOOL_LISTINGS':
    case 'GET_STATES_LISTINGS_SUCCESS':
    case 'REGISTER_COMPANY_SUCCESS': {
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

export default becomePartner;
