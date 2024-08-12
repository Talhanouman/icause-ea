import React from 'react';
import { Form, Input } from 'antd';
import { useHistory } from 'react-router';

const { TextArea } = Input;

const onFinish = (props, values, form) => {
  const { enquireQuery } = props;
  enquireQuery(values).then(() => form.resetFields());
};

const EnquireForm = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();
  
  return (
    <section className="drop-line py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto gen-text-box">
            <div className="drop-title d-flex justify-content-between flex-wrap align-items-center mb-4">
              <div className="left-title">
                <p className="marker-text" onClick={() => history.push('/auth/login')} >Donate Now</p>
                <h4 className="heading">Enquiry Now</h4>
              </div>
            </div>
            <Form
              form={form}
              layout="vertical"
              name="basic"
              className="gen-form"
              onFinish={(values) => onFinish(props, values, form)}
            >
              <div className="form-group">
                <label>First Name</label>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name !',
                    },
                  ]}>
                  <Input type="text" className="form-control" placeholder="e.g. Mark" />
                </Form.Item>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email !',
                    },
                  ]}>
                  <Input type="email" className="form-control" placeholder="e.g. markcarson@gmail.com" />
                </Form.Item>
              </div>
              <div className="form-group">
                <label>How can we help you?</label>
                <Form.Item
                  name="msg"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your message!',
                    },
                  ]}>
                  <TextArea className="form-control" rows={4} />
                </Form.Item>
              </div>
              <button htmltype='submit' className="btn btn-outline-dark">CONTACT NOW</button>
            </Form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EnquireForm;