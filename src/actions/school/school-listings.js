import axios from 'axios';
import { notification } from 'antd';

export const getStatesByPostCode = () => (dispatch, getState) => {
  const { school } = getState();
  const { schoolListings } = school;
  const { filter } = schoolListings;

  dispatch({
    type: 'GET_STATES_LISTINGS_REQUEST',
    payload: { loading: true }
  });

  return axios({
    url: '/api/get_postcode',
    method: 'GET',
    params: {
      postcode: filter.name
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

export const getSchoolListings = (company_type, from) => (dispatch, getState) => {
  const { school } = getState();
  const { schoolListings } = school;
  const { pagination, filter } = schoolListings;

  dispatch({
    type: 'GET_SCHOOL_LISTINGS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/list_company_by_company_types',
    method: 'POST',
    data: {
      company_type,
      from,
      page: pagination.pageNumber,
      name: filter.name
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_SCHOOL_LISTINGS_SUCCESS',
      payload: {
        loading: false,
        schools: data
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET SCHOOL LISTINGS',
      description: error.message
    });

    return dispatch({
      type: 'GET_SCHOOL_LISTINGS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getPledgeOfTheDay = () => (dispatch) => {
  dispatch({
    type: 'GET_PLEDGE_OF_THE_DAY_REQUEST',
    payload: { loadingForPledgeOfTheDay: true }
  });
  return axios({
    url: '/api/pledge_of_the_day',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_SUCCESS',
      payload: {
        pledgeOfTheDay: data,
        loadingForPledgeOfTheDay: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET PLEDGE OF THE DAY',
      description: error.message
    });

    return dispatch({
      type: 'GET_PLEDGE_OF_THE_DAY_FAILED',
      payload: { loadingForPledgeOfTheDay: false }
    });
  })
}

export const getSchoolListingsByPostcode = (company_type, postcode) => (dispatch, getState) => {
  const { school } = getState();
  const { schoolListings } = school;
  const { pagination } = schoolListings;

  dispatch({
    type: 'GET_SCHOOL_LISTINGS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_company_by_postcode',
    method: 'GET',
    params: {
      postcode: postcode,
      industry: company_type,
      page: pagination?.pageNumber,
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_SCHOOL_LISTINGS_SUCCESS',
      payload: {
        loading: false,
        schools: data?.company
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET SCHOOL LISTINGS',
      description: error.message
    });

    return dispatch({
      type: 'GET_SCHOOL_LISTINGS_FAILED',
      payload: { loading: false }
    });
  })
}

export const shareCompany = (campaign_id, userIdOrBrowserInfo, shared_on) => (dispatch, getState) => {
  dispatch({
    type: 'SHARE_INDUSTRY_LISTING_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/share',
    method: 'POST',
    params: {
      from: userIdOrBrowserInfo.toString(),
      to: campaign_id.toString(),
      type: 'industry',
      shared_on
    }
  }).then(() => {
    return dispatch({
      type: 'SHARE_INDUSTRY_LISTING_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'SHARE CAMPAIGN',
      description: error.message
    });

    return dispatch({
      type: 'SHARE_INDUSTRY_LISTING_FAILED',
      payload: { loading: false }
    });
  })
}

export const setPage = (pageNumber) => (dispatch, getState) => {
  const { school } = getState();
  const { schoolListings } = school;
  const { pagination } = schoolListings;
  dispatch({
    type: 'SET_PAGINATION_FOR_SCHOOL_LISTINGS',
    payload: {
      pagination: {
        ...pagination,
        pageNumber
      }
    }
  });
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

export const followCompanyType = (campaign_id, status, type, userOrBrowserInfo) => (dispatch) => {
  dispatch({
    type: 'FOLLOW_COMPANY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/follow',
    method: 'POST',
    data: {
      from: userOrBrowserInfo.toString(),
      to: campaign_id.toString(),
      status,
      type: 'industry'
    }
  }).then(() => {
    return dispatch({
      type: 'FOLLOW_COMPANY_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'FOLLOW COMPANY TYPE',
      description: error.message
    });

    return dispatch({
      type: 'FOLLOW_COMPANY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getFeaturedCampaigns = (industry) => (dispatch) => {
  dispatch({
    type: 'GET_FEATURED_CAMPAIGNS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_featured_campaigns',
    method: 'GET',
    params: {
      industry
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_FEATURED_CAMPAIGNS_SUCCESS',
      payload: {
        loading: false,
        featuredCampaigns: data
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED CAMPAIGNS',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_CAMPAIGNS_FAILED',
      payload: { loading: false }
    });
  })
}