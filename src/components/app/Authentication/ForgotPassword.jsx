import React from 'react';
import { Form, Input, Spin } from 'antd';
import MetaTags from 'react-meta-tags';
import { forgotPassword } from '../../../actions/user'
import { useDispatch } from 'react-redux';

const onFinishFailed = (errorInfo) => {
};


const ForgotPassword = (props) => {
 
  const dispatch = useDispatch();
  const { history, user } = props;
  const loading = user?.loading ? user?.loading : false;
  const [form] = Form.useForm();

  const onFinish = (props, values, history) => {
    values.email = null;
    dispatch(forgotPassword(values, history));
  };

  return (
    <div className="login-page-wrap">
      <MetaTags>
        <meta name="description" content="Sign in to iCause to start an online fundraiser, track your current campaign or donate to your favourite cause or charity. iCause makes making a difference easy." />
      </MetaTags>
      <section className="sign-up-page login-page forget-pass">
        <div className="container place-text">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-12 mx-auto mt-md-5">
              <div className="row">
                <div className="col-lg-6 col-md-7 mx-auto">
                  <div className="form-wraper">
                    <h3 className="text-center">Welcome at Icause </h3>
                    <p className="text-center">Forgot Password</p>
                    {/* <p className="text-right">
                      Switch to Mobile <span className="switch-phone"><i className="fa fa-phone"></i></span></p> */}
                    <Spin spinning={loading}>
                      <Form
                        form={form}
                        layout="vertical"
                        name="basic"
                        onFinish={(values) => onFinish(props, values, history)}
                        onFinishFailed={onFinishFailed}
                      >
                        <div className="form-group">
                          <Form.Item
                            label=''
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
                        <Form.Item>
                          <button className="btn btn-success   text-uppercase mt-4 d-block w-100" type="submit">Send Now</button>
                         
                        </Form.Item>
                       <p className="allredy-text">Alreday hava an Account? <a href="#!"> Sign in</a></p>
                      </Form>
                    </Spin>
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

export default ForgotPassword;
