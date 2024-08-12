import axios from 'axios';
import { notification } from 'antd';

export const getNews = () => (dispatch, getState) => {
  const { news } = getState();
  const { pagination, filter } = news;

  dispatch({
    type: 'GET_NEWS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_news',
    method: 'GET',
    params: {
      page: pagination.pageNumber,
      title: filter && filter.name ? filter.name : ''
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_NEWS_SUCCESS',
      payload: {
        news: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET NEWS',
      description: error.message
    });

    return dispatch({
      type: 'GET_NEWS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getBusinessNews = () => (dispatch, getState) => {
  const { news } = getState();
  const { view_more } = news;

  dispatch({
    type: 'GET_BUSINESS_NEWS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_business_news',
    method: 'GET',
    params: {
      view_more
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_BUSINESS_NEWS_SUCCESS',
      payload: {
        businessNews: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET NEWS',
      description: error.message
    });

    return dispatch({
      type: 'GET_BUSINESS_NEWS_FAILED',
      payload: { loading: false }
    });
  })
}

export const setViewMoreFlag = (view_more) => (dispatch, getState) => {
  dispatch({
    type: 'SET_VIEW_MORE_FLAG_FOR_NEWS_LISTINGS',
    payload: {
      view_more
    }
  });
}

export const setSearchFilter = (keyword) => (dispatch, getState) => {
  dispatch({
    type: 'SET_SEARCH_FILTER_FOR_NEWS_LISTINGS',
    payload: {
      filter: {
        name: keyword
      }
    }
  });
}

export const setPage = (pageNumber) => (dispatch, getState) => {
  const { news } = getState();
  const { pagination } = news;

  dispatch({
    type: 'SET_PAGINATION_FOR_NEWS',
    payload: {
      pagination: {
        ...pagination,
        pageNumber
      }
    }
  });
}