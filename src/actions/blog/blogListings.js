import axios from 'axios';
import { notification } from 'antd';

export const getBlogs = () => (dispatch, getState) => {
  const { blog } = getState();
  const { blogListings } = blog;
  const { pagination } = blogListings;

  dispatch({
    type: 'GET_BLOGS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_blogs',
    method: 'GET',
    params: {
      page: pagination.pageNumber
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_BLOGS_SUCCESS',
      payload: {
        blogs: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET BLOGS',
      description: error.message
    });

    return dispatch({
      type: 'GET_BLOGS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getPeopleNeededForHelp = () => (dispatch) => {
  dispatch({
    type: 'GET_PEOPLE_NEEDED_FOR_HELP_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/peoples_need_ours_help',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { number_of_peopels } = data;
    return dispatch({
      type: 'GET_PEOPLE_NEEDED_FOR_HELP_SUCCESS',
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
      type: 'GET_PEOPLE_NEEDED_FOR_HELP_FAILED',
      payload: { loading: false }
    });
  })
}

export const getFeaturedArticles = () => (dispatch) => {
  dispatch({
    type: 'GET_FEATURED_ARTICLES_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_featured_blog',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_FEATURED_ARTICLES_SUCCESS',
      payload: {
        featuredArticle: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED ARTICLES',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_ARTICLES_FAILED',
      payload: { loading: false }
    });
  })
}

export const setPage = (pageNumber) => (dispatch, getState) => {
  const { blog } = getState();
  const { blogListings } = blog;
  const { pagination } = blogListings;

  dispatch({
    type: 'SET_PAGINATION_FOR_BLOG_LISTINGS',
    payload: {
      pagination: {
        ...pagination,
        pageNumber
      }
    }
  });
}

export const resetPagination = () => (dispatch, getState) => {
  dispatch({
    type: 'RESET_PAGINATION_FOR_BLOG_LISTINGS',
    payload: {
      pagination: {
        pageNumber: 1,
        pageSize: 6
      }
    }
  });
}
