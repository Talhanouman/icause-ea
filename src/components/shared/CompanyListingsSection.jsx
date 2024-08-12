

import React, { useState } from 'react';
import { Spin, Pagination } from 'antd';

import ShareIndustryModal from '../shared/ShareIndustryModal';
import { useHistory } from 'react-router';
import { imageURL } from '../../constants/constants';

const followCompany = (props, id, isFollowed, user, companyType, type, code) => {
  const { followCompanyType, getCompanyTypeListings } = props;
  followCompanyType(id, isFollowed ? 'unfollow' : 'follow', companyType, user && user.id ? user.id : navigator.userAgent).then(() => {
    getCompanyTypeListings(companyType, user && user.id ? user.id : navigator.userAgent);
  });
};

const CompanyListingsSection = (props) => {
  const { pagination, loading, data, user, companyType, shareCompany, setPage, getCompanyTypeListings , type, code} = props;
  const { data: companies, total } = data || {};
  const [isShareModalVisible, setShareModalVisibility] = useState(false);
  const [industryId, setIndustryId] = useState(-1);
  const history = useHistory();
  
  return (
    <div className='container'>
      <Spin spinning={loading}>
        <div className="mt-4 row">
          {
            companies && companies.length ?
              companies.map(({ company_name, isFollowed, address, cover_image, story, id }, index) => {
                let cover = `${imageURL}school-listing-9.jpg`;
                const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                if (cover_image) {
                  cover = `${cover_image}`;
                }
                return (
                  <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="school-listing-card">
                      <a href={`${companyType}-details/${id}`}>
                        <div className="img-box">
                          <img src={cover} className="img-fluid" alt="img" />
                        </div>
                        <div className="text">
                          <p className="state">{formattedAddress}</p>
                          <p className="name">{company_name}</p>
                          <p className="desc">{formattedStory}</p>
                        </div>
                      </a>
                      <div className="btn-wrap">
                        {/* <button onClick={() => history.push(`${companyType}-details/${id}`)} className="btn btn-outline-dark">Select</button> */}
                       
                        <div className=' justify-content-between' style={{display:'contents'}}>
                          {/* {user && user.id && */}
                            <button onClick={() => user && user.id ? followCompany(props, id, isFollowed, user, companyType) : history.push("/auth/login")} style={{ border: '0px solid', background: 'none' }}>
                              <svg fill={isFollowed ? 'red' : ''} style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="14.234" viewBox="0 0 16 14.234">
                                <path id="heart" d="M14.731,1.393A4.3,4.3,0,0,0,11.531,0,4.025,4.025,0,0,0,9.017.868,5.143,5.143,0,0,0,8,1.929,5.141,5.141,0,0,0,6.984.868,4.024,4.024,0,0,0,4.47,0a4.3,4.3,0,0,0-3.2,1.393A5,5,0,0,0,0,4.808a5.955,5.955,0,0,0,1.587,3.9A33.838,33.838,0,0,0,5.56,12.435c.55.469,1.174,1,1.822,1.567a.939.939,0,0,0,1.237,0c.648-.567,1.272-1.1,1.823-1.568a33.819,33.819,0,0,0,3.972-3.728A5.954,5.954,0,0,0,16,4.808a5,5,0,0,0-1.269-3.415Zm0,0" transform="translate(0)" />
                              </svg>

                              {isFollowed ? 'UnFollow' : 'Follow'}
                            </button>
                          {/* } */}

                          <span
                            onClick={() => {
                              setIndustryId(id);
                              setShareModalVisibility(true);
                            }} className="share-icon-svg">
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="19.98" viewBox="0 0 24 19.98">
                              <path id="arrow-2" data-name="arrow" d="M23.772,10.462l-8.5-8.25A.75.75,0,0,0,14,2.75V7A14.267,14.267,0,0,0,0,21.25a.739.739,0,0,0,.572.708.715.715,0,0,0,.177.022.788.788,0,0,0,.678-.4A12.754,12.754,0,0,1,12.582,15H14v4.25a.75.75,0,0,0,1.272.538l8.5-8.25a.749.749,0,0,0,0-1.076Z" transform="translate(0 -2)" />
                            </svg>

                            Share
                          </span>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) : <div className="result-status"><h4 className="text-center" >No Record Found</h4></div>
          }
          {
            companies && companies.length ?
              <div style={{ marginTop: 50 }} className="col-12 text-center">
                <Pagination
                  onChange={(page) => {
                    setPage(page);
                    type && code ? getCompanyTypeListings(type, code) :
                      getCompanyTypeListings(companyType, user && user.id ? user.id : navigator.userAgent);
                  }}
                  size='small'
                  current={pagination.pageNumber}
                  defaultPageSize={pagination.pageSize}
                  pageSizeOptions={[9]}
                  showSizeChange={false}
                  total={total}
                  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                />
              </div> : ''
          }
        </div>
      </Spin>
      <ShareIndustryModal
        parentPage='listing'
        industryId={industryId}
        companyType={companyType.toLowerCase()}
        user={user}
        shareCompany={shareCompany}
        isShareModalVisible={isShareModalVisible}
        setShareModalVisibility={setShareModalVisibility}
      />
    </div>
  );
}

export default CompanyListingsSection;
