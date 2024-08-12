import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { imageURL } from '../../../constants/constants';

const AppID = "655233585859095";

const FacebookLoginButton = (props) => {

    const responseFacebook = (response) => {
        props.onFinish(response);
    }


    return (
        <div>
            <FacebookLogin
                appId={AppID}
                autoLoad={false}
                callback={responseFacebook}
                fields="name,email,picture"
                render={renderProps => (
                    <div className="btn-wrper mt-3">
                        <button onClick={renderProps.onClick} type="button" className="btn btn-primary bg">{props.btnText}</button> <span className="btn-icon"><img src={`${imageURL}fb-icon.png`} className="img-fluid" alt="" /></span></div>
                )}
            />
        </div>
    )
}

export default FacebookLoginButton;