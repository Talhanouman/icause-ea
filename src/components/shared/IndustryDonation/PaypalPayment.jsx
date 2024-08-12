

import React, { useState } from 'react';
import { Form, Button, Input, InputNumber, notification } from 'antd';
import PaypalBtn from 'react-paypal-checkout';
import { isEmpty } from 'lodash';

const onPaypalError = (errors) => {
};

const onPaypalCancel = (data) => {
};

const onFinish = ({ form, values, props, industryId }) => {};

const onFinishFailed = (error) => {
};

const validateEmail = ({ email }) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateFields = ({ form }) => {
  let list = [];
  const values = form.getFieldsValue(true);

  Object.entries(values).forEach((value, index) => {
    const [key, fieldValue] = value;
    if (key === 'email' && (validateEmail({ email: fieldValue }))) {
      list.push(index);
    } else if (key !== 'email' && fieldValue) {
      list.push(index);
    }
  });
  const isValid = list.length;
  return isValid === 4 ? true : false;
};

const PaypalPayment = (props) => {
  const { industryId } = props;
  const [form] = Form.useForm();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // const [setForceRender] = useState('');
  const isValid = validateFields({ form });
  const actualAmount = Number(form.getFieldValue('amount')) || 0;

  const onPaypalSuccess = (data, { form, props, industryId }) => {
    const { paid } = data;
  
    if (paid) {
      notification.success({
        message: 'PAYPAL PAYMENT',
        description: 'Payment is successfull !',
        duration: 5
      });
  
      const { resetFields, getFieldsValue } = form;
      const { donateWithPaypalForCompany, user, getCompanyDetails } = props;
  
      const { amount, first_name, last_name, email } = getFieldsValue(true);
      if (user && user.id) {
        donateWithPaypalForCompany({
          company_id: industryId,
          users_id: user && user.id ? user.id : navigator.userAgent,
          amount,
          first_name,
          last_name,
          email,
          phoneNumber
        }).then(() => {
          getCompanyDetails(industryId);
          resetFields();
        });
      } else {
        notification.error({
          message: 'PAY WITH PAYPAL',
          description: 'UserId does not exist for this campaign !'
        });
      }
    } else {
      notification.error({
        message: 'PAYPAL PAYMENT',
        description: 'Payment is not successfull !',
        duration: 5
      });
    }
  };
  
  return (
    <div>
      <Form
        name="basic"
        form={form}
        onFinish={(values) => onFinish({ form, values, props, industryId })}
        onFinishFailed={onFinishFailed}
      >
        <div className="form-row">
          <div className="form-group col-sm-6 mb-4">
            <Form.Item
              style={{ position: 'relative' }}
              name="amount"
              rules={[
                {
                  required: true,
                  message: 'Please input a valid amount!',
                },
              ]}
            >
              <InputNumber onChange={() =>(Math.random().toString(36).substring(7))} min={1} style={{ width: '100%' }} placeholder='Enter amount'/>
              
            </Form.Item>
            <i className="fa fa-usd" aria-hidden="true" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '15px' , color:'#3cb64f'}}></i>
          </div>
          <div className="form-group col-sm-6 mb-4">
            <Form.Item
              style={{ position: 'relative' }}
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input a valid email!',
                },
              ]}
            >
              <Input
                // onChange={() => setForceRender(Math.random().toString(36).substring(7))}
                style={{ width: '100%' }} placeholder='Enter email' />
            </Form.Item>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-6 mb-4">
            <Form.Item
              style={{ position: 'relative' }}
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input a valid first name!',
                },
              ]}
            >
              <Input
                // onChange={() => setForceRender(Math.random().toString(36).substring(7))}
               style={{ width: '100%' }} placeholder='Enter First Name' />
            </Form.Item>
          </div>
          <div className="form-group col-sm-6 mb-4">
            <Form.Item
              style={{ position: 'relative' }}
              name="last_name"
              rules={[
                {
                  required: true,
                  message: 'Please input a valid Last Name!',
                },
              ]}
            >
              <Input
                // onChange={() => setForceRender(Math.random().toString(36).substring(7))}
                style={{ width: '100%' }} placeholder='Enter Last Name' />
            </Form.Item>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-12 mb-4">
            <input
              style={{ height: "44px", borderRadius: "0px", border: "none", width: "100%", outline: "none" }}
              value={phoneNumber}
              placeholder='&nbsp; e.g. (04) 12343521'
              name="phoneNumber"
              onChange={(event) => {
                const input = event.target;
                let value = input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/);
                input.value = !value[2] ? value[1] : '(' + value[1] + ') ' + value[2] + (value[3] ? '' + value[3] : '') + (value[4] ? '' + value[4] : '');
                setPhoneNumber("  " + input.value);
                if (isEmpty(event.target.value)) {
                  setError("Please enter phone number!")
                } else {
                  setError("");
                }
              }}
            />
            {error && <p style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "5px", marginBottom: "20px" }}>{error}</p>}
            {/* <Form.Item
              style={{ position: 'relative' }}
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: 'Please input a phone number!',
                },
              ]}
            >
              <Input onChange={() => setForceRender(Math.random().toString(36).substring(7))} style={{ width: '100%' }} placeholder='Enter Phone Number' />
            </Form.Item> */}
          </div>
        </div>
        <div className="form-row justify-content-between m-0">
          <div className="form-group">
          </div>
          <div
            onClick={() => {
              if (isEmpty(phoneNumber)) {
                setError("Please enter phone number!");
              } else {
                setError("");
              }
              if (!isValid) {
                const values = form.getFieldsValue();
                Object.entries(values).forEach((obj) => {
                  const [key, value] = obj;
                  if (!value) {
                    let formattedKey = '';
                    if (key === 'last_name') {
                      formattedKey = 'last name'
                    } else if (key === 'phone_number') {
                      formattedKey = 'phone number'
                    } else if (key === 'amount') {
                      formattedKey = 'amount'
                    } else if (key === 'email') {
                      formattedKey = 'email'
                    } else if (key === 'first_name') {
                      formattedKey = 'first name'
                    }
                    form.setFields([
                      {
                        name: key,
                        errors: [`${formattedKey} is required`],
                      },
                    ]);
                  }
                });
              }
            }}
            className="form-group"
          >
            <Form.Item style={{ textAlign: 'right', marginTop: 20 }}>
              <Button
                style={isValid ? { border: '0px solid', background: 'none' } : { border: '0px solid', background: 'none', pointerEvents: 'none' }}
                type="primary"
                htmlType="submit">
                {
                  <div>
                    <PaypalBtn
                      env={process.env.REACT_APP_PAYPAL_MODE}
                      client={{
                        sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID,
                        production: process.env.REACT_APP_PAYPAL_CLIENT_ID,
                      }}
                      currency='AUD'
                      total={actualAmount}
                      locale='en_US'
                      style={{
                        height: 48, fontWeight: 500, padding: '6px 30px'
                      }}
                      onError={onPaypalError}
                      onSuccess={(data) => onPaypalSuccess(data, { form, props, industryId })}
                      onCancel={onPaypalCancel}
                    />
                  </div>
                }
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PaypalPayment;
