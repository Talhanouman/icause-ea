import axios from 'axios';
import { notification } from 'antd';

export const getFeaturedEvents = () => (dispatch, getState) => {
  const { event } = getState();
  const { eventManager } = event;
  const { pagination } = eventManager;

  dispatch({
    type: 'GET_FEATURED_EVENTS_REQUEST',
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
      type: 'GET_FEATURED_EVENTS_SUCCESS',
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
      type: 'GET_FEATURED_EVENTS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getCategories = () => (dispatch) => {
  dispatch({
    type: 'GET_CATEGORIES_EVENT_MANAGER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_all_categories',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { categories } = data;
    return dispatch({
      type: 'GET_CATEGORIES_EVENT_MANAGER_SUCCESS',
      payload: {
        categories,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET CATEGORIES',
      description: error.message
    });

    return dispatch({
      type: 'GET_CATEGORIES_EVENT_MANAGER_FAILED',
      payload: { loading: false }
    });
  })
}

export const getEventTypes = () => (dispatch) => {
  dispatch({
    type: 'GET_EVENT_TYPE_MANAGER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_event_types',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { event_types } = data;
    return dispatch({
      type: 'GET_EVENT_TYPE_MANAGER_SUCCESS',
      payload: {
        event_types,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET EVENT TYPE',
      description: error.message
    });

    return dispatch({
      type: 'GET_EVENT_TYPE_MANAGER_FAILED',
      payload: { loading: false }
    });
  })
}

export const searchEvents = () => (dispatch, getState) => {
  const { event } = getState();
  const { eventManager } = event;
  const { filters } = eventManager;

  dispatch({
    type: 'SEARCH_EVENTS_REQUEST',
    payload: { loadingForSearch: true }
  });
  return axios({
    url: '/api/search_event_by_name_and_type',
    method: 'POST',
    data: {
      ...filters
    }
  }).then(({ data: response }) => {
    const { flag } = response;
    if (flag) {
      return dispatch({
        type: 'SEARCH_EVENTS_SUCCESS',
        payload: {
          searchedEvents: response.data,
          loadingForSearch: false
        }
      });
    } else {
      const { message } = response;
      notification.error({
        message: 'SEARCH EVENTS',
        description: message && message.error ? message.error : 'Could not fetch requested events !'
      });
      return dispatch({
        type: 'SEARCH_EVENTS_FAILED',
        payload: { loadingForSearch: false }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'SEARCH EVENTS',
      description: error.message
    });

    return dispatch({
      type: 'SEARCH_EVENTS_FAILED',
      payload: { loadingForSearch: false }
    });
  })
}

export const resetFilters = () => (dispatch, getState) => {
  dispatch({
    type: 'RESET_FILTERS_EVENT_MANAGER',
    payload: {
      filters: { 
        name: '',
        type: ''
      },
      searchedEvents: []
    }
  });
}

export const setSearchFilter = ({ key, value }) => (dispatch, getState) => {
  const { event } = getState();
  const { eventManager } = event;
  const { filters } = eventManager;

  if (value) filters[key] = value;
  else filters[key] = '';

  dispatch({
    type: 'SET_SEARCH_FILTER',
    payload: {
      filters: { ...filters }
    }
  });
}