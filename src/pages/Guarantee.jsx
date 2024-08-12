import React from 'react';

import GuaranteeComponent from '../components/app/Guarantee/Guarantee';
import { Helmet } from "react-helmet";

const Guarantee = (props) => {
  return (
    <>
      <Helmet>
        <title>Guarantee</title>
        <meta name="description" content="At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further.

" />
        <meta name="twitter:card" content="At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further.

" />
        <meta name="twitter:site" content="At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further.

" />
        <meta name="twitter:creator" content="At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further.

" />
        <meta name="twitter:title" content="Guarantee" />
        <meta name="twitter:description" content="At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further.

" />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Guarantee" />
        <meta property="og:description" content="At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further.

" />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <GuaranteeComponent {...props} />
    </>
  );
};

export default Guarantee;
