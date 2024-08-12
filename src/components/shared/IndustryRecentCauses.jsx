

import React from 'react';
import moment from 'moment';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../constants/constants';

const IndustryRecentCauses = (props) => {
  const { data, history } = props;
  return (
    <div>
      <section className="trending-causes bg-gray campaignSec2 school-sec-5">
        <div className="container">
          <h3 className="main-heading text-center sm-title">Let's help them achieve happiness by supporting Trending Community Causes!</h3>
          <p style={{ color: 'black' }} className="text-center-n">The following communities have all got together to unite for a good cause!</p>
          {
            data && data.length ?
              <OwlCarousel className="owl-carousel owl-theme campaignTrendingCards" margin={15} dots={true} responsive={{ 0: { items: 1 }, 525: { items: 2 }, 820: { items: 3 } }} nav={false}>
                {
                  data && data.map(({ id, story, cover_photo: coverPhoto, address, campaign_id, end_date, deadline, title, progress, amount }, index) => {
                    const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
                    const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                    const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                    const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
                    let cover = `${imageURL}school-recent-3.jpg`;
                    if (coverPhoto) {
                      cover = `${coverPhoto}`;
                    }

                    return <div key={index} className="card trending-cause-card">
                      <div className="img">
                        <img src={cover} className="img-fluid" alt="" />
                        <a href={`/donate-money/${id}`} style={{ textAlign: 'center', paddingTop: 14 }} onClick={() => history.push({ pathname: `/donate-money/${id}`, state: {
                          type: 'company'
                        }})} className="donate-btn">DONATE NOW</a>
                      </div>
                      <div className="desc">
                        <div className="text-card"> <span style={{ color: 'black' }}>{formattedAddress}</span> <span style={{ color: 'black' }}>{daysGone}</span> </div>
                        <a style={{ color: 'black' }} href={`/campaign-details/${id}`}>
                          <h1 style={{ color: 'black' }}>{formattedTitle}</h1>
                          <p style={{ color: 'black' }}>{formattedStory}</p>
                          <div style={{ color: 'black' }} className="text-card m-0"> <span style={{ color: 'black' }}>Last donation</span> <span>{end_date ? moment(end_date).fromNow() : ''}</span> </div>
                          <div className="progres">
                            <div className="progress-inner">
                              <div className="progress-bar" role="progressbar" style={{ width: `${progress || 0}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="treanding-cause-bottom">
                              <h4 className="left-text-s">${amount ? amount : 0}<span style={{ color: 'black' }} className="">raised</span></h4>
                              <h4 className="left-right-s">{progress ? progress :  0}%</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  })
                }
              </OwlCarousel> : ''
          }
        </div>
      </section>
    </div>
  );
};

export default IndustryRecentCauses;
