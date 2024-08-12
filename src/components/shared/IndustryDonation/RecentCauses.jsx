

import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import { imageURL } from '../../../constants/constants';

const RecentCauses = (props) => {
  const { loading, data } = props;
  return (
    <div>
      <section className="trending-causes">
        <div className="container">
          <h2 className="main-heading text-center">Recent causes</h2>
          <Spin spinning={loading}>
            <div className="row justify-content-center">
              {
                data && data.map(({ id, story, cover_photo: coverPhoto, address, end_date, deadline, title, progress, amount }, index) => {
                  const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
                  const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                  const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                  const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
                  let cover = `${imageURL}become-partner-4-img-1.png`;
                  if (coverPhoto) {
                    cover = `${coverPhoto}`;
                  }

                  return <div key={index} className="col-lg-4 col-md-6 col-sm-12">
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
                            <div className="progress-bar" role="progressbar" style={{ width: `${progress || '0%'}` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <div className="treanding-cause-bottom">
                            <h4 className="left-text-s">${amount || 0}<span className="">raised</span></h4>
                            <h4 className="left-right-s">{progress || 0}</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                })
              }
            </div>
          </Spin>
        </div>
      </section>
    </div>
  );
}

export default RecentCauses;
