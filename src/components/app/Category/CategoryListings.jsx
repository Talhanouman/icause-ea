
import React, { useEffect } from 'react';
import { Spin } from 'antd';
import moment from 'moment';
import MetaTags from 'react-meta-tags';
import CustomerReviews from '../../shared/CustomerReviews';
import WebsiteBenefits from '../../shared/WebsiteBenefits';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';

import AllCategoriesSection from './AllCategoriesSection';
import { useHistory } from 'react-router';
import { imageURL } from '../../../constants/constants';

const CategoryListings = (props) => {
  const {
    categoryListings,
    getCustomerReviews,
    getPledgeOfTheDay,
    getCategories,
    getFeaturedCampaigns
  } = props;
  const history = useHistory();
  const {
    customerReviews,
    loading,
    categories,
    pledgeOfTheDay,
    featuredCampaigns
  } = categoryListings;

  const { data } = featuredCampaigns || {};
  let pledge = {};
  if (pledgeOfTheDay && pledgeOfTheDay.length) {
    pledge = pledgeOfTheDay[0];
  }
  const { title, story, amount, progress, cover_photo: coverPhoto, end_date, deadline, address } = pledge || {};
  const cover = coverPhoto ? `${coverPhoto}` : `${imageURL}pledge-of-the-day.png`;
  const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
  const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';

  useEffect(() => {
    getPledgeOfTheDay();
    getCategories();
    getFeaturedCampaigns();
    getCustomerReviews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="start-fund-wrap header-banner">
      <MetaTags>
        <meta name="description" content="Needing some fundraising ideas for inspiration? Browse our great range of fundraising ideas and start making a real difference in the world." />
      </MetaTags>
      <section className="banner choise-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-6 col-md-8 col-sm-12">
              {/* <h1>Crowdfunding For Everyone!  </h1> */}
              <h1>Let’s make this happen!</h1>
              <p>Start your fundraising journey today!</p>
              {/* <p className="">Start your Fundraising Journey with New Ideas.</p> */}
              <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-outline-light ">Donate now</button>
              {/* <button onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success  ml-0 ml-md-2 btn_hover">Start fundraising</button> */}
            </div>
          </div>
        </div>
      </section>
      <Spin spinning={loading}>

        <section className="choose-a-fundraiser start-fund-sec-2">
          <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center text-center">
              <div className="col-lg-4 col-md-4 col-sm-6 border-rigt banner-bottom">
                <h4>1. Choose a Fundraiser</h4>
                <p>Browse our fundraising ideas for inspiration</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 border-rigt banner-bottom">
                <h4>2. Create a Campaign</h4>
                <p>Simply sign up with your email or Facebook to get started</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 banner-bottom">
                <h4>3. Invite your Friends</h4>
                <p>Send out your unique link to start receiving  donations</p>
              </div>
            </div>
          </div>
        </section>

        <section className='donate-section choise-sec-3 pb-0'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-12 col-md-12 pl-md-5 custom-text-width text-col'>
                 <h3 className="main-heading mt-4 mb-4 mt-md-0">Who is Icause?</h3>
                 <p>At icause, we know ALL about fundraising! That’s why we know that crowdfunding is one of the most effective ways to raise money for a personal goal or charitable cause, and we’ve made it even better!</p>
                 <p>We want crowdfunding to be available to EVERYONE who wants to help, even if you don’t have the spare funds to donate right now; that's why we've developed a brand new, innovative way to fundraise - Switch and Donate. Available exclusively through icause, this world-first concept gives you a choice to donate without spending a cent, simply by using your utility bills. </p>
                 <p>Reaching your fundraising goals has never been easier!</p>
                {/* <h3 className="main-heading mt-4 mb-4 mt-md-0">Who is Icause?</h3>
                <p className="">iCause is Australia's new way to raise money through online fundraisers and crowdfunding. Donate directly to your favourite cause or receive a free review of your bills and use the savings to donate. </p>
                <p>We're passionate about Fundraising; that's why we've developed a brand new, innovative way to raise money and donate to the causes that are important to you. So, what makes use different? Well, we're the only fundraising platform that gives you a choice to donate using your utility bills - supporting a cause has never been more straightforward!</p>
                <p className="font-weight-bold">1. Raise money.</p>
                <p className="font-4">In just a few easy steps, you can have a personalised campaign up and running. You can make your online Fundraiser public or private and choose to use one of our easy campaign templates or create your Content, then use your unique code to invite your friends to donate.</p>
                <p className="font-weight-bold">2. Donate money.</p>
                <p className="font-4">We've created a completely new way to support your chosen Fundraiser or Charity. You can choose to donate directly or use your utility bills to support a cause. Find out more about how you can donate with a bill and start making a difference today!</p>
                */}
              </div>
              <div className='col-lg-12 col-md-12 pl-md-5 text-col mb-5 iCause-Partners' style={{ paddingBottom: '20px' }}>
              <h3 className="main-heading mt-4 mb-4 mt-md-5">How to fundraise with icause?</h3>
              <p className='font-weight-bold'>1.  Create a campaign</p>
              <p>In just a few easy steps, you can have a crowdfunding campaign up and running. You can make your online fundraiser public or private and choose to use one of our easy campaign templates or create personalised content. Your icause dashboard lets you make changes and track your campaign every step of the way.</p>
               
              <p className='font-weight-bold'>2. Raise money</p>
              <p>
              Your supporters can choose to donate directly or use or use Switch and Donate.  
             <p>More options = more donations!  <br
             ></br>

To Switch and Donate, simply upload a utility bill to be compared, and if you choose to switch to a new provider, a donation is made to your nominated cause.
</p>
              </p>
              <p className='font-weight-bold'>3. Shout about it!</p>
              <p>We've made it easier to get your campaign noticed! Your icause dashboard is so easy to use:</p>
              <ul>
                <li>	Upload inspiring campaign content including videos, photos and stories.</li>
                <li>Share your campaign with your contacts via email or SMS.</li>
                <li>	Use your unique link to share your campaign on social media.</li>
                <li>	Track your campaign and share milestones with your supporters.</li>
              </ul>
                {/* <h3 className="main-heading mt-4 mb-4 mt-md-5">Why choose Icause to support your Fundraising?</h3>
                <p className="">We've made it easier and better by giving you a complete fundraising platform that is easy to use and enables you to:</p>
                <ul>
                <li>Inspire your friends and family through your crowdfunding page and use the Platform to easily reach them with your unique link through social media, email or SMS</li>
                <li>	A new way to donate – your supporters can donate directly or upload a bill to support- Switch and Donate your Bill. We are the only crowdfunding platform in the world that offers bill donations</li>
                <li>Fast payment of funds – your funds will be automatically paid to your chosen account at the close of your Campaign—campaigns duration minimum 30 days.</li>
                <li>	A personal online portal to share your story, reach your supporters and track your Fundraising progress.</li>
                </ul> */}
              </div>
              
              {/* <div className='col-lg-12 col-md-12 pl-md-5 custom-text-width text-col d-flex align-items-center'> */}
              {/* <div className="warranty-onditions ">
                  <h3 className="main-heading mt-4 mb-4 mt-md-0 ">icause inspiration</h3>
                  <p>There’s no time like the present to start making a difference! If you’re looking for inspiration, you’ve come to the right place!</p>
                  <p> <span>1</span>	Fundraise for someone you know – is someone struggling to raise funds for a personal endeavour, medical bills, education costs, wedding, or travel?</p>
                  <p>	<span>2</span>	Fundraise for the community – your local schools, sports clubs and community events are always looking for support.</p>
                  <p><span>3</span>Fundraise for a charity – take a look at our charity partners and be inspired by their great work.</p>
                  <p><span>4</span> 	Fundraise for an animal cause - support animal welfare projects on a local or global scale.</p>
                  <p><span>5</span>	Fundraise for heritage projects – protect historically significant archaeological sites or heritage ¬¬¬-buildings.</p>
                  <p><span>6</span>	Fundraise for the environment – help stop climate change and contribute to disaster relief and recovery projects.</p>
                  
                  <p className="font-weight-bold p-0 mt-3">Make your fundraising dreams a reality!</p>
                  <p className='p-0'>We’re here to turn your fundraising idea, no matter how big or small, into reality. Click the Get Started button and you’ll be guided step-by-step through the set-up process, so you can be raising funds in no time!</p>
                  <button className="btn btn-success my-4  text-uppercase " type="submit">Start Now</button>
                </div> */}
                {/* <div className="warranty-onditions ">
                  <h3 className="main-heading mt-4 mb-4 mt-md-0 ">Idea's For Life- Your fundraising inspiration starts here</h3>
                  <p> <span>1</span>If you're looking for inspiration for your fundraising campaign, look No further! Just browse our fundraising ideas below, and we guarantee you'll be walking away with so much more inspiration than before you landed on this page.</p>
                  <p>	<span>2</span> Fundraise for someone you know – is someone struggling to raise funds for a personal endeavour, medical bills, education costs, wedding, or travel?</p>
                  <p><span>3</span>	Fundraise for the community – local schools, clubs and community events; additional funds to bring the community together.</p>
                  <p><span>4</span> Fundraise for a charity – take a look at our charity partners and be inspired by the great work.</p>
                  <p><span>5</span>Fundraise for an animal cause- big cats of Africa, Australian native animals, Wolves in America</p>
                  <p><span>6</span> Fundraise for heritage projects – protect historically significant archaeological sites</p>
                  <p><span>7</span>	Fundraise for indigenous welfare – first Australians, native Americans etc</p>
                  <p><span>8</span> 	Fundraise for the environment – stop climate change, uranium mining</p>
                  <p className="font-weight-bold p-0 mt-3">Translate your fundraising idea into reality!</p>
                  <p className='p-0'>Icause will help turn your fundraising idea, no matter how Big or Small, into reality. We'll be with you every step of the way. So, how do you turn your fundraising idea into reality? Turn your fundraising idea into reality. It's never been easier with the Icause Platform</p>
                  <button className="btn btn-success my-4  text-uppercase " type="submit">Start Now</button>
                </div> */}
              {/* </div> */}
              {/* <div className='col-lg-4 col-md-5 trending-causes pt-0 pb-0'>
                <div className="card mt-0"> <img src={cover} className="img-fluid" alt="" />
                  <div className="text-card"> <span>{formattedAddress}</span> <span>{daysGone}</span> </div>
                  <h1>{title || 'N/A'}</h1>
                  <p style={{ color: 'black' }}>{story || 'N/A'}</p>
                  <div className="text-card m-0"> <span>Last donation</span> <span>{end_date ? moment(end_date).fromNow() : ''}</span> </div>
                  <div className="progres">
                    <div className="progress-inner">
                      <div className="progress-bar" role="progressbar" style={{ width: `${progress || 0}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="treanding-cause-bottom">
                      <h4 className="left-text-s">${amount || 0}<span style={{ color: 'black' }} className="">raised</span></h4>
                      <h4 className="left-right-s">{progress || 0}%</h4> </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <AllCategoriesSection
          data={categories}
        />

        <FeaturedCampaigns className="start-fund-feat-sec"
          data={data}
          loading={loading}
        />

        <WebsiteBenefits />

        <CustomerReviews
          data={customerReviews}
          loading={loading}
        />
      </Spin>
    </div>
  );
};

export default CategoryListings;
