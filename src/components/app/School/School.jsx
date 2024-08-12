

import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { imageURL } from '../../../constants/constants';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import HowToDonateWithReadMore from '../../shared/HowToDonateWithReadMore';
import IndustryRecentCauses from '../../shared/IndustryRecentCauses';
import VideoPlayer from '../../shared/VideoPlayer';

const School = (props) => {
  const companyType = 'School';
  const { user, history, schoolMain, getSchoolStats, getRecentCauses, getFeaturedIndustries } = props;
  const { featuredSchools, recentCauses } = schoolMain;
  const { data: causes } = recentCauses || {};
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    getSchoolStats(companyType);
    getRecentCauses(companyType);
    getFeaturedIndustries(companyType);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div className="school-pg-wrap">
      <MetaTags>
        <meta name="description" content="Raise much needed funds for our Australian school and school in developing countries. Use our online platform to support school directly. " />
      </MetaTags>
      <section className="banner school-banner gen-banner header-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-8 col-md-12 col-sm-12 banner-text-col">
              <div className="">
              <h1 className="mb-3">icause for schools</h1>
                <p className="dask-banner-pera mb-4">Make a big impact with your next school fundraiser</p>
              
                {/* <h1 className="mb-3">Crowd Fundraising For All Schools.</h1>
                <p className="dask-banner-pera mb-4">More Ways to fundraise for your favourite cause.</p> */}
              </div>
              <button onClick={() => {
                history.push('/learn-more-school');
              }} type="button" className="btn btn-outline-light">LEARN MORE</button>
              &nbsp;&nbsp;
              <button onClick={() => {
                history.push('/school-listing');
              }} type="button" className="btn btn-outline-light btn_hover btn-success px-1"> Schools Directory </button>
              {/* <button onClick={() => {
                history.push('/school-listing');
              }} type="button" className="btn btn-outline-light btn_hover btn-success">School List</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="banner-footer bg-pnk py-3 school-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7">
              <h3 className="mt-md-0"> Together We can Help the World Be Better!</h3>
              <p className="mb-0 mt-2">Please help us change lives around the world.</p>
              <button className="btn btn-success   text-uppercase mt-4"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }} type="submit">GET STARTED</button>
            </div>
            {/* <div className="col-lg-6 col-md-6 text-right">
              <button className="btn btn-success my-2 my-sm-0 text-uppercase"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }} type="submit">GET STARTED</button>
            </div> */}
          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className="card img-card dual-img-card-wrap">
                <img src={`${imageURL}a-charity-with-mission-image.jpg`} className="img-fluid" alt="img" />
                {/* <div className="sm-img school-sm-img">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/a-charity-with-mission-image-1.jpg" className="img-fluid" alt="img" />
                </div>*/}
              </div>
            </div>
            <div className='col-lg-7 pt-5 pt-lg-0'>
              <div className="text-box">
                <h5 className="text-grn">A CHARITY WITH MISSION</h5>
                <h2 className="main-heading    mt-md-0">Fundraise and change a child’s life forever with education</h2>
                <p>Icause supports all schools locally and internationally. We want to ensure that every child in our schools has access to basic education and activities.</p>
                <p>A good education is key to success for future generations. The more we invest in our schools, the brighter and stronger of a nation of people we develop. </p>
                <p>At Icause we want to transform a child's life by giving them the gift of education which will benefit them for the rest of their lives.</p>
                <p>If you are a local Australian school and are looking to raise money. We can help to get your campaign out there! We support campaigns to help with textbooks, setting up workshops, upgrade computers, sport ground, auditorium, or anything else you are crowdfunding for. We provide a complete marketing tool to involve parents, students, and alumni to support your cause. In addition, you can create your school page, where people can like, share, and donate.</p>
                <button
                  onClick={() => {
                    if (user && user.id) {
                      history.push('/homepage');
                    } else {
                      history.push('/auth/signup');
                    }
                  }}
                  type="button" className="btn btn-outline-dark">START NOW</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row '>
            <div className='col-lg-5 col-md-6'>
              <div className="text-box">
                <h5 className="text-grn">A Platform with A Mission</h5>
                <h3 className="main-heading mt-md-0">90,100 Children In 120+ Countries.</h3>
                <p className=""><span className="font-weight-bold">iCause for schools: </span>
                 Make a significant impact with your next school fundraiser.
                  Create an online fundraising community. We're here to help you connect with your school community and achieve your fundraising goals. You can create a campaign that includes stories, images and videos. Use your iCause partner account to contact your community via SMS or email or share your Campaign on social media.
                </p>
                {readMore &&
                <p className="">
                    Together, let's help our schools to get better. Pledge your Support for the work we do with schools around Australia.
                  </p>
                }
                <button type="button" className="btn btn-outline-dark mt-2 mb-4" onClick={() => setReadMore(!readMore)}>{readMore ? "Lear Less" : "Learn more"}</button>
                <div className="stats-wrap">
                  <div className="stat-box">
                    <p className="number">10,584</p>
                    <p className="tag">School in Australia </p>
                  </div>
                  <div className="stat-box">
                    <p className="number">4,006,974</p>
                    <p className="tag">Total Number of Students      </p>
                  </div>
                  <div className="stat-box">
                    <p className="number">240,180</p>
                    <p className="tag">Aboriginal and Torres Strait Islander students</p>
                  </div>
   
                </div>
              </div>
            </div>

            <div className='col-lg-7 col-md-6'>
              <VideoPlayer videoId={'j7KKZ6v5o34'} image={'video-section-image-school.jpg'} />
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
        data={featuredSchools}
        companyType={companyType}
      />
      <HowToDonateWithReadMore />


      <section className="the-wold-better gurantee-sec-6 bg-pnk mt-5 custom-dots">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
            <h1>What are you waiting for?  <span> We’re here to help you make a change.</span></h1>
              <p>Let’s make this happen!</p>
              {/* <h1>Many Reasons to support your local School! <span> Let's Make This Happen</span></h1>
              <p>Please help us change lives around the world.</p> */}
              <button className="btn btn-success my-2 my-sm-0 text-uppercase"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }}
                type="submit">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default School;
