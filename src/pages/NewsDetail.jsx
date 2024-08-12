import React from 'react';
import { connect } from 'react-redux';

import NewsDetailComponent from '../components/app/News/NewsDetail';

import * as actions from '../actions/newsDetail';

const NewsDetail = (props) => {
  return (
    <NewsDetailComponent {...props} />
  );
};

export default connect(({ newsDetail }) => newsDetail, actions)(NewsDetail);
