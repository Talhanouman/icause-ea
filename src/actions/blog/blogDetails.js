import axios from 'axios';
import { notification } from 'antd';

export const getBlogDetails = (blog_id) => (dispatch, getState) => {
  dispatch({
    type: 'GET_BLOGS_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_blog_by_id',
    method: 'POST',
    data: {
      blog_id
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_BLOGS_DETAILS_SUCCESS',
      payload: {
        blogDetails: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET BLOG DETAILS',
      description: error.message
    });

    return dispatch({
      type: 'GET_BLOGS_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getPeopleNeededForHelp = () => (dispatch) => {
  dispatch({
    type: 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_BLOG_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/peoples_need_ours_help',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { number_of_peopels } = data;
    return dispatch({
      type: 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_BLOG_DETAILS_SUCCESS',
      payload: {
        numberOfPeople: number_of_peopels,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET PEOPLE NEEDED FOR HELP',
      description: error.message
    });

    return dispatch({
      type: 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_BLOG_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const subscribe = ({ email }) => (dispatch) => {
  dispatch({
    type: 'SUBSCRIBE_BLOG_DETAILS_REQUEST',
    payload: { subscribeLoading: true }
  });
  return axios({
    url: '/api/subscribe_our_newsletter',
    method: 'POST',
    data: {
      email
    }
  }).then(({ data: response }) => {
    const { flag } = response;
    if (flag) {
      notification.success({
        message: 'SUBSCRIBE',
        description: 'Subscribed Successfully !'
      });
      return dispatch({
        type: 'SUBSCRIBE_BLOG_DETAILS_SUCCESS',
        payload: {
          subscribeLoading: false
        }
      });
    } else {
      const { message } = response;
      const { error } = message || {};
      const { email } = error || {};
      notification.error({
        message: 'SUBSCRIBE',
        description: email && email.length ? email[0] : 'Cannot Subscribe'
      });
      return dispatch({
        type: 'SUBSCRIBE_BLOG_DETAILS_FAILED',
        payload: {
          subscribeLoading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'SUBSCRIBE',
      description: error.message
    });

    return dispatch({
      type: 'SUBSCRIBE_BLOG_DETAILS_FAILED',
      payload: { subscribeLoading: false }
    });
  })
}

export const getBlogLinks = ({ blogId }) => (dispatch) => {
  dispatch({
    type: 'GET_BLOG_LINKS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_blog_link',
    method: 'POST',
    data: {
      blog_id: blogId
    }
  }).then(({ data: response }) => {
    return dispatch({
      type: 'GET_BLOG_LINKS_SUCCESS',
      payload: {
        loading: false,
        blogLinks: response && response.data ? response.data : {}
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET BLOG LINKS',
      description: error.message
    });

    return dispatch({
      type: 'GET_BLOG_LINKS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getRecentlyUpdatedBlogs = () => (dispatch) => {
  
  dispatch({
    type: 'GET_RECENTLY_UPDATED_BLOGS_FOR_BLOG_DETAILS_PAGE_REQUEST',
    payload: { loadingForRecentlyUpdatedBlogs: true }
  });
  return axios({
    url: '/api/get_blogs',
    method: 'GET',
    params: {
      page: 1
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_RECENTLY_UPDATED_BLOGS_FOR_BLOG_DETAILS_PAGE_SUCCESS',
      payload: {
        recentlyUpdatedBlogs: data,
        loadingForRecentlyUpdatedBlogs: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENTLY UPDATED BLOGS',
      description: error.message
    });

    return dispatch({
      type: 'GET_RECENTLY_UPDATED_BLOGS_FOR_BLOG_DETAILS_PAGE_FAILED',
      payload: { loadingForRecentlyUpdatedBlogs: false }
    });
  })
}
