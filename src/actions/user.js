import axios from 'axios';
import { notification } from 'antd';
import { encodeString } from '../utils/helpers';

export const getUser = (loginToken) => (dispatch) => {
  dispatch({
    type: 'GET_USER_REQUEST',
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
      const { data: response } = data;
      const { user_info } = response;

      let user = {
        ...user_info
      };
      axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
      delete user.api_token;

      return dispatch({
        type: 'GET_USER_SUCCESS',
        payload: {
          ...user,
          loginToken,
          loading: false
        }
      });
    } else {
      const { message } = data;
      notification.error({
        message: 'GET USER',
        description: message && message.error ? message.error : 'User details could not be fetched !'
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
      description: error.message
    });
    localStorage.setItem("expire", true);
    return dispatch({
      type: 'GET_USER_FAILED',
      payload: { loading: false }
    });
  })
}

export const logout = () => (dispatch) => {
  const authToken = localStorage.getItem('loginToken');
  return axios({
    url: '/api/logout_api',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }).then((res) => {
    dispatch({
      type: 'LOGOUT_USER'
    });
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem("loginToken");
    window.location.href = "/auth/login"
  })
//  window.location = `${process.env.REACT_APP_BACKEND_BASE_URL}logout`;
}

export const forgotPassword = (user, history) => (dispatch) => {
  dispatch({
    type: 'FORGOT_PASSWORD_REQUEST',
    payload: { loading: true }
  });

 return axios({
    url: '/api/forgot_password_by_email_by_link',
    method: 'POST',
    data: {
      email: user?.userNameOrEmail,
    }
  }).then(({ data }) => {
    dispatch({
      type: 'FORGOT_PASSWORD_REQUEST',
      payload: { loading: false }
    });
    notification.success({
      message: 'FORGOT',
      description: 'FORGOT PASSWORD LINK IS SEND TO YOUR EMAIL ADDRESS'
    });

    history.push("/auth/login");
          
  }).catch((error) => {
    notification.error({
      message: 'FORGOT_PASSWORD_FAILED',
      description: error.message
    });

    return dispatch({
      type: 'FORGOT_PASSWORD_REQUEST',
      payload: { loading: false }
    });
  })
}

export const registerUser = ({
  fname,
  lname,
  email,
  password,
  phoneNumber,
}) => (dispatch) => {
  dispatch({
    type: 'REGISTER_USER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/registerAsUser',
    method: 'POST',
    data: {
      first_name: fname,
      last_name: lname,
      email,
      password,
      phone: phoneNumber
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (flag) {
      const { message, data: response } = data;
      const { user_info } = response;

      const loginToken = user_info.api_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
      localStorage.setItem('loginToken', loginToken);

      notification.success({
        message: 'SIGNUP',
        description: message.message
      });
      let user = {
        ...user_info
      };
      delete user.api_token;
      dispatch({
        type: 'REGISTER_USER_SUCCESS',
        payload: {
          ...user,
          loginToken,
          loading: false
        }
      });
      return "success"
    } else {
      const { message } = data;
      if (message && message.error.email) {
        notification.error({
          message: 'SIGNUP',
          description: message.error.email
        });
      } else if (message && message.error.password) {
        notification.error({
          message: 'SIGNUP',
          description: message.error.password
        });
      } else if (message && message.error.first_name) {
        notification.error({
          message: 'SIGNUP',
          description: message.error.first_name
        });
      } else if (message && message.error.last_name) {
        notification.error({
          message: 'SIGNUP',
          description: message.error.last_name
        });
      }
      else {
        notification.error({
          message: 'SIGNUP',
          description: 'SIGNUP NOT SUCCESSFULL !'
        });
      }

      dispatch({
        type: 'REGISTER_USER_FAILED',
        payload: {
          loading: false
        }
      });
      return "failed";
    }
  }).catch((error) => {
    notification.error({
      message: 'SIGNUP',
      description: error.message
    });

    dispatch({
      type: 'REGISTER_USER_FAILED',
      payload: { loading: false }
    });
    return "failed";
  })
}

export const loginUser = ({
  userNameOrEmail,
  password,
  first_name,
  last_name
}) => (dispatch) => {
  dispatch({
    type: 'LOGIN_USER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/login',
    method: 'POST',
    data: {
      email: userNameOrEmail,
      password,
      first_name,
      last_name
    }
  }).then(({ data }) => {
    
    const { flag } = data;
    if (flag) {
      const { data: response } = data;
      const { user_info } = response;

      const loginToken = user_info.api_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
      let user = {
        ...user_info
      };
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
      let encryptedPassword = encodeString(loginToken, password);
      localStorage.setItem('loginToken', loginToken);
      window.location = `${process.env.REACT_APP_BACKEND_BASE_URL}loginWithToken?token=${encryptedPassword}`
    } else {
      const { message } = data;
      notification.error({
        message: 'LOGIN',
        description: message && message.error ? message.error : 'LOGIN NOT SUCCESSFULL !'
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
      message: 'LOGIN',
      description: error.message
    });

    return dispatch({
      type: 'LOGIN_USER_FAILED',
      payload: { loading: false }
    });
  })
}


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

export const verificationAction = (values, history) => (dispatch) => {
  dispatch({
    type: 'REGISTER_USER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/otpEmail',
    method: 'Post',
    data: {
      email: values?.email,
    }
  }).then((res) => {
    dispatch({
      type: 'REGISTER_USER_REQUEST',
      payload: { loading: false }
    });
    history.push({
      pathname: "/auth/verification", state: {
        "signup": values,
        "bussiness": false
      }
    })
  })
    .catch(error => {
      dispatch({
        type: 'REGISTER_USER_REQUEST',
        payload: { loading: false }
      });
      notification.error({
        message: 'GET USER',
        description: error?.message
      });
    })
  //  window.location = `${process.env.REACT_APP_BACKEND_BASE_URL}logout`;
}


export const verificationActionPhone = (values) => (dispatch) => {
  dispatch({
    type: 'REGISTER_USER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/otpPhone',
    method: 'Post',
    data: {
      phone: values?.phoneNumber,
    }
  }).then((res) => {
    dispatch({
      type: 'REGISTER_USER_REQUEST',
      payload: { loading: false }
    });
    if(res.data.flag){
      notification.success({
        message: 'OTP SENT',
        description: res?.data?.message?.message
      });
    }
    else{
      notification.error({
        message: 'OTP DID NOT SENT',
        description: res?.data?.message.error.split(":")[1]
      });
    }
  })
    .catch(error => {
      dispatch({
        type: 'REGISTER_USER_REQUEST',
        payload: { loading: false }
      });
      notification.error({
        message: 'OTP DID NOT SENT',
        description: error?.message
      });
    })
}


export const verificationActionEmail = (values) => (dispatch) => {
  dispatch({
    type: 'REGISTER_USER_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/otpEmail',
    method: 'Post',
    data: {
      email: values?.email,
    }
  }).then((res) => {
    dispatch({
      type: 'REGISTER_USER_REQUEST',
      payload: { loading: false }
    });
    if(res.data.flag){
      notification.success({
        message: 'OTP SENT',
        description: res?.data?.message?.message
      });
    }
    else{
      notification.error({
        message: 'OTP DID NOT SENT',
        description: res?.message.error
      });
    }
  })
    .catch(error => {
      notification.error({
        message: 'OTP DID NOT SENT',
        description: error?.message
      });
      dispatch({
        type: 'REGISTER_USER_REQUEST',
        payload: { loading: false }
      });
    })
}


export const verificationCodeAction = (values, history, code, bit, postCode, isEmail) => (dispatch) => {
  dispatch({
    type: 'REGISTER_USER_REQUEST',
    payload: { loading: true }
  });
 return axios({
    url:isEmail ? '/api/otp_verification' : '/api/otp_verification_by_phone',
    method: 'Post',
    data:isEmail ?  {
      email: values.email,
      otp: code,
    } : {
      phone:values.phoneNumber,
      otp: code
    }
  }).then((res) => {
    if(res.data.flag === 0){
      dispatch({
        type: 'REGISTER_USER_REQUEST',
        payload: { loading: false }
      });
      notification.error({
        message: 'ERROR',
        description: res?.data.message.error
      });
      return
    }
    if (history?.location?.state?.bussiness === false) {
      if (bit === "signUp") {
        dispatch({
          type: 'REGISTER_USER_REQUEST',
          payload: { loading: true }
        });
        return axios({
          url: '/api/registerAsUser',
          method: 'POST',
          data: {
            first_name: values?.fname,
            last_name: values?.lname,
            email: values?.email,
            password: values?.password,
            phone: values?.phoneNumber,
            otp: code,
          }
        }).then(({ data }) => {
          const flagData = data?.flag;
          if (flagData) {
            const { message, data: response } = data;
            const { user_info } = response;

            const loginToken = user_info.api_token;
            axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
            localStorage.setItem('loginToken', loginToken);
            let encryptedPassword = encodeString(loginToken, values?.password);
            window.location = `${process.env.REACT_APP_BACKEND_BASE_URL}loginWithToken?token=${encryptedPassword}`

            notification.success({
              message: 'SIGNUP',
              description: message.message
            });
            let user = {
              ...user_info
            };
            delete user.api_token;
            dispatch({
              type: 'REGISTER_USER_SUCCESS',
              payload: {
                ...user,
                loginToken,
                // loading: false
              }
            });
            return "success"
          } else {
            const { message } = data;
            if (message && message.error.email) {
              notification.error({
                message: 'SIGNUP',
                description: message.error.email
              });
            } else if (message && message.error.password) {
              notification.error({
                message: 'SIGNUP',
                description: message.error.password
              });
            } else if (message && message.error.first_name) {
              notification.error({
                message: 'SIGNUP',
                description: message.error.first_name
              });
            } else if (message && message.error.last_name) {
              notification.error({
                message: 'SIGNUP',
                description: message.error.last_name
              });
            }
            else {
              notification.error({
                message: 'SIGNUP',
                description: 'SIGNUP NOT SUCCESSFULL !'
              });
            }

            dispatch({
              type: 'REGISTER_USER_FAILED',
              payload: {
                loading: false
              }
            });
            return "failed";
          }
        }).catch((error) => {
          notification.error({
            message: 'SIGNUP',
            description: error.message
          });

          dispatch({
            type: 'REGISTER_USER_FAILED',
            payload: { loading: false }
          });
          return "failed";
        })
      } else {
        notification.error({
          message: 'SIGNUP',
          description: res?.data?.message?.error?.otp[0]
        });
      }
    } else if (history?.location?.state?.bussiness) {
      dispatch({
        type: 'REGISTER_COMPANY_REQUEST',
        payload: { loading: true }
      });
      return axios({
        url: '/api/registerAsCompany',
        method: 'POST',
        data: {
          ...values,
          postCode: postCode?.postcode,
          otp: code,
        }
      }).then(({ data }) => {
        const { flag } = data;
        if (!flag) {
          const { message } = data;
          dispatch({
            type: 'REGISTER_COMPANY_FAILED',
            payload: { loading: false }
          });
          return Promise.reject(new Error(message && message.error && message.error.email ? message.error.email : message && message.error ? message.error : ''))
        } else {
          const { message } = data;
          notification.success({
            message: 'REGISTER COMPANY',
            description: message.message
          });
          history.push("/auth/login");
          dispatch({
            type: 'REGISTER_USER_REQUEST',
            payload: { loading: false }
          });
          return dispatch({
            type: 'REGISTER_COMPANY_SUCCESS',
            payload: {
              loading: false,
              status: true
            }
          });
        }
      }).catch((error) => {
        notification.error({
          message: 'REGISTER COMPANY',
          description: error.message
        });
        dispatch({
          type: 'REGISTER_USER_REQUEST',
          payload: { loading: false }
        });
        return dispatch({
          type: 'REGISTER_COMPANY_FAILED',
          payload: { loading: false }
        });
      })
    }
    dispatch({
      type: 'REGISTER_USER_REQUEST',
      payload: { loading: false }
    });
  })
    .catch(error => {
      notification.error({
        message: 'SIGNUP',
        description: error?.message
      });
      dispatch({
        type: 'REGISTER_USER_REQUEST',
        payload: { loading: false }
      });
    })
}
