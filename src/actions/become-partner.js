import axios from 'axios';
import { notification } from 'antd';

export const getStatesByPostCode = (values) => (dispatch, getState) => {
  dispatch({
    type: 'GET_STATES_LISTINGS_REQUEST',
    payload: { loading: true }
  });

  return axios({
    url: '/api/get_postcode',
    method: 'GET',
    params: {
      postcode: values
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_STATES_LISTINGS_SUCCESS',
      payload: {
        loading: false,
        states: data
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET STATES LISTINGS',
      description: error.message
    });

    return dispatch({
      type: 'GET_STATES_LISTINGS_FAILED',
      payload: { loading: false }
    });
  })
}

export const registerAsCompany = (hash) => (dispatch) => {
  dispatch({
    type: 'REGISTER_COMPANY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/registerAsCompany',
    method: 'POST',
    data: {
      ...hash
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (!flag) {
      const { message } = data;
      dispatch({
        type: 'REGISTER_COMPANY_FAILED',
        payload: { loading: false }
      });
      return Promise.reject(new Error(message && message.error && message.error.email ? message.error.email : message && message.error ? message.error : ''  ))
    } else {
      const { message } = data;
      notification.success({
        message: 'REGISTER COMPANY',
        description: message.message
      });
      return dispatch({
        type: 'REGISTER_COMPANY_SUCCESS',
        payload: {
          loading: false,
          status: true
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'REGISTER COMPANY',
      description: error.message
    });

    return dispatch({
      type: 'REGISTER_COMPANY_FAILED',
      payload: { loading: false }
    });
  })
}

export const verificationAction = (values, history, postCode) => (dispatch) => {
  dispatch({
    type: 'REGISTER_USER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/otpEmail',
    method: 'Post',
    data: {
      email: values?.email,
    }
  }).then((res) => {
    dispatch({
      type: 'REGISTER_USER_REQUEST',
      payload: { loading: false }
    });
    history.push({
      pathname: "/auth/verification", state: {
        "signup": values,
        "postCode": postCode,
        "bussiness": true
      }
    })
  })
    .catch(error => {
      notification.error({
        message: 'GET USER',
        description: error?.message
      });
    })
  //  window.location = `${process.env.REACT_APP_BACKEND_BASE_URL}logout`;
}

export const setSearchFilter = (keyword) => (dispatch, getState) => {
  dispatch({
    type: 'SET_SEARCH_FILTER_FOR_SCHOOL_LISTINGS',
    payload: {
      filter: {
        name: keyword
      }
    }
  });
}
