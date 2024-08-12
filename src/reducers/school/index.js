import { combineReducers } from 'redux';

import school from './school';
import schoolDonate from './school-donate';
import schoolListings from './school-listings';
import schoolDetails from './school-details';

export default combineReducers({
  schoolListings,
  schoolDonate,
  school,
  schoolDetails
});
