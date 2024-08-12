import React from "react";
import MetaTags from "react-meta-tags";
import { useHistory } from "react-router";
import { imageURLS3 } from "../../../constants/constants";
import VideoPlayer from "../../shared/VideoPlayer";

const CommunityLearMore = (props) => {
  const { user } = props;
  const history = useHistory();

  return (
    <div className="poppin-wrap">
      <MetaTags>
        <meta
          name="description"
          content="Supporting your favourite charity has never been easier. Start an online fundraising campaign with Icause to meet your charity fundraising goals."
        />
      </MetaTags>
      <section className="banner learn-more-community-banner gen-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-12">
              <div className="banner-text-box-learn-more">
                <h1 className="mb-3">
                icause for communities
                  {/* Community Fundraising */}
                  </h1>
                <p>
                Help your local community blossom
                  {/* Learn More Ways To Fundraise for Your Favourite Community */}
                  </p>
                {/* <p className="m-0">Supporting your favourite charity has never been easier with Icause.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="security-guarante">
        <div className="container community-learn">
          <div className="card bg-white border-0 ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="p-3">
                  <h4 className="main-title">
                  Why choose icause?
                    {/* Our Charities */}
                    </h4>
                  <p>
                  We can help you to inspire, educate and motivate your supporters
                   by creating the spirit of your local community online through videos,
                    images and stories. You can send donation invitations via SMS or email,
                     or share your campaign 
                  on social media so your community will be more engaged than ever.
                    {/* We're passionate about Fundraising and proud to support
                    several charities across Australia. Check out some of the
                    charities we have on board. */}
                  </p>
                  <p
                    className=" font-weight-bold mt-4"
                    style={{ color: "#3cb64f" }}
                  >
                    Create your charity fundraiser with Icause's unique
                    fundraising platform.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <VideoPlayer
                  videoId={"j7KKZ6v5o34"}
                  basePath={`${imageURLS3}learn_more/community/`}
                  image={"shutterstock_626591267.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-charity-fun">
        <div className="container">
          <h1 className="title text-md-center">
          Fundraising with a difference
            {/* Choose a charity Creating your community fundraiser */}
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
                    In a few easy steps, your Community fundraiser will be up
                    and running.
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
                src={`${imageURLS3}learn_more/community/sitc+nd+donate.jpg`}
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
                    fundraiser on the go.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="school-fundraising leran-community">
        <div className="">
          <div className="row mx-0">
            <div className="col-12 offset-lg-1  col-md-12 col-lg-5 px-lg-0 iCause-Partners">
              <div className="pr-md-4">
                <h3 className="title mt-md-0">
                  Why choose Icause to support your Charity?
                </h3>
                <p>icause can help extend your community support to your online fundraiser. 
                  Here’s some great reason to choose icause:</p>
                <ul className="mb-4">
                  <li>
                  We’ve created a unique way for your community members to make a saving 
                  on their bills while they donate – either donate 
                  directly in a few simple clicks or use a utility bill to donate. 
                    {/* Bringing people of a community together for a good cause is
                    powerful and helps ignite social change. Here at Icause we
                    are dedicated to assisting communities in running a
                    campaign. We understand Fundraising is hard. That's why we
                    have Built a platform that offers a complete marketing tool-
                    Send bulk emails, SMS. Enjoy endless reach to your audience. */}
                  </li>
                  <li>
                    {" "}
                    	Keep track of your goals - our online portal gives you complete control over your fundraising. 
                    {/* ICause supports all communities, including Church groups,
                    Temple associations, mosques, Synagogues, people from
                    different cultures and beliefs.     */}
                     {" "}
                  </li>
                  <li>
                  	Security guarantee - You and your supporters can rest assured that any details shared with us are secure. You can read our privacy policy for more detailed information.
                    {/* Choose Fundraising For Your Community  */}
                    </li>
                    <li>
                    It’s easy! The funds you raise will automatically be paid into your nominated bank account at the end of your campaign.
                    </li>
                    
                </ul>
              </div>
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
                  src={`${imageURLS3}learn_more/community/shutterstock_1063060421.jpg`}
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

            <div className='col-lg-6  ' >
              <div className="text-box ">

                <h3 className="main-heading    mt-md-0">Why choose Icause to support your Charity?</h3>
                <ul>
                  <p>We've made it easier and better by giving you a complete fundraising platform that is easy to use and enables you to:</p>
                  <li>Inspire your friends and family through your crowdfunding page and use the Platform to reach them with your unique link.</li>
                  <li>A new way to donate – your supporters can donate directly or upload a bill to support. We are the only crowdfunding platform in the world that offers bill donations. Find out more here.</li>
                  <li>Fast payment of funds – your funds will be automatically paid to your chosen Charity at the close of your Campaign. </li>
                  <li>A personal online portal to share your story, reach your supporters and track your progress.</li>
                </ul>
                <br />
                <button
                  onClick={() => {
                    if (user && user.id) {
                      history.push('/homepage');
                    } else {
                      history.push('/auth/signup');
                    }
                  }}
                  type="button" className="btn btn-outline-dark mb-3 mt-0 mb-sm-0">START NOW</button>
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
              </div>
            </div>

          </div>
          <br />
          <div className="row">
            <div className="container mt-4">
              <div className="text-box cust-text-box">
                <h3 className="main-heading    mt-md-0">Choose a charity</h3>
                <p>We have created a totally new and better way to raise funds for a charity that’s close to your heart. You can choose from a wide range of charities from across Australia and the world??? In a few simple steps, you can set up a fundraiser and start making a difference:</p>
                <div className='col-12 col-lg-10 col-md-10 mx-auto'>
                  <div className="main-timeline mt-5">
                    <div className="timeline">
                      <a href="#!" className="timeline-content">
                        <h3 className="title">Step 1 </h3>
                        <h5>Easy set-up </h5>
                        <p>In a few easy steps, your charity fundraiser will be up and running. </p>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#!" className="timeline-content">
                        <h3 className="title"> Step 2 </h3>
                        <h5>Reach your supporters </h5>
                        <p >
                          Using a unique code, supporters can donate in a few easy clicks.
                        </p>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#!" className="timeline-content">
                        <h3 className="title">Step 3 </h3>
                        <h5>Track your Campaign </h5>
                        <p className="">
                          Your personal dashboard will show you how your campaign is tracking
                        </p>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#!" className="timeline-content">
                        <h3 className="title">Step 4 </h3>
                        <h5> Donation options</h5>
                        <p>Your supporters can donate directly or upload a bill to support.</p>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#!" className="timeline-content">
                        <h3 className="title">Step 5 </h3>
                        <h5>Fast payment</h5>
                        <p>At the end of your campaign (30-day time period) funds will be automatically transferred to your charity.</p>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#!" className="timeline-content">
                        <h3 className="title">Step 6 </h3>
                        <h5>Security guarantee</h5>
                        <p>Our payment and privacy guarantee gives you and your supporters peace of mind.</p>
                      </a>
                    </div>
                  </div>
                </div>



                             
                <p className="feature-head">Step 1</p>
                <p><li>Easy set-up</li> </p>
                <p>In a few easy steps, your charity fundraiser will be up and running. </p>
                <p className="feature-head">step 2 </p>
                <p><li>Using a unique code, supporters can donate in a few easy clicks.</li></p>
                <p className="feature-head">step 3 </p>
                <p><li>Your personal dashboard will show you how your campaign is tracking.</li></p>
                <p className="feature-head">Step 4 </p>
                <p><li>Donation options</li></p>
                <p>Your supporters can donate directly or upload a bill to support. </p>
                <p className="feature-head">Step 5</p>
                <p><li>Fast payment</li></p>
                <p>At the end of your campaign (30-day time period) funds will be automatically transferred to your charity.</p>
                <p className="feature-head">Step 6 </p>
                <p><li>Security guarantee</li></p>
                <p>Our payment and privacy guarantee gives you and your supporters peace of mind. </p> 

              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className="text-box">
                <h3 className="main-heading    mt-md-0">Our Charities</h3>
                <p className="">
                  We're passionate about Fundraising and proud to support several charities across Australia. Check out some of the charities we have on board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className='container'>
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
              <h1>H1 What are you waiting for? 
              {/* Together, we can make a difference to your community. */} <span>We’re here to help you make a change.</span>
              </h1>
              <p>
              Let’s make this happen!
                {/* Every Little Bit Counts. */}
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

export default CommunityLearMore;
