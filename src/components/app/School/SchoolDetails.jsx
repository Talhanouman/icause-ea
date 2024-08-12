

import React, { useEffect } from 'react';
import { notification, Spin } from "antd";
import VideoPlayer from '../../shared/VideoPlayer';
import CompanyDetailSection from '../../shared/CompanyDetailSection';
import CustomerReviews from '../../shared/CustomerReviews';
import EnquireFormSection from '../../shared/EnquireFormSection';
import FeaturedCompaniesSection from '../../shared/FeaturedCompaniesSection';
import { Helmet } from "react-helmet";

const SchoolDetails = (props) => {
  const { getFeaturedIndustries, getPeopleNeededForHelp, enquireQuery, getCustomerReviews, likeCompanyType, subscribe, followCompanyType, shareCompany, getSchool, match, history, user, schoolDetails } = props;
  const { params } = match || {};
  const schoolId = params && params.id ? Number(params.id) : null;
  const { featuredSchools, school, numberOfPeople, customerReviews, loading } = schoolDetails || {};
  const { video_url, cover_image, video_img, sinceHeading} = school || {};
  
  const companyType = 'School';
  useEffect(() => {
    if (schoolId) {
      getSchool(schoolId, user && user.id ? user.id : navigator.userAgent);
      getCustomerReviews();
      getFeaturedIndustries(companyType);
      getPeopleNeededForHelp();
    } else {
      notification.error({
        message: 'GET SCHOOL DETAILS',
        description: 'SchoolID is not valid'
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
        <title>School</title>
        <meta name="description" content={sinceHeading}/>
        <meta name="twitter:card" content={sinceHeading} />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="School" />
        <meta name="twitter:description" content={sinceHeading} />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="school" />
        <meta property="og:description" content={sinceHeading} />
        <meta property="og:image" content="url_to_image" />
      </Helmet>
    <div className="poppin-wrap">
      <Spin spinning={loading}>
        <section style={{backgroundImage: "url(" + cover_image + ")"}} className="school-details-banner gen-banner-2">
          <div className="container">
            <div className="banner-text">
              <h1 className="heading"> </h1>
              <p></p>
            </div>
          </div>
        </section>

        <CompanyDetailSection 
          data={school}
          numberOfPeople={numberOfPeople}
          companyType={companyType}
          subscribe={subscribe} 
          user={user}
          history={history}
          shareCompany={shareCompany}
          getIndustryDetails={getSchool}
          getCompanyTypeListings={getSchool}
          followCompanyType={followCompanyType}
          likeCompanyType={likeCompanyType}
          sinceHeading={"Est Since"}
          total_studentsHeading={"Total number of Students"}
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
          data={featuredSchools}
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

export default SchoolDetails;
