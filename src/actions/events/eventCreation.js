import axios from 'axios';
import { notification } from 'antd';

export const publishEvent = (eventInformation) => (dispatch) => {
  dispatch({
    type: 'PUBLISH_EVENT_REQUEST',
    payload: { loading: true }
  });

  const {
    category,
    fundraise_as,
    visitors,
    title,
    story,
    lat,
    lng,
    address,
    start_date,
    end_date,
    event_cover,
    who_are_raising
  } = eventInformation;

  const data = new FormData();
  data.append('category', category);
  data.append('fundraise_as', fundraise_as);
  data.append('visitors', visitors);
  data.append('title', title);
  data.append('story', story);
  data.append('lat', lat);
  data.append('lng', lng);
  data.append('address', address);
  data.append('start_date', start_date);
  data.append('end_date', end_date);
  data.append('event_cover', event_cover);
  data.append('who_are_raising', who_are_raising);

  return axios({
    url: '/api/create_event',
    method: 'POST',
    data
  }).then(({ data }) => {
    const { flag } = data;
    if (flag) {
      const { message } = data;

      notification.success({
        message: 'PUBLISH EVENT',
        description: message.message
      });
      return dispatch({
        type: 'PUBLISH_EVENT_SUCCESS',
        payload: {
          loading: false
        }
      });
    } else {
      notification.error({
        message: 'PUBLISH EVENT',
        description: 'Event Could not be created successfully !'
      });
      return dispatch({
        type: 'PUBLISH_EVENT_FAILED',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'PUBLISH EVENT',
      description: error.message
    });

    return dispatch({
      type: 'PUBLISH_EVENT_FAILED',
      payload: { loading: false }
    });
  })
}

export const getCategories = () => (dispatch) => {
  dispatch({
    type: 'GET_CATEGORIES_EVENT_CREATION_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_all_categories',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { categories } = data;
    return dispatch({
      type: 'GET_CATEGORIES_EVENT_CREATION_SUCCESS',
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
      type: 'GET_CATEGORIES_EVENT_CREATION_FAILED',
      payload: { loading: false }
    });
  })
}


export const getEventTypes = () => (dispatch) => {
  dispatch({
    type: 'GET_EVENT_TYPE_CREATION_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_event_types',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { event_types } = data;
    return dispatch({
      type: 'GET_EVENT_TYPE_CREATION_SUCCESS',
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
      type: 'GET_EVENT_TYPE_CREATION_FAILED',
      payload: { loading: false }
    });
  })
}