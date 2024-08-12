const initialState = {
  loading: false,
  blogs: {},
  featuredArticle: {},
  numberOfPeople: 0,
  pagination: {
    pageNumber: 1,
    pageSize: 6
  }
};

const blogListings = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FEATURED_ARTICLES_SUCCESS':
    case 'GET_FEATURED_ARTICLES_REQUEST':
    case 'GET_FEATURED_ARTICLES_FAILED':
    case 'GET_PEOPLE_NEEDED_FOR_HELP_REQUEST':
    case 'GET_PEOPLE_NEEDED_FOR_HELP_SUCCESS':
    case 'GET_PEOPLE_NEEDED_FOR_HELP_FAILED':
    case 'RESET_PAGINATION_FOR_BLOG_LISTINGS':
    case 'SET_PAGINATION_FOR_BLOG_LISTINGS':
    case 'GET_BLOGS_REQUEST':
    case 'GET_BLOGS_SUCCESS':
    case 'GET_BLOGS_FAILED': {
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

export default blogListings;
