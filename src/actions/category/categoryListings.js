import axios from 'axios';
import { notification } from 'antd';

export const getCustomerReviews = () => (dispatch) => {
  dispatch({
    type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_REQUEST',
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
        type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_SUCCESS',
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
      type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_FAILED',
      payload: { loading: false }
    });
  })
}

export const getCategories = () => (dispatch) => {
  dispatch({
    type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_all_categories',
    method: 'GET'
  }).then(({ data: response }) => {
    const { flag, data } = response;
    if (!flag) {
      notification.error({
        message: 'GET CATEGORIES'
      });
      dispatch({
        type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_SUCCESS',
        payload: {
          loading: false,
          categories: data && data.categories ? data.categories : []
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET CATEGORIES',
      description: error.message
    });

    return dispatch({
      type: 'GET_CATEGORY_FOR_CATEGORY_LISTING_FAILED',
      payload: { loading: false }
    });
  })
}

export const getPledgeOfTheDay = () => (dispatch) => {
  dispatch({
    type: 'GET_PLEDGE_OF_THE_DAY_FOR_CATEGORY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/pledge_of_the_day',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FOR_CATEGORY_SUCCESS',
      payload: {
        pledgeOfTheDay: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET PLEDGE OF THE DAY',
      description: error.message
    });

    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FOR_CATEGORY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getFeaturedCampaigns = (industry) => (dispatch) => {
  dispatch({
    type: 'GET_FEATURED_CAMPAIGNS_FOR_CATEGORY_LISTINGS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_featured_campaigns',
    method: 'GET',
    params: {
      industry
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_FEATURED_CAMPAIGNS_FOR_CATEGORY_LISTINGS_SUCCESS',
      payload: {
        loading: false,
        featuredCampaigns: data
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED CAMPAIGNS',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_CAMPAIGNS_FOR_CATEGORY_LISTINGS_FAILED',
      payload: { loading: false }
    });
  })
}