import React from 'react';
import { connect } from 'react-redux';

import CareerComponent from '../components/app/Career/Career';

import * as actions from '../actions/career';
import { Helmet } from "react-helmet";

const Career = (props) => {
  return (
    <>
      <Helmet>
        <title>Career</title>
        <meta name="description" content="There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person," />
        <meta name="twitter:card" content="There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person," />
        <meta name="twitter:site" content="There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person," />
        <meta name="twitter:creator" content="There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person," />
        <meta name="twitter:title" content="Career" />
        <meta name="twitter:description" content="There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person," />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Career" />
        <meta property="og:description" content="There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person," />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <CareerComponent {...props} />
    </>
  );
};

export default connect(({ career, user }) => ({ career, user }), actions)(Career);

