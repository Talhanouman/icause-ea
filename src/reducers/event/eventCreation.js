const initialState = {
  loading: false,
  categories: [],
  event_types: []
};

const eventCreation = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_EVENT_CREATION_SUCCESS':
    case 'GET_CATEGORIES_EVENT_CREATION_REQUEST':
    case 'GET_CATEGORIES_EVENT_CREATION_FAILED':
    case 'GET_EVENT_TYPE_CREATION_REQUEST':
    case 'GET_EVENT_TYPE_CREATION_SUCCESS':
    case 'GET_EVENT_TYPE_CREATION_FAILED':
    case 'PUBLISH_EVENT_SUCCESS':
    case 'PUBLISH_EVENT_FAILED':
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

export default eventCreation;
