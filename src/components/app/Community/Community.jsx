import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import HowToDonateWithReadMore from '../../shared/HowToDonateWithReadMore';
import IndustryRecentCauses from '../../shared/IndustryRecentCauses';
import VideoPlayer from '../../shared/VideoPlayer';
import { imageURL } from '../../../constants/constants';

const Community = (props) => {
  const companyType = 'Community';
  const { user, history, communityMain, getCommunityStats, getRecentCauses, getFeaturedIndustries } = props;
  const { featuredCommunities, recentCauses } = communityMain;
  const { data: causes } = recentCauses || {};
  
  useEffect(() => {
    getCommunityStats(companyType);
    getRecentCauses(companyType);
    getFeaturedIndustries(companyType);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div className="school-pg-wrap">
      <MetaTags>
        <meta name="description" content="Icause can assist your community in Australia with a fundraising campaign that makes a difference.  " />
      </MetaTags>
      <section className="banner community-banner gen-banner header-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-8 col-md-12 col-sm-12 banner-text-col">
              <div className="">

                
              <h1 className="mb-3"> icause for communities </h1>
                <p className="dask-banner-pera mb-4">Create a difference in your local community </p>

{/* 
                <h1 className="mb-3">We are Passionate About Helping your community.</h1>
                <p className="dask-banner-pera mb-4">The Most Powerful Crowdfunding platform. </p> */}

              </div>
              <button type="button" onClick={() => {
                history.push('/learn-more-community');
              }} className="btn btn-outline-light">LEARN MORE</button>
              &nbsp;&nbsp;<button onClick={() => {
                history.push('/community-listing');
              }} type="button" className="btn btn-outline-light btn-success btn_hover p-0">Communities Directory </button>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-footer bg-pnk py-3 school-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <h3 className="mt-md-0"> Join Hands with icause! Let's Bring Your Story To Millions Of People.</h3>
              <p className="mb-0">Please help us change lives around the world.</p>
            </div>
            <div className="col-lg-4 col-md-4 text-right">
              <button className="btn btn-success my-2 my-sm-0 text-uppercase" onClick={() => {
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
              <div className="card dual-img-card-wrap img-card">
                <img src={`${imageURL}charity-1.jpg`} className="img-fluid" alt="img" />
                {/*<div className="sm-img community-sm-image">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/charity-2.jpg" className="img-fluid" alt="img" />
                </div>*/}
              </div>
            </div>
            <div className='col-lg-7 pt-5 pt-lg-0'>
              <div className="text-box">
                <h5 className="text-grn">A CHARITY WITH MISSION</h5>
                <h3 className="main-heading    mt-md-0">Assisting Diverse Communities</h3>
                <p className="font-weight-bold">“I alone cannot change the world, but I can cast a stone across the waters to create many ripples.” -Mother Teresa</p>
                <p className="">Australia is made up of diverse communities – Jewish, Arab, Greek, Italian, Indigenous, Refugees, LGBT and so much more.</p>
                <p>Here at Icause we can assist your community in helping to set up a fundraising campaign. </p>
                <p>Whether its for an individual member of your community, a family or just help raise more awareness of your community Icause has you covered. </p>
                <p>Remember there is power in the community – the coming together of groups of people for a common cause. </p>
                <p>Each member of the community plays a part and makes a difference. </p>
                <button type="button" className="btn btn-outline-dark" onClick={() => history.push('/auth/login')}>START NOW</button>
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
                <h5 className="text-grn">A CHARITY WITH MISSION</h5>
                <h3 className="main-heading mt-md-0">Community Cause</h3>
                <p className="">Bringing people of a community together for a good cause is powerful and helps ignite social change. Here at Icause we are dedicated to helping communities run a campaign. </p>

              </div>
            </div>
            <div className='col-lg-7 col-md-6'>
              <VideoPlayer videoId={'j7KKZ6v5o34'} image={'video-section-community.jpg'} />
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
        data={featuredCommunities}
        companyType={companyType}
      />
<HowToDonateWithReadMore/>


      <section className="the-wold-better gurantee-sec-6 bg-pnk mt-5 custom-dots">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
            <h1>What are you waiting for?  <span> We’re here to help you make a change.</span></h1>
              <p>Let’s make this happen!</p>
{/* 
              <h1>Together We Help Your Community.<span> Let's Make This Happen!</span></h1>
              <p>Please help us change lives around the world.</p> */}
              <button className="btn btn-success my-2 my-sm-0 text-uppercase" onClick={() => {
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

export default Community;
