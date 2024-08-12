

import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';

const SearchedCampaignResult = (props) => {
  const { loading, data, searchQuery } = props;
  return (
    <div>
      <section className="trending-causes recent-causes-sec searched-cam-tes">
        <div className="container">
          <h2 className="main-heading text-center">Searched Result</h2> <h3 className="main-heading text-center" ><span>'{searchQuery}'</span></h3>
          <Spin spinning={loading}>
            <div className="row">
              { data && data.length ?
                data.map(({ id, story, cover_photo: coverPhoto, address, end_date, deadline, title, progress, amount }, index) => {
                  const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
                  const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                  const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                  const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
                  const cover = `${coverPhoto}`;

                  return <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 trending-column ">
                    <div className="card trending-cause-card">
                      <div className="img">
                        <img src={cover} className="img-fluid" alt="" />
                        <a href={`/donate-money/${id}`} style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
                      </div>
                      <div className="text-card"> <span>{formattedAddress}</span> <span>{daysGone}</span> </div>
                      <a style={{ color: 'black' }} href={`/campaign-details/${id}`}>
                        <h1>{formattedTitle}</h1>
                        <p>{formattedStory}</p>
                        <div className="text-card m-0"> <span>Last donation</span> <span>{end_date ? moment(end_date).fromNow() : ''}</span> </div>
                        <div className="progres">
                          <div className="progress-inner">
                            <div className="progress-bar" role="progressbar" style={{ width: `${progress || 0}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <div className="treanding-cause-bottom">
                            <h4 className="left-text-s">${amount || 0}<span className="">raised</span></h4>
                            <h4 className="left-right-s">{progress || 0}%</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                }) : <div className="result-status"><h4 className="text-center" >No Record Found</h4></div>
              }
            </div>
          </Spin>
        </div>
      </section>
    </div>
  );
}

export default SearchedCampaignResult;
