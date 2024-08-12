
import React, { useEffect } from 'react';
import { Spin } from 'antd';
import moment from 'moment';
import FeaturedEventsSection from '../Events/eventManager/FeaturedEventsSection';
import { useHistory } from 'react-router';
import { imageURL } from '../../../constants/constants';

const EventDetails = (props) => {
  const { getFeaturedEvents, match, getEventDetails, user, eventDetails } = props;
  const { featuredEvents, loading, event } = eventDetails;
  const { data } = featuredEvents || {};
  const { params } = match || {};
  const eventId = params && params.id ? Number(params.id) : null;
  const history = useHistory();

  const { end_time, start_time, start_date, end_date, title, story, location, category_name, no_of_attendees, public_private, author_name, author_avatar, author_story } = event || {};
  let authorCover = `${imageURL}event-creator.png`;
  if (author_avatar) {
    authorCover = `${author_avatar}`;
  }

  useEffect(() => {
    getEventDetails(eventId);
    getFeaturedEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div>
      <section className="event-detial-banner gen-banner-2">
        <div className="container">
          <div className="banner-text">
          </div>
        </div>
      </section>
      <Spin spinning={loading}>
        <section className="event-detail-sec-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="event-detail-box">
                  <p className="event-heading">{title}</p>
                  <p>{story}</p>
                  <div className="event-dates">
                    <div className="event-date">
                      <p className="tag">EVENT START</p>
                      <p className="date">{start_date ? moment(start_date).format('LL') : ''}</p>
                      <p className="time">{start_time ? moment(start_time).format('hh:mm a') : ''}</p>
                    </div>
                    <div className="event-date">
                      <p className="tag">EVENT END</p>
                      <p className="date">{end_date ? moment(end_date).format('LL') : ''}</p>
                      <p className="time">{end_time ? moment(end_time).format('hh:mm a') : ''}</p>
                    </div>
                  </div>

                  <ul className="event-detail-list">
                    <li><span className="text-grn">EVENT CATEGORY</span><br></br>{category_name}</li>
                    <li className="border-left-one "><span className="text-grn  ">THE EVENT IS</span><br></br>{public_private}</li>
                    <li className="border-left-one"><span className="text-grn ">NO. OF ATTENDEES</span><br></br>{no_of_attendees}</li>
                  </ul>

                  <div className="event-location">
                    <p className="tag">Event Location</p>
                    <p>{location}</p>
                  </div>
                </div>
                <ul className="socials-list">
                  <li
                    onClick={() => {
                      const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href;
                      window.open(pageUrl, '_blank');
                    }}>
                    <i className="fa fa-facebook"></i>
                  </li>
                  <li
                    onClick={() => {
                      const pageUrl = 'http://www.twitter.com/share?url=' + window.location.href;
                      window.open(pageUrl, '_blank');
                    }}>
                    <i className="fa fa-twitter"></i>
                  </li>
                  <li
                    onClick={() => {
                      const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href;
                      window.open(pageUrl, '_blank');
                    }}
                  >
                    <i className="fa fa-linkedin"></i>
                  </li>
                </ul>
                <div className="event-sm-banner">
                  <img src={`${imageURL}event-det-sm-banner.png`} className="img-fluid" alt="banner"></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="event-creator-card">
                  <div className="creator-img text-center">
                    <img src={authorCover} className="img-fluid" alt="banner"></img>
                  </div>
                  <p className="tag">EVENT CREATE</p>
                  <p className="name">{author_name || ''}</p>
                  <p>{author_story}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedEventsSection data={data} loading={loading} />

        <section className="Join event-manager-sec-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto text-center">
                <h5>LET'S MAKE THIS HAPPEN</h5>
                <h2 className="main-heading text-center ff-poppins">Join our up coming event...</h2>
                <p>Every great change starts with a single action. If you’re ready to start raising funds, simply click the button to create your iCause campaign today.</p>
                <button
                  onClick={() => {
                    if (user && user.id) {
                      history.push('/homepage');
                    } else {
                      history.push('/auth/login');
                    }
                  }}
                  type="button"
                  className="btn btn-success">
                  GET STARTED
                  </button>
              </div>
            </div>
          </div>
        </section>

      </Spin>
    </div>
  );
};

export default EventDetails;