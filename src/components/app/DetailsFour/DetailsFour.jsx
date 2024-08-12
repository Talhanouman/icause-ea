

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../../constants/constants';

const DetailsFour = (props) => {
  const { history } = props;
	return (
		<div>
			<section className="banner choise-banner">
    <div className="container">
      <div className="row  ">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1>Fundraising ideas </h1>
          <p className="">We know you’re as passionate as us about making a difference! If you’re looking for inspiration for your next fundraising campaign, browse our fundraising ideas below.</p>
          <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-outline-light ">Donate now</button>
          <button onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success  ml-0 ml-md-2 btn_hover p-0">Start fundraising</button>
        </div>
      </div>
    </div>
  </section>
  <section className="trending-causes school-list-sec-3">
					<div className="container">
						<h2 className="main-heading text-center bg-title">Featured Campaign</h2>
								<OwlCarousel className="owl-carousel owl-theme campaignTrendingCards" margin={15} dots={true} responsive={{ 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 } }} nav={false}>
                      <div className="card trending-cause-card trending-cause-card-2">
												<div className="img">
													<img src={`${imageURL}Trending-img-1.png`} className="img-fluid" alt="" />
													<a href="#!" onClick={() => history.push('/auth/login')} style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
												</div>
												<div className="desc">
													<div className="text-card"> <span>Los angeles</span> <span>5 days left</span> </div>
													<a style={{ color: 'black' }} href="#!">
														<h1>The Ivy Academy of Early Learning</h1>
														<p>During the 1970s and 80s, my grandfather, Bill Bowman..</p>
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
                          <img src={`${imageURL}Trending-img-2.png`} className="img-fluid" alt="" />
													<a href="#!" onClick={() => history.push('/auth/login')} style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
												</div>
												<div className="desc">
													<div className="text-card"> <span>Los angeles</span> <span>5 days left</span> </div>
													<a style={{ color: 'black' }} href="#!">
														<h1>The Ivy Academy of Early Learning</h1>
														<p>During the 1970s and 80s, my grandfather, Bill Bowman..</p>
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
                          <img src={`${imageURL}Trending-img-3.png`} className="img-fluid" alt="" />
													<a href="#!" onClick={() => history.push('/auth/login')}  style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
												</div>
												<div className="desc">
													<div className="text-card"> <span>Los angeles</span> <span>5 days left</span> </div>
													<a style={{ color: 'black' }} href="#!">
														<h1>The Ivy Academy of Early Learning</h1>
														<p>During the 1970s and 80s, my grandfather, Bill Bowman..</p>
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
  <section className="past-year">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-10 col-sm-12 mx-auto text-center">
          <h3 className="main-heading mt-4 mb-4 mt-md-0">Our Mission</h3>
          <p>iCause is Australia's new way to raise money through online fundraisers and crowdfunding. Donate directly to your favourite cause or receive a free review of your bills and use the savings to donate. </p>
          <h5> Our Goals & Strategy </h5>
          <div className="price-wraper">
            <div className="left">
              <p> By the Year 2021</p>
              <h5 className="text-gren">$10 million</h5>
              <p>Crowdfunding Target </p>
            </div>
            <div className="right">
            <p> By the Year 2024</p>
              <h5 className="text-gren">$100 Million</h5>
              <p>Crowdfunding Target</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="donate-section iCause-Partners pt-4 detail-4-sec-4">
    <div className='container'>
      <div className='row d-flex align-items-center  '>
        <div className='col-lg-7 col-md-5 pl-md-5 custom-text-width'>
          <h3 className="main-heading mt-4 mb-4 mt-md-0">iCause Partners</h3>
          <p className="">The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”</p>
          <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using. </p>
          <ul>
            <li>something like “the best place to raise money online.</li>
            <li>There are many variations of passages.</li>
            <li>Content here, content here', making it look like.</li>
            <li>Contrary to popular belief.</li>
          </ul>
        </div>
        <div className='col-lg-4 col-md-5 trending-causes'>
          <div className="card"> <img src={`${imageURL}woman.PNG`} className="img-fluid" alt="" /> </div>
        </div>
      </div>
    </div>
  </section>
  <section className="Whatever-your-need text-center">
    <div className="col-xl-7 col-lg-7 mx-auto">
      <h3 className="main-heading mt-4 mb-4 mt-md-0">Whatever your need, you can get help on iCause</h3>
      <p>The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”</p>
      <ul>
        <li><a href='/homepage' title="">Breast Cancer</a></li>
        <li><a href='/homepage' title="">Cancer</a></li>
        <li><a href='/homepage' title="">IVF</a></li>
        <li><a href='/homepage' title="">Depression</a></li>
        <li><a href='/homepage' title="">Health Insurance</a></li>
        <li><a href='/homepage' title="">Surgery</a></li>
        <li><a href='/homepage' title="">Eye Surgery</a></li>
        <li><a href='/homepage' title="">Alzeimer</a></li>
        <li><a href='/homepage' title="">Leukemia</a></li>
        <li><a href='/homepage' title="">Lymphoma</a></li>
      </ul>
    </div>
  </section>
  <section className="donate-section bg-litgray pt-4">
    <div className='container text-center'>
      <div className='row d-flex align-items-center  '>
        <div className='col-lg-7 col-md-5   '>
          <h5 className=" mb-0  mt-md-0">iCause Fundraising Stories</h5>
          <h3 className="main-heading  mb-4 mt-md-0">Get Guardian for this kid</h3>
          <p className="">The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”</p>
          <button onClick={() => history.push('/donate-money')} type="button" className="btn btn-success  ">Donate now</button>
        </div>
        <div className='col-lg-4 col-md-5 trending-causes'>
          <div className="card"> <img src={`${imageURL}Trending-img-1.png`} className="img-fluid" alt="" /> </div>
        </div>
      </div>
    </div>
  </section>
  <section className="customr-review faq-sec-4">
        <div className="container">
          <h3 className="main-heading mt-4 mb-4 mt-md-0 text-center mb-3">Customer Reviews</h3>
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <OwlCarousel className="owl-carousel owl-theme faq-comments-slider" loop={true} margin={10} dots={true} responsive={{ 0: { items: 1 }, 530: { items: 2 }, 920: { items: 3 } }} nav={false}>
              <div className="card customer-card">
                <div className="card-inner">
                  <div className="card-top d-flex justify-content-between align-items-center">
                    <div className="left-img d-flex align-items-center"> <img src={`${imageURL}customer-icon-img.png`} alt="" />
                      <ul>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                        <li className="star-box un-active"><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="right"> <span>4.50/5.00</span> </div>
                  </div>
                  <h6>John Doe <span className="ml-3">Reviewed</span></h6>
                  <p>Mark Thomson is a multi-award winning freelance technology writer with more than 20 years' experience writing in business and consumer.</p>
                  <p className="pub">Published: 26.08.2020</p>
                </div>
              </div>
              <div className="card customer-card">
                <div className="card-inner">
                  <div className="card-top d-flex justify-content-between align-items-center">
                    <div className="left-img d-flex align-items-center"> <img src={`${imageURL}customer-icon-img.png`} alt="" />
                      <ul>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="right"> <span>4.50/5.00</span> </div>
                  </div>
                  <h6>John Doe <span className="ml-3">Reviewed</span></h6>
                  <p>Mark Thomson is a multi-award winning freelance technology writer with more than 20 years' experience writing in business and consumer.</p>
                  <p className="pub">Published: 26.08.2020</p>
                </div>
              </div>
              <div className="card customer-card">
                <div className="card-inner">
                  <div className="card-top d-flex justify-content-between align-items-center">
                    <div className="left-img d-flex align-items-center"> <img src={`${imageURL}customer-icon-img.png`} alt="" />
                      <ul>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="right"> <span>4.50/5.00</span> </div>
                  </div>
                  <h6>John Doe <span className="ml-3">Reviewed</span></h6>
                  <p>Mark Thomson is a multi-award winning freelance technology writer with more than 20 years' experience writing in business and consumer.</p>
                  <p className="pub">Published: 26.08.2020</p>
                </div>
              </div>
              <div className="card customer-card">
                <div className="card-inner">
                  <div className="card-top d-flex justify-content-between align-items-center">
                    <div className="left-img d-flex align-items-center"> <img src={`${imageURL}customer-icon-img.png`} alt="" />
                      <ul>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box active"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                        <li className="star-box"><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="right"> <span>4.50/5.00</span> </div>
                  </div>
                  <h6>John Doe <span className="ml-3">Reviewed</span></h6>
                  <p>Mark Thomson is a multi-award winning freelance technology writer with more than 20 years' experience writing in business and consumer.</p>
                  <p className="pub">Published: 26.08.2020</p>
                </div>
              </div>
          </OwlCarousel>
          </div>
          </div>
        </div>
      </section>
		</div>
	);
};

export default DetailsFour;
