import axios from 'axios';
import { notification } from 'antd';

export const sendMessageForContact = (hash) => (dispatch) => {
  dispatch({
    type: 'CONTACT_US_FORM_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/contact_us',
    method: 'POST',
    data: {
      ...hash
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (!flag) {
      notification.error({
        message: 'CONTACT US'
      });
      dispatch({
        type: 'CONTACT_US_FORM_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      const { message } = data;
      notification.success({
        message: 'CONTACT US',
        description: message.message
      });
      return dispatch({
        type: 'CONTACT_US_FORM_SUCCESS',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'CONTACT US',
      description: error.message
    });

    return dispatch({
      type: 'CONTACT_US_FORM_FAILED',
      payload: { loading: false }
    });
  })
}