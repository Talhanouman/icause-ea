import React from 'react';
import { connect } from 'react-redux';
import BlogDetailsComponent from '../../components/app/Blogs/BlogDetails/BlogDetails';
import * as actions from '../../actions/blog/blogDetails';

const BlogDetails = (props) => {
  return (
    <BlogDetailsComponent {...props} />
  );
};

export default connect(({ blog }) => blog.blogDetails, actions)(BlogDetails);
