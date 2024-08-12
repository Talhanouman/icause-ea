

import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import { imageURL } from '../../../constants/constants';

const RecentlyUpdatedNews = (props) => {
  const { loading, data } = props;
  let limitedData = data && data.length ? data.filter((value, index) => index <= 2) : []
  const [appUrl] = window.location.href.split('news-detail');

  return (
    <div>
      <section className="trending-causes second-trending">
        <div className="container">
          <h2 className="main-heading  ">Recently Updated</h2>
          <Spin spinning={loading}>
            <div className="row justify-content-center">
              {
                limitedData && limitedData.length ?
                  limitedData.map(({ id, title, short: description, created_at: publishedOn, blog_photos: blogPhotos, author_avatar, thumbnail }, index) => {
                    let cover = `${imageURL}Trending-img-3.png`;
                    if (blogPhotos && blogPhotos.length) {
                      const [blogPhoto] = blogPhotos;
                      if (blogPhoto && blogPhoto.name) {
                        cover = `${blogPhoto.name}`;
                      }
                    }
                    let avatar = `${imageURL}team_2.png`;
                    if(author_avatar){
                      avatar = `${author_avatar}`;
                    }

                    if(thumbnail){
                      cover = thumbnail;
                    }

                    const formattedDescription = description ? (description.length >= 104 ? `${description.substring(0, 104)}...` : description) : 'N/A';
                    const formattedTitle = title ? (title.length >= 22 ? `${title.substring(0, 22)}...` : title) : 'N/A';
                    return (
                      <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card blog-imgs-12">
                          <a href={`/news-detail/${id}`}>
                            <img src={cover} className="img-fluid" alt="" />
                          </a>
                          <div className="text-card d-flex align-items-center justify-content-between">
                            <span>
                              <img src={avatar} className="img-fluid img-width" alt="" />
                            </span>
                            <span style={{ color: 'black' }}>Published on: {publishedOn ? moment(publishedOn).format('DD MMM YYYY') : 'N/A'}</span>
                          </div>
                          <h1 style={{ color: 'black' }}>{formattedTitle || 'N/A'}</h1>
                          <p style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: formattedDescription || '' }}></p>
                          <i style={{ color: 'black' }} className="fa fa-arrow-right"></i>
                          <div className="progres after-border">
                            <ul className="d-flex justify-content-center">
                              <li
                                onClick={() => {
                                  // https://www.linkedin.com/sharing/share-offsite/?url=https://icause-ff466.web.app/
                                  const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + `/news-detail/${id}`;
                                  window.open(pageUrl, '_blank');
                                }}>
                                <a href={`/news-detail/${id}`} title="">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li
                                onClick={() => {
                                  // https://www.facebook.com/sharer/sharer.php?u=https://www.fivevitals.com//events/132/j
                                  const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + `/news-detail/${id}`;
                                  window.open(pageUrl, '_blank');
                                }}>
                                <a href={`/news-detail/${id}`} title="">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li onClick={() => {
                                //http://www.twitter.com/share?url=http://www.google.com/
                                const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + `/news-detail/${id}`;
                                window.open(pageUrl, '_blank');
                              }}>
                                <a href={`/news-detail/${id}`} title="">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })

                  : ''
              }

            </div>
          </Spin>
        </div>
      </section>
    </div>
  );
}

export default RecentlyUpdatedNews;
