const initialState = {
  loading: false,
  subscribeLoading: false,
  loadingForRecentlyUpdatedBlogs: false,
  blogDetails: {},
  blogLinks: {},
  numberOfPeople: -1,
  recentlyUpdatedBlogs: []
};

const blogDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BLOG_LINKS_FAILED':
    case 'GET_BLOG_LINKS_REQUEST':
    case 'GET_BLOG_LINKS_SUCCESS':
    case 'SUBSCRIBE_BLOG_DETAILS_FAILED':
    case 'SUBSCRIBE_BLOG_DETAILS_SUCCESS':
    case 'SUBSCRIBE_BLOG_DETAILS_REQUEST':
    case 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_BLOG_DETAILS_REQUEST':
    case 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_BLOG_DETAILS_FAILED':
    case 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_BLOG_DETAILS_SUCCESS':
    case 'GET_RECENTLY_UPDATED_BLOGS_FOR_BLOG_DETAILS_PAGE_SUCCESS':
    case 'GET_RECENTLY_UPDATED_BLOGS_FOR_BLOG_DETAILS_PAGE_REQUEST':
    case 'GET_RECENTLY_UPDATED_BLOGS_FOR_BLOG_DETAILS_PAGE_FAILED':
    case 'GET_BLOGS_DETAILS_REQUEST':
    case 'GET_BLOGS_DETAILS_SUCCESS':
    case 'GET_BLOGS_DETAILS_FAILED': {
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

export default blogDetails;
