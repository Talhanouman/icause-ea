

import React, { useState } from 'react';
import { Form, Spin, Button, Input, InputNumber, notification } from 'antd';

import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement
} from 'react-stripe-elements';

const onFinishFailed = (error) => {
};

const CardPayment = (props) => {
  const [stripeElementErrorMessages, setElementErrorMessage] = useState([]);
  const [cardNumberRef, setCardNumberRef] = useState(null);
  const [cvcRef, setCvcRef] = useState(null);
  const [expiryRef, setExpiryRef] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  
  const { donateMoney, campaignId } = props;
  const { loadingForDonateMoney } = donateMoney;
  // const { cardNumberMessage, expiryDateMessage, cvcCheckMessage } = getErrorMessagesForStripeElements(stripeElementErrorMessages);
  const [form] = Form.useForm();
  
  const onFinish = ({
    form,
    values,
    props,
    stripeElementErrorMessages,
    setElementErrorMessage,
    campaignId,
    cardNumberRef,
    cvcRef,
    expiryRef
  }) => {
    if(!error){
      const { stripe, payWithCard, initializeTokenGeneration, getCampaignDetails } = props;
    
      console.log("stripekey",stripeElementErrorMessages)
      initializeTokenGeneration(true);
      stripe.createToken().then((response) => {
        if (response && response.error) {
          notification.error({
            message: 'ERROR!',
            description: response?.error?.message
          });
          const code = response.error.code.includes('number') ? 'INVALID_CARD_NUMBER' : (response.error.code.includes('cvc') ? 'INVALID_CVC' : 'INVALID_EXPIRY_DATE')
          const errors = [...stripeElementErrorMessages, {
            code,
            message: response.error.message
          }]
          setElementErrorMessage(errors);
          initializeTokenGeneration(false);
        } else {
          initializeTokenGeneration(false);
          const { amount, first_name, last_name, email } = values;
          payWithCard({
            token: response.token.id,
            amount,
            first_name,
            last_name,
            email,
            phoneNumber,
            campaignId
          }).then(() => {
            getCampaignDetails(campaignId);
            cardNumberRef.clear();
            expiryRef.clear();
            cvcRef.clear();
    
            form.resetFields();
          }).catch((err) => {
            cardNumberRef.clear();
            expiryRef.clear();
            cvcRef.clear();
    
            form.resetFields();
          })
        }
      }).catch((err) => {
      });
    }
  };  

  return (
    <div>
      <Spin spinning={loadingForDonateMoney}>
        <Form
          name="basic"
          form={form}
          onFinish={(values) => onFinish({
            form,
            values,
            props,
            stripeElementErrorMessages,
            setElementErrorMessage,
            campaignId,
            cardNumberRef,
            cvcRef,
            expiryRef
          })}
          onFinishFailed={onFinishFailed}
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <Form.Item
                name="amount"
                rules={[
                  {
                    required: true,
                    message: 'Please input a valid amount!',
                  },
                ]}
              >
                <InputNumber min={1} style={{ width: '100%' }} placeholder='Enter amount' />
              </Form.Item>
            </div>
            <div className="form-group col-sm-6">
              <Form.Item
                name="form_card_number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your card number!',
                  },
                ]}
              >
                <CardNumberElement
                  style={{ height: '58px' }}
                  onReady={e => setCardNumberRef(e)}
                  placeholder='Card Number (e.g. 1234 1234 1234 1234) '
                  showIcon= {true}
                  onChange={(value) => {
                    const { error } = value;
                    if (error && error.code) {
                      const errors = [...stripeElementErrorMessages, {
                        code: 'INVALID_CARD_NUMBER',
                        message: error.message
                      }]
                      setElementErrorMessage(errors);
                    } else {
                      const errors = stripeElementErrorMessages.filter(({ code }) => code !== 'INVALID_CARD_NUMBER');
                      setElementErrorMessage(errors);
                    }
                  }}
                />
              </Form.Item>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <Form.Item
                name="form_card_nuDASmber"
                rules={[
                  {
                    required: true,
                    message: 'Please input your CVC!',
                  },
                ]}
              >
                <CardCVCElement
                  onReady={e => setCvcRef(e)}
                  onChange={(value) => {
                    const { error } = value;
                    if (error && error.code) {
                      const errors = [...stripeElementErrorMessages, {
                        code: 'INVALID_CVC',
                        message: error.message
                      }]
                      setElementErrorMessage(errors);
                    } else {
                      const errors = stripeElementErrorMessages.filter(({ code }) => code !== 'INVALID_CVC');
                      setElementErrorMessage(errors);
                    }
                  }}
                />
              </Form.Item>
            </div>
            <div className="form-group col-sm-6">
              <Form.Item
                name="form_card_ndasuDASmber"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Expiry!',
                  },
                ]}
              >
                <CardExpiryElement
                  onReady={e => setExpiryRef(e)}
                  placeholder='Card Expiry Date (MM / YY)'
                  onChange={(value) => {
                    const { error } = value;
                    if (error && error.code) {
                      const errors = [...stripeElementErrorMessages, {
                        code: 'INVALID_EXPIRY_DATE',
                        message: error.message
                      }]
                      setElementErrorMessage(errors);
                    } else {
                      const errors = stripeElementErrorMessages.filter(({ code }) => code !== 'INVALID_EXPIRY_DATE');
                      setElementErrorMessage(errors);
                    }
                  }}
                />
              </Form.Item>

            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <Form.Item
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} placeholder='First Name' />
              </Form.Item>
            </div>
            <div className="form-group col-sm-6">
              <Form.Item
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} placeholder='Last Name' />
              </Form.Item>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input type='email' style={{ width: '100%' }} placeholder='Email' />
              </Form.Item>
            </div>
            <div className="form-group col-sm-6">
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
                  setError("");
                }}
              />
              {error && <p style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "5px", marginBottom: "20px" }}>{error}</p>}
            </div>
          </div>
          <div className="form-row d-flex justify-content-md-between justify-content-center m-0">
            <div className="form-group">
              {/* <a href='/homepage' className="btn btn-outline-dark btn-block" style={{ height: '48px', padding: '10px 10px' }}>
                <svg id="arrow-right-line_4_" data-name="arrow-right-line (4)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path id="Path_5" data-name="Path 5" d="M24,0H0V24H24Z" fill="none" />
                  <path id="Path_6" data-name="Path 6" d="M7.828,11l5.364-5.364L11.778,4.222,4,12l7.778,7.778,1.414-1.414L7.828,13H20V11Z" />
                </svg>
              </a> */}
            </div>
            <div className="form-group">
              <Form.Item>
                <Button className="btn btn-success btn-block"
                  onClick={() => {
                    setError("");
                    if (!phoneNumber) {
                      setError("Please enter phone number!")
                    }
                  }}
                  style={{ height: '39px', fontWeight: '500', padding: '8px 30px 10px 30px', marginTop: '20px' }} type="primary" htmlType="submit">
                  Donate Now
                  {/* Donate Now */}
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default CardPayment;
