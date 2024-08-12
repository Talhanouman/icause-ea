const initialState = {
  loading: false,
  news: [],
  pagination: {
    pageNumber: 1,
    pageSize: 8
  },
  view_more: false
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW_MORE_FLAG_FOR_NEWS_LISTINGS':
    case 'GET_BUSINESS_NEWS_FAILED':
    case 'GET_BUSINESS_NEWS_SUCCESS':
    case 'GET_BUSINESS_NEWS_REQUEST':
    case 'SET_SEARCH_FILTER_FOR_NEWS_LISTINGS':
    case 'SET_PAGINATION_FOR_NEWS':
    case 'GET_NEWS_REQUEST':
    case 'GET_NEWS_SUCCESS':
    case 'GET_NEWS_FAILED': {
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

export default news;
