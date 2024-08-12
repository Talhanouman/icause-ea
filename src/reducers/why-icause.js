const initialState = {
  stats: {}
};

const whyIcause = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMBINED_STATS_FOR_WHY_ICAUSE_REQUEST':
    case 'GET_COMBINED_STATS_FOR_WHY_ICAUSE_FAILED':
    case 'GET_COMBINED_STATS_FOR_WHY_ICAUSE_SUCCESS': {
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

export default whyIcause;
