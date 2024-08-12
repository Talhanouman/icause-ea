import React from 'react';
import { connect } from 'react-redux';

import ContactUsComponent from '../components/app/contactUs/Contact';

import * as actions from '../actions/contact-us';
import { Helmet } from "react-helmet";

const ContactUs = (props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="We are here to help you! You can reach out to us through email, message or chat." />
        <meta name="twitter:card" content="We are here to help you! You can reach out to us through email, message or chat." />
        <meta name="twitter:site" content="We are here to help you! You can reach out to us through email, message or chat." />
        <meta name="twitter:creator" content="We are here to help you! You can reach out to us through email, message or chat." />
        <meta name="twitter:title" content="Contact Us" />
        <meta name="twitter:description" content="We are here to help you! You can reach out to us through email, message or chat." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="We are here to help you! You can reach out to us through email, message or chat." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <ContactUsComponent {...props} />
    </>
  );
};

export default connect(({ contactUs }) => contactUs, actions)(ContactUs);

