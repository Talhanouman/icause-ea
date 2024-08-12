

import React, { useEffect, useState } from 'react';
import { Radio, InputNumber, Form, Spin } from 'antd';
import DynamicDropdown from '../../../shared/DynamicDropdown';

const onFinishFailed = (error) => {
};

const EventCreation1 = (props) => {
  const [form] = Form.useForm();
  const { event_types, setSelectedStep, selectedStep, selectedEventInformation, inEditMode, setSelectedEventInformation } = props;
  const { eventType, eventPrivacy, numberOfParticipants } = selectedEventInformation;
  const [options, setOptions] = useState([]);
  const [selectedEventType, setEventType] = useState();


  const onFinish = ({
    form,
    values,
    selectedEventType,
    props,
    setSelectedStep,
    stepNumber,
    setSelectedEventInformation,
    selectedEventInformation
  }) => {
    values.eventType = selectedEventType ? selectedEventType : eventType;
    setSelectedEventInformation({
      ...selectedEventInformation,
      ...values
    });
    setSelectedStep(++stepNumber);
  };

  useEffect(() => {
    if (event_types && event_types.length) {
      let values = [];
      event_types.forEach((entry) => {
        values.push(entry.category);
      });
      setOptions(values);
    }
  }, [event_types])

  let stepNumber = selectedStep;

  return (
    <div>
      <Spin spinning={false}>
        {
          inEditMode &&
          <div style={{ backgroundColor: inEditMode ? 'white' : 'grey' }} className="custom-list create-event-top-nav">
            <ul>
              <li className="active">
                <i className="fa fa-edit mr-2"></i>
                <button disabled type='link' style={{ background: 'none', border: '0px solid' }}>Intro</button>
              </li>
              <li>
                <i className="fa fa-edit mr-2"></i>
                <button disabled={!inEditMode} onClick={() => setSelectedStep(2)} type='link' style={{ background: 'none', border: '0px solid' }}>Basic Information</button>
              </li>
              <li>
                <i className="fa fa-edit mr-2"></i>
                <button disabled={!inEditMode} onClick={() => setSelectedStep(3)} type='link' style={{ background: 'none', border: '0px solid' }}>Event Creation</button>
              </li>
              <li>
                <i className="fa fa-edit mr-2"></i>
                <button disabled={!inEditMode} onClick={() => setSelectedStep(4)} type='link' style={{ background: 'none', border: '0px solid' }}>Publish Event</button>
              </li>
            </ul>
          </div>
        }
      </Spin>
      <section className="intro create-event-step-1">
        <div className="container">
          <h4 className="text-center">Please Create Your Event</h4>
          {/* <p className="text-center"> It is a long established fact that a reader will be distracted by the readable<br></br>
            content of a page when looking at its layout.</p> */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Form
                name="basic"
                form={form}
                initialValues={{
                  eventType,
                  eventPrivacy,
                  numberOfParticipants
                }}
                onFinish={(values) => onFinish({
                  form,
                  values,
                  selectedEventType,
                  props,
                  setSelectedStep,
                  stepNumber,
                  setSelectedEventInformation,
                  selectedEventInformation
                })}
                onFinishFailed={onFinishFailed}
              >
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6 event-step-1-col">
                    <div className="slect-option create-event-box">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1" className="text-left ">Choose Event Category</label>
                        <Form.Item
                          name="eventType"
                          rules={[
                            {
                              required: false,
                              message: 'Select an event type',
                            },
                          ]}
                        >
                          <DynamicDropdown
                            options={options}
                            value={eventType}
                            setOptions={setOptions}
                            setEventType={setEventType}
                          />

                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6 event-step-1-col">
                    <div className="redio-option create-event-box">
                      <div>
                        <label htmlFor="exampleFormControlSelect1" className="text-left">This Event will be</label>
                        <div className="option-chack-box d-flex align-items-center">
                          <div className="chack-box ">
                            <label className="checkbox d-flex align-items-center">
                              <Form.Item
                                name="eventPrivacy"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Select event privacy',
                                  },
                                ]}
                              >
                                <Radio.Group>
                                  <Radio value="private">Private</Radio>
                                  <Radio value="public">Public</Radio>
                                </Radio.Group>
                              </Form.Item>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6 event-step-1-col">
                    <div className="box-number create-event-box">
                      <div>
                        <label htmlFor="exampleFormControlSelect1" className="text-left">There will be around</label>
                        <Form.Item
                          name="numberOfParticipants"
                          rules={[
                            {
                              required: true,
                              message: 'Select participants number',
                            },
                          ]}
                        >
                          <InputNumber type="number" placeholder="Number Of Visitors" style={{ width: '199px' }} min={1} />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  htmltype='submit'
                  className="btn btn-outline-dark text-center d-flex mt-5 mx-auto">
                  NEXT
                </button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventCreation1;