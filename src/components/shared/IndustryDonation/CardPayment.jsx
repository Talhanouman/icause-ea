

import React, { useState } from 'react';
import { Form, Button, Input, InputNumber, Radio, notification } from 'antd';

import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement
} from 'react-stripe-elements';

const onFinishFailed = (error) => {
};



const CardPayment = (props) => {
  const [bulletInAmount, setBulletAmount] = useState(-1);
  const [stripeElementErrorMessages, setElementErrorMessage] = useState([]);
  const [cardNumberRef, setCardNumberRef] = useState(null);
  const [cvcRef, setCvcRef] = useState(null);
  const [expiryRef, setExpiryRef] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const { industryId } = props;
  // const { cardNumberMessage, expiryDateMessage, cvcCheckMessage } = getErrorMessagesForStripeElements(stripeElementErrorMessages);
  const [form] = Form.useForm();

  const onFinish = ({
    form,
    values,
    props,
    stripeElementErrorMessages,
    setElementErrorMessage,
    industryId,
    cardNumberRef,
    cvcRef,
    expiryRef,
    setBulletAmount
  }) => {
    const { stripe, payWithCard, initializeTokenGeneration, getCompanyDetails } = props;
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
  
        const { amount, first_name, last_name, email, paymentType } = values;
        payWithCard({
          token: response.token.id,
          amount,
          first_name,
          last_name,
          email,
          phoneNumber,
          company_id: industryId,
          paymentType
        }).then(() => {
          getCompanyDetails(industryId);
          setBulletAmount(-1);
          cardNumberRef.clear();
          expiryRef.clear();
          cvcRef.clear();
  
          form.resetFields();
        }).catch((err) => {
          setBulletAmount(-1);
          cardNumberRef.clear();
          expiryRef.clear();
          cvcRef.clear();
  
          form.resetFields();
        })
      }
    }).catch((err) => {
    });
  };
  
  return (
    <div>
      <Form
        name="basic"
        form={form}
        onFinish={(values) => onFinish({
          form,
          values,
          props,
          stripeElementErrorMessages,
          setElementErrorMessage,
          industryId,
          cardNumberRef,
          cvcRef,
          expiryRef,
          setBulletAmount
        })}
        onFinishFailed={onFinishFailed}
      >
        <div className="form-row">
          <div className="form-group col-sm-12">
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
                placeholder='Card Number (e.g. 1234 1234 1234 1234)'
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
              name="form_card_ndsaumber"
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

            {/* {
              cvcCheckMessage &&
              <div className="ant-form-item-explain ant-form-item-explain-error">
                {cvcCheckMessage}
              </div>
            } */}
          </div>
          <div className="form-group col-sm-6">
            <Form.Item
              name="sa"
              rules={[
                {
                  required: true,
                  message: 'Please input your card expiry!',
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

            {/* {
              expiryDateMessage &&
              <div className="ant-form-item-explain ant-form-item-explain-error">
                {expiryDateMessage}
              </div>
            } */}
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
            {/* <Form.Item
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input style={{ width: '100%' }} placeholder='Phone Number' />
            </Form.Item> */}
          </div>
          <div className="col-lg-7 mt-4 pt-2">
            <div className="category-donate-3-text">
              <p className="heading-2 mb-1">Enter Amount</p>
              <p className="mb-4">There are many variations of passages of but the majority have.</p>
            </div>
          </div>
          <div className="col-12 payment-form-wrap row">
            <div className="col-lg-6">
              <div className="form-group mb-2 amount-box">
                <Form.Item
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: 'Please input a valid amount!',
                    },
                  ]}
                >
                  <InputNumber onChange={() => setBulletAmount(-1)} min={1} style={{ width: '100%' }} placeholder='Enter amount' />
                </Form.Item>
                <span className="abs-icon"><i className="fa fa-usd"></i></span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="select-price-wrap form-group mb-2">
                <div className="select-price">
                  <label
                    style={bulletInAmount === 10 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(10);
                      form.setFieldsValue({ amount: 10 });
                    }
                    }
                    htmlFor="price-1">$ 10</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 20 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(20);
                      form.setFieldsValue({ amount: 20 });
                    }
                    } htmlFor="price-2">$ 20</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 30 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(30);
                      form.setFieldsValue({ amount: 30 });
                    }
                    } htmlFor="price-3">$ 30</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 40 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(40);
                      form.setFieldsValue({ amount: 40 });
                    }
                    } htmlFor="price-4">$ 40</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 50 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(50);
                      form.setFieldsValue({ amount: 50 });
                    }
                    } htmlFor="price-5">$ 50</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 60 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(60);
                      form.setFieldsValue({ amount: 60 });
                    }
                    } htmlFor="price-6">$ 60</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 70 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(70);
                      form.setFieldsValue({ amount: 70 });
                    }
                    } htmlFor="price-7">$ 70</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 80 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(80);
                      form.setFieldsValue({ amount: 80 });
                    }
                    } htmlFor="price-8">$ 80</label>
                </div>
                <div className="select-price">
                  <label style={bulletInAmount === 90 ? { color: '#4CA13B' } : {}}
                    onClick={() => {
                      setBulletAmount(90);
                      form.setFieldsValue({ amount: 90 });
                    }
                    } htmlFor="price-9">$ 90</label>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="contribution-box">
                    <p className="title">Make a Contribution?</p>
                    <p className="mb-3">if you trying to help this organization for every month just on a single click you can subscribe. and iCause will deduct fix amount from your account.</p>
                    <div className="d-flex flex-wrap">
                      <div className="form-group d-flex align-items-center mb-0 mr-3">
                        <Form.Item
                          name="paymentType"
                          rules={[
                            {
                              required: true,
                              message: 'Please Select Payment Type!',
                            },
                          ]}
                        >
                          <Radio.Group>
                            <Radio value='monthly'>Recurring Payment</Radio>
                            <Radio value='oneTime'>One Time</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between mt-4">
                  <div className="form-row d-flex justify-content-between m-0">
                    <div className="form-group">
                      <Form.Item>
                        <Button className="btn btn-success btn-block"
                          onClick={() => {
                            setError("");
                            if (!phoneNumber) {
                              setError("Please enter phone number!")
                            }
                          }}
                          style={{ height: '48px', fontWeight: '500', padding: '10px 30px' }} type="primary" htmlType="submit">
                            Donate Now
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Form>
    </div>
  );
};

export default CardPayment;
