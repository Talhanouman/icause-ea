

import React, { useEffect, useState } from 'react';
import CustomerReviews from '../../shared/CustomerReviews';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router';
import { imageURL } from '../../../constants/constants';
import WebsiteBenefits from '../../shared/WebsiteBenefits';
const WhyIcause = (props) => {
  const { user, whyIcause, getCombinedStatsAboutIcause, getCustomerReviews, faq } = props;
  const { loading, customerReviews } = faq;
  const { stats } = whyIcause;
  const { donations, lives_saved, participants } = stats || {};
  const history = useHistory();
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    getCombinedStatsAboutIcause();
    getCustomerReviews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 

  return (
    <div className="why-pg-wrap">
      <MetaTags>
        <meta name="description" content=": Icause is a revolutionized crowdfunding platform which allows you to donate more than money. You can you can switch and donate your Utility bill or use paypal, visa & master and Google pay and Apple pay." />
      </MetaTags>
      <section className="banner gurantee-banner why-icause-banner header-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12">
            <h1>A crowdfunding platform with a twist! </h1>
              <p className="">icause gives you more ways to raise funds and donate </p>
              {/* <h1>Crowdfunding Platform With A Difference! </h1>
              <p className="">More ways to Donate- Switch And Donate Your Bills. </p> */}
              <button onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success btn_hover">START FUNDRAISING</button>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3">
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-5'>
              <div className="card img-card dual-img-card-wrap">
                <img src={`${imageURL}why-sec-5-img-1.png`} className="img-fluid" alt="img" />
                {/*<div className="sm-img why-cause-sm-img">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/why-sec-5-img-2.png" className="img-fluid" alt="img" />
                </div>*/}
              </div>
            </div>
            <div className='col-lg-7 pt-5 pt-lg-0'>
              <div className="text-box">
                <h5 className="text-grn">
                  {/* A CHARITY WITH MISSION */}
                  Helping you make a difference
                  </h5>
                <h3 className="main-heading    mt-md-0">
                Let’s make this happen!
                
                  {/* Raise money for causes you care about */}
                  </h3>
                <p className="font-weight-bold">
                “ icause is perfect for every fundraising goal, big or small, and it only takes a few minutes to get set up, so why not start making a difference today? ”
                  {/* “Icause is an online crowdfunding platform dedicated to helping raise money and fundraise for causes you care about” */}
                  </p>
                  <p>At icause, we know ALL about fundraising! That’s why we know that crowdfunding is one of the most effective ways to raise money for a personal goal or charitable cause. </p>
                  <p>We also know that Australians love to donate, we’ve seen it time and time again; mates helping mates when they need a hand up or the whole nation coming together for disaster relief. But for some, donating funds just isn’t possible; even when we want to help the most, sometimes we simply don’t have the spare money to do so.</p>
                  <p>That’s why icause is different. We have created a unique way to donate so that everybody has the chance to help. Read on to find out what makes us special.</p>
                {/* <p className="">
                  These can be environmental causes, animal causes, and human causes like raising money for schools, start-ups, medical assistance, and so much more. </p>
                <p>We cover thousands of causes as we want to help as much as possible, and to do this, we need to extend our reach as much as possible.</p>
                <p>We are all about wanting to make the world a better place. </p>
                <p>So, we need people that share our vision and passion for using this Platform.</p> */}
                {readMore &&
                  <>
                    <p>1.	You can use your bills to donate to a cause—an absolute first in crowdfunding platforms. Your Bill gets converted into money. Go on the Home page and select a utility. The amount is shown on the bill donation section when you click your desire utility. You can use it to donate to any campaign. Switch and donate.</p>
                    <p>2.	You have more payment options as we offer PayPal, Google Pay, Apple Pay, Mastercard, Visa, Amex and more. Most crowdfunding platforms don't provide all these options. </p>
                    <p>3.	You get a FREE & complete marketing tool (Dashboard) that enables you to SMS, send emails and track the revenue. No other crowdfunding platform offers this.</p>
                    <p>4.	You can have your page if you're an organisation like a school, Charity or sports club, even if you don't run a campaign. </p>
                    <p>5.	You can download the Icause app and set up and manage a campaign and more all on the go. Most crowdfunding platforms don't offer an app. </p>
                  </>
                }
                <button type="button" className="btn btn-outline-dark" onClick={() => setReadMore(!readMore)}>{readMore ? "READ LESS" : "READ MORE"}</button>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="table-s why-icause-sec-3">
        <div className="container">
          <div className="custom-top-text">
            <h5 className="text-grn text-center">
            We’re not just another fundraising platform, we’re the whole package!
              {/* A CHARITY WITH MISSION */}
              </h5>
            <h3 className="main-heading  text-center mb-5">
            What makes icause different?
              {/* Why iCause? */}
              </h3>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th>Platform</th>
                  <th>Icause</th>
                  <th>GoFundME</th>
                  <th>Mycause</th>
                  <th>Chuffed</th>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Non profit</td>
                  <td className="bg-four  text-center">No</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">Yes</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">APP</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">Yes</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Accept Payement</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Google Pay</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Paypal</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Visa/ Master</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">Yes</td>
                  <td className=" bg-two text-center">Yes</td>
                  <td className=" bg-one text-center">Yes</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Platform fee</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">Yes</td>
                  <td className=" bg-two text-center">Yes</td>
                  <td className=" bg-one text-center">Yes</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Free Marketing tool</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  {/* <td className="text-left">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/gofundme.png" className="img-fluid" alt="" />
                </td> */}
                  <td className="text-center bg-five ">Donation by Bills</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Pages for Organization</td>
                  <td className="bg-four  text-center">Yes</td>
                  <td className="bg-three text-center">No</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
                <tr>
                  <td className="text-center bg-five ">Global</td>
                  <td className="bg-four  text-center">No</td>
                  <td className="bg-three text-center">Yes</td>
                  <td className=" bg-two text-center">No</td>
                  <td className=" bg-one text-center">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="accordion gurantee-sec-5">
        <div className="container">
          <div className="top-text">
            {/* <h5 className="text-grn text-center">A CHARITY WITH MISSION</h5> */}
            <h3 className="main-heading mt-md-0 text-center mb-4">Frequently Asked Questions </h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div id="accordion" className="accordion-wrap">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i className="fa fa-caret-down"></i>Why icause is different?
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" data-parent="#accordion">
                    <div className="card-body">
                      <p>We’re passionate about fundraising, that’s why we’ve developed a brand new, innovative way to raise money and donate to the causes that are important to you. So, what makes use different? Well, we’re the only fundraising platform that gives you the choice to donate using your utility bills - supporting a cause has never been easier!</p>
                      {/* <p>There more way to donated. Switch and Donate! You can use your bills to donate to a cause. This mean icause partner comparison company will switch your utility plan to another company for potential saving but also donate 30% of switch commission towards your cause. Your bill gets converted into money. Find out how here.</p> */}
                      {/* <p>• Funds fail to be delivered to the stated beneficiary by the campaign organiser.</p>
                      <p>• The content of a campaign is found to be inaccurate with regard to any material facts relating to the beneficiary, the campaign, or the campaign organiser themselves – and that misrepresentation encourages a donor to give to the campaign in good faith.</p>
                      <p>• The content of a campaign is found to be inaccurate with regard to any material facts relating to the beneficiary, the campaign, or the campaign organiser themselves – and it leads to the intended recipient or the organiser of the campaign being charged with a criminal offence in direct relation to misrepresentations made within the campaign. When misuse does occur, and iCause solely deems that to be the case, iCause will either: Refund any donation you made to the cause through this platform (to a maximum value of $1,000 for each donor during each campaign). Or:</p>
                      <p>If iCause deems it to be more appropriate, iCause will award the donor a credit equivalent to the refund amount which they can use to donate to an alternative campaign.</p>
                      <p>Where misuse amounts to a failure of the campaign organiser to deliver any raised funds, we may redirect those funds to the correct destination, as stated in the original campaign. iCause reserves the right to be the sole decider of the outcome of any disputes, and any decisions made by iCause shall be final. Donors may not seek a credit or a refund in the following instances:</p>
                      <p>• For any monies donated to your own campaign.</p>
                      <p>• For any donations that did not happen on the iCause platform.</p>
                      <p>• If you merely regret making a donation to a cause on the platform.</p>
                      <p>• If you have a personal disagreement with, or simply because you have or develop a personal dislike of any beneficiary or of any campaign organiser using the platform.</p>
                      <p>• If you don’t agree with how another party on the website intends to use funds that have been raised beyond the intended scope of any fundraising target.</p>
                      <p>• If you disagree with iCause for any reason.</p>
                      <p>• For any other reason that is not based on a genuine and provable belief that misuse did actually occur. </p> */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i className="fa fa-caret-down"></i>
                        How can I raise funds?
                         {/* Can I use any other form of payment? */}
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                      <p>Setting up a campaign is easy – simply click the button at the top of the page to start fundraising and you’ll be up and running in no time. You’ll need to enter your personal or organisation's details, a nominated bank account for the funds to be deposited and details about your fundraising campaign. </p>
                     <p>Once your campaign page is set up, the best way to raise funds is to invite your supporters to donate. We’ve made it easy! You can choose to send them an SMS or email so they can easily donate online.</p>
                      {/* You have more payment options as we offer PayPal, Google Pay, Apple Pay, Mastercard and more. Other crowdfunding platforms don’t offer all these options. They just offer the standard card payment options. */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <i className="fa fa-caret-down"></i>
                        How Do I track my funds?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                    Your icause dashboard is the whole package, giving you easy access to track your funds as they come in, as well as use our complete marketing tools so you can give your campaign a boost whenever you want to.
                      {/* You get a FREE & complete marketing tool (Dashboard) that enables you to SMS, send emails and track the revenue. */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <i className="fa fa-caret-down"></i>
                        How can I donate?
                        {/* Do I need an active campaign to be on the platform? */}
                      </button>
                    </h5>
                  </div>
                  <div id="collapse4" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                    We know it’s sometimes hard to find the funds to donate as much as you would like, sometimes it’s impossible, that’s why our unique crowdfunding campaigns give you the choice – either donate directly OR use a bill to support your chosen cause. Click on the Donate Now button to make a difference to a cause you care about.
                      {/* No! You can have your own page if you’re an organisation like a school, charity or sport club. Even if you don’t run a campaign, you can still get donations. You can link your social media, invite people to like share your page. */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        <i className="fa fa-caret-down"></i>
                        Which payment methods can I use?
                        {/* Is there an APP available? */}
                      </button>
                    </h5>
                  </div>
                  <div id="collapse5" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                    We want donating to be as easy as possible, that’s why we accept more payment methods than any other platform. Donate to your favourite cause via PayPal, Visa, Mastercard, Amex, GPay or Apple Pay.
                      {/* You can download the Icause app and set up and manage a campaign and more all on the go. Most crowdfunding platforms don’t offer an app. Icause is built on react native and is available on both Apple store and Android Play store. */}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <i className="fa fa-caret-down"></i>
                        Do I need an active campaign to raise funds through icause?
                        
                      </button>
                    </h5>
                  </div>
                  <div id="collapse4" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                    No! If you’re an organisation like a charity, school or sports club, you can set up an icause page to receive donations even without an active campaign running. You can link your social media accounts and invite people to donate and like and share your page.
                       </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <i className="fa fa-caret-down"></i>
                        Is there an icause app?
                      </button>
                    </h5>
                  </div>
                  <div id="collapse4" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                    Of course! We don’t want anything to stand in the way of your fundraising, so our app lets you manage your campaign wherever you are. You can download the app from the App Store and Play Store.
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <WebsiteBenefits />


      {/* <section className="Best-fundraising-website event-manager-sec-7">
        <div className="services">
          <div className="container">
            <h2 className="main-heading text-center pb-2 mb-1 pt-5">Best fundraising platform</h2>
            <p style={{ color: 'black' }} className="gen-text mb-4">Not convinced that Icause is the best fundraising and crowdfunding website? Just check out the following reasons.</p>

            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 benefits-col">
                <div className="box p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="54.708" viewBox="0 0 66 54.708" className="mb-3">
                    <g id="XMLID_2177_" transform="translate(0.001 -43.8)">
                      <g id="XMLID_707_" transform="translate(-0.001 43.8)">
                        <path id="XMLID_708_" d="M452.428,154.882a1.311,1.311,0,1,0-.926-.384A1.317,1.317,0,0,0,452.428,154.882Z" transform="translate(-393.094 -138.292)" />
                        <path id="XMLID_717_" d="M65.894,63.25,64.353,56.6a4.511,4.511,0,0,0-1.335-2.291l-3.431-8.742a2.779,2.779,0,0,0-4.746-.735,7.2,7.2,0,0,0,.419,9.543l-1.633.51a13.984,13.984,0,0,1-8.142.069L38.372,52.86a15.516,15.516,0,0,0-14.994,3.569,1.289,1.289,0,0,0,1.764,1.881,12.938,12.938,0,0,1,12.5-2.976l7.113,2.092a16.551,16.551,0,0,0,9.638-.081l5-1.563a1.92,1.92,0,0,1,2.443,1.4l1.542,6.652a1.432,1.432,0,0,1-1.4,1.756,1.44,1.44,0,0,1-1.142-.567l-.686-.9a2.517,2.517,0,0,0-3.958-.07l-2.546,3.124a1.289,1.289,0,0,0-.29.814v7.21a3.757,3.757,0,0,1-3.753,3.753,1.365,1.365,0,0,1-.138-2.723,1.289,1.289,0,0,0,1.162-1.283v-6.2a1.289,1.289,0,0,0-2.578,0v4.336a17.3,17.3,0,0,1-5.78,2.68,9.974,9.974,0,0,0-7.86-16.122,1.289,1.289,0,1,0,0,2.578,7.4,7.4,0,0,1,0,14.8,1.289,1.289,0,0,0-1.115.641L26.845,88.775a1.289,1.289,0,0,0-.013,1.272l3.254,5.883h-3.34l-3.582-6.31L28.5,77.5a3.483,3.483,0,0,0-6.06-3.373l-5.17,7.538A9.632,9.632,0,0,1,5.445,85.029l-2.03-.894a1.4,1.4,0,0,1-.609-2.047,1.4,1.4,0,0,1,1.705-.531l1.12.459a7.6,7.6,0,0,0,9.863-4.024l4.322-10.035a1.289,1.289,0,1,0-2.368-1.02L13.126,76.972A5.02,5.02,0,0,1,6.61,79.631l-1.12-.46a3.979,3.979,0,0,0-3.114,7.323l2.03.894a12.21,12.21,0,0,0,14.989-4.269l5.17-7.538a.9.9,0,0,1,1.574.876l-5.6,12.716a1.289,1.289,0,0,0,.059,1.156l4.273,7.526A1.289,1.289,0,0,0,26,98.508h6.277A1.289,1.289,0,0,0,33.4,96.595l-3.958-7.156,5.735-9.87a9.9,9.9,0,0,0,2.977-.7,19.857,19.857,0,0,0,7.526-1.537c-.005.083-.009.166-.009.251a3.947,3.947,0,0,0,3.943,3.943,6.339,6.339,0,0,0,6.331-6.331V68.442l2.207-2.709.639.843a4.031,4.031,0,0,0,3.2,1.589,4.01,4.01,0,0,0,3.907-4.916ZM58.63,53.32l-.436.136-.506-.373a4.621,4.621,0,0,1-.845-6.63.2.2,0,0,1,.344.053l2.6,6.614A4.49,4.49,0,0,0,58.63,53.32Z" transform="translate(0.001 -43.8)" />
                        <path id="XMLID_718_" d="M153.667,178.521a1.308,1.308,0,1,0-.926-.384A1.323,1.323,0,0,0,153.667,178.521Z" transform="translate(-132.731 -158.886)" />
                      </g>
                    </g>
                  </svg>
                  <h3>Australian owned & operated</h3>
                  <p style={{ color: 'black' }}>We’re proudly 100% Australian owned and operated, including our call centre.
                  </p>
                  
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 benefits-col">
                <div className="box p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="62.81" height="62.993" viewBox="0 0 62.81 62.993" className="mb-3">
                    <g id="donate" transform="translate(-0.745)">
                      <g id="Group_112" data-name="Group 112" transform="translate(0.745)">
                        <path id="Path_1332" data-name="Path 1332" d="M22.895,345.516a5.572,5.572,0,0,0-3.349,1.079,5.571,5.571,0,0,0-3.35-1.079,6.1,6.1,0,0,0-6.008,6.306c0,6.243,8.437,10.33,8.8,10.5a1.309,1.309,0,0,0,.562.127h.076a1.308,1.308,0,0,0,.524-.127c.358-.171,8.758-4.257,8.758-10.5A6.1,6.1,0,0,0,22.895,345.516ZM19.561,359.68c-2.3-1.234-6.757-4.355-6.757-7.859a3.471,3.471,0,0,1,3.391-3.689,3.033,3.033,0,0,1,2.365,1.093,1.309,1.309,0,0,0,1.976-.007l.021-.023a3.023,3.023,0,0,1,2.337-1.063,3.471,3.471,0,0,1,3.391,3.689c0,3.506-4.44,6.625-6.725,7.859Z" transform="translate(-8.951 -304.309)" />
                        <path id="Path_1333" data-name="Path 1333" d="M60.232,5.827H58.45a5.562,5.562,0,0,0,.053-.764A4.9,4.9,0,0,0,53.668,0,4.5,4.5,0,0,0,51.1.776,4.5,4.5,0,0,0,48.529,0a4.9,4.9,0,0,0-4.836,5.063,5.542,5.542,0,0,0,.053.764H37.712a1.23,1.23,0,0,0,0,2.461H44.65c1.839,3.06,5.706,4.933,5.92,5.035a1.231,1.231,0,0,0,.529.119h.065a1.231,1.231,0,0,0,.493-.12c.213-.1,4.062-1.974,5.893-5.033h2.682a.863.863,0,0,1,.862.862V31.157a.863.863,0,0,1-.862.862H33.96v-1.3a3.743,3.743,0,0,0-7.486,0v1.3H4.068a.863.863,0,0,1-.862-.862V9.15a.863.863,0,0,1,.862-.862h22.52a1.23,1.23,0,1,0,0-2.461H4.068A3.327,3.327,0,0,0,.745,9.15V31.157A3.327,3.327,0,0,0,4.068,34.48H26.474v5.674a4.732,4.732,0,0,0-2.29-.588A2.736,2.736,0,0,0,21.448,42.3s0,8.423,0,9.228a8.053,8.053,0,0,0,6.244,7.866,11.651,11.651,0,0,1,1.693.5v1.875a1.23,1.23,0,0,0,1.23,1.23H37.4a1.23,1.23,0,0,0,1.23-1.23V60.176c.371-.123.987-.312,2-.592a8.106,8.106,0,0,0,5.933-7.791V47.8a7.487,7.487,0,0,0-7.445-7.473l-5.161-.019V34.48H60.232a3.327,3.327,0,0,0,3.323-3.323V9.15a3.327,3.327,0,0,0-3.323-3.323Zm-9.123,5.007C49.36,9.878,46.154,7.6,46.154,5.064a2.442,2.442,0,0,1,2.375-2.6,2.108,2.108,0,0,1,1.644.761,1.23,1.23,0,0,0,.926.42h.012a1.23,1.23,0,0,0,.916-.423l.017-.019a2.1,2.1,0,0,1,1.624-.739,2.442,2.442,0,0,1,2.375,2.6c0,2.527-3.194,4.811-4.934,5.771Zm-12,31.953A5.022,5.022,0,0,1,44.106,47.8v3.993a5.638,5.638,0,0,1-4.128,5.419c-.893.247-1.6.456-2.1.622-.8.265-1.707.565-1.707,1.556v1.142H31.846v-1.18c0-1.4-1.7-1.914-3.593-2.357a5.6,5.6,0,0,1-4.343-5.472c0-.8,0-9.227,0-9.227a.273.273,0,0,1,.275-.27,2.286,2.286,0,0,1,2.29,2.275v4.8a1.23,1.23,0,0,0,2.461,0V30.722a1.283,1.283,0,0,1,2.565,0V41.534a1.23,1.23,0,0,0,1.226,1.23Z" transform="translate(-0.745)" />
                        <path id="Path_1334" data-name="Path 1334" d="M285.964,133.121a1.307,1.307,0,0,0,1.689-.757l.449-1.178h3.159l.443,1.174a1.309,1.309,0,1,0,2.449-.924l-3.062-8.115-.014-.036a1.49,1.49,0,0,0-1.383-.926h0a1.49,1.49,0,0,0-1.382.929l-.012.03-3.09,8.114a1.308,1.308,0,0,0,.757,1.689Zm4.308-4.552H289.1l.59-1.549Z" transform="translate(-250.485 -107.49)" />
                        <path id="Path_1335" data-name="Path 1335" d="M210.75,122.434a1.308,1.308,0,0,0-.919,1.249V131.9a1.309,1.309,0,1,0,2.617,0v-4.017l3.17,4.59a1.412,1.412,0,0,0,1.6.581,1.455,1.455,0,0,0,1-1.444l-.077-7.953a1.309,1.309,0,0,0-1.308-1.3h-.013a1.309,1.309,0,0,0-1.3,1.321l.04,4.1-3.345-4.843a1.309,1.309,0,0,0-1.466-.506Z" transform="translate(-184.341 -107.491)" />
                        <path id="Path_1336" data-name="Path 1336" d="M419.753,125.55a1.309,1.309,0,1,0,0-2.617h-3.436a1.309,1.309,0,0,0-1.309,1.309V132.4a1.309,1.309,0,0,0,1.309,1.309h3.436a1.309,1.309,0,0,0,0-2.617h-2.128v-1.46H419.5a1.309,1.309,0,0,0,0-2.617h-1.874v-1.46h2.128Z" transform="translate(-364.793 -107.992)" />
                        <path id="Path_1337" data-name="Path 1337" d="M52.057,134.823h0c.068,0,1.683-.007,2.33-.018,2.576-.045,4.445-2.267,4.445-5.284,0-3.171-1.822-5.3-4.534-5.3H52.041a1.309,1.309,0,0,0-1.309,1.311s.006,3.072.006,3.982c0,1.111.01,4.007.01,4.007a1.308,1.308,0,0,0,1.309,1.3Zm2.246-7.987c1.779,0,1.917,2.055,1.917,2.685,0,1.311-.579,2.645-1.873,2.667-.233,0-.607.007-.985.01,0-.913-.006-2.073-.006-2.686,0-.516,0-1.724,0-2.676Z" transform="translate(-44.191 -109.119)" />
                        <path id="Path_1338" data-name="Path 1338" d="M356.75,133.205a1.309,1.309,0,0,0,1.309-1.309v-6.922h.973a1.309,1.309,0,1,0,0-2.617h-4.545a1.309,1.309,0,0,0,0,2.617h.955V131.9A1.308,1.308,0,0,0,356.75,133.205Z" transform="translate(-310.148 -107.489)" />
                        <path id="Path_1339" data-name="Path 1339" d="M120.336,127.782a5.424,5.424,0,1,0,5.424-5.424A5.43,5.43,0,0,0,120.336,127.782Zm8.23,0a2.806,2.806,0,1,1-2.806-2.807A2.81,2.81,0,0,1,128.566,127.782Z" transform="translate(-105.804 -107.489)" />
                        <path id="Path_1340" data-name="Path 1340" d="M246.308,49.2a1.308,1.308,0,1,0,.482-1.589A1.319,1.319,0,0,0,246.308,49.2Z" transform="translate(-216.089 -41.191)" />
                      </g>
                    </g>
                  </svg>
                  <h3 style={{ color: 'black' }}>Switch and Donate </h3>
                  <p style={{ color: 'black' }}>Donate money simply by switching your utility provider.. </p>
                  
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 benefits-col">
                <div className="box p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60.333" height="60.333" viewBox="0 0 60.333 60.333" className="mb-3">
                    <g id="social-care" transform="translate(-0.001)">
                      <g id="Group_95" data-name="Group 95" transform="translate(9.03 55.477)">
                        <g id="Group_94" data-name="Group 94">
                          <path id="Path_1323" data-name="Path 1323" d="M80.537,473.787l-1.774-2.5a1.178,1.178,0,1,0-1.922,1.364l1.774,2.5a1.178,1.178,0,1,0,1.922-1.364Z" transform="translate(-76.624 -470.791)" />
                        </g>
                      </g>
                      <g id="Group_97" data-name="Group 97" transform="translate(0.001 18.436)">
                        <g id="Group_96" data-name="Group 96" transform="translate(0)">
                          <path id="Path_1324" data-name="Path 1324" d="M26.539,196.928l-1.931-9.2a17.354,17.354,0,0,0-7.339-10.895l-4.122-2.772a4.147,4.147,0,0,0-5.256.537V160.4a3.945,3.945,0,0,0-6.414-3.077A3.926,3.926,0,0,0,0,160.4v18.271a11.414,11.414,0,0,0,2.118,6.643l2.1,2.96a1.178,1.178,0,1,0,1.922-1.364l-2.1-2.96a9.07,9.07,0,0,1-1.683-5.278V160.4a1.588,1.588,0,1,1,3.176,0v14.5a8.233,8.233,0,0,0,2.124,5.528c.059.07.119.14.183.208.783.829,1.7,1.806,2.569,2.727l1.213,1.291.012.012,1.819,1.936a1.178,1.178,0,1,0,1.718-1.613c-.021-.023-1.4-1.492-2.976-3.166l-2.7-2.876-.02-.022a1.988,1.988,0,0,1,.038-2.606,1.782,1.782,0,0,1,2.32-.3l4.122,2.772A15.009,15.009,0,0,1,22.3,188.21l1.931,9.2a1.178,1.178,0,1,0,2.306-.484Z" transform="translate(-0.001 -156.451)" />
                        </g>
                      </g>
                      <g id="Group_99" data-name="Group 99" transform="translate(6.586 52.034)">
                        <g id="Group_98" data-name="Group 98">
                          <path id="Path_1325" data-name="Path 1325" d="M58.029,442.08l-.008-.011a1.178,1.178,0,0,0-1.919,1.369l.008.011a1.178,1.178,0,0,0,1.919-1.369Z" transform="translate(-55.884 -441.575)" />
                        </g>
                      </g>
                      <g id="Group_101" data-name="Group 101" transform="translate(33.771 18.436)">
                        <g id="Group_100" data-name="Group 100">
                          <path id="Path_1326" data-name="Path 1326" d="M311.667,157.323a3.945,3.945,0,0,0-6.414,3.077v14.2a4.147,4.147,0,0,0-5.256-.537l-4.122,2.772a17.353,17.353,0,0,0-7.339,10.895l-1.931,9.2a1.178,1.178,0,1,0,2.306.484l1.931-9.2a15.009,15.009,0,0,1,6.348-9.423l4.122-2.772a1.782,1.782,0,0,1,2.32.3,1.988,1.988,0,0,1,.041,2.6l-.022.025-5.678,6.042a1.178,1.178,0,1,0,1.718,1.613c.016-.017,4.831-5.137,5.614-5.966.064-.068.124-.137.183-.208a8.234,8.234,0,0,0,2.124-5.528V160.4a1.588,1.588,0,1,1,3.176,0V178.67a9.07,9.07,0,0,1-1.683,5.278l-8.9,12.541a1.178,1.178,0,1,0,1.922,1.364l8.9-12.541a11.414,11.414,0,0,0,2.118-6.643V160.4A3.927,3.927,0,0,0,311.667,157.323Z" transform="translate(-286.58 -156.454)" />
                        </g>
                      </g>
                      <g id="Group_103" data-name="Group 103" transform="translate(11.006 6.363)">
                        <g id="Group_102" data-name="Group 102">
                          <path id="Path_1327" data-name="Path 1327" d="M127.477,70.222l-2.1-.5v-.376a5.27,5.27,0,0,0,2.256-4.321V62.3a5.27,5.27,0,0,0-8.7-4.008,6.88,6.88,0,0,0-12.752.009,5.27,5.27,0,0,0-8.707,4v2.725a5.27,5.27,0,0,0,2.256,4.321v.376l-2.1.5a5.52,5.52,0,0,0-4.251,5.387v2.2a1.178,1.178,0,0,0,1.178,1.178h5.415c-.008.143-.014.287-.014.431v4.237a1.178,1.178,0,0,0,1.178,1.178h7.083a1.178,1.178,0,1,0,0-2.357h-1.217V80.042a1.178,1.178,0,1,0-2.357,0v2.435h-2.33V79.419a4.879,4.879,0,0,1,3.754-4.759l3.234-.775,2.164,4.923a1.178,1.178,0,0,0,1.079.7h0a1.178,1.178,0,0,0,1.079-.7l2.162-4.916,3.223.77a4.878,4.878,0,0,1,3.757,4.76v3.055h-2.33V80.042a1.178,1.178,0,1,0-2.357,0v2.435h-1.335a1.178,1.178,0,0,0,0,2.357h7.2a1.178,1.178,0,0,0,1.178-1.178V79.422c0-.146-.006-.291-.014-.435h5.43a1.178,1.178,0,0,0,1.178-1.178v-2.2A5.52,5.52,0,0,0,127.477,70.222Zm-5.114-10.841a2.921,2.921,0,0,1,2.911,2.725h-1.638a8.589,8.589,0,0,1-3.951-.963A2.921,2.921,0,0,1,122.362,59.381Zm-2.917,5.471c0-.057,0-.115,0-.172V63.63a10.946,10.946,0,0,0,4.185.833h1.645v.561a2.917,2.917,0,1,1-5.834,0Zm-11.4-3.968h0a4.526,4.526,0,0,1,9-.719L115.052,59a1.178,1.178,0,0,0-1.5.259,5.077,5.077,0,0,1-3.9,1.82H108.04Zm-5.284-1.5a2.921,2.921,0,0,1,2.678,1.762,8.589,8.589,0,0,1-3.951.963H99.845A2.921,2.921,0,0,1,102.756,59.381Zm-2.917,5.081h1.645a10.946,10.946,0,0,0,4.19-.834v1.4a2.917,2.917,0,0,1-5.834,0Zm5.692,7.905a7.227,7.227,0,0,0-5.008,4.263H95.747V75.608a3.171,3.171,0,0,1,2.442-3.094l3-.717a1.178,1.178,0,0,0,.9-1.146v-.4a5.116,5.116,0,0,0,1.318,0v.336c0,.018,0,.035,0,.053a1.18,1.18,0,0,0,.958,1.159l1.758.421Zm3.287-1.829a5.529,5.529,0,0,0-.944-.318l-2.105-.5v-.367a5.316,5.316,0,0,0,1.021-.933,6.938,6.938,0,0,0,2.027,2.032Zm5.118,1.731-1.379,3.136-1.382-3.144V71.42a6.906,6.906,0,0,0,2.761,0Zm-1.369-3.064a4.531,4.531,0,0,1-4.526-4.526V63.434h1.611a7.425,7.425,0,0,0,5.007-1.934l2.43,1.428v1.924A4.531,4.531,0,0,1,112.566,69.205Zm3.726,1.337v-.08a6.935,6.935,0,0,0,2.044-2.037,5.316,5.316,0,0,0,1.013.923v.367l-2.105.5A5.549,5.549,0,0,0,116.292,70.542Zm13.079,6.089h-4.792a7.225,7.225,0,0,0-5.011-4.261l-.592-.141,1.767-.424a1.18,1.18,0,0,0,.963-1.16c0-.009,0-.019,0-.028v-.362a5.117,5.117,0,0,0,1.318,0v.4a1.178,1.178,0,0,0,.9,1.146l3,.717a3.171,3.171,0,0,1,2.442,3.094Z" transform="translate(-93.39 -54)" />
                        </g>
                      </g>
                      <g id="Group_105" data-name="Group 105" transform="translate(28.989 34.841)">
                        <g id="Group_104" data-name="Group 104">
                          <path id="Path_1328" data-name="Path 1328" d="M248.011,296.014a1.179,1.179,0,1,0,.345.834A1.188,1.188,0,0,0,248.011,296.014Z" transform="translate(-246 -295.67)" />
                        </g>
                      </g>
                      <g id="Group_107" data-name="Group 107" transform="translate(28.988)">
                        <g id="Group_106" data-name="Group 106">
                          <path id="Path_1329" data-name="Path 1329" d="M247.171,0a1.178,1.178,0,0,0-1.178,1.178V2.942a1.178,1.178,0,1,0,2.357,0V1.178A1.178,1.178,0,0,0,247.171,0Z" transform="translate(-245.993)" />
                        </g>
                      </g>
                      <g id="Group_109" data-name="Group 109" transform="translate(22.578 2.264)">
                        <g id="Group_108" data-name="Group 108">
                          <path id="Path_1330" data-name="Path 1330" d="M194.847,20.793l-1.236-1.235a1.178,1.178,0,1,0-1.666,1.667l1.236,1.235a1.178,1.178,0,1,0,1.666-1.667Z" transform="translate(-191.599 -19.213)" />
                        </g>
                      </g>
                      <g id="Group_111" data-name="Group 111" transform="translate(34.144 2.294)">
                        <g id="Group_110" data-name="Group 110">
                          <path id="Path_1331" data-name="Path 1331" d="M292.983,19.814a1.178,1.178,0,0,0-1.666,0l-1.227,1.228a1.178,1.178,0,1,0,1.667,1.666l1.227-1.228A1.178,1.178,0,0,0,292.983,19.814Z" transform="translate(-289.746 -19.469)" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3 style={{ color: 'black' }}>More payment options </h3>
                  <p style={{ color: 'black' }}>Donate securely using PayPal, Visa, Mastercard, Amex, GPay or Apple Pay. </p>
                 
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 benefits-col">
                <div className="box p-4">
                  <svg id="wireframe" xmlns="http://www.w3.org/2000/svg" width="55.894" height="54.708" viewBox="0 0 55.894 54.708" className="mb-3">
                    <g id="Group_71" data-name="Group 71" transform="translate(48.841 4.595)">
                      <g id="Group_70" data-name="Group 70">
                        <path id="Path_1295" data-name="Path 1295" d="M447.069,43a1.069,1.069,0,1,0,1.069,1.069A1.069,1.069,0,0,0,447.069,43Z" transform="translate(-446 -43)" />
                      </g>
                    </g>
                    <g id="Group_73" data-name="Group 73" transform="translate(42.175 4.595)">
                      <g id="Group_72" data-name="Group 72">
                        <path id="Path_1296" data-name="Path 1296" d="M387.069,43a1.069,1.069,0,1,0,1.069,1.069A1.069,1.069,0,0,0,387.069,43Z" transform="translate(-386 -43)" />
                      </g>
                    </g>
                    <g id="Group_75" data-name="Group 75" transform="translate(35.619 4.595)">
                      <g id="Group_74" data-name="Group 74">
                        <path id="Path_1297" data-name="Path 1297" d="M327.069,43a1.069,1.069,0,1,0,1.069,1.069A1.069,1.069,0,0,0,327.069,43Z" transform="translate(-326 -43)" />
                      </g>
                    </g>
                    <g id="Group_77" data-name="Group 77" transform="translate(29.063 33.017)">
                      <g id="Group_76" data-name="Group 76">
                        <path id="Path_1298" data-name="Path 1298" d="M267.069,309a1.069,1.069,0,1,0,1.069,1.069A1.069,1.069,0,0,0,267.069,309Z" transform="translate(-266 -309)" />
                      </g>
                    </g>
                    <g id="Group_79" data-name="Group 79" transform="translate(29.063 39.428)">
                      <g id="Group_78" data-name="Group 78">
                        <path id="Path_1299" data-name="Path 1299" d="M267.069,369a1.069,1.069,0,1,0,1.069,1.069A1.069,1.069,0,0,0,267.069,369Z" transform="translate(-266 -369)" />
                      </g>
                    </g>
                    <g id="Group_81" data-name="Group 81" transform="translate(29.063 45.839)">
                      <g id="Group_80" data-name="Group 80">
                        <path id="Path_1300" data-name="Path 1300" d="M267.069,429a1.069,1.069,0,1,0,1.069,1.069A1.069,1.069,0,0,0,267.069,429Z" transform="translate(-266 -429)" />
                      </g>
                    </g>
                    <g id="Group_83" data-name="Group 83">
                      <g id="Group_82" data-name="Group 82">
                        <path id="Path_1301" data-name="Path 1301" d="M52.619,0H3.275A3.245,3.245,0,0,0,0,3.206V51.5a3.245,3.245,0,0,0,3.275,3.206H52.619A3.245,3.245,0,0,0,55.894,51.5V3.206A3.245,3.245,0,0,0,52.619,0ZM53.71,51.5a1.082,1.082,0,0,1-1.092,1.069H3.275A1.082,1.082,0,0,1,2.183,51.5V11.326H53.71Zm0-42.313H2.183V3.206A1.082,1.082,0,0,1,3.275,2.137H52.619A1.082,1.082,0,0,1,53.71,3.206Z" />
                      </g>
                    </g>
                    <g id="Group_85" data-name="Group 85" transform="translate(7.052 15.6)">
                      <g id="Group_84" data-name="Group 84">
                        <path id="Path_1302" data-name="Path 1302" d="M106.689,146h-39.6c-.025,0-.05,0-.075,0l-.036,0-.068.01-.042.007-.056.014-.049.014-.047.017-.054.02-.042.02-.053.026-.043.026-.045.028-.048.035-.035.026c-.017.014-.034.029-.05.044l-.027.024c-.017.016-.032.034-.048.051l-.022.025c-.014.017-.028.035-.041.053l-.023.031c-.011.016-.021.033-.031.05s-.017.028-.025.042-.014.029-.021.043-.018.036-.026.055-.009.025-.014.038-.016.043-.022.065l0,.012c0,.009,0,.018-.006.028s-.01.042-.015.063-.006.034-.008.052,0,.034-.006.051,0,.044,0,.065,0,.018,0,.027v10.685a1.085,1.085,0,0,0,1.1,1.069h39.59c.036,0,.071,0,.106-.006l.021,0,.078-.012.033-.007.064-.016.036-.01.063-.022.031-.011c.029-.012.057-.025.084-.039l.033-.019.052-.031.031-.021.051-.037.026-.02c.019-.016.037-.032.055-.049l.016-.015a1.075,1.075,0,0,0,.128-.151l.009-.014c.015-.022.029-.044.042-.067l.017-.031c.009-.018.018-.035.027-.053l.017-.041q.01-.024.018-.048c.005-.015.011-.031.015-.046l0-.014c0-.009,0-.018.006-.028s.01-.042.015-.063.006-.034.008-.052,0-.034.006-.051,0-.044,0-.065,0-.018,0-.028V147.069A1.085,1.085,0,0,0,106.689,146ZM68.2,156.685v-8.211l30.422,8.211Zm37.39-.337-30.422-8.211H105.59Z" transform="translate(-66 -146)" />
                      </g>
                    </g>
                    <g id="Group_87" data-name="Group 87" transform="translate(7.052 33.017)">
                      <g id="Group_86" data-name="Group 86">
                        <path id="Path_1303" data-name="Path 1303" d="M82.027,309H67.068l-.034,0-.062,0-.051.006-.052.008-.054.012-.047.012-.053.017-.046.017-.048.021-.048.023-.042.024-.048.029-.038.027-.046.034-.038.033-.04.036c-.014.014-.027.028-.04.042l-.025.027-.006.008c-.014.016-.026.033-.039.05l-.026.034c-.011.017-.021.034-.032.051s-.016.026-.024.039-.016.032-.024.049-.015.03-.022.045-.012.031-.017.046-.013.034-.019.052-.008.029-.012.044-.011.038-.015.057,0,.028-.007.042-.007.042-.01.063,0,.027,0,.04,0,.044,0,.066c0,0,0,.006,0,.01v12.822a1.069,1.069,0,0,0,1.069,1.069H82.027a1.1,1.1,0,0,0,.112-.006h.007c.035,0,.069-.009.1-.016l.02-.005c.029-.007.058-.014.086-.023l.032-.012c.023-.008.047-.017.069-.027l.04-.019.057-.029.043-.026.05-.033.041-.03.048-.04.035-.032c.017-.017.034-.034.05-.052l.021-.021.006-.008c.014-.016.026-.033.039-.05l.026-.034c.011-.017.021-.034.032-.051s.016-.026.024-.039.016-.033.024-.049.015-.03.022-.045.012-.031.017-.046.013-.034.019-.052.008-.029.012-.044.011-.038.015-.057,0-.028.007-.042.007-.042.01-.063,0-.027,0-.04,0-.044,0-.066c0,0,0-.006,0-.009V310.069A1.068,1.068,0,0,0,82.027,309ZM68.136,321.822v-9.43l11,9.43Zm12.822-1.255-11-9.431h11Z" transform="translate(-65.999 -309)" />
                      </g>
                    </g>
                    <g id="Group_89" data-name="Group 89" transform="translate(33.882 33.017)">
                      <g id="Group_88" data-name="Group 88">
                        <path id="Path_1304" data-name="Path 1304" d="M319.891,309H307.069a1.069,1.069,0,1,0,0,2.137h12.822a1.069,1.069,0,0,0,0-2.137Z" transform="translate(-306 -309)" />
                      </g>
                    </g>
                    <g id="Group_91" data-name="Group 91" transform="translate(33.882 39.428)">
                      <g id="Group_90" data-name="Group 90">
                        <path id="Path_1305" data-name="Path 1305" d="M319.891,369H307.069a1.069,1.069,0,1,0,0,2.137h12.822a1.069,1.069,0,0,0,0-2.137Z" transform="translate(-306 -369)" />
                      </g>
                    </g>
                    <g id="Group_93" data-name="Group 93" transform="translate(33.882 45.839)">
                      <g id="Group_92" data-name="Group 92">
                        <path id="Path_1306" data-name="Path 1306" d="M319.891,429H307.069a1.069,1.069,0,1,0,0,2.137h12.822a1.069,1.069,0,1,0,0-2.137Z" transform="translate(-306 -429)" />
                      </g>
                    </g>
                  </svg>
                  <h3 style={{ color: 'black' }}>Simple and easy to use </h3>
                  <p style={{ color: 'black' }}>In just a few easy steps, your campaign will be up and running, plus we’re here 24 hours a day for support. </p>
                  
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 benefits-col">
                <div className="box p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48.823" height="60" viewBox="0 0 48.823 60" className="mb-3">
                    <g id="outline" transform="translate(-7.177 -2)">
                      <path id="Path_1307" data-name="Path 1307" d="M23,12h2v2H23Z" />
                      <path id="Path_1308" data-name="Path 1308" d="M27,12h2v2H27Z" />
                      <path id="Path_1309" data-name="Path 1309" d="M31,12h2v2H31Z" />
                      <path id="Path_1310" data-name="Path 1310" d="M37,6h2V8H37Z" />
                      <path id="Path_1311" data-name="Path 1311" d="M55.924,61.383a1,1,0,0,0-.217-1.09l-5.8-5.8-1.885-7.541.972-6.8a1.017,1.017,0,0,0-.006-.321l-2-10.972A3.164,3.164,0,0,0,44,26a2.961,2.961,0,0,0-.995.183V7a5.006,5.006,0,0,0-5-5H18a5.006,5.006,0,0,0-5,5V19.268a3.513,3.513,0,0,0-2.227.045,3.879,3.879,0,0,0-2.518,2.834,3.826,3.826,0,0,0,1.022,3.547l2.956,2.956a3.738,3.738,0,0,0-1.839,4.584A3.816,3.816,0,0,0,8.3,39.707l1.636,1.636a3.781,3.781,0,0,0-1.638.95,3.832,3.832,0,0,0,0,5.414l4,4a3.824,3.824,0,0,0,.7.542V53a5.006,5.006,0,0,0,5,5h9.586l3.707,3.707A1,1,0,0,0,32,62H55a1,1,0,0,0,.924-.617ZM23,4H33V6H23ZM15,21V7a3,3,0,0,1,3-3h3V7a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V4h3a3,3,0,0,1,3,3V48H18.685a3.789,3.789,0,0,0-.97-1.707l-1.642-1.642A3.754,3.754,0,0,0,18.84,41a3.8,3.8,0,0,0-.216-1.209A3.733,3.733,0,0,0,21.278,38H26a1,1,0,0,0,1-1V31a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v.6l-2.29-2.289A3.855,3.855,0,0,0,15,28.343Zm6,12.66V32h4v4H21.838A3.81,3.81,0,0,0,21,33.663ZM10.691,24.28a1.837,1.837,0,0,1-.483-1.7,1.887,1.887,0,0,1,1.255-1.387,1.419,1.419,0,0,1,.486-.084A1.833,1.833,0,0,1,13,21.458v5.131Zm2.026,6.447a1.912,1.912,0,0,1,1.3-.527,1.825,1.825,0,0,1,1.289.527L19.3,34.72a1.851,1.851,0,0,1,.544,1.3,1.828,1.828,0,0,1-.123.648,1.73,1.73,0,0,1-.414.644,1.835,1.835,0,0,1-2.424.153l-4.162-4.153a1.815,1.815,0,0,1-.537-1.292,1.845,1.845,0,0,1,.533-1.293Zm-3,7.566a1.829,1.829,0,0,1,2.434-2.723L16.3,39.707a1.829,1.829,0,1,1-2.586,2.586Zm4,12-4-4A1.829,1.829,0,0,1,12.3,43.707l4,4a1.829,1.829,0,1,1-2.586,2.586ZM18,56a3,3,0,0,1-3-3v-.175h.008A3.772,3.772,0,0,0,18.685,50H41v3a3,3,0,0,1-3,3Zm14.414,4-2-2H38a5.006,5.006,0,0,0,5-5V28.994A1,1,0,0,1,44,28c.522,0,.925.586,1.016,1.179L46.987,40.02l-.977,6.838a1.013,1.013,0,0,0,.02.384l2,8a1,1,0,0,0,.263.465L52.586,60Z" />
                      <path id="Path_1312" data-name="Path 1312" d="M26,52h4v2H26Z" />
                      <path id="Path_1313" data-name="Path 1313" d="M20,28h6a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v6A1,1,0,0,0,20,28Zm1-6h4v4H21Z" />
                      <path id="Path_1314" data-name="Path 1314" d="M29,27a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1Zm2-5h4v4H31Z" />
                      <path id="Path_1315" data-name="Path 1315" d="M36,30H30a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V31A1,1,0,0,0,36,30Zm-1,6H31V32h4Z" />
                      <path id="Path_1316" data-name="Path 1316" d="M23,44h2v2H23Z" />
                      <path id="Path_1317" data-name="Path 1317" d="M27,44h2v2H27Z" />
                      <path id="Path_1318" data-name="Path 1318" d="M31,44h2v2H31Z" />
                    </g>
                  </svg>
                  <h3 style={{ color: 'black' }}>icause mobile app </h3>
                  <p style={{ color: 'black' }}>Stay in control and up to date wherever you are with our easy-to-use mobile app. </p>
                 
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 benefits-col">
                <div className="box p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58.044" height="56.333" viewBox="0 0 58.044 56.333" className="mb-3">
                    <g id="_07-Credit_card_discount" data-name="07-Credit card discount" transform="translate(-4 -15.528)">
                      <g id="filled" transform="translate(4 15.528)">
                        <path id="Path_1319" data-name="Path 1319" d="M62.006,47.424l-3.327-27.44a5.073,5.073,0,0,0-5.641-4.42l-42.073,5.1a5.075,5.075,0,0,0-4.45,5.282A5.069,5.069,0,0,0,4,30.323v27.64a5.073,5.073,0,0,0,5.067,5.067H26.462a1.382,1.382,0,0,0,.611.98l2.828,1.86L31.1,69.038a1.386,1.386,0,0,0,1.357.893l3.381-.157,2.827,1.86a1.382,1.382,0,0,0,1.623-.075l2.643-2.114,3.381-.157a1.382,1.382,0,0,0,1.269-1.015l.9-3.264,2.472-1.978h.505a5.073,5.073,0,0,0,5.067-5.067V53.194l1.071-.13a5.067,5.067,0,0,0,4.42-5.64ZM6.764,35.391H53.752V40H6.764Zm46.988-2.764H6.764v-2.3a2.306,2.306,0,0,1,2.3-2.3H51.449a2.306,2.306,0,0,1,2.3,2.3Zm-7.358,30.5a1.382,1.382,0,0,0-.469.713l-.749,2.729-2.827.131a1.382,1.382,0,0,0-.8.3l-2.21,1.768-2.364-1.555a1.382,1.382,0,0,0-.76-.227h-.064l-2.827.131-1-2.648a1.383,1.383,0,0,0-.534-.667l-2.364-1.555.749-2.729a1.382,1.382,0,0,0-.04-.853l-1-2.648,2.21-1.768a1.382,1.382,0,0,0,.469-.714l.749-2.729,2.827-.131a1.382,1.382,0,0,0,.8-.3L38.4,48.613l2.364,1.555a1.381,1.381,0,0,0,.824.226l2.827-.131,1,2.648a1.382,1.382,0,0,0,.534.667l2.364,1.555-.749,2.729a1.382,1.382,0,0,0,.04.853l1,2.648Zm5.055-2.864h-.3L50.35,58.16l.9-3.264a1.382,1.382,0,0,0-.573-1.52l-2.828-1.86L46.65,48.349a1.385,1.385,0,0,0-1.357-.893l-3.381.157-2.828-1.86a1.382,1.382,0,0,0-1.623.075l-2.643,2.115-3.381.157a1.382,1.382,0,0,0-1.269,1.015l-.9,3.264L26.63,54.493a1.382,1.382,0,0,0-.43,1.566l1.194,3.167-.285,1.04H9.067a2.306,2.306,0,0,1-2.3-2.3v-15.2H53.752v15.2a2.306,2.306,0,0,1-2.3,2.3Zm7.34-10.812a2.88,2.88,0,0,1-2.273.956V30.323a5.073,5.073,0,0,0-5.067-5.067H9.316A2.308,2.308,0,0,1,11.3,23.41l42.073-5.1a2.306,2.306,0,0,1,2.564,2.009l3.327,27.44a2.287,2.287,0,0,1-.474,1.7Z" transform="translate(-4 -15.528)" />
                        <path id="Path_1320" data-name="Path 1320" d="M41.067,292H37.382a1.382,1.382,0,0,0,0,2.764h3.685a1.382,1.382,0,0,0,0-2.764Z" transform="translate(-32.315 -260.16)" />
                        <path id="Path_1321" data-name="Path 1321" d="M124.753,292h-7.371a1.382,1.382,0,0,0,0,2.764h7.371a1.382,1.382,0,0,0,0-2.764Z" transform="translate(-103.101 -260.16)" />
                        <path id="Path_1322" data-name="Path 1322" d="M270.486,346.744l-7.371,7.371c-1.287,1.25.705,3.241,1.954,1.954l7.371-7.371a1.382,1.382,0,0,0-1.954-1.954Z" transform="translate(-232.905 -308.241)" />
                        <circle id="Ellipse_6" data-name="Ellipse 6" cx="1.382" cy="1.382" r="1.382" transform="translate(36.715 45.009)" />
                        <circle id="Ellipse_7" data-name="Ellipse 7" cx="1.382" cy="1.382" r="1.382" transform="translate(30.266 38.559)" />
                      </g>
                    </g>
                  </svg>
                  <h3 style={{ color: 'black' }}>Complete marketing platform </h3>
                  <p style={{ color: 'black' }}>Manage your fundraiser easily through your icause dashboard and send invitations via SMS and email. </p>
                  
                </div>
              </div>


            </div>
          </div>
        </div>
      </section> */}

      <section className="Best-fundraising-website event-manager-sec-7" >
        <CustomerReviews
          data={customerReviews}
          loading={loading}
        />
      </section>



      <section className="donate-section iCause-Partners why-icause-sec-2">
        <div className='container'>
          <div className='row d-flex align-items-center  '>
            <div className='col-lg-6 col-md-6'>
              <div className="custom-text-box">
                <h5 className="text-grn">A CHARITY WITH MISSION</h5>
                <h3 className="main-heading    mt-md-0">Raise money for causes you care about </h3>
                {/* <p className="font-weight-bold">“Generosity consists not of the sum given, but the manner in which it is bestowed.”</p> */}
                <p className="mb-0">Icause is an online crowdfunding platform dedicated to helping raise money and fundraise for causes you care about. </p>
                <p>These can be environmental causes, animal causes and human causes like raising money for schools, for start-ups, for medical assistance and so much more. </p>
                <p>We cover thousands of causes as we want to help as much as possible and to do this, we need to extend our reach as much as possible.</p>
                <p>The only causes we won’t allow are causes that promote maliciousness like racism, bullying and corrupt practices. These seek to further disempower our world.</p>
                <p>We are all about wanting to make the world a better place. </p>
                <p>So, we need people that share our vision and passion to use this platform. </p>
                {/* <p><span className="text-grn value">3.5M</span> Are looking for your help</p> */}
                <button type="button" onClick={() => history.push('/auth/login')} className="btn btn-success mb-4 mb-md-0">DONATE NOW</button>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className="img-box">
                <img src={`${imageURL}why-sec-2-img-1.png`} className="img-fluid" alt="img" />
                <div className="stats-wrap">
                  <div className="stat-box">
                    <p className="number">{donations || 0}</p>
                    <p style={{ color: 'black' }} className="tag">Donations</p>
                  </div>
                  <div className="stat-box">
                    <p className="number">{lives_saved || 0}</p>
                    <p style={{ color: 'black' }} className="tag">Lives saved</p>
                  </div>
                  <div className="stat-box">
                    <p className="number">{participants || 0}</p>
                    <p style={{ color: 'black' }} className="tag">Participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="the-wold-better gurantee-sec-6 bg-pnk mt-5 custom-dots">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <h1>What are you waiting for?<span> We’re here to help you make a change.</span></h1>
              <p>Let’s make this happen!</p>
              <button
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }}
                className="btn btn-success my-2 my-sm-0 text-uppercase"
                type="submit">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyIcause;
