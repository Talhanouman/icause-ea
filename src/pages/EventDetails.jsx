import React from 'react';
import { connect } from 'react-redux';

import EventDetailsComponent from '../components/app/EventDetails/EventDetials';

import * as actions from '../actions/events/event-details';

const EventDetails = (props) => {
  return (
    <EventDetailsComponent {...props} />
  );
};

export default connect(({ event, user }) => ({ eventDetails: event.eventDetails, user }), actions)(EventDetails);

