import { combineReducers } from 'redux';

import eventManager from './eventManager';
import eventCreation from './eventCreation';
import eventDetails from './eventDetails';

export default combineReducers({
  eventManager,
  eventCreation,
  eventDetails
});
