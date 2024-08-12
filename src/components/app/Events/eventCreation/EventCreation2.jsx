

import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Select, Input, Row, Col, Form, Spin, TimePicker } from 'antd';
import { isEmpty, debounce } from 'lodash';
import { getCurrentUserLocation } from '../../../../utils/helpers';

import { DateRangePicker } from 'react-date-range';

import moment from 'moment';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const { Option } = Select;

// eslint-disable-next-line no-undef
const autoCompleteService = new google.maps.places.AutocompleteService();
// eslint-disable-next-line no-undef
const geocoder = new google.maps.Geocoder();

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

const onClear = (setFetchedAddresses, setLoading, setCurrentLocationCoordinates, setCurrentLocationAddress) => {
  setFetchedAddresses([]);

  setLoading(true);
  getCurrentUserLocation().then(({ lat, lng }) => {
    setCurrentLocationCoordinates({
      lat,
      lng
    });
    geocoder.geocode({ location: { lat, lng } }, (googleAddress) => {
      if (!googleAddress || !googleAddress.length) return;

      const streetAddress = googleAddress.find(({ types }) => types.includes('route'));
      const { place_id, formatted_address } = streetAddress || {};

      const selectedAddress = {
        key: place_id,
        value: formatted_address
      };

      setCurrentLocationAddress(selectedAddress)
    });
    setLoading(false);
  }).catch(() => {
    setLoading(false);
  });
};

const handleSearchPlaces = debounce((value, setFetchedAddresses) => {
  if (!value) {
    return setFetchedAddresses([]);
  };

  autoCompleteService
    .getPlacePredictions({ input: value, componentRestrictions: { country: 'au' } }, (addresses) => {
      if (!addresses || !addresses.length) {
        return setFetchedAddresses([]);
      }

      addresses = addresses.map(({ description, place_id }) => ({
        value: description,
        key: place_id
      }));

      setFetchedAddresses(addresses);
    });
}, 300);

const getLocationInfoForSelectedAddress = (addressKey, setCurrentLocationCoordinates, setCurrentLocationAddress, setLoading) => {
  if (addressKey) {
    const [placeId, addressString] = addressKey.split('&&&$$$***');
    setCurrentLocationAddress({
      key: placeId,
      value: addressString
    });

    setLoading(true);
    geocoder.geocode({ placeId }, (fetchedAddresses) => {
      setLoading(false);
      if (!fetchedAddresses || !fetchedAddresses.length) return;
      const [{ geometry }] = fetchedAddresses;

      const lat = geometry.location.lat();
      const lng = geometry.location.lng();

      setCurrentLocationCoordinates({
        lat,
        lng
      });

    });
  }
};

const onFinishFailed = (error) => {
};

const EventCreation5 = (props) => {
  const [form] = Form.useForm();

  const { inEditMode, setSelectedStep, selectedStep, selectedEventInformation, setSelectedEventInformation } = props;
  const { eventName, eventStartTime, eventEndTime, eventDate } = selectedEventInformation;
  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);
  const [fetchedAddresses, setFetchedAddresses] = useState([]);
  const [currentLocationCoordinates, setCurrentLocationCoordinates] = useState(
    selectedEventInformation && selectedEventInformation.lat && selectedEventInformation.lng ? {
      lat: selectedEventInformation.lat,
      lng: selectedEventInformation.lng
    } : {}
  );
  const [currentLocationAddress, setCurrentLocationAddress] = useState(
    selectedEventInformation && selectedEventInformation.key && selectedEventInformation.value ? {
      key: selectedEventInformation.key,
      value: selectedEventInformation.value
    } : {}
  );
  useEffect(() => {
    setError('');
    if (!(eventDate && eventDate.length)) {
      setSelectedEventInformation({
        ...selectedEventInformation,
        eventDate: [new Date(), new Date()]
      });
    }
    if (!(selectedEventInformation && selectedEventInformation.key && selectedEventInformation.value)) {
      setLoading(true);
      getCurrentUserLocation().then(({ lat, lng }) => {
        setCurrentLocationCoordinates({
          lat,
          lng
        });
        geocoder.geocode({ location: { lat, lng } }, (googleAddress) => {
          if (!googleAddress || !googleAddress.length) return;

          const streetAddress = googleAddress.find(({ types }) => types.includes('route'));
          const { place_id, formatted_address } = streetAddress || {};

          const selectedAddress = {
            key: place_id,
            value: formatted_address
          };

          setCurrentLocationAddress(selectedAddress)
        });
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  const onFinish = ({
    values,
    currentLocationAddress,
    currentLocationCoordinates,
    setSelectedStep,
    stepNumber,
    setSelectedEventInformation,
    selectedEventInformation
  }) => {
    setError('');
    const result = moment(values.eventStartTime?._d).format('h:mm') >= moment(values.eventEndTime?._d).format('h:mm');
    
    const startDate = moment(eventDate && eventDate[0]);
    const headerDate = moment(eventDate && eventDate[1]);
    const resultDate = startDate.isSame(headerDate, 'day');

    if(result && resultDate){
      setError("Please select a valid time slot!");
    } else {
      setSelectedEventInformation({
        ...selectedEventInformation,
        ...currentLocationAddress,
        ...currentLocationCoordinates,
        ...values
      });
      setSelectedStep(++stepNumber);
    }
  };  

  let stepNumber = selectedStep;
  const options = fetchedAddresses.map(({ value, key }) => <Option key={`${key}&&&$$$***${value}`}>{value}</Option>);
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
            <li className="active">
              <i className="fa fa-edit mr-2"></i>
              <button disabled type='link' style={{ background: 'none', border: '0px solid' }}>Basic Information</button>
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
      <section className="intro">
        <div className="create-event-2-wrap">
          <div className="container text-center">
            <Form
              name="basic"
              form={form}
              initialValues={{
                eventName,
                eventStartTime,
                eventEndTime,
                eventDate
              }}
              onFinish={(values) => onFinish({
                form,
                values,
                props,
                setSelectedStep,
                stepNumber,
                setSelectedEventInformation,
                selectedEventInformation,
                currentLocationAddress,
                currentLocationCoordinates
              })}
              onFinishFailed={onFinishFailed}
            >
              <div className="create-event-2-box" >
                <span>Event name</span>

                <Form.Item
                  name="eventName"
                  className="emial-error"

                  rules={[
                    {
                      required: true,
                      message: 'Enter a Event name' ,
                    },
                  ]}
                >
                  <Input placeholder="Enter a Event name" style={{ width: '90%' }} />
                </Form.Item>
              </div>

              <Row style={{ marginTop: 10 }} gutter={15}>
                <Col span={9} className="event-map-wrap">
                <div className="event-map-wrap-inner">
                  <div className="event-map-text">
                    <label>Please select location</label>
                  </div>
                  <Select
                    style={{ width: '100%' }}
                    value={currentLocationAddress && currentLocationAddress.value}
                    showSearch
                    allowClear
                    placeholder='Enter Address'
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                    onClear={() => onClear(setFetchedAddresses, setLoading, setCurrentLocationCoordinates, setCurrentLocationAddress)}
                    onSearch={(value) => handleSearchPlaces(value, setFetchedAddresses)}
                    onChange={(address) => getLocationInfoForSelectedAddress(address, setCurrentLocationCoordinates, setCurrentLocationAddress, setLoading)}
                    notFoundContent={null}
                  >
                    {options}
                  </Select>
                  <Spin spinning={loading}>
                    <div style={{ height: '350px' }}>
                      {
                        (!isEmpty(currentLocationCoordinates)) &&
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                          center={currentLocationCoordinates}
                          defaultZoom={15}
                        >
                          <MapMarker
                            lat={currentLocationCoordinates.lat}
                            lng={currentLocationCoordinates.lng}
                          />
                        </GoogleMapReact>
                      }
                    </div>
                  </Spin>
                  </div>
                </Col>
                <Col span={15} className="event-calender-time-wrap">
                  <div className="create-event-2-box create-event-2-time">
                    <span>Event Date & Timing</span>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                    <DateRangePicker className="event-date-calender"
                      ranges={[{
                        startDate: eventDate && eventDate[0] ? eventDate[0] : new Date(),
                        endDate: eventDate && eventDate[1] ? eventDate[1] : new Date(),
                        key: 'selection',
                      }]}
                      months={2}
                      direction="horizontal"
                      showSelectionPreview={false}
                      onChange={({ selection }) => {
                        const { startDate, endDate } = selection;
                        setSelectedEventInformation({
                          ...selectedEventInformation,
                          eventDate: [startDate, endDate]
                        });
                      }}
                    />
                     <div className="event-time-wrap">
                      <Row gutter={24}>
                        <Col span={12}>
                          <Form.Item
                            name="eventStartTime"
                            rules={[
                              {
                                required: true,
                                message: 'Select an Event start time',
                              },
                            ]}
                          >
                            <TimePicker
                              use12Hours
                              format='h:mm a'
                              size='small'
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            name="eventEndTime"
                            rules={[
                              {
                                required: true,
                                message: 'Select an Event end time',
                              },
                            ]}
                          >
                            <TimePicker
                              use12Hours
                              format='h:mm a'
                              size='small'
                            />
                          </Form.Item>
                        </Col>
                          {error &&
                            <div style={{ marginLeft: "30%" }}>
                              <p style={{ color: 'red', marginTop: "10px" }}>{error}</p>
                            </div>
                          }
                        </Row>
                    </div>
                  </div>
                </Col>
              </Row>
              <button htmltype='submit' className="btn btn-outline-dark text-center d-flex my-5 mx-auto">NEXT</button>
            </Form>
          </div>
        </div>
      </section>
      </Spin>
    </div>
  );
};

export default EventCreation5;