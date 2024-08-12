

import React, { useState } from 'react';
import { Spin, Form, Button, Row, Col } from 'antd';
import MaskedInput from 'antd-mask-input'
import { imageURL, SMS_COUNTRY_CODES, SMS_TEXT } from '../../../constants/constants';

const onFinishFailed = (errorInfo) => {
};

const GetTheAppSection = (props) => {
  const { data } = props;
  const { content } = data || {};
  const { app_title: appTitle, app_subtitle: appSubtitle, app_text } = content ? JSON.parse(content) : {};
  const [form] = Form.useForm();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [numComplete, setNumComplete] = useState({ height: '40px', fontSize: '17px', backgroundColor: '#ECF4FA' });
  const [showCheck, setShowCheck] = useState(false);
  const [loader, setLoader] = useState(false)

  const onFinish = (props, values, { resetFields }) => {
    let number = phone.replace(/\s/g, '').replace('_', '');
    if (number === '' || number.length < 8) {
      setError(true);
      return;
    }
    const { sendSms } = props;
    const msg = SMS_TEXT;
    const { code } = SMS_COUNTRY_CODES.find(({ country }) => country === 'AUS');
    let phoneNumber = `${code}${number}`;
    sendSms(phoneNumber, msg).then(() => {
      resetFields();
      setPhone('');
      setLoader(false)
      setShowCheck(false);
      setNumComplete({ height: '40px', fontSize: '17px', backgroundColor: '#ECF4FA' });
    });
  };

  const setPhoneNumber = (event) => {
    setError(false);
    let value = event.target.value
    setPhone(value);


    if (value.length === 11) {
      let number = value.replace(/\s/g, '').replace('_', '');

      if (isNaN(number)) {

      } else {

        if (number.length === 9) {
          setNumComplete({ height: '40px', fontSize: '17px', color: '#3cb64f' });
          setShowCheck(true);
        } else {
          setNumComplete({ height: '40px', fontSize: '17px', backgroundColor: '#ECF4FA' });
          setShowCheck(false);
        }
      }
    }
  }

  return (
    <div>
      <Spin spinning={false}>

      <section className="icause_app get-app-section">
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={(values) => {onFinish(props, values, form); setLoader(true)}}
            onFinishFailed={onFinishFailed}
          >
            <div className="container container-lg">
              <h3 className="main-heading text-center pb-1 mb-0">
                <div dangerouslySetInnerHTML={{ __html: appTitle || '' }} />
              </h3>
             
              <div className="row align-items-center">

                <div className="col-lg-6 col-xl-5 col-md-6 col-sm-12 col-12">
                  {/* <h2 className="d-none d-md-block text-center text-md-left">
                    <div className="mb-2 " dangerouslySetInnerHTML={{ __html: appSubtitle || '' }} />
                  </h2> */}
                  {/* <p style={{ color: 'black' }} className="d-none d-sm-block text-center text-md-left">{app_text || ''}</p> */}
                  <Form.Item
                   
                  >
                    <div className="d-block d-md-none select-contry">
                      <Row gutter={24} className="input-wrap mob-number align-items-baseline">
                      <Col style={{ marginTop: '5px', paddingLeft: '0px', paddingRight: '0px' }} className="country" >
                          
                            <button className="btn p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="https://icause.s3.us-east-2.amazonaws.com/images/Image+21.png" className="img-fluid" alt="" />
                            </button>
                            
                        </Col>
                        <Col style={{ marginTop: '5px', paddingLeft: '10px', paddingRight: '0px' }} className ="country-code" >
                          <h5 className="num-head">+61</h5>
                        </Col>
                        <Col className="ph-number">


                          <MaskedInput
                            placeholder="4"
                            style={numComplete}
                            className="form-control"
                            mask="411 111 111"
                            size="20"
                            onChange={(e) => { setPhoneNumber(e) }}
                          />
                        </Col>
                        <Col span={1}>
                          <div className="d-flex align-items-center check-icon">
                            {showCheck &&
                              <i className="fas fa-check-circle"></i>
                            }
                          </div>
                        </Col>
                      </Row>
                      {error &&
                        <div style={{ color: 'red' }} >
                          <span>Inavlid phone number</span></div>
                      }
                    </div>
                    <div className="d-none d-md-block">
                      <Row gutter={24} className="input-wrap mob-number border-bot" >
                        <Col style={{ marginTop: '5px', paddingLeft: '10px', paddingRight: '0px' }} span={6}>
                          <h5 className="num-head m-0">+61</h5>
                        </Col>
                        <Col span={16}>
                          <MaskedInput
                            placeholder="4"
                            style={numComplete}
                            className="form-control"
                            mask="411 111 111"
                            size="20"
                            onChange={(e) => { setPhoneNumber(e) }}
                          />
                        </Col>
                        <Col span={1}>
                          <div className="d-flex align-items-center check-icon">
                            {showCheck &&
                              <i className="fas fa-check-circle"></i>
                            }
                          </div>
                        </Col>
                      </Row>
                      {error &&
                        <div style={{ color: 'red' }} >
                          <span>Inavlid phone number</span></div>
                      }
                    </div>
                  </Form.Item>
                  <Form.Item className="mb-md-4">
                    <Button htmlType='submit' type='primary' disabled={loader} className="btn btn-success btn-block get-app-btn get-app mt-3">Get the app</Button>
                  </Form.Item>
                  
                </div>
                <div className="col-lg-1 d-none d-lg-block"></div>
                <div className="col-lg-5 col-md-6 col-sm-8 col-10  mt-sm-3 mt-md-0 ">
                <div className="available-on mt-0 mt-md-3">
                  <div className='avail-new'>
                    <p className="my-2 d-none d-md-block"> <span>Available on</span></p>
                    </div>
                    {/* <p className="my-2 d-none d-md-block">Available on</p> */}
                    <div className='row justify-content-center justify-content-md-end'>
                      <div className='col-6 col-md-5'>
                        <img src='https://icause.s3.us-east-2.amazonaws.com/images/apple.png' className='w-100 h-100'></img>
                      </div>
                      <div className='col-6 col-md-5'>
                        <img src='https://icause.s3.us-east-2.amazonaws.com/images/google.png' className='w-100 h-100'></img>
                      </div>
                    </div>
                    {/* <div className="get-icous-app app-btns text-center d-none d-md-block pl-md-5">  
                      <a className="app-btn blu flex vert align-items-center" href="http:apple.com">
                      <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE4NS4yNTUsNTEyYy03Ni4yMDEtMC40MzktMTM5LjIzMy0xNTUuOTkxLTEzOS4yMzMtMjM1LjIxYzAtMTI5LjQwNCw5Ny4wNzUtMTU3LjczNCwxMzQuNDg3LTE1Ny43MzQgICBjMTYuODYsMCwzNC44NjMsNi42MjEsNTAuNzQyLDEyLjQ4YzExLjEwNCw0LjA4NywyMi41ODgsOC4zMDYsMjguOTc1LDguMzA2YzMuODIzLDAsMTIuODMyLTMuNTg5LDIwLjc4Ni02LjczOCAgIGMxNi45NjMtNi43NTMsMzguMDcxLTE1LjE0Niw2Mi42NTEtMTUuMTQ2YzAuMDQ0LDAsMC4xMDMsMCwwLjE0NiwwYzE4LjM1NCwwLDc0LjAwNCw0LjAyOCwxMDcuNDYxLDU0LjI3Mmw3LjgzNywxMS43NzcgICBsLTExLjI3OSw4LjUxMWMtMTYuMTEzLDEyLjE1OC00NS41MTMsMzQuMzM2LTQ1LjUxMyw3OC4yNjdjMCw1Mi4wMzEsMzMuMjk2LDcyLjA0MSw0OS4yOTIsODEuNjY1ICAgYzcuMDYxLDQuMjQ4LDE0LjM3LDguNjI4LDE0LjM3LDE4LjIwOGMwLDYuMjU1LTQ5LjkyMiwxNDAuNTY2LTEyMi40MTcsMTQwLjU2NmMtMTcuNzM5LDAtMzAuMjc4LTUuMzMyLTQxLjMzOC0xMC4wMzQgICBjLTExLjE5MS00Ljc2MS0yMC44NDUtOC44NjItMzYuNzk3LTguODYyYy04LjA4NiwwLTE4LjMxMSwzLjgyMy0yOS4xMzYsNy44ODFDMjIxLjQ5Niw1MDUuNzMsMjA0Ljc1Miw1MTIsMTg1Ljc1Myw1MTJIMTg1LjI1NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIGQ9Ik0zNTEuMzQzLDBjMS44ODgsNjguMDc2LTQ2Ljc5NywxMTUuMzA0LTk1LjQyNSwxMTIuMzQyQzI0Ny45MDUsNTguMDE1LDMwNC41NCwwLDM1MS4zNDMsMHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L2c+PC9zdmc+" />
                        <p>Download on the <br /> <span className="big-txt"> <strong> App Store</strong></span></p>
                      </a>
                      <a className="app-btn blu flex vert google-btn" href="https://play.google.com/store/apps/details?id=com.app.icause">
                        <img alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="></img>
                        <p>Download on the <br /> <span className="big-txt"> <strong> Play Store</strong></span></p>
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className='col-12 mobie-getapp-view'>
                {/* <div className="get-icous-app app-btns flex ">
                      <a className="app-btn blu flex vert align-items-center" href="http:apple.com">
                      <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE4NS4yNTUsNTEyYy03Ni4yMDEtMC40MzktMTM5LjIzMy0xNTUuOTkxLTEzOS4yMzMtMjM1LjIxYzAtMTI5LjQwNCw5Ny4wNzUtMTU3LjczNCwxMzQuNDg3LTE1Ny43MzQgICBjMTYuODYsMCwzNC44NjMsNi42MjEsNTAuNzQyLDEyLjQ4YzExLjEwNCw0LjA4NywyMi41ODgsOC4zMDYsMjguOTc1LDguMzA2YzMuODIzLDAsMTIuODMyLTMuNTg5LDIwLjc4Ni02LjczOCAgIGMxNi45NjMtNi43NTMsMzguMDcxLTE1LjE0Niw2Mi42NTEtMTUuMTQ2YzAuMDQ0LDAsMC4xMDMsMCwwLjE0NiwwYzE4LjM1NCwwLDc0LjAwNCw0LjAyOCwxMDcuNDYxLDU0LjI3Mmw3LjgzNywxMS43NzcgICBsLTExLjI3OSw4LjUxMWMtMTYuMTEzLDEyLjE1OC00NS41MTMsMzQuMzM2LTQ1LjUxMyw3OC4yNjdjMCw1Mi4wMzEsMzMuMjk2LDcyLjA0MSw0OS4yOTIsODEuNjY1ICAgYzcuMDYxLDQuMjQ4LDE0LjM3LDguNjI4LDE0LjM3LDE4LjIwOGMwLDYuMjU1LTQ5LjkyMiwxNDAuNTY2LTEyMi40MTcsMTQwLjU2NmMtMTcuNzM5LDAtMzAuMjc4LTUuMzMyLTQxLjMzOC0xMC4wMzQgICBjLTExLjE5MS00Ljc2MS0yMC44NDUtOC44NjItMzYuNzk3LTguODYyYy04LjA4NiwwLTE4LjMxMSwzLjgyMy0yOS4xMzYsNy44ODFDMjIxLjQ5Niw1MDUuNzMsMjA0Ljc1Miw1MTIsMTg1Ljc1Myw1MTJIMTg1LjI1NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIGQ9Ik0zNTEuMzQzLDBjMS44ODgsNjguMDc2LTQ2Ljc5NywxMTUuMzA0LTk1LjQyNSwxMTIuMzQyQzI0Ny45MDUsNTguMDE1LDMwNC41NCwwLDM1MS4zNDMsMHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L2c+PC9zdmc+" />
                        <p>Download on the <br /> <span className="big-txt"> <strong> App Store</strong></span></p>
                      </a>
                      <a className="app-btn blu flex vert google-btn" href="https://play.google.com/store/apps/details?id=com.app.icause">
                        <img alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="></img>
                        <p>Download on the <br /> <span className="big-txt"> <strong> Play Store</strong></span></p>
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
          </Form>
        </section>




        
        {/* <section className="icause_app get-app-section">
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={(values) => {onFinish(props, values, form); setLoader(true)}}
            onFinishFailed={onFinishFailed}
          >
            <div className="container container-lg">
              <h3 className="main-heading text-center pb-1">
                <div dangerouslySetInnerHTML={{ __html: appTitle || '' }} />
              </h3>
             
              <div className="row align-items-center">

                <div className="col-lg-6 col-xl-5 col-md-6 col-sm-12 col-12">
                  <h2 className="d-none d-md-block text-center text-md-left">
                    <div className="mb-2 " dangerouslySetInnerHTML={{ __html: appSubtitle || '' }} />
                  </h2>
                  <p style={{ color: 'black' }} className="d-none d-sm-block text-center text-md-left">{app_text || ''}</p>
                  <Form.Item
                   
                  >
                    <div className="d-block d-md-none select-contry">
                      <Row gutter={24} className="input-wrap mob-number align-items-baseline">
                      <Col style={{ marginTop: '5px', paddingLeft: '0px', paddingRight: '0px' }} className="country" >
                          
                            <button className="btn p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="https://icause.s3.us-east-2.amazonaws.com/images/Image+21.png" className="img-fluid" alt="" />
                            </button>
                            
                        </Col>
                        <Col style={{ marginTop: '5px', paddingLeft: '10px', paddingRight: '0px' }} className ="country-code" >
                          <h5 className="num-head">+61</h5>
                        </Col>
                        <Col className="ph-number">


                          <MaskedInput
                            placeholder="4"
                            style={numComplete}
                            className="form-control"
                            mask="411 111 111"
                            size="20"
                            onChange={(e) => { setPhoneNumber(e) }}
                          />
                        </Col>
                        <Col span={1}>
                          <div className="d-flex align-items-center check-icon">
                            {showCheck &&
                              <i className="fas fa-check-circle"></i>
                            }
                          </div>
                        </Col>
                      </Row>
                      {error &&
                        <div style={{ color: 'red' }} >
                          <span>Inavlid phone number</span></div>
                      }
                    </div>
                    <div className="d-none d-md-block">
                      <Row gutter={24} className="input-wrap mob-number border-bot" >
                        <Col style={{ marginTop: '5px', paddingLeft: '10px', paddingRight: '0px' }} span={6}>
                          <h5 className="num-head m-0">+61</h5>
                        </Col>
                        <Col span={16}>
                          <MaskedInput
                            placeholder="4"
                            style={numComplete}
                            className="form-control"
                            mask="411 111 111"
                            size="20"
                            onChange={(e) => { setPhoneNumber(e) }}
                          />
                        </Col>
                        <Col span={1}>
                          <div className="d-flex align-items-center check-icon">
                            {showCheck &&
                              <i className="fas fa-check-circle"></i>
                            }
                          </div>
                        </Col>
                      </Row>
                      {error &&
                        <div style={{ color: 'red' }} >
                          <span>Inavlid phone number</span></div>
                      }
                    </div>
                  </Form.Item>
                  <Form.Item className="mb-md-4">
                    <Button htmlType='submit' type='primary' disabled={loader} className="btn btn-success btn-block get-app-btn get-app mt-3">Get the app</Button>
                  </Form.Item>
                  <div className="available-on mt-3 mt-md-3">
                    <p className="my-2 d-none d-md-block">Available on</p>
                    <div className="get-icous-app app-btns flex desktop-getapp-view">
                      <a className="app-btn blu flex vert align-items-center" href="http:apple.com">
                      <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE4NS4yNTUsNTEyYy03Ni4yMDEtMC40MzktMTM5LjIzMy0xNTUuOTkxLTEzOS4yMzMtMjM1LjIxYzAtMTI5LjQwNCw5Ny4wNzUtMTU3LjczNCwxMzQuNDg3LTE1Ny43MzQgICBjMTYuODYsMCwzNC44NjMsNi42MjEsNTAuNzQyLDEyLjQ4YzExLjEwNCw0LjA4NywyMi41ODgsOC4zMDYsMjguOTc1LDguMzA2YzMuODIzLDAsMTIuODMyLTMuNTg5LDIwLjc4Ni02LjczOCAgIGMxNi45NjMtNi43NTMsMzguMDcxLTE1LjE0Niw2Mi42NTEtMTUuMTQ2YzAuMDQ0LDAsMC4xMDMsMCwwLjE0NiwwYzE4LjM1NCwwLDc0LjAwNCw0LjAyOCwxMDcuNDYxLDU0LjI3Mmw3LjgzNywxMS43NzcgICBsLTExLjI3OSw4LjUxMWMtMTYuMTEzLDEyLjE1OC00NS41MTMsMzQuMzM2LTQ1LjUxMyw3OC4yNjdjMCw1Mi4wMzEsMzMuMjk2LDcyLjA0MSw0OS4yOTIsODEuNjY1ICAgYzcuMDYxLDQuMjQ4LDE0LjM3LDguNjI4LDE0LjM3LDE4LjIwOGMwLDYuMjU1LTQ5LjkyMiwxNDAuNTY2LTEyMi40MTcsMTQwLjU2NmMtMTcuNzM5LDAtMzAuMjc4LTUuMzMyLTQxLjMzOC0xMC4wMzQgICBjLTExLjE5MS00Ljc2MS0yMC44NDUtOC44NjItMzYuNzk3LTguODYyYy04LjA4NiwwLTE4LjMxMSwzLjgyMy0yOS4xMzYsNy44ODFDMjIxLjQ5Niw1MDUuNzMsMjA0Ljc1Miw1MTIsMTg1Ljc1Myw1MTJIMTg1LjI1NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIGQ9Ik0zNTEuMzQzLDBjMS44ODgsNjguMDc2LTQ2Ljc5NywxMTUuMzA0LTk1LjQyNSwxMTIuMzQyQzI0Ny45MDUsNTguMDE1LDMwNC41NCwwLDM1MS4zNDMsMHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L2c+PC9zdmc+" />
                        <p>Download on the <br /> <span className="big-txt"> <strong> App Store</strong></span></p>
                      </a>
                      <a className="app-btn blu flex vert google-btn" href="https://play.google.com/store/apps/details?id=com.app.icause">
                        <img alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="></img>
                        <p>Download on the <br /> <span className="big-txt"> <strong> Play Store</strong></span></p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 d-none d-lg-block"></div>
                <div className="col-lg-5 col-md-6 col-sm-8 col-7 mt-sm-3 mt-md-0 ">
                  <img src={`${imageURL}65.png`} className="img-fluid" alt="" />
                  
                </div>
                <div className='col-12 mobie-getapp-view'>
                <div className="get-icous-app app-btns flex ">
                      <a className="app-btn blu flex vert align-items-center" href="http:apple.com">
                      <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE4NS4yNTUsNTEyYy03Ni4yMDEtMC40MzktMTM5LjIzMy0xNTUuOTkxLTEzOS4yMzMtMjM1LjIxYzAtMTI5LjQwNCw5Ny4wNzUtMTU3LjczNCwxMzQuNDg3LTE1Ny43MzQgICBjMTYuODYsMCwzNC44NjMsNi42MjEsNTAuNzQyLDEyLjQ4YzExLjEwNCw0LjA4NywyMi41ODgsOC4zMDYsMjguOTc1LDguMzA2YzMuODIzLDAsMTIuODMyLTMuNTg5LDIwLjc4Ni02LjczOCAgIGMxNi45NjMtNi43NTMsMzguMDcxLTE1LjE0Niw2Mi42NTEtMTUuMTQ2YzAuMDQ0LDAsMC4xMDMsMCwwLjE0NiwwYzE4LjM1NCwwLDc0LjAwNCw0LjAyOCwxMDcuNDYxLDU0LjI3Mmw3LjgzNywxMS43NzcgICBsLTExLjI3OSw4LjUxMWMtMTYuMTEzLDEyLjE1OC00NS41MTMsMzQuMzM2LTQ1LjUxMyw3OC4yNjdjMCw1Mi4wMzEsMzMuMjk2LDcyLjA0MSw0OS4yOTIsODEuNjY1ICAgYzcuMDYxLDQuMjQ4LDE0LjM3LDguNjI4LDE0LjM3LDE4LjIwOGMwLDYuMjU1LTQ5LjkyMiwxNDAuNTY2LTEyMi40MTcsMTQwLjU2NmMtMTcuNzM5LDAtMzAuMjc4LTUuMzMyLTQxLjMzOC0xMC4wMzQgICBjLTExLjE5MS00Ljc2MS0yMC44NDUtOC44NjItMzYuNzk3LTguODYyYy04LjA4NiwwLTE4LjMxMSwzLjgyMy0yOS4xMzYsNy44ODFDMjIxLjQ5Niw1MDUuNzMsMjA0Ljc1Miw1MTIsMTg1Ljc1Myw1MTJIMTg1LjI1NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIGQ9Ik0zNTEuMzQzLDBjMS44ODgsNjguMDc2LTQ2Ljc5NywxMTUuMzA0LTk1LjQyNSwxMTIuMzQyQzI0Ny45MDUsNTguMDE1LDMwNC41NCwwLDM1MS4zNDMsMHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L2c+PC9zdmc+" />
                        <p>Download on the <br /> <span className="big-txt"> <strong> App Store</strong></span></p>
                      </a>
                      <a className="app-btn blu flex vert google-btn" href="https://play.google.com/store/apps/details?id=com.app.icause">
                        <img alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="></img>
                        <p>Download on the <br /> <span className="big-txt"> <strong> Play Store</strong></span></p>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </Form>
        </section> */}
      </Spin>
    </div>
  );
};

export default GetTheAppSection;
