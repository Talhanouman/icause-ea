import React from 'react';
import { connect } from 'react-redux';

import CommunityComponent from '../../components/app/Community/Community';

import * as actions from '../../actions/community/community';
import { Helmet } from "react-helmet";

const Community = (props) => {
  return (
    <>
      <Helmet>
        <title>Community</title>
        <meta name="description" content="We are Passionate About Helping your community." />
        <meta name="twitter:card" content="We are Passionate About Helping your community." />
        <meta name="twitter:site" content="We are Passionate About Helping your community." />
        <meta name="twitter:creator" content="We are Passionate About Helping your community." />
        <meta name="twitter:title" content="Community" />
        <meta name="twitter:description" content="We are Passionate About Helping your community." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Community" />
        <meta property="og:description" content="We are Passionate About Helping your community." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <CommunityComponent {...props} />
    </>
  );
};

export default connect(({ community, user }) => ({ communityMain: community.community, user }), actions)(Community);
