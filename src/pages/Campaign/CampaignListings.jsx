import React from 'react';
import { connect } from 'react-redux';

import CampaignListingsComponent from '../../components/app/Campaign/CampaignListings';

import * as actions from '../../actions/campaign/campaignListings';
import { Helmet } from "react-helmet";

const CampaignListings = (props) => {
  return (
    <>
      <Helmet>
        <title>Campaigns</title>
        <meta name="description" content="We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate." />
        <meta name="twitter:card" content="We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate." />
        <meta name="twitter:site" content="We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate." />
        <meta name="twitter:creator" content="We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate." />
        <meta name="twitter:title" content="Campaigns" />
        <meta name="twitter:description" content="We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Campaigns" />
        <meta property="og:description" content="We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <CampaignListingsComponent {...props} />
    </>
  );
};

export default connect(({ campaign }) => campaign.campaignListings, actions)(CampaignListings);

