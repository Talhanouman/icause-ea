const initialState = {
  loading: false,
  openings: []
};

const career = (state = initialState, action) => {
  switch (action.type) {
    case 'APPLY_JOB_SUCCESS':
    case 'APPLY_JOB_REQUEST':
    case 'APPLY_JOB_FAILED':
    case 'GET_CURRENT_OPENINGS_REQUEST':
    case 'GET_CURRENT_OPENINGS_SUCCESS':
    case 'GET_CURRENT_OPENINGS_FAILED': {
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

export default career;
