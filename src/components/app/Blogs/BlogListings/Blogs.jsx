
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss';
import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import BlogSection from './BlogListingsSection';
import VideoPlayer from '../../../shared/VideoPlayer';
import { imageURL } from '../../../../constants/constants';
import LazyLoad from 'react-lazyload';

const Blogs = (props) => {
  const { history, numberOfPeople, featuredArticle, resetPagination, getPeopleNeededForHelp, setPage, getFeaturedArticles, getBlogs, blogs, loading, pagination } = props;
  const { data, total } = blogs;

  const { video: video_url } = featuredArticle || {};

  useEffect(() => {
    getFeaturedArticles();
    getBlogs();
    getPeopleNeededForHelp();
    return () => resetPagination();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 
  let videoId = "j7KKZ6v5o34";
  let formattedVideoUrl = video_url || 'https://www.youtube.com/embed/j7KKZ6v5o34';
  if (video_url) {
    const [firstUrlPart, secondUrlPart] = formattedVideoUrl.split('watch?v=');
    formattedVideoUrl = `${firstUrlPart}embed/${secondUrlPart}`;
    videoId = secondUrlPart;
  }
  const [appUrl] = window.location.href.split('blogs');

  return (
    <div className="blog-page-wrap">
      <section className="banner-bg1 contact-banner banner-second blog-banner header-banner">
        <div className="container-fluid  ">
          <div className="row d-flex align-items-center ">
            <div className="col-xl-12 col-lg-9 col-md-9 bg-img-col"> 
            <LazyLoad >
            <img src={`${imageURL}blog-banner.jpg`} className="img-fluid" alt="" loading="lazy"/> 
            </LazyLoad>
            </div>
          </div>
        </div>
        <div className="blog-contant banner-content contact-banner-text box-1">
          <h1>How to travel the world and get big companies to pay for it </h1>
          <p className="">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p> <a href="#!" className="text-dark"> <i className="fa fa-arrow-right mb-2"></i></a>
          <ul>
            {/* <li>
              <a href="/homepage"><i className="fab fa-instagram"></i></a>
            </li> */}
            <li style={{cursor:'pointer'}} onClick={() => {
              const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + `blogs`;
              window.open(pageUrl, '_blank');
            }}><i><svg xmlns="http://www.w3.org/2000/svg" width="17.231" height="14" viewBox="0 0 17.231 14">
              <g id="twitter" transform="translate(0 -48)">
                <g id="Group_120" data-name="Group 120" transform="translate(0 48)">
                  <path id="Path_1415" data-name="Path 1415" d="M17.231,49.657a7.365,7.365,0,0,1-2.035.558,3.513,3.513,0,0,0,1.554-1.952,7.059,7.059,0,0,1-2.24.855A3.532,3.532,0,0,0,8.4,51.533a3.637,3.637,0,0,0,.082.806A10,10,0,0,1,1.2,48.644a3.533,3.533,0,0,0,1.086,4.721,3.489,3.489,0,0,1-1.6-.435v.039a3.549,3.549,0,0,0,2.83,3.471,3.526,3.526,0,0,1-.926.116,3.123,3.123,0,0,1-.669-.06,3.566,3.566,0,0,0,3.3,2.461,7.1,7.1,0,0,1-4.38,1.507A6.616,6.616,0,0,1,0,60.415,9.945,9.945,0,0,0,5.419,62,9.985,9.985,0,0,0,15.473,51.948c0-.156-.005-.307-.013-.457A7.047,7.047,0,0,0,17.231,49.657Z" transform="translate(0 -48)" />
                </g>
              </g>
            </svg>
              </i></li>
            <li style={{cursor:'pointer'}} onClick={() => {
              const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + `news`;
              window.open(pageUrl, '_blank');
            }}><i><svg xmlns="http://www.w3.org/2000/svg" width="7.717" height="14.861" viewBox="0 0 7.717 14.861">
              <g id="facebook-app-symbol" transform="translate(-37.29)">
                <path id="f_1_" d="M42.3,14.861V8.083h2.274l.341-2.642H42.3V3.753c0-.765.212-1.286,1.309-1.286h1.4V.1A18.957,18.957,0,0,0,42.969,0a3.183,3.183,0,0,0-3.4,3.492V5.44H37.29V8.083h2.281v6.778Z" fill="#010002" />
              </g>
            </svg>
              </i></li>
            {/* <li><a href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li> */}
            <li style={{cursor:'pointer'}} onClick={() => {
              const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + `news`;
              window.open(pageUrl, '_blank');
            }}><i className="fab fa-linkedin-in" aria-hidden="true"></i>&nbsp;</li>
          </ul>
        </div>
      </section>
      <section className="featured-articles mt-5 blog-sec-2">
        <div className="container">
          <h4 className="sub-tittle">Featured Blogs</h4>
          <div className="row align-items-center">
            <div className='featurp-blogs-img col-lg-7 col-md-6'>
              <VideoPlayer videoId={videoId} image={'recently-blog-image-7.jpg'} />
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12  text-center ">
              <div className='bolg-catogry ml-lg-5'>
              <div className=' mb-3'>
              <h5 className='d-md-none d-block'>Crowdfunding tips</h5>
                <img src="https://www.gofundme.com/c/wp-content/uploads/2022/02/sidebar-1-aspect-ratio-265-180.png"></img>
                <h5 className='d-md-block d-none'>Crowdfunding tips</h5>
                </div>
                <div className=''>
                <h5  className='d-md-none d-block'>Write a Guest Blog</h5>
                <img src="https://www.gofundme.com/c/wp-content/uploads/2022/02/sidebar-1-aspect-ratio-265-180.png"></img>
                <h5 className='d-md-block d-none'>Write a Guest Blog</h5>
                </div>
                </div>
              {/* <div className="need-our need-our-bg blog-sec-2-img">
                <div>
                  <h4>{numberOfPeople} Peoples<span className="d-block  "> Need Ours Help</span></h4>
                  <button onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success  ml-2  ">Donate Now</button>
                </div>
              </div> */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 featured-articles-img">

            </div>
          </div>
        </div>
      </section>
      <br />
      <BlogSection
        history={history}
        data={data}
        loading={loading}
      />
      <section className="" style={{ marginBottom: '20px', marginTop: '20px' }}>
        <div className="container">

          <div style={{ float: 'right' }} className="row">
            <Pagination
              onChange={(page) => {
                setPage(page);
                getBlogs();
              }}
              size='small'
              current={pagination.pageNumber}
              defaultPageSize={pagination.pageSize}
              total={total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
