import axios from 'axios';
import { notification } from 'antd';

export const initializeTokenGeneration = (initialize) => (dispatch) => {
  return dispatch({
    type: 'INITIALIZE_TOKEN_GENERATION_FOR_INDUSTRY',
    payload: { loading: initialize }
  });
}

export const donateWithPaypalForCompany = ({ company_id, users_id, amount, first_name, last_name, email, phone_number }) => (dispatch) => {
  dispatch({
    type: 'DONATE_WITH_PAYPAL_FOR_COMPANY_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/donate_with_paypal_for_company',
    method: 'POST',
    data: {
      company_id,
      users_id,
      amount,
      first_name,
      last_name,
      email,
      phone_number
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (!flag) {
      notification.error({
        message: 'DONATE WITH PAYPAL',
        description: 'Could not process paypal payment'
      });
      dispatch({
        type: 'DONATE_WITH_PAYPAL_FOR_COMPANY_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      notification.success({
        message: 'DONATION',
        description: 'donation payment saved successfully !'
      });
      return dispatch({
        type: 'DONATE_WITH_PAYPAL_FOR_COMPANY_SUCCESS',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'DONATE WITH PAYPAL',
      description: error.message
    });

    return dispatch({
      type: 'DONATE_WITH_PAYPAL_FOR_COMPANY_FAILED',
      payload: { loading: false }
    });
  })
}

export const getDonationTypes = () => (dispatch) => {
  dispatch({
    type: 'GET_DONATION_TYPES_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_donate_your_bills_section',
    method: 'GET'
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_DONATION_TYPES_SUCCESS',
      payload: {
        donationTypes: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET DONATION TYPES',
      description: error.message
    });

    return dispatch({
      type: 'GET_DONATION_TYPES_FAILED',
      payload: { loading: false }
    });
  })
}

export const payWithCard = ({ token, paymentType, company_id, amount, first_name, phone_number, last_name, email }) => (dispatch) => {
  dispatch({
    type: 'PAY_WITH_CARD_FOR_INDUSTRY_DONATION_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/payment_for_company_by_stripe',
    method: 'POST',
    data: {
      token,
      company_id,
      amount,
      first_name,
      last_name,
      phone_number,
      email,
      package: paymentType
    }
  }).then(({ data: response }) => {
    const { flag, message } = response;
    if (!flag) {
      notification.error({
        message: 'PAY WITH CARD',
        description: message.error
      });
  
      dispatch({
        type: 'PAY_WITH_CARD_FOR_INDUSTRY_DONATION_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      notification.success({
        message: 'PAY WITH CARD',
        description: 'Charged successfully !'
      });
      return dispatch({
        type: 'PAY_WITH_CARD_FOR_INDUSTRY_DONATION_SUCCESS',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'PAY WITH CARD',
      description: error.message
    });

    return dispatch({
      type: 'PAY_WITH_CARD_FOR_INDUSTRY_DONATION_FAILED',
      payload: { loading: false }
    });
  })
}

export const payByBill = ({ company_id, email, first_name, last_name, phone_number, method, billFile, values, images }) => (dispatch) => {
  const formData = new FormData();
  images.forEach((file) => {
    if (file?.file) {
      formData.append(`${file?.method}`, file?.file);
    } else {
      formData.append(`${file?.method}`, 'empty');
    }
  });

  formData.append("company_id", values?.campaigns_id);
  formData.append("phone_number", phone_number);
  formData.append("email", email);
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("type", "company");

  dispatch({
    type: 'PAY_UTILITY_BILL_PAYMENT_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/upload_bill',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  }).then(({ data }) => {
    const { flag, message } = data;
    if (!flag) {
      notification.error({
        message: 'UPLOAD UTILITY BILL',
        description: 'Could not process utility bill payment'
      });
      dispatch({
        type: 'PAY_UTILITY_BILL_PAYMENT_FAILED',
        payload: { loading: false }
      });
      return Promise.reject();
    } else {
      notification.success({
        message: 'UPLOAD UTILITY BILL',
        description: message.message
      });
      return dispatch({
        type: 'PAY_UTILITY_BILL_PAYMENT_SUCCESS',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'UPLOAD UTILITY BILL',
      description: error.message
    });

    return dispatch({
      type: 'PAY_UTILITY_BILL_PAYMENT_FAILED',
      payload: { loading: false }
    });
  })
}

export const getCharity = (charity_id, from) => (dispatch) => {
  dispatch({
    type: 'GET_CHARITY_BY_ID_FOR_DONATE_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_charity_by_id',
    method: 'POST',
    data: {
      charity_id,
      from
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { charity } = data || {};
    return dispatch({
      type: 'GET_CHARITY_BY_ID_FOR_DONATE_SUCCESS',
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
      type: 'GET_CHARITY_BY_ID_FOR_DONATE_FAILED',
      payload: { loading: false }
    });
  })
}

export const getFeaturedIndustries = (industry) => (dispatch, getState) => {
  dispatch({
    type: 'GET_FEATURED_CHARITIES_FOR_DONATE_REQUEST',
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
      type: 'GET_FEATURED_CHARITIES_FOR_DONATE_SUCCESS',
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
      type: 'GET_FEATURED_CHARITIES_FOR_DONATE_FAILED',
      payload: { loading: false }
    });
  })
}

export const likeCompanyType = (campaign_id, status, type, userOrBrowserInfo) => (dispatch) => {
  dispatch({
    type: 'LIKE_COMPANY_CHARITY_FOR_DONATE_REQUEST',
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
      type: 'LIKE_COMPANY_CHARITY_FOR_DONATE_SUCCESS',
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
      type: 'LIKE_COMPANY_CHARITY_FOR_DONATE_FAILED',
      payload: { loading: false }
    });
  })
}

export const shareCompany = (from, to, shared_on) => (dispatch, getState) => {
  dispatch({
    type: 'SHARE_CHARITY_FOR_DONATE_REQUEST',
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
      type: 'SHARE_CHARITY_FOR_DONATE_SUCCESS',
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
      type: 'SHARE_CHARITY_FOR_DONATE_FAILED',
      payload: { loading: false }
    });
  })
}