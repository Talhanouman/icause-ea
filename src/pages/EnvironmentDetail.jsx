import React from 'react';

import EnvironmentDetailComponent from '../components/app/CategoryDetail/EnvironmentDetail';
import { Helmet } from "react-helmet";

const EnvironmentDetail = (props) => {
  return (
    <>
      <Helmet>
        <title>Environment</title>
        <meta name="description" content="We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below." />
        <meta name="twitter:card" content="We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below." />
        <meta name="twitter:site" content="We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below." />
        <meta name="twitter:creator" content="We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below." />
        <meta name="twitter:title" content="Environment" />
        <meta name="twitter:description" content="We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Environment" />
        <meta property="og:description" content="We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <EnvironmentDetailComponent />
    </>
  );
};

export default EnvironmentDetail;
