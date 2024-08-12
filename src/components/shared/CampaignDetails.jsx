

import React,{useState} from 'react';
import { Spin } from 'antd';
import moment from 'moment';
import ShareCampaignModal from '../shared/ShareCampaignModal';


const CampaignDetails = (props) => {
  const { data, loading } = props;
  const { id, title, story, amount, progress, deadline, cover_photo: coverPhoto, likeCount } = data || {};
  const cover = `${coverPhoto}`;
  const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days to go...` : 'N/A';
  const [isShareModalVisible, setShareModalVisibility] = useState(false);

  const handleShare=()=>{
    setShareModalVisibility(true)
  }

  const [isDescriptionExpanded, setDescriptionExpansion] = useState(false);
  const formattedShortStory = story ? ((story.length >= 500 && (!isDescriptionExpanded)) ? `${story.substring(0, 500)}...` : story) : 'N/A';

  return (<>
    <div> 
      <section className="pledge-of-the-day bg-white campaign-det-sec-1">
        <Spin spinning={loading}>
          {
            id ?
            <div className="container" style={{ position:'relative'}}>
              <div className="row align-items-start">
                <div className="col-lg-6 col-md-6 col-sm-12 h-100">
                  <div className="pledge-banner-img pledge-banner-img1">
                    <div className="image-donate"style={{ backgroundImage: `url(${cover})`}}></div>
                    {/* <img className="img-fluid w-100 mb-4 mb-md-0" src={cover} alt="" /> */}
                  </div>
                </div>
                <button className='btn btn-success share-compaign d-none d-md-block' onClick={handleShare} > <i class="fas fa-share mx-1" ></i> </button>
                <div className="col-lg-6 col-md-6 col-sm-12 donate-1-text-box">
                  <div className='text-right'>
                <button className='btn btn-success share-compaign-mob d-block d-md-none'> <i class="fas fa-share mx-1"></i> </button>
                </div>
                  {/* <h6 className="text-uppercase mb-1">Cause No {id || 'N/A'}</h6> */}
                  <h3 className="smbold mt-0">{title || 'N/A'}</h3>
                  {/* <p dangerouslySetInnerHTML={{ __html: story || 'N/A' }}></p> */}
                  <p dangerouslySetInnerHTML={{ __html: formattedShortStory || 'N/A' }}></p>
											{
												formattedShortStory && formattedShortStory.length && formattedShortStory.length >= 100 &&
												<div onClick={() => setDescriptionExpansion(!isDescriptionExpanded)}  className="readmore__title">
													{isDescriptionExpanded ? 'Read Less ' : 'Read More '}
													<i className={isDescriptionExpanded ? 'fa fa-arrow-circle-up' : 'fa fa-arrow-circle-down'}></i>
												</div>
											}
                  <div className="progres w-75">
                    <div className="progress-inner">
                      <div className="progress-bar" role="progressbar" style={{ width: `${progress || '0'}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="left-text">${amount || 0}<span className="text-success"> Goal</span></h4>
                    <h4 className="left-right">{progress || 0}%<span className="text-success">raised</span></h4>
                  </div>
                  <hr className="mt-3 mb-2"/>
                  <div className="flex justify-content-between">
                    <p className="float-left m-0">
                      {daysGone}
                     </p>
                    <p className="float-right m-0">
                      {likeCount || 0} supporters
                     </p>
                  </div>
                </div>
              </div>
            </div> : ''
          }
        </Spin>
      </section>
    </div>
    <ShareCampaignModal
					detail={false}
          id={id}
          name={title}
					isShareModalVisible={isShareModalVisible}
					setShareModalVisibility={setShareModalVisibility}
				/>
  </>);
}

export default CampaignDetails;
