import React from 'react';
import { connect } from 'react-redux';

import NewsComponent from '../components/app/News/News';
import { Helmet } from "react-helmet";

import * as actions from '../actions/news';

const News = (props) => {
  return (
    <>
      <Helmet>
        <title>News</title>
        <meta name="description" content="Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below." />
        <meta name="twitter:card" content="Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below." />
        <meta name="twitter:site" content="Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below." />
        <meta name="twitter:creator" content="Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below." />
        <meta name="twitter:title" content="News" />
        <meta name="twitter:description" content="Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="News" />
        <meta property="og:description" content="Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <NewsComponent {...props} />
    </>
  );
};

export default connect(({ news }) => news, actions)(News);
