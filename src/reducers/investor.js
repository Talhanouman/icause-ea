const initialState = {
  loading: false
};

const investor = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_INVESTOR_REQUEST':
    case 'REGISTER_INVESTOR_SUCCESS':
    case 'REGISTER_INVESTOR_FAILED': {
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

export default investor;
