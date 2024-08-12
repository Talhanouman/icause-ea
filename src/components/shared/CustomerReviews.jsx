

import React from 'react';
import { Spin } from 'antd';

import moment from 'moment';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../constants/constants';

const CustomerReviews = (props) => {
  const { data, loading } = props;
  return (
    <section className="customr-review faq-sec-4">
      <div className="container">
        <h3 className="main-heading mt-4 mb-4 mt-md-0 text-center mb-3">Customer Reviews</h3>
        <Spin spinning={loading}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {
                data && data.length ?
                  <OwlCarousel className="owl-carousel owl-theme faq-comments-slider" loop={true} margin={10} dots={true} responsive={{ 0: { items: 1 }, 550: { items: 2 }, 860: { items: 3 } }} nav={false}>
                    {
                      data.map(({ avatar, rating, text, created_at, userName }, index) => {
                        const ratingValue = rating ? Number(rating) : 0;
                        const formattedText = text ? (text.length >= 140 ? `${text.substring(0, 140)}...` : text) : 'N/A';
                        let authorImage = `${imageURL}customer-icon-img.png`;
                        if (avatar) {
                          authorImage = `${avatar}`;
                        }
                        return (
                          <div key={index} className="card customer-card">
                            <div className="card-inner">
                              <div className="card-top d-flex justify-content-between align-items-center">
                                <div className="left-img d-flex align-items-center"> 
                                {authorImage &&
                                   <img src={authorImage} alt="" />
                                }
                               
                                  <ul>
                                    {
                                      [1, 2, 3, 4, 5].map((testValue) => {
                                        return (
                                          <li key={testValue} className={testValue <= ratingValue ? 'star-box active' : 'star-box'}>
                                            <i className="fa fa-star"></i>
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                </div>
                                <div className="right"> <span>{ratingValue}/5</span> </div>
                              </div>
                              <h6>{userName}<span  style={{ color: 'black' }} className="ml-3">Reviewed</span></h6>
                              <p>{formattedText}</p>
                              <p style={{ color: 'black' }} className="pub">Published: {created_at ? moment(created_at).format('LL') : ''}</p>
                            </div>
                          </div>
                        );
                      })
                    }
                  </OwlCarousel> : ''
              }
            </div>
          </div>
        </Spin>
      </div>
    </section>
  );
}

export default CustomerReviews;
