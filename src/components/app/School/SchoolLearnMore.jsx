import React from "react";
import MetaTags from "react-meta-tags";
import VideoPlayer from "../../shared/VideoPlayer";
import { useHistory } from "react-router";
import { imageURLS3 } from "../../../constants/constants";

const SchoolLearnMore = (props) => {
  const { user } = props;
  const history = useHistory();

  return (
    <div className="poppin-wrap">
      <MetaTags>
        <meta
          name="description"
          content="If you’re planning a school fundraising, Icause is the perfect platform to engage your school community and meet your fundraising goals."
        />
      </MetaTags>
      <section className="banner learn-more-school-banner gen-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-12">
              <div className="banner-text-box-learn-more">
                <h1 className="mb-3">icause for schools</h1>
                <p className="m-0">
                School fundraising without the bake sale
                  {/* Let’s help you make your school fundraiser a winner that will
                  be the envy of other schools. */}
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
                  <h4 className="main-title mb-3">
                  Why choose icause?
                    {/* Security guarantee */}
                    </h4>
                  <p>
                  We’re here to help you connect with your school community and achieve
                   your fundraising goals. You can create a campaign that includes stories, 
                   images and videos and use your icause dashboard to easily contact your
                    community via SMS or email or 
                  share your campaign on social media and watch the donations roll in.
                    {/* You and your school community can rest assured that any
                    details shared with us are secure, including sensitive data
                    such as contact and payment details. We will never share
                    your details without permission, and our payment systems use
                    advanced online security technologies to ensure your
                    supporters' details are in safe hands. You can read our
                    privacy policy for more detailed Information. */}
                  </p>
                  <p
                    className=" font-weight-bold mt-4 mb-0"
                    style={{ color: "#3cb64f" }}
                  >
                    Create your school fundraiser with Icause's unique
                    fundraising platform.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <VideoPlayer
                  videoId={"j7KKZ6v5o34"}
                  basePath={`${imageURLS3}learn_more/school/`}
                  image={"video.JPG"}
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
            {/* Choose a charity creating your school fundraiser */}
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
                    In a few easy steps, your school fundraiser will be up and
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
          <div className="row ">
            <div className="col-12 col-md-4 col-lg-4 pl-md-0">
              <img
                src={`${imageURLS3}learn_more/school/Help-them-for-hapinessTrending-Community-Causes-3.jpg`}
                className="w-100 h-100"
                alt=""
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
      <section className="school-fundraising leran-school">
        <div className="">
          <div className="row mx-0 ">
            <div className="col-12 text-center">
            <h1 className="title">
                  Create an online fundraising community for your School
              </h1>
            </div>
            <div className="col-12 offset-lg-1  col-md-12 col-lg-5 px-lg-0 iCause-Partners">
              <div className="pr-md-4">
               <p>School fundraisers don’t have to be all about bake sales anymore. Here are some great reasons to choose icause:</p>
                <ul>
                  <li>	We’ve created a unique way for members of your school community to donate – either donate directly in a few simple clicks or use a utility bill to donate. </li>

                  <li>Keep track of your goals - our online portal gives you complete control over your fundraising.  </li>
                  <li>Security guarantee - You and your school community can rest assured that any details shared with us are secure. You can read our privacy policy for more detailed information.</li>
                  <li>It’s easy! The funds you raise will automatically be paid into your nominated bank account at the end of your campaign.</li>
   
                  {/* <li>
                    We're here to help you connect with your school community
                    and achieve your fundraising goals. You can create a
                    campaign that includes stories, images, and videos. Use your
                    Icause partner account to contact your community via SMS or
                    email or share your Campaign on social media.
                  </li>
                  <li>
                    Invite your friends, family and ex alumni to your page.
                    Connect social media or share a link.
                  </li>
                  <li>
                    Switch and donate your utility Bills – your supporters can
                    choose by switching their utility provider. In return, a
                    portion of the commission earned by swapping them to a new
                    provider goes toward a cause. Find more by selecting any
                    utility service on the home page.{" "}
                  </li>
                  <li>
                    Fast payment of funds – your funds will be automatically
                    paid to your chosen Charity when your Campaign finishes.
                  </li>
                  <li>
                    A personalised Dashboard to track all your fundraising
                    activities, including calendar, Donation, campaign revenue,
                    social media links and many more.{" "}
                  </li> */}
                </ul>
              </div>
              {/* <p className="text-md-center">School fundraisers don’t have to be all about bake sales anymore. Nothing wrong with these.We like our cakes and sweets but its also good to innovate and do fundraising in other ways.</p>
					<p className="text-md-center">That’s why we’ve created a unique way for members of your school community to donate either donate directly in a few simple clicks or use a utility bill to donate.We are the only crowdfunding platform in the world that offers bill donation, and we think its going to change the way that fundraising is done- make it better and easier.</p>
					<p className="text-md-center">You see you don’t need to donate much money with a bill donation, making it perfect if you cant give much. In addition, it allows you to save money on your bill.</p> */}
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
              Start fundraising
                {/* START NOW */}
              </button>
            </div>
            <div className="col-12 col-md-12 col-lg-6 px-md-0">
              <div className="">
                <img
                  src={`${imageURLS3}learn_more/school/fundraising.JPG`}
                  alt=""
                  className="w-100"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3 cust-p-margin">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className="text-box">
                <h3 className="main-heading    mt-md-0">Create an online fundraising community for your School</h3>
                <ul>
                  <li>We're here to help you connect with your school community and achieve your fundraising goals. You can create a campaign that includes stories, images, and videos. Use your Icause partner account to contact your community via SMS or email or share your Campaign on social media.</li>
                  <li>Invite your friends, family and ex alumni to your page. Connect social media or share a link.</li>
                  <li>Switch and donate your utility Bills – your supporters can choose by switching their utility provider. In return, a portion of the commission earned by swapping them to a new provider goes toward a cause. Find more by selecting any utility service on the home page. </li>
                  <li>Fast payment of funds – your funds will be automatically paid to your chosen Charity when your Campaign finishes.</li>
                  <li>A personalised Dashboard to track all your fundraising activities, including calendar, Donation, campaign revenue, social media links and many more. </li>
                </ul>
                <button
                  onClick={() => {
                    if (user && user.id) {
                      history.push('/homepage');
                    } else {
                      history.push('/auth/signup');
                    }
                  }}
                  type="button" className="btn btn-outline-dark mb-3 mt-3 mb-sm-0">START NOW</button>
              </div>
            </div>
            <div className='col-lg-6 banner-bg d-none d-sm-block'>
              <div className="banner-content">
                <h5>School fundraising transforms thousands of children's lives. </h5>
                <p className="">Give Support to your local School through our Platform and make the change.</p> <i className="fa fa-arrow-right mb-2"></i>
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
          </div><br />
          <div className="row mt-4">
            <div className='col-lg-6 col-md-6'>
              <div className="text-box">
                <h3 className="main-heading    mt-md-0">Creating your school fundraiser</h3>
                <p className="feature-head">Feature 1</p>
                <li>Easy set-up</li>
                <p>In a few easy steps, your school fundraiser will be up and running. </p>
                <p className="feature-head">Feature 2 </p>
                <li>Create a community</li>
                <p>Inspire your supporters to take action.</p>
                <p className="feature-head">Feature 3 </p>
                <li>Stay in control</li>
                <p>Use your online portal to keep track of your campaign.  </p>
              </div>
            </div>
            <div className='col-12'>
              <h3 className="main-heading    mt-md-0 cust-heading">Create an online fundraising community for your school</h3>
              <p>We’re here to help you connect with your school community and achieve your fundraising goals. You can create a campaign that includes stories, images and videos and use your Icause partner account to contact your community via SMS or email or share your campaign on social media.</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className="text-box">
                <h3 className="main-heading    mt-md-0">Security guarantee</h3>
                <p className="">You and your school community can rest assured that any details shared with us are secure, including sensitive data such as contact and payment details. We will never share your details without permission, and our payment systems use advanced online security technologies to ensure your supporters' details are in safe hands. You can read our privacy policy for more detailed Information.</p>
                <p className="">Create your school fundraiser with Icause's unique fundraising platform.</p>
                <div className="text-center">
                <button type="button" className="btn btn-outline-dark mb-3 mb-sm-0" onClick={() => history.push('/auth/login')}>START NOW</button>
                </div>
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
              <h1>
              What are you waiting for? .
                <span> We’re here to help you make a change</span>
                {/* Together To Help The World Better!
                <span> Let's Make This Happen</span> */}
              </h1>
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

export default SchoolLearnMore;
