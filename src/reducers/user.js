const initialState = {
  loading: false,
  loginToken: localStorage.getItem('loginToken')
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT_USER': {
      localStorage.removeItem('loginToken');
      return {
        ...initialState
      };
    }
    case 'FORGOT_PASSWORD_REQUEST':
    case 'FORGOT_PASSWORD_SUCCESS':
    case 'FORGOT_PASSWORD_FAILED':
    case 'LOGIN_USER_REQUEST':
    case 'LOGIN_USER_FAILED':
    case 'LOGIN_USER_SUCCESS':
    case 'GET_USER_FAILED':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_REQUEST':
    case 'GET_USER_LOGIN_STATUS_REQUEST':
    case 'REGISTER_USER_REQUEST':
    case 'REGISTER_USER_SUCCESS':
    case 'REGISTER_USER_FAILED':
    case 'ACTIVATE_FIRST_MODAL': {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default user;
