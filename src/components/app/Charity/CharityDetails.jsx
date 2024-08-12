

import React, { useEffect } from 'react';
import { notification, Spin } from "antd";
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';

import CompanyDetailSection from '../../shared/CompanyDetailSection';
import CustomerReviews from '../../shared/CustomerReviews';
import EnquireFormSection from '../../shared/EnquireFormSection';
import VideoPlayer from '../../shared/VideoPlayer';
import {Helmet} from "react-helmet";

const CharityDetails = (props) => {
  const { shareCompany, subscribe, likeCompanyType, followCompanyType, getFeaturedIndustries, getPeopleNeededForHelp, enquireQuery, getCustomerReviews, getCharity, match, history, user, charityDetails } = props;
  const { params } = match || {};
  const charityId = params && params.id ? Number(params.id) : null;
  const { charity, numberOfPeople, featuredCharities, customerReviews, loading } = charityDetails || {};
  const companyType = 'Charity';
  const { video_url, video_img, sinceHeading } = charity || {};

  useEffect(() => {
    if (charityId) {
      getCustomerReviews();
      getPeopleNeededForHelp();
      getFeaturedIndustries(companyType);
      getCharity(charityId, user && user.id ? user.id : navigator.userAgent);
    } else {
      notification.error({
        message: 'GET CHARITY DETAILS',
        description: 'charityID is not valid'
      })
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let videoId = "j7KKZ6v5o34";
  let formattedVideoUrl = video_url || 'https://www.youtube.com/embed/j7KKZ6v5o34';
  if (video_url) {
    const [firstUrlPart, secondUrlPart] = formattedVideoUrl.split('watch?v=');
    formattedVideoUrl = `${firstUrlPart}embed/${secondUrlPart}`;
    videoId= secondUrlPart;
  }
  return (
    <>
      <Helmet>
        <title>Charity</title>
        <meta name="description" content={sinceHeading} />
        <meta name="twitter:card" content={sinceHeading} />
        <meta name="twitter:site" content={sinceHeading} />
        <meta name="twitter:creator" content={sinceHeading} />
        <meta name="twitter:title" content="Charity" />
        <meta name="twitter:description" content={sinceHeading} />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Charity" />
        <meta property="og:description" content={sinceHeading} />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
    <div className="poppin-wrap">
      <Spin spinning={loading}>
        <section style={{ backgroundImage: "url(" + charity?.cover_image + ")" }} className="school-details-banner gen-banner-2">
          <div className="container">
            <div className="banner-text">
              <h1 className="heading"> </h1>
              <p></p>
            </div>
          </div>
        </section>

        <CompanyDetailSection 
          data={charity}
          numberOfPeople={numberOfPeople}
          companyType={companyType} 
          subscribe={subscribe} 
          user={user}
          history={history}
          shareCompany={shareCompany}
          getIndustryDetails={getCharity}
          getCompanyTypeListings={getCharity}
          followCompanyType={followCompanyType}
          likeCompanyType={likeCompanyType}
          sinceHeading={"Est Since"}
          total_studentsHeading={"Total number of supports"}
          Video={()=>{
            return(
              <section style={{padding:0}} className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
          <div className='container'>
            <div className='row justify-content-center'>
            <div style={{padding:0}} className='col-lg-12 col-md-12'>
              <VideoPlayer videoCoverImage={video_img} videoId={videoId} />
              </div>
            </div>
            </div>
         </section>
            )
          }}
        />
        {/* <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row justify-content-center'>
          <div className='col-lg-7 col-md-6'>
            <VideoPlayer videoCoverImage={video_img} videoId={videoId} />
            </div>
          </div>
          </div>
       </section> */}
        <CustomerReviews data={customerReviews} loading={loading}/>
        <FeaturedCompaniesSection 
          data={featuredCharities}
          companyType={companyType}
        />
        <EnquireFormSection 
          enquireQuery={enquireQuery}
        />
      </Spin>
    </div>
    </>
  );
};

export default CharityDetails;
