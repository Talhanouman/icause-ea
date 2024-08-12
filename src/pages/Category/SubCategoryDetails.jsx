import React from 'react';
import { connect } from 'react-redux';

import SubCategoriesDetailsComponent from '../../components/app/Category/SubCategoryDetails';

import * as actions from '../../actions/category/subCategoryDetails';

const SubCategoryDetails = (props) => {
  return (
    <SubCategoriesDetailsComponent {...props} />
  );
};

export default connect(({ category, user }) => ({ subCategoryDetails: category.subCategoryDetails, user }), actions)(SubCategoryDetails);
