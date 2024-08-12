import React from 'react';
import { connect } from 'react-redux';

import CategoryListings from '../../components/app/Category/CategoryListings';

import * as actions from '../../actions/category/categoryListings';

const CategoryListing = (props) => {
  return (
    <CategoryListings {...props} />
  );
};

export default connect(({ category, user }) => ({ categoryListings: category.categoryListings, user }), actions)(CategoryListing);
