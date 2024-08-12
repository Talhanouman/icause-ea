import React from 'react';
import { connect } from 'react-redux';

import SubCategoriesComponent from '../../components/app/Category/SubCategory';

import * as actions from '../../actions/category/subCategory';

const SubCategory = (props) => {
  return (
    <SubCategoriesComponent {...props} />
  );
};

export default connect(({ category, user }) => ({ subCategory: category.subCategory, user }), actions)(SubCategory);
