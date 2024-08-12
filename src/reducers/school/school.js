const initialState = {
  loading: false
};

const school = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STATS_FOR_SCHOOL_MAIN_FAILED':
    case 'GET_STATS_FOR_SCHOOL_MAIN_SUCCESS':
    case 'GET_STATS_FOR_SCHOOL_MAIN_REQUEST':
    case 'GET_RECENT_CAUSES_FOR_SCHOOL_MAIN_FAILED':
    case 'GET_RECENT_CAUSES_FOR_SCHOOL_MAIN_REQUEST':
    case 'GET_RECENT_CAUSES_FOR_SCHOOL_MAIN_SUCCESS':
    case 'GET_FEATURED_SCHOOL_FOR_SCHOOL_MAIN_SUCCESS':
    case 'GET_FEATURED_SCHOOL_FOR_SCHOOL_MAIN_REQUEST':
    case 'GET_FEATURED_SCHOOL_FOR_SCHOOL_MAIN_FAILED': {
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

export default school;
