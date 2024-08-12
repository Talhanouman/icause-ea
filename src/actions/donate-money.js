import axios from 'axios';
import { notification } from 'antd';
import { encodeString } from '../utils/helpers';



export const checkUserLoginStatusOnDashboard = (user) => (dispatch) => {
  dispatch({
    type: 'GET_USER_LOGIN_STATUS_REQUEST',
    payload: { loading: true },

  });
  return axios({
    url: '/api/get_login_detail',
    method: 'GET',
    params:{
      user_id: user?.id
    },
    headers: {
      Authorization: `Bearer ${user.loginToken}`
    }
  }).then(({ data }) => {
    const checking = data?.data?.user?.login_status;
    if(checking === "0" || checking === 0){
      dispatch({
        type: 'LOGOUT_USER'
      });
      return axios({
        url: '/api/logout_api',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.loginToken}`
        }
      }).then((res) => {
        dispatch({
          type: 'LOGOUT_USER'
        });
        delete axios.defaults.headers.common.Authorization;
        localStorage.removeItem("loginToken");
      })
    }
    const { flag } = data;
    if (flag) {
      const { data: response } = data;
      let { login_status } = response.user;
      if(login_status){
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: {
            ...user,
            loading: false,
            isLogin: true
          }
        });
      }
      return response;
      //const { user_info } = response;

      // let user = {
      //   ...user_info
      // };
      //axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
     // delete user.api_token;

      // return dispatch({
      //   type: 'GET_USER_SUCCESS',
      //   payload: {
      //     ...user,
      //     loginToken,
      //     loading: false
      //   }
      // });
    } else {
      const { message } = data;
      notification.error({
        message: 'GET USER LOGIN STATUS',
        description: message && message?.error ? message.error : 'User details could not be fetched !'
      });
      return dispatch({
        type: 'GET_USER_FAILED',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET USER',
      description: error?.message
    });

    return dispatch({
      type: 'GET_USER_FAILED',
      payload: { loading: false }
    });
  })
}

export const getUser = (loginToken) => (dispatch) => {
  dispatch({
    type: 'LOGIN_USER_REQUEST',
    payload: { loading: true },

  });
  return axios({
    url: '/api/get_user ',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${loginToken}`
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (flag) {
      // checkUserLoginStatusOnDashboard(user);
      const { data: response } = data;
      const { user_info } = response;

      let user = {
        ...user_info
      };
      axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
      delete user.api_token;

      dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: {
          ...user,
          loginToken,
          loading: false,
          isLogin: false
        }
      });
      
      localStorage.setItem('loginToken', loginToken);
    } else {
      const { message } = data;
      notification.error({
        message: 'GET USER',
        description: message && message.error ? message.error : 'User details could not be fetched !'
      });
      return dispatch({
        type: 'LOGIN_USER_FAILED',
        payload: {
          loading: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'GET USER',
      description: error.message
    });
    localStorage.setItem("expire", true);
    return dispatch({
      type: 'GET_USER_FAILED',
      payload: { loading: false }
    });
  })
}

export const getRecentCauses = (categoryId, campaignId) => (dispatch) => {
  dispatch({
    type: 'GET_RECENT_CAUSES_FOR_DONATE_MONEY_PAGE_REQUEST',
    payload: { loadingForRecentCauses: true }
  });
  return axios({
    url: '/api/getCampaignByCategoryID',
    method: 'POST',
    data: {
      categoryID: categoryId,
      campaignID: campaignId
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { campaigns } = data;
    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_DONATE_MONEY_PAGE_SUCCESS',
      payload: {
        recentCauses: campaigns,
        loadingForRecentCauses: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_DONATE_MONEY_PAGE_FAILED',
      payload: { loadingForRecentCauses: false }
    });
  })
}

export const donateUtilityBill = ({ email, campaigns_id, first_name, last_name, phone_number, company_id, type, images }) => (dispatch) => {
  const formData = new FormData();
  images.forEach((file) => {
    if(file?.file){
      formData.append(`${file?.method}`, file?.file);
    } else {
      formData.append(`${file?.method}`, 'empty');
    }
  });
  if(type === "company"){
    formData.append("company_id", company_id);
  } else {
    formData.append("campaigns_id", campaigns_id);
  }
  formData.append("phone_number", phone_number);
  formData.append("email", email);
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("type", type);
  dispatch({
    type: 'UPLOAD_UTILITY_BILL_REQUEST',
    payload: { loadingForDonationTypes: true }
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
        type: 'UPLOAD_UTILITY_BILL_FAILED',
        payload: { loadingForDonationTypes: false }
      });
      return Promise.reject();
    } else {
      notification.success({
        message: 'UPLOAD UTILITY BILL',
        description: message.message
      });
      return dispatch({
        type: 'UPLOAD_UTILITY_BILL_SUCCESS',
        payload: {
          loadingForDonationTypes: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'UPLOAD UTILITY BILL',
      description: error.message
    });

    return dispatch({
      type: 'UPLOAD_UTILITY_BILL_FAILED',
      payload: { loadingForDonationTypes: false }
    });
  })
}

export const donateWithPaypal = ({ campaign_id, users_id, amount, first_name, last_name, email, phone_number }) => (dispatch) => {
  dispatch({
    type: 'DONATE_WITH_PAYPAL_REQUEST',
    payload: { loadingForDonateMoney: true }
  });
  return axios({
    url: '/api/donate_with_paypal',
    method: 'POST',
    data: {
      campaign_id,
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
        type: 'DONATE_WITH_PAYPAL_FAILED',
        payload: { loadingForDonateMoney: false }
      });
      return Promise.reject();
    } else {
      notification.success({
        message: 'DONATION',
        description: 'donation payment saved successfully !'
      });
      return dispatch({
        type: 'DONATE_WITH_PAYPAL_SUCCESS',
        payload: {
          loadingForDonateMoney: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'DONATE WITH PAYPAL',
      description: error.message
    });

    return dispatch({
      type: 'DONATE_WITH_PAYPAL_FAILED',
      payload: { loadingForDonateMoney: false }
    });
  })
}

export const getDonationTypes = () => (dispatch) => {
  dispatch({
    type: 'GET_DONATION_TYPES_REQUEST',
    payload: { loadingForDonationTypes: true }
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
        loadingForDonationTypes: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET DONATION TYPES',
      description: error.message
    });

    return dispatch({
      type: 'GET_DONATION_TYPES_FAILED',
      payload: { loadingForDonationTypes: false }
    });
  })
}

export const payWithCard = ({ token, campaignId, amount, first_name, phoneNumber, last_name, email }) => (dispatch) => {
  dispatch({
    type: 'PAY_WITH_CARD_FOR_DONATION_REQUEST',
    payload: { loadingForDonateMoney: true }
  });
  return axios({
    url: '/api/payment_for_campaign_by_stripe',
    method: 'POST',
    data: {
      token,
      campaignID: campaignId,
      amount,
      first_name,
      last_name,
      phone_number: phoneNumber,
      email
    }
  }).then(({ data: response }) => {
    const { flag, message } = response;
    if (!flag) {
      notification.error({
        message: 'PAY WITH CARD',
        description: message.error
      });
  
      dispatch({
        type: 'PAY_WITH_CARD_FOR_DONATION_FAILED',
        payload: { loadingForDonateMoney: false }
      });
      return Promise.reject();
    } else {
      notification.success({
        message: 'PAY WITH CARD',
        description: 'Charged successfully !'
      });
      return dispatch({
        type: 'PAY_WITH_CARD_FOR_DONATION_SUCCESS',
        payload: {
          loadingForDonateMoney: false
        }
      });
    }
  }).catch((error) => {
    notification.error({
      message: 'PAY WITH CARD',
      description: error.message
    });

    return dispatch({
      type: 'PAY_WITH_CARD_FOR_DONATION_FAILED',
      payload: { loadingForDonateMoney: false }
    });
  })
}

export const initializeTokenGeneration = (initialize) => (dispatch) => {
  return dispatch({
    type: 'INITIALIZE_TOKEN_GENERATION',
    payload: { loadingForDonateMoney: initialize }
  });
}

export const getCampaignDetails = (id) => (dispatch) => {
  dispatch({
    type: 'GET_CAMPAIGN_DETAILS_REQUEST',
    payload: { loadingForCampaignDetails: true }
  });
  return axios({
    url: '/api/get_campaign_by_id',
    method: 'POST',
    data: {
      campaign_id: id
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_SUCCESS',
      payload: {
        campaignDetails: data,
        loadingForCampaignDetails: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET CAMPAIGN DETAILS',
      description: error.message
    });

    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_FAILED',
      payload: { loadingForCampaignDetails: false }
    });
  })
}