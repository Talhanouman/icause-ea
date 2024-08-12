import axios from 'axios';
import { notification } from 'antd';

export const getCharity = (school_id, from) => (dispatch) => {
  dispatch({
    type: 'GET_CHARITY_BY_ID_FOR_CHARITY_DETAILS_PAGE_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_charity_by_id',
    method: 'POST',
    data: {
      charity_id: school_id,
      from
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { charity } = data || {};
    return dispatch({
      type: 'GET_CHARITY_BY_ID_FOR_CHARITY_DETAILS_PAGE_SUCCESS',
      payload: {
        charity,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET CHARITY BY ID',
      description: error.message
    });

    return dispatch({
      type: 'GET_CHARITY_BY_ID_FOR_CHARITY_DETAILS_PAGE_FAILED',
      payload: { loading: false }
    });
  })
}

export const getPeopleNeededForHelp = () => (dispatch) => {
  dispatch({
    type: 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_CHARITY_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/peoples_need_ours_help',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    const { number_of_peopels } = data;
    return dispatch({
      type: 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_CHARITY_DETAILS_SUCCESS',
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
      type: 'GET_PEOPLE_NEEDED_FOR_HELP_FOR_CHARITY_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const getCustomerReviews = () => (dispatch) => {
  dispatch({
    type: 'GET_CUSTOMER_REVIEWS_FOR_CHARITY_DETAILS_REQUEST',
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
        type: 'GET_CUSTOMER_REVIEWS_FOR_CHARITY_DETAILS_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      return dispatch({
        type: 'GET_CUSTOMER_REVIEWS_FOR_CHARITY_DETAILS_SUCCESS',
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
      type: 'GET_CUSTOMER_REVIEWS_FOR_CHARITY_DETAILS__FAILED',
      payload: { loading: false }
    });
  })
}

export const enquireQuery = (hash) => (dispatch) => {
  dispatch({
    type: 'ENQUIRE_QUERY_CHARITY_FORM_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/enquiry_now',
    method: 'POST',
    data: {
      ...hash
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (!flag) {
      notification.error({
        message: 'ENQUIRE'
      });
      dispatch({
        type: 'ENQUIRE_QUERY_CHARITY_FORM_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      const { message } = data;
      notification.success({
        message: 'ENQUIRE',
        description: message.message
      });
      return dispatch({
        type: 'ENQUIRE_QUERY_CHARITY_FORM_SUCCESS',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'ENQUIRE',
      description: error.message
    });

    return dispatch({
      type: 'ENQUIRE_QUERY_CHARITY_FORM_FAILED',
      payload: { loading: false }
    });
  })
}

export const followCompanyType = (campaign_id, status, type, userOrBrowserInfo) => (dispatch) => {
  dispatch({
    type: 'FOLLOW_COMPANY_CHARITY_DETAILS_REQUEST',
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
      type: 'FOLLOW_COMPANY_CHARITY_DETAILS_SUCCESS',
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
      type: 'FOLLOW_COMPANY_CHARITY_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const likeCompanyType = (campaign_id, status, type, userOrBrowserInfo) => (dispatch) => {
  dispatch({
    type: 'LIKE_COMPANY_CHARITY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/like',
    method: 'POST',
    data: {
      from: userOrBrowserInfo.toString(),
      to: campaign_id.toString(),
      status,
      type: 'industry'
    }
  }).then(() => {
    return dispatch({
      type: 'LIKE_COMPANY_CHARITY_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'LIKE COMPANY TYPE',
      description: error.message
    });

    return dispatch({
      type: 'LIKE_COMPANY_CHARITY_FAILED',
      payload: { loading: false }
    });
  })
}

export const subscribe = ({ email }) => (dispatch) => {
  dispatch({
    type: 'SUBSCRIBE_CHARITY_DETAILS_REQUEST',
    payload: { loading: true }
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
        type: 'SUBSCRIBE_CHARITY_DETAILS_SUCCESS',
        payload: {
          loading: false
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
        type: 'SUBSCRIBE_CHARITY_DETAILS_FAILED',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'SUBSCRIBE',
      description: error.message
    });

    return dispatch({
      type: 'SUBSCRIBE_CHARITY_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const shareCompany = (from, to, shared_on) => (dispatch, getState) => {
  dispatch({
    type: 'SHARE_CHARITY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/share',
    method: 'POST',
    params: {
      from: from.toString(),
      to: to.toString(),
      type: 'industry',
      shared_on
    }
  }).then(() => {
    return dispatch({
      type: 'SHARE_CHARITY_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'SHARE CHARITY',
      description: error.message
    });

    return dispatch({
      type: 'SHARE_CHARITY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getFeaturedIndustries = (industry) => (dispatch, getState) => {
  dispatch({
    type: 'GET_FEATURED_CHARITIES_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/featured_industry',
    method: 'POST',
    params: {
      industry
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { charity } = data;
    return dispatch({
      type: 'GET_FEATURED_CHARITIES_SUCCESS',
      payload: {
        loading: false,
        featuredCharities: charity
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET FEATURED CHARITY',
      description: error.message
    });

    return dispatch({
      type: 'GET_FEATURED_CHARITIES_FAILED',
      payload: { loading: false }
    });
  })
}