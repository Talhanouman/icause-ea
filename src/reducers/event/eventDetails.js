const initialState = {
  loading: false,
  featuredEvents: []
};

const eventDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENT_DETAILS_REQUEST':
    case 'GET_EVENT_DETAILS_SUCCESS':
    case 'GET_EVENT_DETAILS_FAILED':
    case 'GET_FEATURED_EVENTS_FOR_EVENT_DETAILS_SUCCESS':
    case 'GET_FEATURED_EVENTS_FOR_EVENT_DETAILS_FAILED':
    case 'GET_FEATURED_EVENTS_FOR_EVENT_DETAILS_REQUEST':
    case 'PUBLISH_EVENT_REQUEST': {
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

export default eventDetails;
