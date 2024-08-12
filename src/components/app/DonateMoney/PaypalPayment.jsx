import React, { useState } from 'react';
import { Form, Spin, Button, Input, InputNumber, notification } from 'antd';
import PaypalBtn from 'react-paypal-checkout';
import { isEmpty } from 'lodash';

const onPaypalError = (errors) => {
};

const onPaypalCancel = (data) => {
};

const onPaypalSuccess = (data, { form, props, campaignId, phoneNumber }) => {
  const { paid } = data;

  if (paid) {
    notification.success({
      message: 'PAYPAL PAYMENT',
      description: 'Payment is successfull !',
      duration: 5
    });

    const { resetFields, getFieldsValue } = form;
    const { campaignDetails, donateWithPaypal, getCampaignDetails } = props;
    const { campaign_info } = campaignDetails || {};
    const { campaignDetails: camp } = campaign_info || {};
    const { users_id } = camp || {};

    const { amount, first_name, last_name, email } = getFieldsValue(true);
    if (users_id) {
      donateWithPaypal({
        campaign_id: campaignId,
        users_id,
        amount,
        first_name,
        last_name,
        email,
        phoneNumber
      }).then(() => {
        getCampaignDetails(campaignId);
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

const client = {
  sandbox: 'AYaDByr8b_H7lgqq9R_Hh6T4iFfkD0IF_4LrKTZWemVZ4-dinrv7uJJCcHc7iCNPeLWwVQ6JdygaflQJ',
  production: 'AaDCclAzqkkbpBpZ6eRAP9Dk0ZotC_Mu3BwSKfE4h-Xz2pybAoflYL4IgSgFZlSUfMfbdihKEE5lcNVE',
}
let env = 'production';
let currency = 'USD';
let total = 1;
let locale = 'en_US';
let style = {
  'label': 'pay',
  'tagline': false,
  'size': 'medium',
  'shape': 'pill',
  'color': 'gold'
};

const PaypalPayment = (props) => {
  const { donateMoney, campaignId } = props;
  const { loadingForDonateMoney } = donateMoney;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [form] = Form.useForm();
  const isValid = validateFields({ form });
  const onFinish = ({ form, values, props, campaignId }) => {
    const { resetFields } = form;
    const { campaignDetails, donateWithPaypal } = props;
    const { campaign_info } = campaignDetails || {};
    const { campaignDetails: camp } = campaign_info || {};
    const { users_id } = camp || {};

    const { amount, first_name, last_name, email } = values;
    if (users_id) {
      donateWithPaypal({
        campaign_id: campaignId,
        users_id,
        amount,
        first_name,
        last_name,
        email,
        phoneNumber
      }).then(() => resetFields());
    } else {
      notification.error({
        message: 'PAY WITH PAYPAL',
        description: 'UserId does not exist for this campaign !'
      });
    }
  };

  return (
    <div>
      <Spin spinning={loadingForDonateMoney}>
        <Form
          name="basic"
          form={form}
          onFinish={(values) => {onFinish({ form, values, props, campaignId }) }}
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
                <InputNumber 
                // onChange={() => setForceRender(Math.random().toString(36).substring(7))} 
                min={1} style={{ width: '100%' }} placeholder='Enter amount' />
              </Form.Item>
              <i className="fa fa-usd" aria-hidden="true" style={{ position: 'absolute', top: '28px', transform: 'translateY(-50%)', left: '15px', color: '#3cb64f' }}></i>
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
              {/* <div className="row">
                <div className="col_3" style={{ color: "#ff4d4f", marginLeft: "8px", marginRight: "-8px", fontSize: "14px" }}>*</div>
                <div className="col_6"><label>Phone Number</label></div>
              </div> */}
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
              {/* <a href='/homepage' className="btn btn-outline-dark btn-block" style={{ height: '48px', padding: '10px 10px' }}>
                <svg id="arrow-right-line_4_" data-name="arrow-right-line (4)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path id="Path_5" data-name="Path 5" d="M24,0H0V24H24Z" fill="none" />
                  <path id="Path_6" data-name="Path 6" d="M7.828,11l5.364-5.364L11.778,4.222,4,12l7.778,7.778,1.414-1.414L7.828,13H20V11Z" />
                </svg>
              </a> */}
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
                {/* <div ref={paypal}></div> */}
              <Form.Item>
                <Button
                  style={isValid ? { border: '0px solid', background: 'none' } : { border: '0px solid', background: 'none', pointerEvents: 'none' }}
                  type="primary"
                  htmlType="submit"
                >
                  {
                    <PaypalBtn
                      env={env}
                      client={client}
                      currency={currency}
                      total={total}
                      locale={locale}
                      style={style}
                      onError={onPaypalError}
                      onSuccess={(data) => onPaypalSuccess(data, { form, props, campaignId, phoneNumber })}
                      onCancel={onPaypalCancel}
                    />
                  }
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default PaypalPayment;
