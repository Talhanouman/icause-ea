import axios from 'axios';
import { notification } from 'antd';

export const getRecentCauses = () => (dispatch, getState) => {
  const { campaign } = getState();
  const { campaignListings } = campaign;
  const { pagination } = campaignListings;

  dispatch({
    type: 'GET_RECENT_CAUSES_FOR_CAMPAIGN_LISTINGS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_recent_causes',
    method: 'GET',
    params: {
      page: pagination.pageNumber
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_CAMPAIGN_LISTINGS_SUCCESS',
      payload: {
        recentCauses: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_CAMPAIGN_LISTINGS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getSearchedCampaignByName = (searchedQuery) => (dispatch, getState) => {
  

  dispatch({
    type: 'GET_SEARCHED_CAMPAIGN_BY_NAME_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/search_campaign_by_name',
    method: 'POST',
    data: {
      campaign_name: searchedQuery,
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_SEARCHED_CAMPAIGN_BY_NAME_SUCCESS',
      payload: {
        searchedCampaign: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET SEARCHED CAMPAIGN',
      description: error.message
    });

    return dispatch({
      type: 'GET_SEARCHED_CAMPAIGN_BY_NAME_FAILED',
      payload: { loading: false }
    });
  })
}


export const setPage = (pageNumber) => (dispatch, getState) => {
  const { campaign } = getState();
  const { campaignListings } = campaign;
  const { pagination } = campaignListings;

  dispatch({
    type: 'SET_PAGINATION_FOR_CAMPAIGN_LISTINGS',
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
    type: 'RESET_PAGINATION_FOR_CAMPAIGN_LISTINGS',
    payload: {
      pagination: {
        pageNumber: 1,
        pageSize: 9
      }
    }
  });
}
