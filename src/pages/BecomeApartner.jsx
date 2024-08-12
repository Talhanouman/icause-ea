import React from 'react';
import { connect } from 'react-redux';

import BecomeApartnerComponent from '../components/app/BecomeApartner/BecomeApartner';

import * as actions from '../actions/become-partner';
import { Helmet } from "react-helmet";

const BecomeApartner = (props) => {
  return (
    <>
      <Helmet>
        <title>Become a Partner</title>
        <meta name="description" content="Partner with Icause and help make a difference" />
        <meta name="twitter:card" content="Partner with Icause and help make a difference" />
        <meta name="twitter:site" content="Partner with Icause and help make a difference" />
        <meta name="twitter:creator" content="Partner with Icause and help make a difference" />
        <meta name="twitter:title" content="Become a Partner" />
        <meta name="twitter:description" content="Partner with Icause and help make a difference" />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Become a Partner" />
        <meta property="og:description" content="Partner with Icause and help make a difference" />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <BecomeApartnerComponent {...props} />
    </>
  );
};

export default connect(({ becomePartner }) => becomePartner, actions)(BecomeApartner);
