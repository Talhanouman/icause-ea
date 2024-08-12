import React from 'react';
import { connect } from 'react-redux';

import BecomeApartnerComponent from '../components/app/BecomeAnInvestor/BecomeAnInvestor';

import * as actions from '../actions/becomeAnInvestor';
import { Helmet } from "react-helmet";

const BecomeAnInvestor = (props) => {
  return (
    <>
      <Helmet>
        <title>Become An Investor</title>
        <meta name="description" content="Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe." />
        <meta name="twitter:card" content="Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe." />
        <meta name="twitter:site" content="Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe." />
        <meta name="twitter:creator" content="Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe." />
        <meta name="twitter:title" content="Become An Investor" />
        <meta name="twitter:description" content="Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Become An Investor" />
        <meta property="og:description" content="Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <BecomeApartnerComponent {...props} />
    </>
  );
};

export default connect(({ investor }) => investor, actions)(BecomeAnInvestor);
