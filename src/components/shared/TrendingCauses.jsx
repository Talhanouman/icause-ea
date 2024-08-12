

import React from 'react';
import { Spin } from 'antd';
import { useHistory } from 'react-router';
import moment from 'moment';
import { imageURL } from '../../constants/constants';
import CampaignCard from '../CommonComponent/CampaignCard';

const TrendingCauses = (props) => {
  const { loading, data } = props;
  const limitedData = data && data.length ? data.filter((value, index) => index <= 2) : []
  
  return (
    <div>
      <section className="trending-causes">
        <div className="container-lg container">
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6'>
            <h2 className="main-heading"><span>Trending </span>causes</h2>
            </div>
            <div className='col-12 col-sm-12 col-md-6'></div>
          </div>
         
          <Spin spinning={loading}>
            <div className="row mx-0">
              {
                limitedData && limitedData.length ? limitedData.map(({ id, story, cover_photo: coverPhoto, address, deadline, end_date, title, progress, amount, funded }, index) => {
                  const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
                  const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                  const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                  const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
                  const cover = coverPhoto ? `${coverPhoto}` : `${imageURL}pledge-of-the-day.png`;
             
                  return <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 px-1 px-md-3">
                      <CampaignCard id={id} amount={amount} daysGone={daysGone} formattedAddress={formattedAddress} formattedStory={formattedStory} formattedTitle={formattedTitle} progress={progress} end_date={end_date} cover={cover}/>
                  </div>
                }) : ''
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

export default TrendingCauses;
