import axios from 'axios';
import { notification } from 'antd';

export const getCustomerReviews = () => (dispatch) => {
  dispatch({
    type: 'GET_CUSTOMER_REVIEWS_REQUEST',
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
        type: 'GET_CUSTOMER_REVIEWS_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_CUSTOMER_REVIEWS_SUCCESS',
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
      type: 'GET_CUSTOMER_REVIEWS_FAILED',
      payload: { loading: false }
    });
  })
}