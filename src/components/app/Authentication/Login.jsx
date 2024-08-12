import React, {useState, useEffect} from 'react';
import { Form, Input, Spin, Button} from 'antd';
import MetaTags from 'react-meta-tags';
import GoogleLoginButton from '../../shared/Authentication/GoogleLoginButton';
import FacebookLoginButton from '../../shared/Authentication/FacebookLoginButton';
import { COUNTRY,COUNTRY2 } from '../../../constants/constants';

const onFinishFailed = (errorInfo) => {
};

const onGoogleLoginFinish = (props, data, history) => {
  const { loginUser } = props;
  let values = {
    userNameOrEmail: data.email,
    password: data.googleId,
    first_name: data.givenName,
    last_name: data.familyName
  }
  loginUser(values).then(() => {});
}

const onFacebookLoginFinish = (props, data, history) => {

  if (data?.email) {
    const { loginUser } = props;
    let values = {
      userNameOrEmail: data.email,
      password: data.userID,
      first_name: data.name,
      last_name: ''
    }

    loginUser(values).then(() => {});
  }
}

const Login = (props) => {
  const [currentCountry, setCurrentCountry] = useState("")
  // const geocoder = new google.maps.Geocoder();
  const { history, loading } = props;
  const [form] = Form.useForm();

  const onFinish = (props, values, history) => {
    const { loginUser } = props;
    values.first_name = null;
    values.last_name = null;
    loginUser(values).then((token) => {});
  };

  useEffect(()=>{
    if (true) {
      // if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(function (position) {
      //       geocoder.geocode({ location: { lat: position.coords.latitude, lng: position.coords.longitude } }, (googleAddress) => {
      //         var filtered_array = googleAddress[0].address_components.filter(function (address_component) {
      //           return address_component.types.includes("country");
      //         });
      //         var country = filtered_array.length ? filtered_array[0].long_name : "";
      //         setCurrentCountry(country)
      //         // if (country !== "Australia") {
      //         //   localStorage.removeItem("loginToken");
      //         //   history.push("/auth/login")
      //         // }
      //       })
      //     })
      // }
    }
    
  },[window.localStorage.href, currentCountry])
  return (
    <div className="login-page-wrap">
      <MetaTags>
        <meta name="description" content="Sign in to iCause to start an online fundraiser, track your current campaign or donate to your favourite cause or charity. iCause makes making a difference easy." />
      </MetaTags>
      <section 
      // className={(currentCountry==COUNTRY||currentCountry==COUNTRY2)?"sign-up-page login-page":'sign-up-page login-page h100-vh'}
      className='sign-up-page login-page'
      >
        <div className="container place-text">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-12 mx-auto">
              <div className="row">
                <div className={true ? "col-lg-6 col-md-7 forgot-btn mx-auto" : "col-lg-12 col-md-12 forgot-btn"}>
                  <div className={true ? "form-wraper" : "col-lg-12 col-md-12 form-wraper"}>
                    <h3 className="text-center">SIGN-IN</h3>
                    <p className="text-center">
                      Welcome To ICause</p>
                    <Spin spinning={loading}>
                      <Form
                        form={form}
                        layout="vertical"
                        name="basic"
                        onFinish={(values) => onFinish(props, values, history)}
                        onFinishFailed={onFinishFailed}
                      >
                        <div className="form-group ">
                          <Form.Item
                            label='Username or Email'
                            name="userNameOrEmail"
                            rules={[
                              {
                                required: true,
                                message: 'Please input username/email !',
                              },
                            ]}>
                            <Input className="form-control" placeholder='Username or Email' />
                          </Form.Item>
                        </div>
                        <div className="form-group">
                          <Form.Item
                            label='Password'
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: 'Please input password !',
                              },
                            ]}>
                            <Input type='password' className="form-control" placeholder='Type your password' />
                          </Form.Item>
                          {/* {true &&(currentCountry==COUNTRY||currentCountry==COUNTRY2)&&  */}
                          <Button className="forgat-btn" style={{ width:'100%', paddingTop: '8px' }} type='link' onClick={() => history.push('/auth/forgot/password')}>
                              Forgot Your Password ?
                            </Button>
                            {/* } */}
                        </div>
                        <Form.Item>
                          <button className="btn btn-success   text-uppercase mt-4 d-block w-100" type="submit">LOGIN</button>
                        </Form.Item>
                        {/* {true &&(currentCountry==COUNTRY||currentCountry==COUNTRY2)&& */}
                        <p className="text-center my-text mt-3 already-acc">Don't have an Account?
                          <span className="text-grn">
                            <Button style={{ marginLeft: '0px', paddingTop: '8px', paddingLeft:'5px' }} type='link' onClick={() => history.push('/auth/signup')}>
                              Sign up
                            </Button>
                          </span>
                        </p>
                        {/* } */}
                      </Form>
                    </Spin>
                  </div>
                  
                </div>
                {/* {true &&(currentCountry==COUNTRY||currentCountry==COUNTRY2)&& */}
                <div className=" col-lg-6 col-md-5">
                  <div className="social-button">
                    <FacebookLoginButton
                      btnText={`Sign in with Facebook`}
                      onFinish={(data) => onFacebookLoginFinish(props, data, history)}
                    />
                    <GoogleLoginButton
                      btnText={`Sign in with Google`}
                      onFinish={(data) => onGoogleLoginFinish(props, data, history)}
                      onFinishFailed={onFinishFailed}
                    />
                    <div className="text-mob"> <span className="after-line">OR</span> </div>
                  </div>
                </div>
                {/* } */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
