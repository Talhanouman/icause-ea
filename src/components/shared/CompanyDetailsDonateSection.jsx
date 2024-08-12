
import React, { useState } from 'react';
import moment from 'moment';

import ShareIndustryModal from '../shared/ShareIndustryModal';
import { imageURL } from '../../constants/constants';

const likeCompany = (props, id, isLiked, user, companyType) => {
  const { likeCompanyType, getCompanyDetails } = props;
  likeCompanyType(id, isLiked ? 'unlike' : 'like', companyType, user && user.id ? user.id : navigator.userAgent).then(() => {
    getCompanyDetails(id, user && user.id ? user.id : navigator.userAgent);
  });
};

const CompanyDetailsDonateSection = (props) => {
  const { data, user, companyType, shareCompany, getCompanyDetails, companyId } = props;
  const { company_name, progress, avatar, about_company, suppoters, isLiked, trustEndDate, likes, funded, follows } = data;
  let coverImage = `${imageURL}charity-donate-2-1.png`;
  if (avatar) {
    coverImage = `${avatar}`;
  }
  const daysGone = trustEndDate ? `${Math.abs(moment(trustEndDate).diff(moment(), 'days'))} days to go...` : '';
  const [isShareModalVisible, setShareModalVisibility] = useState(false);
  
  return (
    <section className="category-donate-sec-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="img-wrap">
              <img  src={coverImage} className="img-fluid school-donate-img" alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="category-donate-2-text">
              <div className="btn-wrap">
                <button 
                  type="button"
                  onClick={() => likeCompany(props, companyId, isLiked, user, companyType)}
                  className="btn btn-outline-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="18" viewBox="0 0 19.2 18">
                    <g id="like_3_" data-name="like (3)" transform="translate(0 -0.75)">
                      <path id="Path_2376" data-name="Path 2376" d="M1.4,20h2a1.4,1.4,0,0,0,1.4-1.4V9.4A1.4,1.4,0,0,0,3.4,8h-2A1.4,1.4,0,0,0,0,9.4v9.2A1.4,1.4,0,0,0,1.4,20Z" transform="translate(0 -1.45)" fill="#3cb64f" />
                      <path id="Path_2377" data-name="Path 2377" d="M11.725.75c-.8,0-1.2.4-1.2,2.4,0,1.9-1.841,3.43-3.025,4.218v9.91a18.647,18.647,0,0,0,7.825,1.471H16.6a3.2,3.2,0,0,0,3.152-2.656l.9-5.2A3.2,3.2,0,0,0,17.5,7.15H13.725a7.725,7.725,0,0,0,.6-3.2,2.938,2.938,0,0,0-2.6-3.2Z" transform="translate(-1.5)" fill="#3cb64f" />
                    </g>
                  </svg>
                  {isLiked ? 'Unlike' : 'Like'}
                </button>
                <button onClick={() => setShareModalVisibility(true)} type="button" className="btn btn-outline-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19.104" height="16.996" viewBox="0 0 19.104 16.996">
                    <path id="heart" d="M17.589,1.663A5.137,5.137,0,0,0,13.767,0a4.806,4.806,0,0,0-3,1.036A6.141,6.141,0,0,0,9.552,2.3,6.138,6.138,0,0,0,8.339,1.036,4.805,4.805,0,0,0,5.337,0,5.137,5.137,0,0,0,1.516,1.663,5.971,5.971,0,0,0,0,5.741,7.11,7.11,0,0,0,1.9,10.4a40.4,40.4,0,0,0,4.743,4.452c.657.56,1.4,1.195,2.176,1.871a1.121,1.121,0,0,0,1.477,0c.773-.676,1.519-1.312,2.176-1.872A40.38,40.38,0,0,0,17.209,10.4,7.11,7.11,0,0,0,19.1,5.741a5.971,5.971,0,0,0-1.515-4.078Zm0,0" transform="translate(0)" />
                  </svg>
                  Share
                </button>
              </div>
              <div className="reaction-counter">
                <div className="stat-box green">
                  <p>Likes</p>
                  <p>{likes}</p>
                </div>
                <div className="stat-box">
                  <p>Follows</p>
                  <p>{follows}</p>
                </div>
              </div>
              <div className="text-box">
                <p className="s-heading">{companyType.toUpperCase()} DONATE</p>
                <p className="heading">{company_name}</p>
                <p dangerouslySetInnerHTML={{ __html: about_company }} />
              </div>
              <div className="progres custom-progess w-75" style={{ marginTop: "80px" }}>
                <div className="progress-inner">
                  <div className="progress-bar" role="progressbar" style={{ width: `${progress || '0'}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 className="left-text">${funded || 0}<span>raised</span></h4>
                <h4 className="left-right">{progress || '0%'}</h4>
              </div>
              <hr className="mt-2" />
              <div className="d-flex justify-content-between">
                <p className="mb-0 day-text">{daysGone}</p>
                <p className="mb-0 day-text">{suppoters} supporters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShareIndustryModal 
        industryId={companyId}
        user={user}
        shareCompany={shareCompany}
        getIndustryDetails={getCompanyDetails}
        isShareModalVisible={isShareModalVisible}
        setShareModalVisibility={setShareModalVisibility}
      />
    </section>
  );
};

export default CompanyDetailsDonateSection;