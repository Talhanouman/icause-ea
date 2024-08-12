import React from 'react';
import { connect } from 'react-redux';

import OtherCategoryDetailsComponent from '../../components/app/Category/OtherCategory';

import * as actions from '../../actions/category/other-category';

const OtherCategoryDetails = (props) => {
  return (
    <OtherCategoryDetailsComponent {...props} />
  );
};

export default connect(({ category, user }) => ({ subCategoryDetails: category.otherCategoryDetails, user }), actions)(OtherCategoryDetails);
