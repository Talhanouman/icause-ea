const initialState = {
  loading: false
};

const subCategoryDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_SUCCESS':
    case 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_FAILED':
    case 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_REQUEST':
    case 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_FAILED':
    case 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_REQUEST':
    case 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_SUCCESS':
    case 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_REQUEST':
    case 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_FAILED':
    case 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_SUCCESS': {
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

export default subCategoryDetails;
