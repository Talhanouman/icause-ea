
import React from 'react';
import WebsiteBenefits from '../../shared/WebsiteBenefits';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../../constants/constants';

const FaithDetail = () => {
	return (
		<div className="new-cate-wrap">
            <section className="banner gen-banner new-cate-banner">
                <div className="container-fluid p-0">
                <OwlCarousel className="owl-carousel owl-theme about-banner-slider news-banner-slider" loop={true} margin={0} dots={true} responsive={{ 0: { items: 1 } }} nav={true}>
                    <div className="item item-1" style={{ backgroundImage: `url(${imageURL}"faith-cat-banner.jpg")` }}>
                    <div className="container">
                        <div className="row  ">
                        <div className="col-lg-6 col-md-9 col-sm-12">
                        <div className="banner-text">
                            <h1>Faith</h1>
                            <p className="">We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below.</p>
                            <button style={{ float:'left' }} type="button" className="btn btn-outline-light ">Donate now</button>
                            <button style={{ float:'left' }} type="button" className="btn btn-success  ml-0 ml-md-2 btn_hover p-0">Start fundraising</button>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="item item-1" style={{ backgroundImage: `url(${imageURL}"faith-cat-banner.jpg")` }}>
                    <div className="container">
                        <div className="row  ">
                        <div className="col-lg-6 col-md-9 col-sm-12">
                        <div className="banner-text">
                            <h1>Faith</h1>
                            <p className="">We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below.</p>
                            <button style={{ float:'left' }} type="button" className="btn btn-outline-light ">Donate now</button>
                            <button style={{ float:'left' }} type="button" className="btn btn-success  ml-0 ml-md-2 btn_hover p-0">Start fundraising</button>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </OwlCarousel>
                </div>
            </section>

            <section className="pledge-of-the-day home-sec-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                    <div className="img">
                      <img style={{ height: '243px', width: '243px' }} src={`${imageURL}environment-pledge.png`} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12 pledge-text-col">
                    <h5>THE PLEDGE OF THE DAY</h5>
                    <h3 className="smbold">Julia Wants to Celebrate this Christmas...</h3>
                    <p className="">Mark Thomson is a multi-award winning freelance technology writer<br></br> with more than 20 years' experience writing in business and<br></br> consumer.</p>
                    <div className="progres w-50">
                      <div className="progress-inner">
                        <div className="progress-bar" role="progressbar" style={{ width: "70%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h4 className="left-text">$4567<span className="">raised</span></h4>
                      <h4 className="left-right">76%</h4>
                    </div>
                    <button type="button" className="btn btn-success mt-4">Donate now</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="donate-section iCause-Partners pt-4 detail-4-sec-4">
          <div className='container'>
            <div className='row d-flex align-items-center  '>
              <div className='col-lg-7 col-md-5 pl-md-5 custom-text-width'>
                <h3 className="main-heading mt-4 mb-4 mt-md-0">Every year <span className="green">iCause</span> caring <span className="green">1000+</span> cancer cases on basis of these numbers cases has increase...</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable.
                </p>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,</p>
              </div>
              <div className='col-lg-5 col-md-5 trending-causes'>
                <div className="card d-flex justify-content-end"> <img style={{}} src={`${imageURL}faith-3-img.png`} className="img-fluid" alt="" /> </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trending-causes school-list-sec-3 pt-0 pb-0 pt-4">
					<div className="container">
						<h2 className="main-heading text-center bg-title">Featured Campaign</h2>
								<OwlCarousel className="owl-carousel owl-theme campaignTrendingCards" margin={30} dots={true} responsive={{ 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 } }} nav={false}>
                      <div className="card trending-cause-card trending-cause-card-2">
												<div className="img">
													<img src={`${imageURL}faith-card-1.jpg`} className="img-fluid" alt="" />
													<a href="#!" style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
												</div>
												<div className="desc">
													<div className="text-card"> <span>Los angeles</span> <span>5 days left</span> </div>
													<a style={{ color: 'black' }} href="#!">
														<h1>Firefighter Jason Cortez Mem....</h1>
														<p>Lorem ipsum dolor sit amet, consectetur adipis cido Donec et sem laoreet, porta quam.</p>
														<div className="text-card m-0"> <span>Last donation</span> <span>2 hours ago</span> </div>
														<div className="progres">
															<div className="progress-inner">
																<div className="progress-bar" role="progressbar" style={{ width: `70%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
															<div className="treanding-cause-bottom">
																<h4 className="left-text-s"><span>Raised</span>$4000</h4>
																<h4 className="left-right-s">70%</h4>
															</div>
														</div>
													</a>
												</div>
											</div>
                      <div className="card trending-cause-card trending-cause-card-2">
												<div className="img">
                          <img src={`${imageURL}faith-card-2.jpg`} className="img-fluid" alt="" />
													<a href="#!" style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
												</div>
												<div className="desc">
													<div className="text-card"> <span>Los angeles</span> <span>5 days left</span> </div>
													<a style={{ color: 'black' }} href="#!">
														<h1>Firefighter Jason Cortez Mem....</h1>
														<p>Lorem ipsum dolor sit amet, consectetur adipis cido Donec et sem laoreet, porta quam.</p>
														<div className="text-card m-0"> <span>Last donation</span> <span>2 hours ago</span> </div>
														<div className="progres">
															<div className="progress-inner">
																<div className="progress-bar" role="progressbar" style={{ width: `70%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
															<div className="treanding-cause-bottom">
																<h4 className="left-text-s"><span>Raised</span>$4000</h4>
																<h4 className="left-right-s">70%</h4>
															</div>
														</div>
													</a>
												</div>
											</div>
                      <div className="card trending-cause-card trending-cause-card-2">
												<div className="img">
                          <img src={`${imageURL}faith-card-3.jpg`} className="img-fluid" alt="" />
													<a href="#!"  style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
												</div>
												<div className="desc">
													<div className="text-card"> <span>Los angeles</span> <span>5 days left</span> </div>
													<a style={{ color: 'black' }} href="#!">
														<h1>Firefighter Jason Cortez Mem....</h1>
														<p>Lorem ipsum dolor sit amet, consectetur adipis cido Donec et sem laoreet, porta quam.</p>
														<div className="text-card m-0"> <span>Last donation</span> <span>2 hours ago</span> </div>
														<div className="progres">
															<div className="progress-inner">
																<div className="progress-bar" role="progressbar" style={{ width: `70%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
															<div className="treanding-cause-bottom">
																<h4 className="left-text-s"><span>Raised</span>$4000</h4>
																<h4 className="left-right-s">70%</h4>
															</div>
														</div>
													</a>
												</div>
											</div>
								</OwlCarousel>
					</div>
				</section>  

            <WebsiteBenefits />
		</div>
    );
    }

export default FaithDetail;
