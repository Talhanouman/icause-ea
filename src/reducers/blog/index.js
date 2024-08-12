import { combineReducers } from 'redux';

import blogDetails from './blogDetails';
import blogListings from './blogListings';

export default combineReducers({
  blogListings,
  blogDetails
});
