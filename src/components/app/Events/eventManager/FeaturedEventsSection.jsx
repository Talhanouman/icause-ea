

import React from 'react';
import { Spin } from 'antd';
import moment from 'moment';
import { imageURLS3 } from '../../../../constants/constants';

const FeaturedEventsSection = (props) => {
  const { loading, data } = props;
  return (
    <div>
      <section className="trending-causes">
        <div className="container">
          <h2 className="main-heading mb-2 text-center">Featured Events</h2>
          <Spin spinning={loading}>
            <div className="row justify-content-center">
              {
                data && data.length ?
                  data.map(({ id, cover_photo: coverPhoto, title, story, address, deadline }, index) => {
                    let cover = `${imageURLS3}Trending-img-3.png`;
                    if (coverPhoto) {
                      cover = `${imageURLS3}${coverPhoto}`;
                    }
                    const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 22)}...` : title) : 'N/A';
                    const formattedStory = story ? (story.length >= 80 ? `${story.substring(0, 75)}...` : story) : 'N/A';
                    const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                    return (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <a href={`/event-details/${id}`}>
                          <div className="card featured-event-card">
                            <div className="img">
                              <img src={cover} className="img-fluid" alt="" />
                            </div>
                            <h1 style={{ color: 'black' }}>{formattedTitle}</h1>
                            <p className="description" style={{ color: 'black' }}>{formattedStory}</p>
                            <div className="progres  after-border  ">
                              <h4 style={{ marginBottom: '9px' }} className="left-text-s"><i style={{ color: 'black' }} className="fa fa-map-marker mr-2"></i>{formattedAddress}</h4>
                              <h4 style={{ marginBottom: '9px' }} className="left-right-s">{deadline ? moment(deadline).format('DD MMM YYYY') : 'N/A'}</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  }) :
                  ''
              }
            </div>
          </Spin>
        </div>
      </section>
    </div>
  );
};

export default FeaturedEventsSection;
