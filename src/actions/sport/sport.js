import axios from 'axios';
import { notification } from 'antd';

export const getFeaturedIndustries = (industry) => (dispatch) => {
  dispatch({
    type: 'GET_FEATURED_ORGANIZATION_FOR_ORGANIZATION_MAIN_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/featured_industry',
    method: 'POST',
    params: {
      industry
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { charity } = data;
    return dispatch({
      type: 'GET_FEATURED_ORGANIZATION_FOR_ORGANIZATION_MAIN_SUCCESS',
      payload: {
        loading: false,
        featuredOrganizations: charity
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED ORGANIZATION',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_ORGANIZATION_FOR_ORGANIZATION_MAIN_FAILED',
      payload: { loading: false }
    });
  })
}

export const getOrganizationStats = (industry) => (dispatch) => {
  dispatch({
    type: 'GET_STATS_FOR_SCHOOL_MAIN_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_charity_with_mission_states',
    method: 'GET',
    params: {
      industry
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_STATS_FOR_SCHOOL_MAIN_SUCCESS',
      payload: {
        loading: false,
        stats: data || {}
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET STATS FOR ORGANIZATION',
      description: error.message
    });

    return dispatch({
      type: 'GET_STATS_FOR_SCHOOL_MAIN_FAILED',
      payload: { loading: false }
    });
  })
}

export const getRecentCauses = (industry) => (dispatch) => {
  dispatch({
    type: 'GET_RECENT_CAUSES_FOR_ORGANIZATION_MAIN_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_recent_causes',
    method: 'GET',
    params: {
      industry
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_ORGANIZATION_MAIN_SUCCESS',
      payload: {
        recentCauses: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_ORGANIZATION_MAIN_FAILED',
      payload: { loading: false }
    });
  })
}