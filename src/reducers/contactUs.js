const initialState = {
  loading: false
};

const contactUs = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_US_FORM_FAILED':
    case 'CONTACT_US_FORM_REQUEST':
    case 'CONTACT_US_FORM_SUCCESS': {
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

export default contactUs;
