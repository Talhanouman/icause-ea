import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/school/school-listings';

import SchoolListingComponent from '../../components/app/School/SchoolListing';
import { Helmet } from "react-helmet";

const SchoolListing = (props) => {
  return (
    <>
      <Helmet>
        <title>Schools Directory</title>
        <meta name="description" content="If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals." />
        <meta name="twitter:card" content="If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals." />
        <meta name="twitter:site" content="If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals." />
        <meta name="twitter:creator" content="If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals." />
        <meta name="twitter:title" content="Schools Directory" />
        <meta name="twitter:description" content="If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Schools Directory" />
        <meta property="og:description" content="If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <SchoolListingComponent {...props} />
    </>
  );
};

export default connect(({ school, user }) => ({ schoolListing: school.schoolListings, user }), actions)(SchoolListing);

