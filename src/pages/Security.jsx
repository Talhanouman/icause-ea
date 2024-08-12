import React from 'react';

import SecurityComponent from '../components/app/Security/Security';
import { Helmet } from "react-helmet";

const Security = (props) => {
  return (
    <>
     <Helmet>
        <title>Security</title>
        <meta name="description" content="We take our security very seriously and ensure that your safety is our top priority." />
        <meta name="twitter:card" content="We take our security very seriously and ensure that your safety is our top priority." />
        <meta name="twitter:site" content="We take our security very seriously and ensure that your safety is our top priority." />
        <meta name="twitter:creator" content="We take our security very seriously and ensure that your safety is our top priority." />
        <meta name="twitter:title" content="Security" />
        <meta name="twitter:description" content="We take our security very seriously and ensure that your safety is our top priority." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Security" />
        <meta property="og:description" content="We take our security very seriously and ensure that your safety is our top priority." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
    <SecurityComponent {...props} />
    </>
  );
};

export default Security;
