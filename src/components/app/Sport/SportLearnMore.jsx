import React from "react";
import MetaTags from "react-meta-tags";
import VideoPlayer from "../../shared/VideoPlayer";
import { useHistory } from "react-router";
import { imageURLS3 } from "../../../constants/constants";

const SportLearnMore = (props) => {
  const { user } = props;
  const history = useHistory();

  return (
    <div className="poppin-wrap">
      <MetaTags>
        <meta
          name="description"
          content="Making your own Sport club page or campaign cannot get more simpler. Find out in few steps."
        />
      </MetaTags>
      <section className="banner learn-more-sport-banner gen-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-12">
              <div className="banner-text-box-learn-more">
                <h1 className="mb-3">
                icause for clubs
                  {/* Many Reasons to support your local Sports Club! */}
                  {" "}
                </h1>
                <p className="m-0">
                Support your members while they support you
                  {/* Create an online community for members where they can support
                  your club's online Fundraiser. Icause is the new and better
                  way to fundraise. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="security-guarante">
        <div className="container">
          <div className="card bg-white border-0 ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="p-3">
                  <h4 className="main-title">
                  Why choose icause?
                    {/* Peace of mind with our security guarantee */}
                  </h4>
                  <p>
                  Club members are part of a special community, that’s why icause is a great way to 
                  fundraise for clubs. With our online fundraisers, you give your members a unique 
                  choice to make significant savings while they donate. They can choose to donate
                   directly to your club’s fundraiser or choose to upload a utility bill to support.
                    By uploading a bill, 
                  they could make a saving on their utilities, while they support – it's a win-win!
                    {/* Your members can be assured that their donations are safe
                    and secure. Our privacy and security policy is our guarantee
                    that your data and private details are safe. We will never
                    share your details with a third party and our payment
                    systems use advanced online security technologies to ensure
                    your sensitive data is in safe hands. */}
                  </p>
                  <p
                    className="font-weight-bold mt-4"
                    style={{ color: "#3cb64f " }}
                  >
                    {" "}
                    Start fundraising for your club today!
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <VideoPlayer
                  videoId={"j7KKZ6v5o34"}
                  image="video+image.JPG"
                  basePath={`${imageURLS3}learn_more/sports/`}
                />
                {/* <div className="img-card">
								<img src="assets/images/school-sec-4-img-1.jpg"className="w-100"></img>
								<p className="zvideo-play"><span className="zvideoplay-icon"><span className="zplay-text">PLAY</span></span></p>
							</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-charity-fun">
        <div className="container">
          <h1 className="title text-md-center">
           Fundraising with a difference
            {/* Choose a charity creating your sport fundraiser */}
          </h1>
          <div className="row">
            <div className="col-12 col-md-9 mx-auto">
              <div className="row m-sm-0">
                <div className="das-line"></div>
                <div className="col-md-4 col-12 text-md-center mt-4">
                  <div className="choose-img">
                    <img
                      src={`${imageURLS3}learn-more-school/Choose-charity.png`}
                      alt=""
                    ></img>
                  </div>
                  <h4 className="sub-title">Easy set-up</h4>
                  <p>
                    In a few easy steps, your Sport fundraiser will be up and
                    running.
                  </p>
                </div>
                <div className="col-md-4 col-12 text-md-center mt-4">
                  <div className="choose-img">
                    <img
                      src={`${imageURLS3}learn-more-school/Choose-charity1.png`}
                      alt=""
                    ></img>
                  </div>
                  <h4 className="sub-title">Create a community</h4>
                  <p>Inspire your supporters to take action.</p>
                </div>
                <div className="col-md-4 col-12 text-md-center mt-4">
                  <div className="choose-img">
                    <img
                      src={`${imageURLS3}learn-more-school/Choose-charity2.png`}
                      alt=""
                    ></img>
                  </div>
                  <h4 className="sub-title">Stay in control</h4>
                  <p>Use your online portal to keep track of your campaign.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="leaan-services">
        <div className="container bg-white">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 pl-md-0">
              <img
                src={`${imageURLS3}learn_more/sports/small+images.JPG`}
                alt=""
                className="w-100 h-100"
              ></img>
            </div>
            <div className="col-12 col-md-8 col-lg-8 pl-md-4">
              <div className="row align-items-center text-md-left text-center">
                <div className="col-12 col-md-6 mt-5 ">
                  <img
                    src={`${imageURLS3}learn-more-school/leaan-services.png`}
                    alt=""
                  ></img>
                  <h4 className="sub-title">Switch and donate bills</h4>
                  <p>Icause allows you to donate money using your bill. </p>
                </div>
                <div className="col-12 col-md-6 mt-5 ">
                  <img
                    src={`${imageURLS3}learn-more-school/leaan-services1.png`}
                    alt=""
                  ></img>
                  <h4 className="sub-title">Complete marketing tool</h4>
                  <p>
                    Manage your campaigns easily and send invitations via SMS
                    and Email.
                  </p>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <img
                    src={`${imageURLS3}learn-more-school/leaan-services2.png`}
                    alt=""
                  ></img>
                  <h4 className="sub-title">More ways to pay</h4>
                  <p>
                    Icause provides secure payment methods with Master, Visa,
                    Amex, Google Pay, Apple Pay, PayPal, etc.{" "}
                  </p>
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <img
                    src={`${imageURLS3}learn-more-school/leaan-services4.png`}
                    alt=""
                  ></img>
                  <h4 className="sub-title">Available on iOS and android</h4>
                  <p>
                    You are in complete control. Simply launch and manage your
                    fundraiser on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="school-fundraising learn-school">
        <div className="">
          <div className="row mx-0 ">
            <div className="col-12 offset-lg-1  col-md-12 col-lg-5 px-lg-0 iCause-Partners">
              {/* <h3 className="mb-2 title mt-md-0"> Icause for clubs</h3>
              <p>Spread your club's message further with our online portal at Icause.</p>
              <h3 className="mb-2 title mt-md-0"> Make it easier for members to donate </h3>
              <p>Club members are part of a unique community; that's why Icause is a great way to fundraise for clubs. With our online fundraisers, you give your members a unique way to donate. They can choose to donate directly or choose to donate using their utility bill. Learn more  </p> */}

              <h3 className="mb-2 title mt-md-0">
                Why choose us for your club's Fundraiser?
              </h3>
              <p>
              In just a few easy steps you can create your account and start fundraising for your club. 
              Here are some great reasons to choose icause:
                {/* We think the following reasons are good enough for you to choose
                us as your club's Fundraiser: */}
              </p>
              <ul>
                <li>	We’ve created a unique way for members and supporters of your club to donate – either donate directly in a few simple clicks or use a utility bill to donate. </li>
               <li>Keep track of your goals - our online portal gives you complete control over your fundraising. </li>
               <li>Security guarantee - You and your club’s supporters can rest assured that any details shared with us are secure. You can read our privacy policy for more detailed information.</li>
               <li>It’s easy! The funds you raise will automatically be paid into your nominated bank account at the end of your campaign.</li>
               
                {/* <li>Fast and easy</li>
                <li>
                  It only takes a few minutes to create your account and start
                  Fundraising.{" "}
                </li>
                <li>Benefit your members</li>
                <li>Supporters can choose to upload a bill to support.</li>
                <li>Track your success</li>
                <li>Your dashboard is the key to meeting your goals.</li> */}
              </ul>
              <div className="special-box">
                <h4>
                  How to travel the world and get big companies to pay for it
                </h4>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously outside crud mightily
                  rigorous…
                </p>
              </div>
              <button type="button" className="btn btn-outline-dark mt-4 mb-2">
                START NOW
              </button>
            </div>
            <div className="col-12 col-md-12 col-lg-6 px-md-0">
              <div className="">
                <img
                  src={`${imageURLS3}learn_more/sports/shutterstock_567639820.JPG`}
                  alt=""
                  className="w-100"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3">
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6 my-5'>
              <div className="text-box iCause-Partners">
              <h3 className="main-heading mt-md-0"> Icause for clubs</h3>
              <p>Spread your club's message further with our online portal at Icause.</p>
              <h3 className="main-heading mt-md-0"> Make it easier for members to donate </h3>
              <p>Club members are part of a unique community; that's why Icause is a great way to fundraise for clubs. With our online fundraisers, you give your members a unique way to donate. They can choose to donate directly or choose to donate using their utility bill. Learn more  </p>

                <h3 className="main-heading    mt-md-0">Why choose us for your club's Fundraiser?</h3>
                <p>We think the following reasons are good enough for you to choose us as your club's Fundraiser:</p>
                <ul>
                <li>Fast and easy</li>
                <li>It only takes a few minutes to create your account and start Fundraising. </li>
                <li>Benefit your members</li>
                <li>Supporters can choose to upload a bill to support.</li>
                <li>Track your success</li>
                <li>Your dashboard is the key to meeting your goals.</li>
                </ul>
              </div>
            </div>

            <div className='col-lg-6 banner-bg d-none d-sm-block'>
              <div className="banner-content">
                <h5>How to travel the world and get big companies to pay for it </h5>
                <p className="">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p> <i className="fa fa-arrow-right mb-2"></i>
                <ul>
                  <li>
                    <a href="/homepage"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li><a href='/homepage' title=""><i><svg xmlns="http://www.w3.org/2000/svg" width="17.231" height="14" viewBox="0 0 17.231 14">
                    <g id="twitter" transform="translate(0 -48)">
                      <g id="Group_120" data-name="Group 120" transform="translate(0 48)">
                        <path id="Path_1415" data-name="Path 1415" d="M17.231,49.657a7.365,7.365,0,0,1-2.035.558,3.513,3.513,0,0,0,1.554-1.952,7.059,7.059,0,0,1-2.24.855A3.532,3.532,0,0,0,8.4,51.533a3.637,3.637,0,0,0,.082.806A10,10,0,0,1,1.2,48.644a3.533,3.533,0,0,0,1.086,4.721,3.489,3.489,0,0,1-1.6-.435v.039a3.549,3.549,0,0,0,2.83,3.471,3.526,3.526,0,0,1-.926.116,3.123,3.123,0,0,1-.669-.06,3.566,3.566,0,0,0,3.3,2.461,7.1,7.1,0,0,1-4.38,1.507A6.616,6.616,0,0,1,0,60.415,9.945,9.945,0,0,0,5.419,62,9.985,9.985,0,0,0,15.473,51.948c0-.156-.005-.307-.013-.457A7.047,7.047,0,0,0,17.231,49.657Z" transform="translate(0 -48)" />
                      </g>
                    </g>
                  </svg>
                  </i></a></li>
                  <li><a href='/homepage' title=""><i><svg xmlns="http://www.w3.org/2000/svg" width="7.717" height="14.861" viewBox="0 0 7.717 14.861">
                    <g id="facebook-app-symbol" transform="translate(-37.29)">
                      <path id="f_1_" d="M42.3,14.861V8.083h2.274l.341-2.642H42.3V3.753c0-.765.212-1.286,1.309-1.286h1.4V.1A18.957,18.957,0,0,0,42.969,0a3.183,3.183,0,0,0-3.4,3.492V5.44H37.29V8.083h2.281v6.778Z" fill="#010002" />
                    </g>
                  </svg>
                  </i></a></li>
                  <li>
                    <a href='/homepage'>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                  <li>
                    <a href='/homepage'>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 custom-banner-bg d-block d-sm-none'>
              <div className="row">
                <div className="col-12">
                  <img className="img-fluid" src="images/banner-2.png" alt="" />
                </div>
                <div className="col-12">

                  <div className="banner-content">
                    <h5>Make it easier for members to donate  </h5>
                    <p className="">Club members are part of a unique community; that's why Icause is a great way to fundraise for clubs. With our online fundraisers, you give your members a unique way to donate. They can choose to donate directly or choose to donate using their utility bill</p> <i className="fa fa-arrow-right mb-2"></i>
                    <ul>
                      <li>
                        <a href="/homepage"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li><a href='/homepage' title=""><i><svg xmlns="http://www.w3.org/2000/svg" width="17.231" height="14" viewBox="0 0 17.231 14">
                        <g id="twitter" transform="translate(0 -48)">
                          <g id="Group_120" data-name="Group 120" transform="translate(0 48)">
                            <path id="Path_1415" data-name="Path 1415" d="M17.231,49.657a7.365,7.365,0,0,1-2.035.558,3.513,3.513,0,0,0,1.554-1.952,7.059,7.059,0,0,1-2.24.855A3.532,3.532,0,0,0,8.4,51.533a3.637,3.637,0,0,0,.082.806A10,10,0,0,1,1.2,48.644a3.533,3.533,0,0,0,1.086,4.721,3.489,3.489,0,0,1-1.6-.435v.039a3.549,3.549,0,0,0,2.83,3.471,3.526,3.526,0,0,1-.926.116,3.123,3.123,0,0,1-.669-.06,3.566,3.566,0,0,0,3.3,2.461,7.1,7.1,0,0,1-4.38,1.507A6.616,6.616,0,0,1,0,60.415,9.945,9.945,0,0,0,5.419,62,9.985,9.985,0,0,0,15.473,51.948c0-.156-.005-.307-.013-.457A7.047,7.047,0,0,0,17.231,49.657Z" transform="translate(0 -48)" />
                          </g>
                        </g>
                      </svg>
                      </i></a></li>
                      <li><a href='/homepage' title=""><i><svg xmlns="http://www.w3.org/2000/svg" width="7.717" height="14.861" viewBox="0 0 7.717 14.861">
                        <g id="facebook-app-symbol" transform="translate(-37.29)">
                          <path id="f_1_" d="M42.3,14.861V8.083h2.274l.341-2.642H42.3V3.753c0-.765.212-1.286,1.309-1.286h1.4V.1A18.957,18.957,0,0,0,42.969,0a3.183,3.183,0,0,0-3.4,3.492V5.44H37.29V8.083h2.281v6.778Z" fill="#010002" />
                        </g>
                      </svg>
                      </i></a></li>
                      <li>
                        <a href='/homepage'>
                          <i className='fa fa-youtube'></i>
                        </a>
                      </li>
                      <li>
                        <a href='/homepage'>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-lg-6 col-md-6 mt-5'>
              <div className="text-box">

                <h3 className="main-heading    mt-md-0">Reach your fundraising goals faster and better</h3>
                <p>Our unique fundraising approach means you can reach your fundraising goals faster and better. Your partner dashboard allows you to keep track of your Campaign, send reminders or extend your campaign dates to keep the money rolling in. At the end of your Campaign, the funds will be transferred automatically into your nominated bank account. Easy!
                  
                </p>
                <button onClick={() => {
                  history.push('/auth/login');
                }} type="button" className="btn btn-outline-dark btn_hover">Join Us Now </button>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className="text-box">
                <h3 className="main-heading    mt-md-0">Peace of mind with our security guarantee</h3>
                <p className="">Your members can be assured that their donations are safe and secure. Our privacy and security policy is our guarantee that your data and private details are safe. We will never share your details with a third party and our payment systems use advanced online security technologies to ensure your sensitive data is in safe hands.</p>
                <a style={{color:'black'}} href="/starting_fund" className="">&nbsp; Start fundraising for your club today! </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 col-md-6'>
            <VideoPlayer videoId={'j7KKZ6v5o34'} />
          </div>
        </div>
      </div> */}

      <section className="the-wold-better gurantee-sec-6 bg-pnk  custom-dots">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
            <h1>
            What are you waiting for? 
                <span> We’re here to help you make a change.</span>
              </h1>
              {/* <h1>
                Together To Help The World Better!
                <span> Let's Make This Happen</span>
              </h1> */}
              <p>
              Let’s make this happen!
                {/* Please help us change lives around the world. */}
                </p>
              <button
                onClick={() => {
                  if (user && user.id) {
                    history.push("/homepage");
                  } else {
                    history.push("/auth/login");
                  }
                }}
                className="btn btn-success my-2 my-sm-0 text-uppercase"
                type="submit"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportLearnMore;
