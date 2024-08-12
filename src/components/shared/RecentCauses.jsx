

import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import CampaignCard from '../CommonComponent/CampaignCard';

const RecentCauses = (props) => {
  const { loading, data, history } = props;
  
  return (
    <div>
      <section className="trending-causes recent-causes-sec camp-height">
        <div className="container container-lg">
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6'>
            <h2 className="main-heading"><span>Recent</span> causes</h2>
            </div>
            <div className='col-12 col-sm-12 col-md-6'></div>
          </div>
          
          <Spin wrapperClassName={history.location.pathname === "/campaigns" ? "spinner_campaign" : ""} spinning={loading}>
            <div className="row ">
              {
                data && data.map(({ id, story, cover_photo: coverPhoto, address, end_date, deadline, title, progress, amount }, index) => {
                  const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
                  const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                  const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                  const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
                  const cover = `${coverPhoto}`;

                  return <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 px-1 px-md-3  trending-column ">
                      <CampaignCard id={id} amount={amount} daysGone={daysGone} formattedAddress={formattedAddress} formattedStory={formattedStory} formattedTitle={formattedTitle} progress={progress} end_date={end_date} cover={cover}/>
                    {/* <div className="card trending-cause-card">
                      <div className="img">
                        <img src={cover} className="img-fluid" alt="" />
                        <a href={`/donate-money/${id}`} style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
                      </div>
                      <div className='share-icon'>
                      <a style={{ color: 'black' }} href={`/campaign-details/${id}`}>
                        <h1 data-tip="Click to read the story">{formattedTitle}</h1>
                        <p data-tip="Click to read the story" style={{ color: 'black' }}>{formattedStory}</p>
                        <ReactTooltip />
                        </a>
                        <button className='btn btn-share'><i className='fa fa-share'></i></button>
                        </div>
                        <a style={{ color: 'black' }} href={`/campaign-details/${id}`}>
                        <div className="text-card m-0"> <span>Last donation</span> <span>{end_date ? moment(end_date).fromNow() : ''}</span> </div>
                        <div className="progres">
                        <div className="treanding-cause-bottom">
                            <h4 className="left-text-s">${amount || 0}<span style={{ color: 'black' }} className="">raised</span></h4>
                            <h4 className="left-right-s">{progress || 0}%</h4>
                          </div>
                          <div className="progress-inner">
                            <div className="progress-bar" role="progressbar" style={{ width: `${progress || 0}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          
                        </div>
                      </a>
                    </div> */}
                  </div>
                })
              }
            </div>
          </Spin>
          <div className='row justify-content-center'>
            <button className='btn btn-outline-dark'>View All</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecentCauses;
