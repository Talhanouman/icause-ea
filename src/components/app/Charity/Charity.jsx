import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import HowToDonateWithReadMore from '../../shared/HowToDonateWithReadMore';
import IndustryRecentCauses from '../../shared/IndustryRecentCauses';
import VideoPlayer from '../../shared/VideoPlayer';
import { imageURL } from '../../../constants/constants';

const Charity = (props) => {
  const companyType = 'Charity';
  const history = useHistory();
  const { user, charityMain, getCharityStats, getRecentCauses, getFeaturedIndustries } = props;
  const { featuredCharities, recentCauses } = charityMain;
  const { data: causes } = recentCauses || {};
 
  useEffect(() => {
    getCharityStats(companyType);
    getRecentCauses(companyType);
    getFeaturedIndustries(companyType);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div className="school-pg-wrap">
      <section className="banner charity-banner gen-banner header-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-8 col-md-12 col-sm-12 banner-text-col">
              <div className="">

              <h1 className="mb-3">icause for charity</h1> 
                <p className="dask-banner-pera mb-4">Reach your fundraising goals faster. </p>
               

                {/* <h1 className="mb-3">Support Your Favourite Australian Charity!</h1> 
                <p className="dask-banner-pera mb-4">Support your charity by switching and donating your utility bill, the only platform in the world that offers the choice to use a bill to donate. </p>
                */}
              </div>
              <button   onClick={() => history.push('/learn-more-charity')} type="button" className="btn btn-outline-light">LEARN MORE</button>
              &nbsp;&nbsp;<button onClick={() => {               
                  history.push('/charity-listing');               
              }} type="button" className="btn btn-outline-light btn-success btn_hover px-1">Charities Directory
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-footer bg-pnk py-3 school-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 ">
              <h3 className="mt-md-0"> Make an impact with your charity </h3>
              <p className="mb-0">Reach your Donors easier and better through our online fundraising tool. </p>
               {/* {readMore &&
               <>
                <p className="mb-0"> them by sharing videos, images, and stories. </p>
                <p className="mb-0">You can send invitations and reminders via SMS or email and share your campaign on social media.</p>
              </>
               } */}
                {/* <button
                  onClick={() => setReadMore(!readMore)}
                  type="button"
                  className="btn-cutom banner-read-more">
                  {readMore ? 'read less' : 'read more'}
                </button> */}
             
            </div>
            <div className="col-lg-4 col-md-4  text-md-right">
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
                <img src={`${imageURL}help-1.jpg`} className="img-fluid" alt="img" />
               {/* <div className="sm-img charity-sm-img">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/help.jpg" className="img-fluid" alt="img" />
                </div>*/}
              </div>
            </div>
            <div className='col-lg-7 pt-5 pt-lg-0'>
              <div className="text-box">
                <h5 className="text-grn">A CHARITY WITH MISSION</h5>
                <h3 className="main-heading    mt-md-0">Complete control over your fundraising</h3>
               
                <p className="">As a charity partner, you'll have access to an online portal that gives you complete control over your Fundraising. It's easy to use and completely transparent, so you can track your Campaign and see the donations as they come in.  </p>
                <p>You also have the option to share more Information with your supporters, send reminders and extend your Campaign to make sure you reach your fundraising goals. You will receive the funds raised through your Campaign into your nominated bank account when it ends.</p>
                <p>We know that your Donors want to support your Charity but aren't always in the best financial position to donate funds. </p>
                <p>That's why we've more ways to raise money. We raised money from all the major payment platform visa, Master, PayPal, Apple and Google Pay alternatively – switch and donate your utility bill, the only Platform in the world that offers the choice to use a bill to donate. Find more in our FAQ section.</p>
                <button type="button" className="btn btn-outline-dark">START NOW</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-6'>
              <div className="text-box">
                <h5 className="text-grn">Icause With a Mission</h5>
                <h3 className="main-heading mt-md-0">Total 56,000 Registered Charities in Australia</h3>
                <p className="">Australian Charities are involved both locally and internationally- associated in wide range of areas, including education, health & wellbeing, Faith, Human and Animal rights and environment.</p>
                <div className="stats-wrap">
                  <div className="stat-box">
                    <p className="number">3.7 Million</p>
                    <p className="tag">Volunteer</p>
                  </div>
                  <div className="stat-box">
                    <p className="number">156 Billion </p>
                    <p className="tag">Total Revenue     </p>
                  </div>
                  <div className="stat-box">
                    <p className="number">10.5 </p>
                    <p className="tag">Donation Raise</p>
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
        data={featuredCharities}
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

export default Charity;
