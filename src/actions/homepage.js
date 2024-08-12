import axios from 'axios';
import { notification } from 'antd';

export const getCampaignsForSlider = () => (dispatch) => {
  dispatch({
    type: 'GET_CAMPAIGNS_FOR_SLIDER_REQUEST',
    payload: { loadingForHomeCampaigns: true }
  });
  return axios({
    url: '/api/get_home_campaigns',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_CAMPAIGNS_FOR_SLIDER_SUCCESS',
      payload: {
        homeCampaigns: data,
        loadingForHomeCampaigns: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET HOME CAMPAIGNS',
      description: error.message
    });

    return dispatch({
      type: 'GET_CAMPAIGNS_FOR_SLIDER_FAILED',
      payload: { loadingForHomeCampaigns: false }
    });
  })
}

export const sendSms = (phone, msg) => (dispatch) => {
  dispatch({
    type: 'SEND_SMS_HOMEPAGE_REQUEST',
    payload: { loadingForGetAppSection: true }
  });
  return axios({
    url: '/api/send_sms',
    method: 'POST',
    data: {
      phone,
      msg
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (flag) {
      const { message } = data;
      notification.success({
        message: 'SEND SMS',
        description: message.message,
        duration: 6
      });
      return dispatch({
        type: 'SEND_SMS_HOMEPAGE_SUCCESS',
        payload: {
          loadingForGetAppSection: false
        }
      });
    } else {
      notification.warning({
        message: 'SEND SMS',
        description: 'SMS could not be sent !',
        duration: 5
      });
      return dispatch({
        type: 'SEND_SMS_HOMEPAGE_FAILED',
        payload: { loadingForGetAppSection: false }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'SEND SMS',
      description: error.message
    });

    return dispatch({
      type: 'SEND_SMS_HOMEPAGE_FAILED',
      payload: { loadingForGetAppSection: false }
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

export const getDonateYourBillSection = () => (dispatch) => {
  dispatch({
    type: 'GET_DONATE_YOUR_BILL_SECTION_REQUEST',
    payload: { loadingForBillSection: true }
  });
  return axios({
    url: '/api/get_donate_your_bills_section',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_DONATE_YOUR_BILL_SECTION_SUCCESS',
      payload: {
        donateBillSectionContent: data,
        loadingForBillSection: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET DONATE BILL SECTION',
      description: error.message
    });

    return dispatch({
      type: 'GET_DONATE_YOUR_BILL_SECTION_FAILED',
      payload: { loadingForBillSection: false }
    });
  })
}

export const getTrendingCauses = () => (dispatch) => {
  dispatch({
    type: 'GET_TRENDING_CAUSES_REQUEST',
    payload: { loadingForTrendingCauses: true }
  });
  return axios({
    url: '/api/get_trending_causes',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_TRENDING_CAUSES_SUCCESS',
      payload: {
        trendingCauses: data,
        loadingForTrendingCauses: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET TRENDING CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_TRENDING_CAUSES_FAILED',
      payload: { loadingForTrendingCauses: false }
    });
  })
}

export const getRecentCauses = () => (dispatch) => {
  dispatch({
    type: 'GET_RECENT_CAUSES_REQUEST',
    payload: { loadingForRecentCauses: true }
  });
  return axios({
    url: '/api/get_recent_causes',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_RECENT_CAUSES_SUCCESS',
      payload: {
        recentCauses: data,
        loadingForRecentCauses: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_RECENT_CAUSES_FAILED',
      payload: { loadingForRecentCauses: false }
    });
  })
}

export const getHomepageContent = () => (dispatch) => {
  dispatch({
    type: 'GET_HOMEPAGE_CONTENT_REQUEST',
    payload: { loadingForGetAppSection: true }
  });
  return axios({
    url: '/api/get_home_page_data',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_HOMEPAGE_CONTENT_SUCCESS',
      payload: {
        homepageContent: data,
        loadingForGetAppSection: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET HOMEPAGE CONTENT',
      description: error.message
    });

    return dispatch({
      type: 'GET_HOMEPAGE_CONTENT_FAILED',
      payload: { loadingForGetAppSection: false }
    });
  })
}