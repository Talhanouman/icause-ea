import React from 'react';
import { connect } from 'react-redux';

import FaqComponent from '../components/app/FAQ/Faq';
import { Helmet } from "react-helmet";

import * as actions from '../actions/faq';

const FAQ = (props) => {
  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="Our FAQs are great for answering all your crowdfunding questions." />
        <meta name="twitter:card" content="Our FAQs are great for answering all your crowdfunding questions." />
        <meta name="twitter:site" content="Our FAQs are great for answering all your crowdfunding questions." />
        <meta name="twitter:creator" content="Our FAQs are great for answering all your crowdfunding questions." />
        <meta name="twitter:title" content="FAQ" />
        <meta name="twitter:description" content="Our FAQs are great for answering all your crowdfunding questions." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="FAQ" />
        <meta property="og:description" content="Our FAQs are great for answering all your crowdfunding questions." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <FaqComponent {...props} />
    </>
  );
};

export default connect(({ faq }) => faq, actions)(FAQ);

