const initialState = {
  loading: false,
  loadingForRecentCauses: false,
  loadingForAddingReview: false,
  recentCauses: {},
  campaign: {},
  comments: [],
  reviews: []
};

const campaignDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'SHARE_CAMPAIGN_SUCCESS':
    case 'SHARE_CAMPAIGN_REQUEST':
    case 'SHARE_CAMPAIGN_FAILED':
    case 'ANONYMOUS_POST_COMMENT_FOR_CAMPAIGN_DETAILS_REQUEST':
    case 'ANONYMOUS_POST_COMMENT_FOR_CAMPAIGN_DETAILS_SUCCESS':
    case 'ANONYMOUS_POST_COMMENT_FOR_CAMPAIGN_DETAILS_FAILED':
    case 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_SUCCESS':
    case 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_REQUEST':
    case 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_FAILED':
    case 'GET_REVIEWS_FOR_CAMPAIGN_DETAILS_REQUEST':
    case 'GET_REVIEWS_FOR_CAMPAIGN_DETAILS_SUCCESS':
    case 'GET_REVIEWS_FOR_CAMPAIGN_DETAILS_FAILED':
    case 'POST_COMMENT_FOR_CAMPAIGN_DETAILS_FAILED':
    case 'POST_COMMENT_FOR_CAMPAIGN_DETAILS_SUCCESS':
    case 'POST_COMMENT_FOR_CAMPAIGN_DETAILS_REQUEST':
    case 'GET_COMMENTS_FOR_CAMPAIGN_DETAILS_REQUEST':
    case 'GET_COMMENTS_FOR_CAMPAIGN_DETAILS_SUCCESS':
    case 'GET_COMMENTS_FOR_CAMPAIGN_DETAILS_FAILED':
    case 'GET_RECENT_CAUSES_FOR_CAMPAIGN_DETAILS_PAGE_SUCCESS':
    case 'GET_RECENT_CAUSES_FOR_CAMPAIGN_DETAILS_PAGE_FAILED':
    case 'GET_RECENT_CAUSES_FOR_CAMPAIGN_DETAILS_PAGE_REQUEST':
    case 'GET_CAMPAIGN_DETAILS_REQUEST':
    case 'GET_CAMPAIGN_DETAILS_SUCCESS':
    case 'GET_CAMPAIGN_DETAILS_FAILED': {
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

export default campaignDetails;
