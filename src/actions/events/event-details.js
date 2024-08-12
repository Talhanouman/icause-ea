import axios from 'axios';
import { notification } from 'antd';

export const getFeaturedEvents = () => (dispatch, getState) => {
  const { event } = getState();
  const { eventManager } = event;
  const { pagination } = eventManager;

  dispatch({
    type: 'GET_FEATURED_EVENTS_FOR_EVENT_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_featured_events',
    method: 'GET',
    params: {
      page: pagination.pageNumber
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { campaigns } = data || {};
    return dispatch({
      type: 'GET_FEATURED_EVENTS_FOR_EVENT_DETAILS_SUCCESS',
      payload: {
        featuredEvents: { 
          ...campaigns
        },
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED EVENTS',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_EVENTS_FOR_EVENT_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getEventDetails = (event_id) => (dispatch) => {
  dispatch({
    type: 'GET_EVENT_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_event_by_id',
    method: 'POST',
    data: {
      event_id
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_EVENT_DETAILS_SUCCESS',
      payload: {
        event: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET EVENT',
      description: error.message
    });

    return dispatch({
      type: 'GET_EVENT_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}