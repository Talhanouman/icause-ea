

import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import { imageURL } from '../../../../constants/constants';

const RecentlyUpdatedBlogs = (props) => {
  const { loading, data } = props;
  let limitedData = data && data.length ? data.filter((value, index) => index <= 2) : []

  const [appUrl] = window.location.href.split('blog-details');
  return (
    <div>
      <section className="trending-causes second-trending blog-sec-2">
        <div className="container mt-5">
          <h2 className="sub-tittle ">Recently Updated</h2>
          <Spin spinning={loading}>
            <div className="row justify-content-center">
              {

                limitedData && limitedData.length ?
                  limitedData.map(({ id, title, short: description, created_at: publishedOn, posted_by: postedBy, thumbnail }, index) => {
                    let cover = `${imageURL}Trending-img-3.png`;
                    let avatar = `${imageURL}team_2.png`;
                    if (postedBy && postedBy.length) {
                      const [posted] = postedBy;
                      if (posted && posted.avatar) {
                        avatar = `${posted.avatar}`;
                      }
                    }
                    if (thumbnail) {
                      cover = thumbnail;
                    }

                    const formattedDescription = description ? (description.length >= 104 ? `${description.substring(0, 104)}...` : description) : 'N/A';
                    // const formattedTitle = title ? (title.length >= 22 ? `${title.substring(0, 22)}...` : title) : 'N/A';
                    const formattedTitle = title || 'N/A';

                    return (
                      <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card blog-imgs-12">
                          <a href={`/blog-details/${id}`}>
                            <img src={cover} className="img-fluid" alt="" style={{height:'350px'}} loading="lazy"/>
                          </a>
                          <div className="text-card d-flex align-items-center justify-content-between">
                            <span>
                              <img src={avatar} className="img-fluid img-width" alt="" loading="lazy"/>
                            </span>
                            <span style={{ color: 'black' }}>Published on: {publishedOn ? moment(publishedOn).format('DD MMM YYYY') : 'N/A'}</span>
                          </div>
                          <h1>{formattedTitle || 'N/A'}</h1>
                          <p dangerouslySetInnerHTML={{ __html: formattedDescription || '' }}></p>
                          <i style={{ color: 'black' }} className="fa fa-arrow-right"></i>
                          <div className="progres after-border">
                            <ul className="d-flex justify-content-center">
                              <li
                                onClick={() => {
                                  // https://www.linkedin.com/sharing/share-offsite/?url=https://icause-ff466.web.app/
                                  const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + `blog-details/${id}`;
                                  window.open(pageUrl, '_blank');
                                }}>
                                <a href={`/blog-details/${id}`} title="">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li
                                onClick={() => {
                                  // https://www.facebook.com/sharer/sharer.php?u=https://www.fivevitals.com//events/132/j
                                  const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + `blog-details/${id}`;
                                  window.open(pageUrl, '_blank');
                                }}>
                                <a href={`/blog-details/${id}`} title="">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li onClick={() => {
                                //http://www.twitter.com/share?url=http://www.google.com/
                                const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + `blog-details/${id}`;
                                window.open(pageUrl, '_blank');
                              }}>
                                <a href={`/blog-details/${id}`} title="">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              {/* <li><a href="/homepage"><i className="fab fa-instagram" aria-hidden="true"></i>&nbsp;</a></li>
                              <li><a href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li> */}
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

export default RecentlyUpdatedBlogs;
