import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import { Form, Input, Checkbox, Spin, Button } from 'antd';
import GoogleLoginButton from '../../shared/Authentication/GoogleLoginButton';
import FacebookLoginButton from '../../shared/Authentication/FacebookLoginButton';
import MaskedInput from 'antd-mask-input'

const SignUp = (props) => {
  const { history, user } = props;
  const { loading } = user;
  const [form] = Form.useForm();
  const [phone, setPhone] = useState('');
  const [code, /*setCode*/] = useState(false);
  const [numComplete, setNumComplete] = useState({ height: '40px', fontSize: '17px', backgroundColor: '#ECF4FA' });
  const [showCheck, setShowCheck] = useState(false);

  
  const setPhoneNumber = (event) => {
    let value = event.target.value
    setPhone(value);


    if (value.length === 11) {
      let number = value.replace(/\s/g, '').replace('_', '');

      if (isNaN(number)) {

      } else {

        if (number.length === 9) {
          setNumComplete({ height: '40px', fontSize: '17px', color: '#3cb64f', backgroundColor:'#ECF4FA' });
          setShowCheck(true);
        } else {
          setNumComplete({ height: '40px', fontSize: '17px', backgroundColor: '#ECF4FA' });
          setShowCheck(false);
        }
      }
    }
  }

  const onFinish = (props, values, { setFields }, history) => {
    const { verificationAction } = props;
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setFields([
        {
          name: 'password',
          errors: ['password and repeat password are not same !'],
        },
        {
          name: 'confirmPassword',
          errors: ['password and repeat password are not same !'],
        }
      ]);
    } else {
      values.isSocialLogin = false
      verificationAction({ ...values, "phoneNumber": "+61"+phone }, history, "+61"+phone);
    }

  };

  const onFinishFailed = (errorInfo) => {

  };

  const onGoogleSignUpFinish = (props, data, history) => {
    const { loginUser } = props;
    let values = {
      userNameOrEmail: data.email,
      password: data.googleId,
      first_name: data.givenName,
      last_name: data.familyName
    }
    loginUser(values).then(() => {
    });
  }

  const onFacebookSignup = (props, data, history) => {

    if (data?.email) {
      const { loginUser } = props;
      let values = {
        userNameOrEmail: data.email,
        password: data.userID,
        first_name: data.name,
        last_name: ''
      }
      loginUser(values).then(() => {
      });
    }
  }

  return (
    <div className="signup-pg-wrap">
      <MetaTags>
        <meta name="description" content="Register with iCause to start making a difference through Australia’s newest online fundraising platform. Create a crowdfunding campaign or support a charity in a few easy steps." />
      </MetaTags>
      <section className="sign-up-page login-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-7 mx-auto">
                  <div className="form-wraper">
                    <h3 className="text-center">Sign Up</h3>
                    <p className="text-center">We make making a difference a breeze.</p>
                    <Spin spinning={loading}>
                      {!code &&
                        <Form
                          form={form}
                          layout="vertical"
                          name="basic"
                          onFinish={(values) => onFinish(props, values, form, history)}
                          onFinishFailed={onFinishFailed}
                        >
                          <div className="form-group">
                            <Form.Item
                              label='First Name'
                              name="fname"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input first name!',
                                },
                              ]}>
                              <Input placeholder='e.g: Mark' />
                            </Form.Item>
                          </div>
                          <div className="form-group">
                            <Form.Item
                              label='Last Name'
                              name="lname"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input last name!',
                                },
                              ]}>
                              <Input placeholder='e.g: Carson' />
                            </Form.Item>
                          </div>
                          <div className="form-group">
                            <Form.Item
                              label='Email'
                              name="email"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input email!',
                                },
                              ]}>
                              <Input type='email' placeholder='markcarson@example.com' />
                            </Form.Item>
                          </div>
                          <div className="form-group">
                            <Form.Item
                              label='Password'
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input password!',
                                },
                                {
                                  min: 8,
                                  message:"Should be minimum 8 character."
                                },
                                {
                                  pattern:'(?=.*?[0-9])',
                                  message:"Should be 1 digit.",
                                },
                                {
                                  pattern: '(?=.*?[A-Z])',
                                  message: 'Should be 1 uppercase character.',
                                },
                                {
                                  pattern: '(?=.*?[#?!@$%^&*-])',
                                  message: 'Should be 1 special character.',
                                },
                              ]}>
                              <Input autoComplete='on' type='password' placeholder='password' />
                            </Form.Item>
                          </div>

                          <div className="form-group">
                            <Form.Item
                              label='Confirm Password'
                              name="confirmPassword"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please confirm password!',
                                },
                                ({ getFieldValue }) => ({
                                  validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject('Password did not matched.');
                                  },
                                }),
                              ]}>
                              <Input autoComplete='on' type='password' placeholder='confirm password' />
                            </Form.Item>
                          </div>
                          <div className="form-group">
                            <div className="row">
                             
                              <div className="col_6"><label>Phone Number</label></div>
                              <div className="col_3" style={{ color: "#ff4d4f", marginLeft: "5px", marginRight: "-8px", fontSize: "14px" }}>*</div>
                            </div>
                            <div style={{...numComplete, display:'flex', alignItems:'center'}} className="signup-phone">
                              <h5 style={{marginBottom:0}} className="num-head">+61</h5>
                              <MaskedInput
                                placeholder="4"
                                style={numComplete}
                                className="form-control"
                                mask="411 111 111"
                                size="20"
                                onChange={(e) => { setPhoneNumber(e) }}
                              />
                              <div className="d-flex align-items-center check-icon">
                                {showCheck &&
                                  <i className="fas fa-check-circle"></i>
                                }
                              </div>
                            </div>
                            {/* <input
                              style={{ height: "44px", borderRadius: "0px", border: "none", width: "100%", outline: "none" }}
                              value={phoneNumber}
                              placeholder='&nbsp; e.g. (04) 12343521'
                              name="phoneNumber"
                              onChange={(event) => {
                                const input = event.target;
                                let value = input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/);
                                input.value = !value[2] ? value[1] : '(' + value[1] + ') ' + value[2] + (value[3] ? '' + value[3] : '') + (value[4] ? '' + value[4] : '');
                                setPhoneNumber("  " + input.value);
                                setError("");
                              }}
                            /> */}
                            {/* {error && <p style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "5px", marginBottom: "20px" }}>{error}</p>} */}
                          </div>
                          <div className="form-group mb-0 sign-up-check">
                            <Form.Item
                              name="termsAndConditionsAgreed"
                              valuePropName="checked"
                              rules={[
                                {
                                  validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Please agree to terms and conditions!')),
                                },
                              ]}
                            >
                              <Checkbox style={{ fontSize: '11px' }}>
                                Creating an account means you agree with <br></br>
                                TERMS AND CONDITIONS, PRIVACY & POLICY
                              </Checkbox>
                            </Form.Item>
                          </div>
                          <button className="btn btn-success   text-uppercase d-block w-100" htmltype='submit'
                            onClick={() => {
                              
                            }
                            }>SIGN UP</button>
                          <p className="text-center my-text mt-3 already-acc">Already have an Account?
                            <span className="text-grn">
                              <Button style={{ marginLeft: '30px', paddingTop: '8px' }} onClick={() => history.push('/auth/login')} type='link'>Sign in</Button>
                            </span>
                          </p>
                        </Form>
                      }
                    </Spin>
                  </div>
               
                </div>
                <div className=" col-lg-6 col-md-5">
                  <div className="social-button">
                    <FacebookLoginButton
                      btnText={`Sign up with Facebook`}
                      onFinish={(data) => onFacebookSignup(props, data, history)}
                    />

                    <GoogleLoginButton
                      btnText={`Sign up with Google`}
                      onFinish={(data) => onGoogleSignUpFinish(props, data, history)}
                      onFinishFailed={onFinishFailed}
                    />
                    <div className="text-mob"> <span className="after-line">OR</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
