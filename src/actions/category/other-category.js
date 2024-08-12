import axios from 'axios';
import { notification } from 'antd';

export const getPledgeOfTheDay = (subcategory_id) => (dispatch) => {
  dispatch({
    type: 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_pladge_campaigns_by_subcategory_id',
    method: 'POST',
    data: {
      subcategory_id
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_SUCCESS',
      payload: {
        pledgeOfTheDay: data && data.campaign ? data.campaign : [],
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET PLEDGE OF THE DAY',
      description: error.message
    });

    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getSubCategoryDetails = (category_id) => (dispatch) => {
  dispatch({
    type: 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_category_by_id',
    method: 'POST',
    data: {
      category_id
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_SUCCESS',
      payload: {
        subCategoryHash: data || {},
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET SUB CATEGORY DETAILS',
      description: error.message
    });

    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FOR_SUB_CATEGORY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getFeaturedCampaignsForCategoryId = (categoryID) => (dispatch) => {
  dispatch({
    type: 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_campaigns_by_category_id',
    method: 'POST',
    data: {
      categoryID,
      campaignID: '',
      limit: 9
    }
  }).then(({ data: response }) => {
    const { flag, data } = response;
    if (!flag) {
      notification.error({
        message: 'GET FEATURED CAMPAIGNS'
      });
      dispatch({
        type: 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_SUCCESS',
        payload: {
          loading: false,
          featuredCampaigns: data && data.campaigns ? data.campaigns : []
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED CAMPAIGNS',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_CAMPAIGNS_FOR_SUB_CATEGORY_ID_FAILED',
      payload: { loading: false }
    });
  })
}

export const getTopCampaignsByCategoryId = (categoryID) => (dispatch) => {
  dispatch({
    type: 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_top_campaigns_by_category_id',
    method: 'POST',
    data: {
      categoryID,
      campaignID: '',
      limit: 3
    }
  }).then(({ data: response }) => {
    const { flag, data } = response;
    if (!flag) {
      notification.error({
        message: 'GET TOP CAMPAIGNS'
      });
      dispatch({
        type: 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_SUCCESS',
        payload: {
          loading: false,
          topCampaigns: data && data.campaigns ? data.campaigns : []
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET TOP CAMPAIGNS',
      description: error.message
    });

    return dispatch({
      type: 'GET_TOP_CAMPAIGNS_FOR_SUB_CATEGORY_ID_FAILED',
      payload: { loading: false }
    });
  })
}

export const getCustomerReviews = () => (dispatch) => {
  dispatch({
    type: 'GET_CATEGORY_FOR_SUB_CATEGORY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_top_rated_reviews',
    method: 'GET'
  }).then(({ data: response }) => {
    const { flag, data } = response;
    if (!flag) {
      notification.error({
        message: 'GET CUSTOMER REVIEWS'
      });
      dispatch({
        type: 'GET_CATEGORY_FOR_SUB_CATEGORY_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_CATEGORY_FOR_SUB_CATEGORY_SUCCESS',
        payload: {
          loading: false,
          customerReviews: data
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET CUSTOMER REVIEWS',
      description: error.message
    });

    return dispatch({
      type: 'GET_CATEGORY_FOR_SUB_CATEGORY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getSubCategories = (category_id) => (dispatch) => {
  dispatch({
    type: 'GET_SUB_CATEGORY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_sub_categories',
    method: 'POST',
    data: {
      category_id
    }
  }).then(({ data: response }) => {
    const { flag, data } = response;
    if (!flag) {
      notification.error({
        message: 'GET CATEGORIES'
      });
      dispatch({
        type: 'GET_SUB_CATEGORY_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_SUB_CATEGORY_SUCCESS',
        payload: {
          loading: false,
          subCategories: data
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET SUB CATEGORIES',
      description: error.message
    });

    return dispatch({
      type: 'GET_SUB_CATEGORY_FAILED',
      payload: { loading: false }
    });
  })
}