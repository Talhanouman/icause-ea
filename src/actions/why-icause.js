import axios from 'axios';
import { notification } from 'antd';

export const getCombinedStatsAboutIcause = () => (dispatch, getState) => {
  dispatch({
    type: 'GET_COMBINED_STATS_FOR_WHY_ICAUSE_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_charity_with_mission_states',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_COMBINED_STATS_FOR_WHY_ICAUSE_SUCCESS',
      payload: {
        stats: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET STATS FOR ICAUSE',
      description: error.message
    });

    return dispatch({
      type: 'GET_COMBINED_STATS_FOR_WHY_ICAUSE_FAILED',
      payload: { loading: false }
    });
  })
}