import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/school/school';

import SchoolComponent from '../../components/app/School/School';
import { Helmet } from "react-helmet";

const School = (props) => {
  return (
    <>
      <Helmet>
        <title>School</title>
        <meta name="description" content="Fundraise and change a child’s life forever with education" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="School" />
        <meta name="twitter:description" content="best school education for your child" />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="school" />
        <meta property="og:description" content="school education" />
        <meta property="og:image" content="url_to_image" />
      </Helmet>
      <SchoolComponent {...props} />
    </>
  );
};

export default connect(({ school, user }) => ({ schoolMain: school.school, user }), actions)(School);

