

import React, { useEffect } from 'react';
import { notification, Spin } from "antd";

import CompanyDetailSection from '../../shared/CompanyDetailSection';
import CustomerReviews from '../../shared/CustomerReviews';
import EnquireFormSection from '../../shared/EnquireFormSection';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import VideoPlayer from '../../shared/VideoPlayer';


const SportDetail = (props) => {
  const { getFeaturedIndustries, getPeopleNeededForHelp, enquireQuery, followCompanyType, likeCompanyType, subscribe, shareCompany, getOrganization, getCustomerReviews, match, history, user, sportDetails } = props;
  const { params } = match || {};
  const organizationId = params && params.id ? Number(params.id) : null;
  const { featuredOrganizations, numberOfPeople, customerReviews, organization, loading } = sportDetails || {};
  const companyType = 'sport';
  const { video_url, video_img } = organization || {};

  useEffect(() => {
    if (organizationId) {
      getPeopleNeededForHelp();
      getFeaturedIndustries(companyType);
      getOrganization(organizationId, user && user.id ? user.id : navigator.userAgent);
      getCustomerReviews();
    } else {
      notification.error({
        message: 'GET ORGANIZATION DETAILS',
        description: 'organizationId is not valid'
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
    <div className="poppin-wrap">
      <Spin spinning={loading}>
        <section style={{backgroundImage: "url(" + organization?.cover_image + ")"}} className="school-details-banner gen-banner-2">
          <div className="container">
            <div className="banner-text">
              <h1 className="heading"> </h1>
              <p></p>
            </div>
          </div>
        </section>

        <CompanyDetailSection 
          data={organization}
          numberOfPeople={numberOfPeople}
          companyType={companyType}
          subscribe={subscribe} 
          user={user}
          history={history}
          shareCompany={shareCompany}
          getIndustryDetails={getOrganization}
          getCompanyTypeListings={getOrganization}
          followCompanyType={followCompanyType}
          likeCompanyType={likeCompanyType}
          sinceHeading={"Est Since"}
          total_studentsHeading={"Total number of members"}
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
        <CustomerReviews data={customerReviews} loading={loading} />
        <FeaturedCompaniesSection 
          data={featuredOrganizations}
          companyType={companyType}
        />
        <EnquireFormSection 
          enquireQuery={enquireQuery}
        />
      </Spin>
    </div>
  );
};

export default SportDetail;
