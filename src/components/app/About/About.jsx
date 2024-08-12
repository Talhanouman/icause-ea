import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router';
import { imageURL } from '../../../constants/constants';

const About = (props) => {
  const history = useHistory()
  return (
    <div className="about-pg-wrap">
      <MetaTags>
            <meta name="description" content="iCause is the perfect place to raise funds online for a personal campaign, charity or organisational fundraisers. We’re passionate about helping you reach your fundraising goals." />
      </MetaTags>

      <section className="banner gen-banner header-banner">
        <div className="container-fluid p-0">
        <OwlCarousel className="owl-carousel owl-theme about-banner-slider news-banner-slider customer-size-mbl" loop={true} margin={0} dots={true} responsive={{ 0: { items: 1 } }} nav={true}>
            <div className="item item-1" style={{ backgroundImage: `url(${imageURL}"About-banner-3.jpg")` }}>
              <div className="container">
                <div className="row  ">
                  <div className="col-lg-9 col-md-9 col-sm-12">
                  <div className="banner-text banner-font-size-class">
                    <h1>
                    Every great change starts with a single action.
                      {/* Crowdfunding Platform Making a Difference! */}
                      </h1>
                    <p className="about-text">
                    Join thousands of people who are taking the first step and making a real difference.
                      {/* Learn more about icause! */}
                       </p>
                    {/* <p>We’ve created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate to a cause you care about.</p>
                    <p>We know that with the best of intentions, it’s not always possible to give as much as you’d like. That’s why we’ve created a unique way to donate. Not only can you donate directly to your chosen cause, but you can also choose to use your utility bill to donate – it’s easy to do and you might make a saving for yourself in the process. In addition, we wanted to give you more options of donating money, so we offer PayPal, Google Pay, Apple Pay and more. Find out how you can donate with your bill here.</p> */}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className='my-5 about-sec-2'>
        <div className='container'>
          <div className='row align-items-center  '>
            <div className='col-lg-6 col-md-12 col-sm-12 '>
              <h2 className="main-heading mt-4 mb-4 mt-md-0">
              Our Mission
                {/* Who We Are */}
                </h2>
               
                <p>We’re passionate about fundraising, that’s why we’ve developed a brand new, innovative way to raise money and donate to the causes that are important to you, both locally and globally. So, what makes use different? Well, we’re the only fundraising platform that gives you the choice to donate using your utility bills - supporting a cause has never been easier! </p>
            <p>Australia has shown over and over again that we’re a giving nation; from supporting a local club to inspiring global change, we know that it all starts with the first step. </p>
            <p>We’ve created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate to a cause you care about.</p>
            <p>We know that with the best of intentions, it’s not always possible to give as much as you’d like. That’s why we’ve created a unique way to donate. Not only can you donate directly to your chosen cause, but you can also choose to use your utility bill to donate – it’s easy to do and you might make a saving for yourself in the process.</p>
              {/* <p style={{ color: 'black' }} className="">Icause is a crowdfunding fundraising platform with a mission to help Locally & Internationally. Our headquarters is based in Melbourne, Australia. We believe our platform can help people & organizations in need. </p>
              <p style={{ color: 'black' }} className="">Australia has shown time and again that we're a giving nation; from supporting a local club to inspiring global change, we know that it all starts with the first step.  </p>
              <p style={{ color: 'black' }}>We have created iCause to give every Australian the chance to help. Through us, you can create a campaign, share your message, raise funds and donate.</p>
              <p style={{ color: 'black' }}> We know that it's not always possible to give as much as you'd like with the best of intentions. That's why we've created a unique way to donate. Not only can you donate directly to your chosen cause, but you can also choose to use your utility bill to donate – it's easy to do, and you might make saving for yourself in the process. Find out how you can donate with your bill here.</p> */}
              
           <div className="btn-cen-mbl">
            <button type="button" className="btn btn-outline-dark mt-3 mb-3">LEARN MORE</button>
           </div>
              
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 text-center'>
              <div className="">
                <img src={`${imageURL}About-our-mission.jpg`} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="honestly about-sec-3">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
              <div className="">
                <img src={`${imageURL}About-our-story.jpg`} className="img-fluid w-100" alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="honestly-content custom-text-width">
                <h3 className="main-heading mt-4 ">Honestly, icause saved <br></br> my brother’s  Life !</h3>
                <p className="font-roboto">by Mike Jackson</p>
                <p className="font-roboto">Australia has shown over and over again that we’re a giving nation; from supporting   a local club to inspiring global change, we know that it all starts with the first step. We’ve created iCause to give every Australian the chance to help.</p>
                <ul  >
                  <li ><span>164</span><br></br> Participants </li>
                  <li><span>29k</span><br></br>Money Collected</li>
                  <li><span>30k</span><br></br>Our Goal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='my-5 about-sec-5'>
        <div className='container'>
          <div className='row align-items-center  '>
            <div className='col-lg-6 col-md-12 col-sm-12 text-center order-md-1 order-sm-2'>
              <div className="about-story-img">
                <img src={`${imageURL}About-banner-2.jpg`} className="img-fluid" alt="" />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 custom-text-width order-md-2 order-sm-1 text-col mb-4 mt-0'>
              <h3 className="main-heading mt-4 mb-4 mt-md-0">Our Story</h3>
              <p className="font-roboto mb-3">Our journey started with a passion and a drive to make a difference! We started working on icause two years ago, with one question on our minds - is money the only way to fundraise? The answer to this problem was simple - No! The idea of using your utility bills to donate was born. icause has more options and many more reasons to help raise money than any other fundraising platform.</p>
              <p className="font-roboto mb-3">
              To learn more about how you can use your utility bills to donate to a cause you care about, click on the home page and read all about it! We also offer more ways to donate directly, through PayPal, Visa, Mastercard, Amex, Apple Pay and Gpay.
              </p>
              {/* <p className="font-roboto mb-3">Our journey is not any different from other Startups.  To Make a difference! 
              We started working on Icause two years ago. The question we had on our minds; Is money the only way to fundraise? The answer to this problem was simple- No!. The idea of Switch and Donate your bills was born. Icause has more options and many more reasons to help raise money for any fundraising type.
              </p>
              <p className="font-roboto">Learn more about Switch and Donate on the home page by click on donate your bills section. In conjunction with this, we support the other payment options: Paypal, Visa, Master, Amex, Apple Pay, Google Pay, etc.</p> */}


              <div className="btn-cen-mbl">
                <button type="button" className="btn btn-outline-dark mt-3">LEARN MORE</button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='my-5 about-sec-6'>
        <div className="wraper text-center So-Far">
          <div className='container'>
            <div className='row align-items-center  '>
              <div className='col-lg-7 col-md-6 col-sm-12 custom-text-width btn-mbl-size-fix mb-3'>
                <h3 className="main-heading mt-4 mb-4 mt-md-0">Who is it for?</h3>
                <p className="mx-auto">We’re for everyone! If you have a passion you want to fund or a cause you want to support, we’ll be with you every step of the way. Campaigns vary from personal goals for upcoming travel, nuptials or an out of reach purchase to organisational fundraising for schools, hospitals and businesses to meet their fundraising targets.</p>
                <ul className="mx-auto text-dark mb-3"  >
                  <li ><span>$ 1.3 million</span><br></br> Crowdfunding Market in 2013 </li>
                  <li><span>$17 Billion</span><br></br>Crowdfunding Market in 2020</li>
                  <li><span>34 millions</span><br></br>Crowdfunding Market by 2026</li>
                </ul>

                <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-outline-dark mt-2 ">Donate now</button>
                <button onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success  ml-2 mt-2  ">Start fundraising</button>

              </div>
              <div className='col-lg-5 col-md-6 col-sm-12 text-center'>
                <div className="img-wrap">
                  <img src={`${imageURL}About-who-is-it-for.jpg`} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sec-7">
				<div className="container">
					<div className="row">
						<div className="col-lg-11 mx-auto">
							<div className="img-wrap">
								<div>
									<img src={`${imageURL}contact-6-img-6.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-1.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-2.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-3.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-4.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-5.png`} className="img-fluid" alt="img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  );
}

export default About;
