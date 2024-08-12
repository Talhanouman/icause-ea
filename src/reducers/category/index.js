import { combineReducers } from 'redux';

import categoryListings from './categoryListings';
import subCategory from './subCategory';
import subCategoryDetails from './subCategoryDetails';
import otherCategoryDetails from './other-category';

export default combineReducers({
  categoryListings,
  subCategory,
  subCategoryDetails,
  otherCategoryDetails
});
