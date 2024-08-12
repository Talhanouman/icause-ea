

import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { imageURL } from '../../../constants/constants';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import HowToDonateWithReadMore from '../../shared/HowToDonateWithReadMore';
import IndustryRecentCauses from '../../shared/IndustryRecentCauses';
import VideoPlayer from '../../shared/VideoPlayer';

const Sport = (props) => {
  const companyType = 'sport';
  const { user, history, sportMain, getOrganizationStats, getRecentCauses, getFeaturedIndustries } = props;
  const { featuredOrganizations, recentCauses } = sportMain;
  const { data: causes } = recentCauses || {};
 
  useEffect(() => {
    getOrganizationStats(companyType);
    getRecentCauses(companyType);
    getFeaturedIndustries(companyType);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div className="school-pg-wrap">
      <MetaTags>
        <meta name="description" content="Join your favorite sporting club fundraising. Use our online platform to support local club directly.  " />
      </MetaTags>
      <section className="banner organization-banner gen-banner header-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-md-12 col-sm-12 banner-text-col">
              <div className="">
              <h1 className="mb-3">icause for clubs </h1>
                <p className="dask-banner-pera mb-4">Get the attention your club deserves</p>

                {/* <h1 className="mb-3">Become a Fundraiser for your favourite Club </h1>
                <p className="dask-banner-pera mb-4">Use our online Platform to support local clubs directly.</p> */}
              </div>
              <button onClick={() => {
                history.push('/learn-more-sport');
              }} type="button" className="btn btn-outline-light">LEARN MORE</button>
              &nbsp;&nbsp;<button onClick={() => {
                history.push('/sport-listing');
              }} type="button" className="btn btn-outline-light btn-success btn_hover px-1">Sports Directory</button>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-footer bg-pnk py-3 school-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <h3 className="mt-md-0"> Together We Support Our Local Aussie Club!</h3>
              <p className="mb-0">Join us to support our future superstars.</p>
            </div>
            <div className="col-lg-4 col-md-4 text-right">
              <button className="btn btn-success my-2 my-sm-0 text-uppercase"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }} type="submit">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className="card img-card dual-img-card-wrap">
                <img src={`${imageURL}sport-1.jpg`} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className='col-lg-7 pt-5 pt-lg-0'>
              <div className="text-box">
                <h5 className="text-grn">A Platform with Mission </h5>
                <h2 className="main-heading    mt-md-0">Give the support your local club deserves</h2>
                <p className="">Whether you have five members or 500,000, it makes no difference to us.</p>
                <p className="">We are passionate about helping our young athletes and are partners in their struggles. </p>
                <p>We support all sort of sports clubs, including, table tennis, footy, rugby, cricket, hockey, basketball and the list go on.</p>
                <p>With our online portal, you can spread the word about your campaign to your members in a number of ways: SMS, Email or encouraging guests to the club to visit your page and share your message.</p>
                <p>People are passionate about their local sporting club, and this is the perfect way for them to help. </p>
                <p>But it’s important to make it easy for them.  Icause does just that. Our platform is hassle-free, free of complications, and it is easy to use. </p>
                {/* <p>But its important to make it easy for them and Icause does. Our platform is hassle free, no complications, just simple to use </p> */}
                <button type="button" className="btn btn-outline-dark">START NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-6'>
              <div className="text-box">
                <h5 className="text-grn">A Platform with Mission </h5>
                <h3 className="main-heading mt-md-0 mb-1">Australia is a prosperous, culturally diverse society.</h3>
                <p className="font-weight-bold">Support your community cause! </p>
                <p className="">Over 800 register Sporting club Australia wide</p>
                <div className="stats-wrap">
                  <div className="stat-box">
                    <p className="number">13,000</p>
                    <p className="tag">Number of States </p>
                  </div>
                  <div className="stat-box">
                    <p className="number">340</p>
                    <p className="tag">Territory </p>
                  </div>
                  <div className="stat-box">
                    <p className="number">51</p>
                    <p className="tag">Total Fundraising</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-7 col-md-6'>
              <VideoPlayer videoId={'j7KKZ6v5o34'} image={'help-3.jpg'} />
            </div>
          </div>
        </div>
      </section>

      <IndustryRecentCauses
        data={causes}
        companyType={companyType}
        history={history}
      />

      <FeaturedCompaniesSection
        history={history}
        parentPage='industryMain'
        data={featuredOrganizations}
        companyType={companyType}
      />
      <HowToDonateWithReadMore/>

      <section className="the-wold-better gurantee-sec-6 bg-pnk mt-5 custom-dots">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
            <h1>What are you waiting for?  <span> We’re here to help you make a change.</span></h1>
              <p>Let’s make this happen!</p>

              {/* <h1>We help thousands of charities to achieve their goals!  <span>! Let's Make This Happen for your Charity.</span></h1>
              <p>Icause Making Possibility into Reality!</p> */}
              <button className="btn btn-success my-2 my-sm-0 text-uppercase"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }} type="submit">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sport;
