import React from 'react';
import { connect } from 'react-redux';

import BlogsComponent from '../../components/app/Blogs/BlogListings/Blogs';
import * as actions from '../../actions/blog/blogListings';
import {Helmet} from "react-helmet";

const Blogs = (props) => {
  return (
    <>
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="How to travel the world and get big companies to pay for it" />
        <meta name="twitter:card" content="How to travel the world and get big companies to pay for it" />
        <meta name="twitter:site" content="How to travel the world and get big companies to pay for it" />
        <meta name="twitter:creator" content="How to travel the world and get big companies to pay for it" />
        <meta name="twitter:title" content="blogs" />
        <meta name="twitter:description" content="How to travel the world and get big companies to pay for it" />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="blogs" />
        <meta property="og:description" content="How to travel the world and get big companies to pay for it" />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <BlogsComponent {...props} />
    </>
  );
};

export default connect(({ blog }) => blog.blogListings, actions)(Blogs);
