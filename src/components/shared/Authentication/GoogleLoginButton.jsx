import React from 'react';
import { useGoogleLogout, useGoogleLogin } from 'react-google-login';
import { imageURL } from '../../../constants/constants';
// refresh token
import { refreshTokenSetup } from '../../../utils/helpers';

const clientId =
  '211459604873-h9f19nhomvsum9ios12bj3saei98vdfr.apps.googleusercontent.com';

  const onGoogleLogoutSuccess = (res) => {
  };

  const onGooleLogoutFailure = (res) => {
  };

const GoogleLoginButton = (props) => {
  const onSuccess = (res) => {
    const { email } = res.profileObj;
    if (email) {
      props.onFinish(res.profileObj);
    }
    refreshTokenSetup(res);
  };

  const { signOut } = useGoogleLogout({ clientId, onGoogleLogoutSuccess, onGooleLogoutFailure});

  const onFailure = (res) => {
    signOut();
    props.onFinishFailed(res);
  };
  const { signIn } = useGoogleLogin({ clientId, onSuccess, onFailure});


  return (
    <div>
      {/* Click */}
      {/* <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'none'}
        style={{ marginTop: '100px' }}
        render={renderProps => (
          <div className="btn-wrper mt-2"> 
          <button onClick={(e) =>renderProps.onClick(e)} 
            className="btn btn-primary bg-2">{props.btnText}</button>
          <span className="btn-icon"><img src={`${imageURL}google-icon.png`} className="img-fluid" alt="" /> </span>
          </div>
        )}
      /> */}
      <div className="btn-wrper mt-2"> 
          <button onClick={(e) =>{
            e.preventDefault()
            signIn()
          }} 
            className="btn btn-primary bg-2">{props.btnText}</button>
          <span className="btn-icon"><img src={`${imageURL}google-icon.png`} className="img-fluid" alt="" /> </span>
          </div>
    </div>
  );
}

export default GoogleLoginButton;