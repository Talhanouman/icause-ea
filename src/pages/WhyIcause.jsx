import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WhyIcauseComponent from '../components/app/WhyIcause/WhyIcause';

import * as actions from '../actions/why-icause';
import * as faqactions from '../actions/faq';
import { Helmet } from "react-helmet";

const WhyIcause = (props) => {
  return (
    <>
      <Helmet>
        <title>Why Icause</title>
        <meta name="description" content="There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here" />
        <meta name="twitter:card" content="There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here" />
        <meta name="twitter:site" content="There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here" />
        <meta name="twitter:creator" content="There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here" />
        <meta name="twitter:title" content="Why Icause" />
        <meta name="twitter:description" content="There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here" />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Why Icause" />
        <meta property="og:description" content="There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here" />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <WhyIcauseComponent {...props} />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ ...actions, ...faqactions }, dispatch) }
}

export default connect(({ whyIcause, user, faq }) => ({ whyIcause, user, faq }), mapDispatchToProps)(WhyIcause);

