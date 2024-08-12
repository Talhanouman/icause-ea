import React from 'react';
import { Spin } from 'antd';
import moment from 'moment';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../constants/constants';
import CampaignCard from '../CommonComponent/CampaignCard';

const FeaturedCampaigns = (props) => {
  const { data, loading,text4 } = props;
  return (
    <div>
      <section className="trending-causes school-list-sec-3 pt-5">
        <div className="container">
          { data && data.length ? <h2 className="main-heading text-center bg-title">  Featured Campaigns </h2> : ''}
                 <h4>{text4}</h4>
            <Spin spinning={loading}>
            {
              data && data.length ?
                <OwlCarousel className="owl-carousel owl-theme campaignTrendingCards" margin={25} dots={false} responsive={{ 0: { items: 1 }, 525: { items: 2 }, 880: { items: 3 }, }} nav={true}>
                  {
                    data.map(({ deadline, address, story, title, progress, amount, cover_photo, end_date, id, photo1 }, index) => {
                      const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
                      const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
                      const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
                      const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
                      let cover = `${imageURL}Trending-img-3.png`;
                      if (photo1) {
                        cover = `${photo1}`;
                      }
                      return (
                        <CampaignCard id={id} amount={amount} daysGone={daysGone} formattedAddress={formattedAddress} formattedStory={formattedStory} formattedTitle={formattedTitle} progress={progress} end_date={end_date} cover={cover}/>
                      );
                    })
                  }
                </OwlCarousel> : ''
            }
          </Spin>
        </div>
      </section>
    </div>
  );
}

export default FeaturedCampaigns;
