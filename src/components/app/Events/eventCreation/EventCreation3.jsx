

import React, { useState } from 'react';
import { Input, Form, Upload, Spin } from 'antd';
import moment from 'moment';

import { getBase64 } from '../../../../utils/helpers';

const { TextArea } = Input;
const { Dragger } = Upload;

const uploadProps = {
  accept: '.png,.jpg,.jpeg'
};

const normFile = (e, setForceRender, form, selectedEventInformation, setSelectedEventInformation) => {
  if (e && e.fileList) {
    const updated = e.fileList.find((file, index) => {
      if (index === (e.fileList.length - 1)) {
        return file;
      } else {
        return null
      }
    });
    form.setFieldsValue({
      eventCoverImage: []
    });
    setForceRender(`A FILE HAS BEEN UPLOADED ${updated && updated.name ? updated.name : ''}`);

    if (updated && updated.originFileObj) {
      getBase64(updated.originFileObj).then((result) => {
        setSelectedEventInformation({
          ...selectedEventInformation,
          eventCoverImageBase64: result,
          fileName: updated.name,
          uid: updated.uid,
          type: updated.type
        });
      });
    } else {
      const updatedHash = { ...selectedEventInformation };
      delete updatedHash.eventCoverImageBase64;
      delete updatedHash.fileName;
      delete updatedHash.uid;
      delete updatedHash.type;

      setSelectedEventInformation({
        ...updatedHash
      });
    }
    return updated ? [updated] : [];
  }
};

const onFinishFailed = (error) => {
};

const EventCreation2 = (props) => {
  const [form] = Form.useForm();
  const [, setForceRender] = useState('');
  const { setSelectedStep, selectedStep, selectedEventInformation, setSelectedEventInformation, inEditMode } = props;
  const { eventCoverImageBase64, eventName, eventEndTime, eventStartTime, eventDate, eventCoverImage: selectedDefaultEventCover, eventDescription } = selectedEventInformation;
  const [startDate, endDate] = eventDate || [];

  const onFinish = ({
  form,
  values,
  props,
  setSelectedStep,
  stepNumber,
  setSelectedEventInformation,
  selectedEventInformation
}) => {
  const { eventCoverImage } = values;
  const [{ originFileObj }] = eventCoverImage;

  setSelectedEventInformation({
    ...selectedEventInformation,
    ...values,
    eventCoverImage: originFileObj ? originFileObj : selectedDefaultEventCover
  });
  setSelectedStep(++stepNumber);
};

  let stepNumber = selectedStep;
  return (
    <div>
      <Spin spinning={false}>
        {
          inEditMode &&
          <div style={{ backgroundColor: inEditMode ? 'white' : 'grey' }} className="custom-list create-event-top-nav">
            <ul>
              <li>
                <i className="fa fa-edit mr-2"></i>
                <button disabled={!inEditMode} onClick={() => setSelectedStep(1)} type='link' style={{ background: 'none', border: '0px solid' }}>Intro</button>
              </li>
              <li>
                <i className="fa fa-edit mr-2"></i>
                <button disabled={!inEditMode} onClick={() => setSelectedStep(2)} type='link' style={{ background: 'none', border: '0px solid' }}>Basic Information</button>
              </li>
              <li className="active">
                <i className="fa fa-edit mr-2"></i>
                <button disabled type='link' style={{ background: 'none', border: '0px solid' }}>Event Creation</button>
              </li>
              <li>
                <i className="fa fa-edit mr-2"></i>
                <button disabled={!inEditMode} onClick={() => setSelectedStep(4)}  type='link' style={{ background: 'none', border: '0px solid' }}>Publish Event</button>
              </li>
            </ul>
          </div>
        }
        <section className="intro">

          <div className="create-event-3-wrap">

            <div className="container">

              <div className="row">

                <div className="col-lg-12">

                  <Form
                    name="basic"
                    form={form}
                    initialValues={{
                      eventDescription,
                      eventCoverImage: selectedDefaultEventCover ? [selectedDefaultEventCover] : []
                    }}
                    onFinish={(values) => onFinish({
                      form,
                      values,
                      props,
                      setSelectedStep,
                      stepNumber,
                      setSelectedEventInformation,
                      selectedEventInformation
                    })}
                    onFinishFailed={onFinishFailed}
                  >
                    <div className="program">
                      <h4 className="text-grn">Program</h4>
                      <h5>Introduction of {eventName} Event.</h5>
                      <p>Begins at {moment(startDate).format('LL')} {eventStartTime.format('h:mm a')} and ends at {moment(endDate).format('LL')} {eventEndTime.format('h:mm a')}</p>
                      <h5 className="mt-4 mb-2">Event Description</h5>
                      <Form.Item
                        name="eventDescription"
                        className="event-description"
                        rules={[
                          {
                            required: true,
                            message: 'Enter an event description',
                          },
                        ]}
                      >
                        <TextArea rows={4} />
                      </Form.Item>
                      <div style={{ padding: '0px !important' }} className="add-img py-5 px-2">
                        {
                          (eventCoverImageBase64) && <img style={{ height: 'auto' }} src={eventCoverImageBase64} className="img-fluid w-100" alt="" />
                        }
                        <Form.Item
                          valuePropName="fileList"
                          name="eventCoverImage"
                          getValueFromEvent={(e) => normFile(e, setForceRender, form, selectedEventInformation, setSelectedEventInformation)}
                          rules={[
                            {
                              required: true,
                              message: 'Upload an event image',
                            },
                          ]}
                        >
                          <Dragger
                            onRemove={() => {
                              let updated = { ...selectedEventInformation };
                              delete updated.eventCoverImage
                              delete updated.eventCoverImageBase64
                              setSelectedEventInformation({
                                ...updated
                              });
                            }}
                            beforeUpload={(f) => false}
                            {...uploadProps}
                          >
                            <p className="ant-upload-text">ADD EVENT IMAGE</p>
                            <p className="ant-upload-hint">
                              File size must be 3MB or Greater Than, jpeg and png format.
                            </p>
                          </Dragger>
                        </Form.Item>
                      </div>
                    </div>
                    <button htmltype='submit' className="btn btn-outline-dark text-center d-flex my-5 mx-auto">NEXT</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Spin>
    </div>
  );
};

export default EventCreation2;
