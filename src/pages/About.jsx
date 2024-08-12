import React from 'react';

import AboutComponent from '../components/app/About/About.jsx';
import { Helmet } from "react-helmet";

const About = (props) => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need." />
        <meta name="twitter:card" content="Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need." />
        <meta name="twitter:site" content="Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need." />
        <meta name="twitter:creator" content="Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need." />
        <meta name="twitter:title" content="About" />
        <meta name="twitter:description" content="Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need." />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="About" />
        <meta property="og:description" content="Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need." />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <AboutComponent {...props} />
    </>
  );
};

export default About;
