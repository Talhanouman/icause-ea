

import React from 'react';
import { Spin } from 'antd';
import GoogleMapReact from 'google-map-react';
import moment from 'moment';

const publish = (setEditMode, setSelectedStep, setSelectedEventInformation, selectedEventInformation, eventType, props) => {
  const { publishEvent } = props;
  const {
    eventType: categoryId,
    eventPrivacy: fundraise_as,
    numberOfParticipants: visitors,
    eventName: title,
    eventDate,
    eventStartTime,
    eventEndTime,
    eventDescription: story,
    lat,
    lng,
    value: address,
    eventCoverImageBase64,
    fileName,
    type,
    uid
  } = selectedEventInformation;

  const imageExtension = type;

  const byteString = atob(eventCoverImageBase64.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ia], {
    type: imageExtension
  });

  const file = new File([blob], fileName, { type: imageExtension, uid });

  publishEvent({
    category: categoryId,
    fundraise_as,
    visitors,
    title,
    story,
    lat,
    lng,
    address,
    start_date: `${moment(eventDate[0]).format('YYYY-MM-DD')} ${eventStartTime.format('h:mm a')}`,
    end_date: `${moment(eventDate[1]).format('YYYY-MM-DD')} ${eventEndTime.format('h:mm a')}`,
    event_cover: file,
    who_are_raising: eventType
  }).then(() => {
    setEditMode(false);
    setSelectedEventInformation({});
    setSelectedStep(1);
  });
}

const MapMarker = () => <div>
  <i
    className='fa fa-map-marker'
    style={{
      fontSize: 'xxx-large',
      position: 'absolute',
      top: '-48px',
      left: '-13.72px'
    }}
  />
</div>;

const EventCreation4 = (props) => {
  const { setEditMode, inEditMode, setSelectedStep, loading, setSelectedEventInformation, selectedEventInformation } = props;
  const { lat, lng, eventName, eventStartTime, eventEndTime, eventDate, value: eventAddress, eventCoverImageBase64, eventDescription, eventType, eventPrivacy, numberOfParticipants } = selectedEventInformation;
  
  return (
    <div>
      <Spin spinning={loading}>
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
            <li>
              <i className="fa fa-edit mr-2"></i>
              <button disabled={!inEditMode} onClick={() => setSelectedStep(3)} type='link' style={{ background: 'none', border: '0px solid' }}>Event Creation</button>
            </li>
            <li className="active">
              <i className="fa fa-edit mr-2"></i>
              <button disabled type='link' style={{ background: 'none', border: '0px solid' }}>Publish Event</button>
            </li>
          </ul>
        </div>
        <section className="intro pt-3">
        <div className="create-event-4-wrap">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="create-event-4-desc">
                  <div className="event-info">
                  <p className="tag">EVENT NAME</p>
                  <p className="title">{eventName}</p>
                  </div>
                  <div className="event-dates">
                    <div className="event-date">
                      <p className="tag">EVENT START</p>
                      <p className="date">{eventDate && eventDate.length && moment(eventDate[0]).format('LL')}</p>
                      <p className="time">{eventStartTime && eventStartTime.format('h:mm a')}</p>
                    </div>
                    <div className="event-date">
                      <p className="tag">EVENT END</p>
                      <p className="date">{eventDate && eventDate.length && moment(eventDate[1]).format('LL')}</p>
                      <p className="time">{eventEndTime && eventEndTime.format('h:mm a')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <div className=" py-1 event-step4-img">
                  {
                    eventCoverImageBase64 && <img style={{ height: 'auto' }} src={eventCoverImageBase64} className="img-fluid w-100" alt="" />
                  }
                </div>
                <h5 className="mt-4">Event Description</h5>
                <p>{eventDescription}</p>
                <ul className="event-detail-list">
                  <li><span className="text-grn">EVENT CATEGORY</span><br></br>{eventType}</li>
                  <li className="border-left-one "><span className="text-grn  ">THE EVENT IS</span><br></br>{eventPrivacy}</li>
                  <li className="border-left-one"><span className="text-grn ">NO. OF ATTENDEES</span><br></br>1 - {numberOfParticipants}</li>
                </ul>
                <div className="event-location-wrap">
                  <h5>EVENT LOCATION</h5>
                  <p className="font-weight-bold">
                    {eventAddress}
                  </p>
                  <div style={{ height: '115px' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                      center={{ lat, lng }}
                      defaultZoom={15}
                    >
                      <MapMarker
                        lat={lat}
                        lng={lng}
                      />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </div>
            <div className="buton-edite d-flex justify-content-end">
              <button type="button" onClick={() => {setEditMode(!inEditMode); setSelectedStep(1)}} className="btn btn-outline-dark   my-5  ">EDIT</button>
              <button type="button" onClick={() => publish(setEditMode, setSelectedStep, setSelectedEventInformation, selectedEventInformation, eventType, props)} className="btn btn-outline-dark  ml-2 mt-5 ">PUBLISH EVENT</button>
            </div>
          </div>
          </div>
        </section>
      </Spin>
    </div>
  );
};

export default EventCreation4;
