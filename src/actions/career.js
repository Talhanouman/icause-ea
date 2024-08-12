import axios from 'axios';
import { notification } from 'antd';

export const getCurrentOpenings = () => (dispatch) => {
  dispatch({
    type: 'GET_CURRENT_OPENINGS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_current_openings',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_CURRENT_OPENINGS_SUCCESS',
      payload: {
        loading: false,
        openings: data
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET CURRENT OPENINGS',
      description: error.message
    });

    return dispatch({
      type: 'GET_CURRENT_OPENINGS_FAILED',
      payload: { loading: false }
    });
  })
}

export const applyJob = (hash) => (dispatch) => {
  const {
    first_name,
    last_name,
    phone_number,
    experience,
    address,
    video: upload_video,
    fileResume: upload_resume,
    id
  } = hash;

  const data = new FormData();
  data.append('job_id', id);
  data.append('first_name', first_name);
  data.append('last_name', last_name);
  data.append('phone_number', phone_number);
  data.append('address', address);
  data.append('upload_video', upload_video);
  data.append('upload_resume', upload_resume);
  data.append('experience', experience);
  data.append('short_des', 'job');

  dispatch({
    type: 'APPLY_JOB_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/apply_job',
    method: 'POST',
    data
  }).then(({ data }) => {
    const { flag } = data;
    if (flag) {
      notification.success({
        message: 'APPLY JOB',
        description: 'Job applied Successfully !'
      });
      return dispatch({
        type: 'APPLY_JOB_SUCCESS',
        payload: {
          loading: false
        }
      });
    } else {
      const { message } = data;
      const { error } = message;
      const errorsList = Object.values(error);
      
      notification.error({
        message: 'APPLY JOB',
        description: errorsList
      });
      return dispatch({
        type: 'APPLY_JOB_FAILED',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'APPLY JOB',
      description: error.message
    });

    return dispatch({
      type: 'APPLY_JOB_FAILED',
      payload: { loading: false }
    });
  })
}