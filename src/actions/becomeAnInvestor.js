import axios from 'axios';
import { notification } from 'antd';

export const registerInvestor = (hash) => (dispatch) => {
  dispatch({
    type: 'REGISTER_INVESTOR_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/be_an_investor',
    method: 'POST',
    data: {
      ...hash
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (!flag) {
      dispatch({
        type: 'REGISTER_INVESTOR_FAILED',
        payload: { loading: false }
      });
    } else {
      const { message } = data;
      notification.success({
        message: 'REGISTER INVESTOR',
        description: message.message
      });
      return dispatch({
        type: 'REGISTER_INVESTOR_SUCCESS',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'REGISTER INVESTOR',
      description: error.message
    });

    return dispatch({
      type: 'REGISTER_INVESTOR_FAILED',
      payload: { loading: false }
    });
  })
}