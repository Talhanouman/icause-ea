

import { notification, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { imageURL } from '../../../constants/constants';
import { Helmet } from "react-helmet";
import RecentlyUpdatedNewsPage from './RecentlyUpdatedNews';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
const validateEmail = ({ email }) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const NewsDetails = (props) => {
  const { history, match, subscribeLoading, loading, subscribe, loadingForRecentlyUpdatedBlogs, getRecentlyUpdatedNews, getPeopleNeededForHelp, getBlogDetails, numberOfPeople, recentlyUpdatedNews, newsDetailHash } = props;
  const {
    id,
    author_name,
    site_link,
    link_title,
    author_story,
    author_avatar,
    title,
    short,
    img,
    content,
    video,
    cover
  } = newsDetailHash && newsDetailHash.length ? newsDetailHash[0] : {};
  const [appUrl] = window.location.href.split('news-detail');
  // const appUrl = 'https://icause.com.au/';

  const { data } = recentlyUpdatedNews || {};

  const authorPhoto = author_avatar ? `${author_avatar}` : `${imageURL}team_2.png`;

  let formattedVideoUrl = video || 'https://www.youtube.com/embed/j7KKZ6v5o34';
  if (video) {
    const [firstUrlPart, secondUrlPart] = formattedVideoUrl.split('watch?v=');
    formattedVideoUrl = `${firstUrlPart}embed/${secondUrlPart}`;
  }

  let updatedTag = content?.replace("<figure class=\"media\">", "<figure>").replaceAll("oembed", "iframe");
  let finalContent = updatedTag?.replace("url", `width="100%" height="315" src=${formattedVideoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen`);

  const { params } = match || {};
  const blogId = params && params.id ? Number(params.id) : null;
  const [email, setEmail] = useState('');
  const isValidEmail = validateEmail({ email });

  useEffect(() => {
    if (blogId) {
      getPeopleNeededForHelp();
      getBlogDetails(blogId);
      // getBlogLinks({ blogId });
    } else {
      notification.error({
        message: 'GET NEWS DETAILS',
        description: 'NEWS ID is not valid'
      })
    }
    getRecentlyUpdatedNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Helmet>
        <title>News</title>
        <meta name="description" content={content} />
        <meta name="twitter:card" content={content} />
        <meta name="twitter:site" content={content} />
        <meta name="twitter:creator" content={content} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={content} />
        <meta name="twitter:image" content={cover} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={cover} />
      </Helmet>
      <section style={{ backgroundImage: "url(" + cover + ")" }} className="news-banner event blog-det-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-6 col-md-6 col-sm-12">
            </div>
          </div>
        </div>
      </section>

      <Spin spinning={loading}>

        <section className="blog-datil blog-det-2">
          <div className="container">
            <div className="row ">


              <div className="box-card col-8 col-md-8 col-sm-12 ml-md-3">
                {
                  title ?
                    <h1>{title}</h1> :
                    <h1>How to travel the world and get big companies to pay for it</h1>
                }
                {
                  short ?
                    <div dangerouslySetInnerHTML={{ __html: short || '' }}></div> :
                    <p>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p>
                }
              </div>

              <div dangerouslySetInnerHTML={{ __html: finalContent }} className="col-lg-8 col-md-8 col-sm-12 iCause-Partners" />




              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="need-our-one need-our-bg blog-sec-2-img">
                  <div>
                    <h4>{numberOfPeople} Peoples<span className="d-block  "> Need Ours Help</span></h4>
                    <button onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success  ml-0 ml-md-2  px-2">Start fundraising</button>
                  </div>
                </div>
                <div className="subscribe mt-5">
                  <h5>Subscribe for Our News Letter!</h5>
                  <p>By subscribing you agree to receive special news and related offers from iCasue.</p>
                  <input value={email} type="email" onChange={({ target }) => setEmail(target.value)} name="" className="form-control mt-4" placeholder="You@example.com" />
                  <Spin spinning={subscribeLoading}>
                    <button
                      onClick={() => {
                        subscribe({ email }).then(() => setEmail(''));
                      }}
                      type="button"
                      disabled={!isValidEmail}
                      className="btn btn-success"
                      style={{ marginTop: 5 }}>
                      subscribe
                    </button>
                  </Spin>
                </div>
                <h6 className="mt-5">Get Connect with us and help them...</h6>

                {
                  link_title && site_link &&
                  <ul className="iCause-Partners-2">
                    <li><a href={site_link} title="" className="text-dark">{link_title}<i className="fa fa-arrow-right ml-4"></i></a></li>
                  </ul>
                }


                <div className="card card-profile text-center p-4 mt-5">
                  <div className="img-wraper">
                    <img src={authorPhoto} className="img-fluid" alt="" />
                  </div>
                  <p>POSTED BY</p>
                  {
                    author_name ?
                      <h4>{`${author_name || ''}`}</h4> :
                      <h4>Mark Thomson</h4>
                  }
                  <p>{author_story}</p>
                  <div className="banner-content ">
                    <ul>
                      <li
                        // onClick={() => {
                        //   const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + `news-detail/${id}`;
                        //   window.open(pageUrl, '_blank');
                        // }}
                      >
                        <FacebookShareButton url={appUrl + `news-detail/${id}`} >
                        <i className="fa fa-facebook"></i>
                        </FacebookShareButton>
                      </li>
                      <li
                        onClick={() => {
                          const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + `news-detail/${id}`;
                          window.open(pageUrl, '_blank');
                        }}
                      >
                        <i className="fa fa-linkedin"></i>
                      </li>
                      <li onClick={() => {
                        const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + `news-detail/${id}`;
                        window.open(pageUrl, '_blank');
                      }}>
                        <i className="fa fa-twitter"></i>
                      </li>
                      {/* <i>
                        <FacebookShareButton url={'https://icause.com.au/news-detail/'} quote="my news" hashtag="news">
                        click
                        </FacebookShareButton>
                      </i> */}
                      {/* <li><a href="/homepage"><i className="fab fa-instagram" aria-hidden="true"></i>&nbsp;</a></li>
                      <li><a href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Spin>
      <RecentlyUpdatedNewsPage
        getBlogDetails={getBlogDetails}
        data={data}
        history={history}
        loading={loadingForRecentlyUpdatedBlogs}
      />
    </div>
  );
}

export default NewsDetails;
