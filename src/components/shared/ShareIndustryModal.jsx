import React from 'react';
import { Modal } from 'antd';

const ShareIndustryModal = (props) => {
  const {
    isShareModalVisible,
    setShareModalVisibility,
    getIndustryDetails,
    shareCompany,
    industryId,
    user,
    parentPage,
    companyType
  } = props;
  return (
    <div>
      <Modal
        title='Share Industry'
        footer={null}
        maskClosable={false}
        visible={isShareModalVisible}
        onOk={() => setShareModalVisibility(false)}
        onCancel={() => setShareModalVisibility(false)}>
        <div className="modal-body text-center">
          <h5>Do you like this? Share with your friends!</h5>
          <div className="mt-5">
            <div>
              <ul className="share_links">
                <li
                  onClick={() => {
                    // https://www.facebook.com/sharer/sharer.php?u=https://www.fivevitals.com//events/132/j
                    let pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + '/j';
                    if (parentPage === 'listing') {
                      pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href.split(`${companyType}-listing`)[0] + `${companyType}-details/${industryId}`;
                      // pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href.split('listing')[0];
                    }
                    window.open(pageUrl, '_blank');
                    shareCompany(user && user.id ? user.id : navigator.userAgent, industryId, 'facebook').then(() => {
                      if (parentPage !== 'listing') {
                        getIndustryDetails(industryId);
                      }
                    })
                  }
                  }
                  className="bg_fb">
                  <a href="#!" className="share_icon" rel="tooltip" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li
                  onClick={() => {
                    //http://www.twitter.com/share?url=http://www.google.com/
                    let pageUrl = 'http://www.twitter.com/share?url=' + window.location.href + '/j';
                    if (parentPage === 'listing') {
                      pageUrl = 'http://www.twitter.com/share?url=' + window.location.href.split(`${companyType}-listing`)[0] + `${companyType}-details/${industryId}`;
                      // pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href.split('listing')[0];
                    }
                    window.open(pageUrl, '_blank');
                    shareCompany(user && user.id ? user.id : navigator.userAgent, industryId, 'twitter').then(() => {
                      if (parentPage !== 'listing') {
                        getIndustryDetails(industryId);
                      }
                    });
                  }}
                  className="bg_twitter">
                  <a href="#!" className="share_icon" rel="tooltip" title="Twitter">
                    <i className=" fa fa-twitter"></i>
                  </a>
                </li>

                <li
                  onClick={() => {
                    // https://www.linkedin.com/sharing/share-offsite/?url=https://icause-ff466.web.app/
                    let pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href + '/j';
                    if (parentPage === 'listing') {
                      pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href.split(`${companyType}-listing`)[0] + `${companyType}-details/${industryId}`;
                      // pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href.split('listing')[0];
                    }
                    window.open(pageUrl, '_blank');
                    shareCompany(user && user.id ? user.id : navigator.userAgent, industryId, 'twitter').then(() => {
                      if (parentPage !== 'listing') {
                        getIndustryDetails(industryId);
                      }
                    });
                  }}
                  className="bg_linkedin">
                  <a href="#!" className="share_icon" rel="tooltip" title="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                {/* <li><a className="share_icon" href="/homepage"><i className="fab fa-instagram" aria-hidden="true"></i>&nbsp;</a></li>
                <li><a className="share_icon" href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShareIndustryModal;
