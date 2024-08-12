

import React, { useEffect } from 'react';
import { notification, Spin } from "antd";

import CompanyDetailSection from '../../shared/CompanyDetailSection';
import CustomerReviews from '../../shared/CustomerReviews';
import EnquireFormSection from '../../shared/EnquireFormSection';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import VideoPlayer from '../../shared/VideoPlayer';
import { Helmet } from "react-helmet";

const CommunityDetail = (props) => {
  const { followCompanyType, likeCompanyType, shareCompany, subscribe, getFeaturedIndustries, getPeopleNeededForHelp, enquireQuery, getCustomerReviews, getCommunity, match, history, user, communityDetails } = props;
  const { params } = match || {};
  const communityId = params && params.id ? Number(params.id) : null;
  const { customerReviews, numberOfPeople, featuredCommunities, community, loading } = communityDetails || {};
  const companyType = 'Community';
  const { video_url, video_img, sinceHeading } = community || {};

  useEffect(() => {
    if (communityId) {
      getCustomerReviews();
      getPeopleNeededForHelp();
      getFeaturedIndustries(companyType);
      getCommunity(communityId, user && user.id ? user.id : navigator.userAgent);
    } else {
      notification.error({
        message: 'GET CHARITY DETAILS',
        description: 'communityId is not valid'
      })
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let videoId = "j7KKZ6v5o34";
  let formattedVideoUrl = video_url || 'https://www.youtube.com/embed/j7KKZ6v5o34';
  if (video_url) {
    const [firstUrlPart, secondUrlPart] = formattedVideoUrl.split('watch?v=');
    formattedVideoUrl = `${firstUrlPart}embed/${secondUrlPart}`;
    videoId = secondUrlPart;
  }
  return (
    <>
      <Helmet>
        <title>Community</title>
        <meta name="description" content={sinceHeading} />
        <meta name="twitter:card" content={sinceHeading} />
        <meta name="twitter:site" content={sinceHeading} />
        <meta name="twitter:creator" content={sinceHeading} />
        <meta name="twitter:title" content="Community" />
        <meta name="twitter:description" content={sinceHeading} />
        <meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
        <meta property="og:title" content="Community" />
        <meta property="og:description" content={sinceHeading} />
        <meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
      </Helmet>
      <div className="poppin-wrap">
        <Spin spinning={loading}>
          <section style={{ backgroundImage: "url(" + community?.cover_image + ")" }} className="school-details-banner gen-banner-2">
            <div className="container">
              <div className="banner-text">
                <h1 className="heading"> </h1>
                <p></p>
              </div>
            </div>
          </section>

          <CompanyDetailSection
            data={community}
            numberOfPeople={numberOfPeople}
            companyType={companyType}
            subscribe={subscribe}
            user={user}
            history={history}
            shareCompany={shareCompany}
            getIndustryDetails={getCommunity}
            getCompanyTypeListings={getCommunity}
            followCompanyType={followCompanyType}
            likeCompanyType={likeCompanyType}
            sinceHeading={"Est Since"}
            total_studentsHeading={"Total number of members"}
            Video={() => {
              return (
                <section style={{ padding: 0 }} className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
                  <div className='container'>
                    <div className='row justify-content-center'>
                      <div style={{ padding: 0 }} className='col-lg-12 col-md-12'>
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
          <CustomerReviews data={customerReviews} loading={loading} />
          <FeaturedCompaniesSection
            data={featuredCommunities}
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

export default CommunityDetail;
