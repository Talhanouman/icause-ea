

import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import { useHistory } from 'react-router';
import { imageURL } from '../../../../constants/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogListingsSection = (props) => {
  const [appUrl] = window.location.href.split('/blogs');
  const history = useHistory()
  
  const { loading, data } = props;
  let firstBlogRow = data && data.length ? data.filter((value, index) => index <= 2) : []
  let secondBlogRow = data && data.length ? data.filter((value, index) => index > 2) : []

  return (
    <div>
      <Spin spinning={loading}>
        <section style={{ paddingBottom: '5px' }} className="trending-causes second-trending blog-sec-2">
          <div className="container mt-0 mt-md-5">
            <h2 className="sub-tittle mb-2">Recently Updated</h2>
            <div className="row justify-content-center">
              {
                firstBlogRow.map(({ id, title, short: description, created_at: publishedOn, posted_by: postedBy, thumbnail }, index) => {
                 

                  let avatar = `${imageURL}team_2.png`;
                    if (postedBy && postedBy.length) {
                      const [posted] = postedBy;
                      if (posted && posted.avatar) {
                        avatar = `${posted.avatar}`;
                      }
                    }

                  let cover = `${imageURL}Trending-img-1.png`;
                  if(thumbnail){
                    cover = thumbnail;
                  }
                  const formattedDescription = description ? (description.length >= 90 ? `${description.substring(0, 90)}...` : description) : 'N/A';
                  // const formattedTitle = title ? (title.length >= 22 ? `${title.substring(0, 22)}...` : title) : 'N/A';
                  const formattedTitle = title || 'N/A';

                  return (
                    <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                      <div className='blog-pg-card'>
                      <div style={{ cursor: 'pointer' }} onClick={() => history.push(`/blog-details/${id}`)} className="card">
                        {/* <LazyLoadImage
                        alt=""
                        src={cover} 
                        className="w-100"
                        width={350}
                        height={350}
                        /> */}
                        <img src={cover} className="w-100" alt=""
                         width={350}
                          height={350} loading="lazy"/>
                        <div className="text-card d-flex align-items-center justify-content-between">
                          <span><img src={avatar} className="img-fluid img-width" alt="" loading="lazy"/></span>
                          <span style={{ color: 'black' }}>Published on: {publishedOn ? moment(publishedOn).format('DD MMM YYYY') : 'N/A'}</span>
                        </div>
                        <h1 style={{ color: 'black' }}>{formattedTitle || 'N/A'}</h1>
                        <p style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: formattedDescription || '' }}></p> <i className="fa fa-arrow-right"></i>
                      </div>
                      <div className="progres after-border">
                        <ul className="d-flex justify-content-center">
                          <li
                            onClick={() => {
                              const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + '/blog-details/' + id + '/j';
                              window.open(pageUrl, '_blank');
                            }
                            }>
                            <a href='#!' title=""><i className="fa fa-facebook"></i></a>
                          </li>
                          <li
                            onClick={() => {
                              //http://www.twitter.com/share?url=http://www.google.com/
                              const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + '/blog-details/' + id;
                              window.open(pageUrl, '_blank');
                            }}>
                            <a href='#!' title=""><i className="fa fa-twitter"></i></a>
                          </li>
                          <li onClick={() => {
                            const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + '/blog-details/' + id;
                            window.open(pageUrl, '_blank');
                          }}>
                            <a href='#!' title=""><i className="fa fa-linkedin"></i></a>
                          </li>
                         
                        </ul>
                      </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </section>
        {
          (!loading) &&
          <section className="blog-video-banner-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-left bg-primary text-white blog-pg-middle-banner">
                  <div className="text-home px-4 py-4">
                  
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
        <section style={{ paddingTop: '10px' }} className="trending-causes second-trending">
          <div className="container">
            <div className="row justify-content-center">
              {
                secondBlogRow.map(({ id, title, text1: description, created_at: publishedOn, posted_by: postedBy, thumbnail }, index) => {
                  
                 let avatar = `${imageURL}team_2.png`;
                    if (postedBy && postedBy.length) {
                      const [posted] = postedBy;
                      if (posted && posted.avatar) {
                        avatar = `${posted.avatar}`;
                      }
                    }

                  let cover = `${imageURL}Trending-img-1.png`;
                  if(thumbnail){
                    cover = thumbnail;
                  }
                  const formattedDescription = description ? (description.length >= 90 ? `${description.substring(0, 90)}...` : description) : 'N/A';
                  const formattedTitle = title ? (title.length >= 22 ? `${title.substring(0, 22)}...` : title) : 'N/A';
                  return (
                    <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                      <div className='blog-pg-card'>
                      <div style={{ cursor: 'pointer' }} onClick={() => history.push(`/blog-details/${id}`)} className="card">
                        <img src={cover} className="w-100" alt="" loading="lazy"/>
                        <div className="text-card d-flex align-items-center justify-content-between">
                          <span><img src={avatar} className="img-fluid img-width" alt="" loading="lazy"/></span>
                          <span style={{ color: 'black' }}>Published on: {publishedOn ? moment(publishedOn).format('DD MMM YYYY') : 'N/A'}</span>
                        </div>
                        <h1 style={{ color: 'black' }}>{formattedTitle || 'N/A'}</h1>
                        <p style={{ color: 'black' }}>{formattedDescription}</p> <i className="fa fa-arrow-right"></i>
                      </div>
                      <div className="progres after-border">
                         <ul className="d-flex justify-content-center">
                          <li
                            onClick={() => {
                              const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + '/blog-details/' + id + '/j';
                              window.open(pageUrl, '_blank');
                            }
                            }>
                            <a href='#!' title=""><i className="fa fa-facebook"></i></a>
                          </li>
                          <li
                            onClick={() => {
                              //http://www.twitter.com/share?url=http://www.google.com/
                              const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + '/blog-details/' + id;
                              window.open(pageUrl, '_blank');
                            }}>
                            <a href='#!' title=""><i className="fa fa-twitter"></i></a>
                          </li>
                          <li onClick={() => {
                            const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + '/blog-details/' + id;
                            window.open(pageUrl, '_blank');
                          }}>
                            <a href='#!' title=""><i className="fa fa-linkedin"></i></a>
                          </li>
                          <li><a href="/homepage"><i className="fab fa-instagram" aria-hidden="true"></i>&nbsp;</a></li>
                          <li><a href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li>
                        </ul>
                        
                      </div>
                      </div>
                    </div>
                  );
                })
              }
              
            </div>
          </div>
        </section>
      </Spin>
    </div>
  );
}

export default BlogListingsSection;
