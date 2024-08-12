

import React, { useEffect } from 'react';
import moment from 'moment';
import { Spin, Pagination, Button } from 'antd';
import { debounce } from 'lodash';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../../constants/constants';
import FbShare from '../../shared/Fbshare';
import Linkedinshare from '../../shared/Linkedinshare';
import Twittershare from '../../shared/Twittershare';




const setSearchFilter = debounce((value, props) => {
  const { setPage, setSearchFilter, getNews } = props;
  setPage(1);
  setSearchFilter(value);
  getNews();
}, 300);


const News = (props) => {
  const { setPage, getBusinessNews, setViewMoreFlag, view_more, getNews, loading, pagination, news, businessNews } = props;
  const { data, total } = news || [];
  const worldNews = data && data.length ? data.filter(({ type }) => type === 'world') : [];
  const firstRowNews = worldNews && worldNews.length ? worldNews.filter((news, index) => index <= 1) : [];
  const remainingRowNews = worldNews && worldNews.length ? worldNews.filter((news, index) => index > 1) : [];
  useEffect(() => {
    getBusinessNews();
    getNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  const [appUrl] = window.location.href.split('news');

  return (
    <div className="news-pg-wrap">
      <section className="news-banner">
        <div className="container-fluid p-0">
          <OwlCarousel className="owl-carousel owl-theme news-banner-slider news-banner-slide1" loop={true} margin={0} dots={false} responsive={{ 0: { items: 1 } }} nav={true}>
            <div className="item item-1">
              <div className="container">
                <div className="banner-text">
                  <p className="tag">Latest News</p>
                  <p className="date">Published on: 23 Mar 2020</p>
                  <h1 className="title">Advanced event management and listing system.</h1>
                  <p className="text">The iCause event manager makes planning your event easier – manage registration, communications, merchandise and donations in one simple platform.</p>
                  <ul className="socials-list">
                      
                    {/* <li onClick={() => {
                      const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + `news`;
                      window.open(pageUrl, '_blank');
                    }}><i className="fa fa-twitter"></i>
                    </li> */}
                    <Twittershare/>
                    {/* <li onClick={() => {
                      const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + `news`;
                      window.open(pageUrl, '_blank');
                    }}><i className="fa fa-facebook"></i></li> */}
                    <FbShare/>

                    {/* <li><a href="/homepage"><i className="fab fa-instagram" aria-hidden="true"></i>&nbsp;</a></li>
                    <li><a href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li> */}
                    {/* <li onClick={() => {
                      const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + `news`;
                      window.open(pageUrl, '_blank');
                    }}><i className="fab fa-linkedin-in" aria-hidden="true"></i>&nbsp;</li> */}
                    <Linkedinshare/>
                    </ul>
                </div>
              </div>
            </div>
            <div className="item item-1">
              <div className="container">
                <div className="banner-text">
                  <p className="tag">Latest News</p>
                  <p className="date">Published on: 23 Mar 2020</p>
                  <h1 className="title">Advanced event management and listing system.</h1>
                  <p className="text">The iCause event manager makes planning your event easier – manage registration, communications, merchandise and donations in one simple platform.</p>
                  <ul className="socials-list">
                    <li><a href="/homepage" title=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/homepage" title=""><i className="fa fa-facebook"></i></a></li></ul>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="news-media news-sec-2">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-7 col-md-6 col-sm-12 m-auto">
              <div className="text-wrap">
                <h1 className="text-center">News & Media</h1>
                <p className="text-center">Do you have questions? Our FAQs contain advice for setting up accounts and campaigns, donating and our most common questions. Search the FAQs below.</p>
                <div className="search-box">
                  <input onChange={({ target }) => setSearchFilter(target.value, props)} type="search" className="form-control  " name="" placeholder="Enter News. Ex World, Business etc." />
                  <svg id="search_1_" className="search-icon" data-name="search (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="Group_6443" data-name="Group 6443" transform="translate(0)">
                      <path id="Path_36602" data-name="Path 36602" d="M.122,18.7l5.81-5.81A7.932,7.932,0,1,1,7.11,14.068L1.3,19.878a.417.417,0,0,1-.589,0l-.589-.589A.417.417,0,0,1,.122,18.7Zm11.961-4.533a6.25,6.25,0,1,0-6.25-6.25A6.257,6.257,0,0,0,12.083,14.167Z" transform="translate(0 0)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spin spinning={loading}>
        <section className="trending-causes second-trending news-sec-3">
          <div className="container">
            <div className="row justify-content-center">
              {
                firstRowNews && firstRowNews.length ?
                  firstRowNews.map(({ image, created_at, title, short, id, author_avatar, thumbnail }, index) => {
                    let newsCover = `${imageURL}news-card-2.jpg`;
                    const reducedShort = short ? (short.length >= 104 ? `${short.substring(0, 104)}...` : short) : 'N/A';
                    if (thumbnail) {
                      newsCover = `${thumbnail}`;
                    }
                    let avatar = `${imageURL}customer-icon-img.png`;
                    if (author_avatar) {
                      avatar = `${author_avatar}`;
                    }
                    return (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                        {index === 0 ? <h4 className="text-black">World News</h4> : <h4 className="text-white">World News</h4>}
                        <div className="card custom-news-card mt-lg-2 ml-lg-0">
                          <a href={`/news-detail/${id}`}>
                            <div className="img blog-imgs-12">
                              <img src={newsCover} className="img-fluid" alt="" loading="lazy"/>
                            </div>
                            <div className="text-card d-flex align-items-center justify-content-between">
                              <span><img src={avatar} className="img-fluid img-width" alt="" loading="lazy" /></span>
                              <span style={{ color: 'black' }} >Published on: {moment(created_at).format('LL')}</span>
                            </div>
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: reducedShort || '' }}></p>
                            <a href={`/news-detail/${id}`} className="read-more"><i className="fa fa-arrow-right"></i></a>

                          </a>
                        </div>
                      </div>
                    );
                  })
                  :
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <h4 className="text-black">World News</h4><br /><br />
                      <div className="result-status"><h4 >No Record Found</h4></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">

                    </div>

                  </>

              }
              <div style={{ height: '590px', overflowY: 'auto' }} className="col-lg-4 col-md-6 col-sm-12 side-news">
                <h4 className="font-weight-bold mb-0">Business News</h4>
                <div className="business-news-wrap mb-4">

                  {
                    businessNews && businessNews.length ?
                      businessNews.map(({ image, created_at, id, title, short, thumbnail }, index) => {
                        let newsCover = `${imageURL}our-mission-2.PNG`;
                        const reducedShort = short ? (short.length >= 104 ? `${short.substring(0, 104)}...` : short) : 'N/A';
                        if (thumbnail) {
                          newsCover = `${thumbnail}`;
                        }
                        return (
                          <div key={index} className="media business-media news-card-sm mt-2">
                            <div className="img">
                              <img src={newsCover} alt="" loading="lazy"/>
                            </div>

                            <a className="media-body" style={{ color: 'black' }} href={`/news-detail/${id}`}>
                              <div >
                                <h6 className="font-weight-bold">{title}</h6>
                                <p>{reducedShort}</p>
                                <small style={{ color: 'black' }} className="text-right d-block ml-auto my-1">PUBLISHED ON: {moment(created_at).format('LL')}</small>
                              </div>
                            </a>

                          </div>
                        );
                      })
                      : ''
                  }
                </div>

                <div style={{ marginTop: 10 }} className="text-center">
                  <Button className="loadmore-btn imp" onClick={() => {
                    setViewMoreFlag(!view_more);
                    getBusinessNews();
                  }} type='primary' size='small'>
                    {view_more ? 'VIEW LESS' : 'VIEW MORE'}
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="trending-causes second-trending news-sec-4">
          <div className="container">
            <div className="row justify-content-center">
              {
                remainingRowNews && remainingRowNews.length ?
                  remainingRowNews.map(({ image, id, created_at, title, short, author_avatar, thumbnail }, index) => {
                    let newsCover = `${imageURL}news-card-2.jpg`;
                    const reducedShort = short ? (short.length >= 104 ? `${short.substring(0, 104)}...` : short) : 'N/A';
                    if (thumbnail) {
                      newsCover = `${thumbnail}`;
                    }
                    let avatar = `${imageURL}customer-icon-img.png`;
                    if (author_avatar) {
                      avatar = `${author_avatar}`;
                    }
                    return (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card custom-news-card mt-lg-2 ml-lg-0">
                          <a href={`/news-detail/${id}`}>
                            <div className="img blog-imgs-12">
                              <img src={newsCover} className="img-fluid" alt="" />
                            </div>
                            <div className="text-card d-flex align-items-center justify-content-between">
                              <span><img src={avatar} className="img-fluid img-width" alt="" /></span>
                              <span style={{ color: 'black' }}>Published on: {moment(created_at).format('LL')}</span>
                            </div>
                            <h1>{title}</h1>
                            <p>{reducedShort}</p>
                            <a href={`/news-detail/${id}`} className="read-more"><i className="fa fa-arrow-right"></i></a>
                          </a>
                        </div>
                      </div>
                    );
                  }) : ''
              }
            </div>
          </div>
        </section>
      </Spin>

      {worldNews && worldNews.length &&
        <div style={{ textAlign: 'center', marginBottom: 50 }} className="container">
          <Pagination
            onChange={(page) => {
              setPage(page);
              getNews();
            }}
            size='small'
            current={pagination.pageNumber}
            defaultPageSize={pagination.pageSize}
            total={total}
            pageSizeOptions={[9]}
            showSizeChange={false}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          />
        </div>
      }

    </div>
  );
};

export default News;
