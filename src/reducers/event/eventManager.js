const initialState = {
  loading: false,
  loadingForSearch: false,
  featuredEvents: {},
  searchedEvents: [],
  filters: {
    name: '',
    type: ''
  },
  pagination: {
    pageNumber: 1,
    pageSize: 3
  }
};

const eventManager = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_EVENT_MANAGER_FAILED':
    case 'GET_CATEGORIES_EVENT_MANAGER_REQUEST':
    case 'GET_EVENT_TYPE_MANAGER_REQUEST':
    case 'GET_EVENT_TYPE_MANAGER_SUCCESS':
    case 'GET_EVENT_TYPE_MANAGER_FAILED':
    case 'GET_CATEGORIES_EVENT_MANAGER_SUCCESS':
    case 'RESET_FILTERS_EVENT_MANAGER':
    case 'SET_SEARCH_FILTER':
    case 'SEARCH_EVENTS_REQUEST':
    case 'SEARCH_EVENTS_FAILED':
    case 'SEARCH_EVENTS_SUCCESS':
    case 'GET_FEATURED_EVENTS_REQUEST':
    case 'GET_FEATURED_EVENTS_FAILED':
    case 'GET_FEATURED_EVENTS_SUCCESS': {
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

export default eventManager;
