

import React, { useEffect, useState, useCallback } from 'react';
import { Button, notification } from 'antd';
import MetaTags from 'react-meta-tags';
import TrendingCauses from '../../shared/TrendingCauses';
import RecentCauses from '../../shared/RecentCauses';
import HomeCampaigns from '../../shared/HomeCampaigns';
import WebsiteBenefits from '../../shared/WebsiteBenefits';
import DonateYourBillSection from '../../shared/DonateYourBill';
import PledgeOfTheDay from '../../shared/PledgeOfTheDay';
import GetTheAppSections from './GetTheAppSections';

import HowToDonateWithReadMore from '../../shared/HowToDonateWithReadMore';
import { imageURL } from '../../../constants/constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const setBillType = (selectedBill, allBills, setBills) => {
  const bill = allBills.find(({ method }) => method === selectedBill.method);
  if (!bill) {
    const bills = [...allBills, selectedBill];
    setBills(bills)
  } else {
    const bills = allBills.filter(({ method }) => method !== selectedBill.method);
    setBills(bills);
  }
}

const Homepage = (props) => {

  const { user, history, homepage, getPledgeOfTheDay, getDonateYourBillSection, getHomepageContent, getCampaignsForSlider, getTrendingCauses, getRecentCauses } = props;
  const { donateBillSectionContent, pledgeOfTheDay, homepageContent, homeCampaigns, recentCauses, trendingCauses, loadingForBillSection, loadingForGetAppSection, loadingForPledgeOfTheDay, loadingForHomeCampaigns, loadingForTrendingCauses, loadingForRecentCauses } = homepage;
  const [pledgeOfTheDayData] = pledgeOfTheDay || [];
  const { data: recentCauseList, total: totalRecentCauses } = recentCauses || {};
  const { data: trendingCauseList, total } = trendingCauses || {};
  const [check, setCheck] = useState(false);
  const limitedRecentCauses = recentCauseList && recentCauseList.length ? recentCauseList.filter((value, index) => index <= 2) : [];
  const [width, setWidth] = useState(window.innerWidth);
  const [isReadMore1, setIsReadMore1] = useState(false)
  const [isReadMore2, setIsReadMore2] = useState(false)
  const [isReadMore3, setIsReadMore3] = useState(false)
  const [slideIndex, setSlideIndex] = useState(1)


  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
    afterChange: index => {
      setSlideIndex(index + 1)
    }
  };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;
  useEffect(() => {
    getCampaignsForSlider();
    getPledgeOfTheDay();
    getTrendingCauses();
    getHomepageContent();
    getRecentCauses();
    getDonateYourBillSection();
    const classGet = document.body.getAttribute("class");
    if (classGet === null) {
      document.body.classList.add("bodyHide")
      document.body.classList.add("bodyHideApple")
      document.body.classList.add("bodyHidePay")
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 

  const backValue = localStorage.getItem("selectedMethods") !== "undefined" ? JSON.parse(localStorage.getItem("selectedMethods")) : [];
  const [selectedBills, setBills] = useState(backValue?.length > 0 ? backValue : []);

  useEffect(() => {
    const Bills = localStorage.getItem("selectedMethods") !== "undefined" ? JSON.parse(localStorage.getItem("selectedMethods")) : [];
    if (Bills?.length > 0) {
      setBills(Bills?.length > 0 ? Bills : []);
      setCheck(true);
      localStorage.removeItem("selectedMethods")
    }
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

  const container = document.querySelector(".row-scroll");
  const lefty = document?.querySelector(".previous");
  let translate = 0;
  lefty?.addEventListener("click", function () {
    translate += 52;
    container.style.transform = `translateX(${translate}%)`;
    righty.style.visibility = "visible";
    this.style.visibility = "hidden";
  });

  const righty = document.querySelector(".next");
  righty?.addEventListener("click", function () {
    translate -= 52;
    container.style.transform = `translateX(${translate}%)`;
    lefty.style.visibility = "visible";
    this.style.visibility = "hidden";
  });

  const handleSelect = () => {
    setCheck(!check);
  }
  let finalAmountOfSelectedBills = 0;
  let selectedBillsToDisplay = '';
  selectedBills.forEach(({ finalAmount, name }, index) => {
    finalAmountOfSelectedBills += (finalAmount || 0);
    if (index === selectedBills.length - 1) {
      selectedBillsToDisplay += (name);
    } else {
      selectedBillsToDisplay += (name + ' + ');
    }
  });

  const handleReadMore = () => {
    const classGet = document.body.getAttribute("class");
    const arr = classGet.split(" ");
    if (arr.includes("bodyHide")) {
      document.body.classList.remove("bodyHide")
      document.body.classList.add("bodyShow")
    } else {
      document.body.classList.remove("bodyShow")
      document.body.classList.add("bodyHide")
    }
  }

  const handleReadMorePayPal = () => {
    const classGet = document.body.getAttribute("class");
    const arr = classGet.split(" ");
    if (arr.includes("bodyHidePay")) {
      document.body.classList.remove("bodyHidePay")
      document.body.classList.add("bodyShowPay")
    } else {
      document.body.classList.remove("bodyShowPay")
      document.body.classList.add("bodyHidePay")
    }
  }

  const handleReadMoreApple = () => {
    const classGet = document.body.getAttribute("class");
    const arr = classGet.split(" ");
    if (arr.includes("bodyHideApple")) {
      document.body.classList.remove("bodyHideApple")
      document.body.classList.add("bodyShowApple")
    } else {
      document.body.classList.remove("bodyShowApple")
      document.body.classList.add("bodyHideApple")
    }
  }

  const ReadMore = useCallback((which) => {
    if (which == "1") {
      setIsReadMore1(!isReadMore1)
    }
    else if (which == "2") {
      setIsReadMore2(!isReadMore2)
    }
    else if (which == "3") {
      setIsReadMore3(!isReadMore3)
    }
    else {
      setIsReadMore1(!isReadMore1)
    }
  }, [isReadMore1, isReadMore2, isReadMore3])

  return (
    <div className="homepage-wrap">

      <MetaTags>
        <meta name="description" content="Donate money to your favourite cause by donating your bills with Icause Australia’s innovative crowdfunding platform that’s changing the way fundraising is done." />
      </MetaTags>

      <HomeCampaigns isMobile={isMobile} history={history} pledgeOfTheDayData={pledgeOfTheDayData} loading={false} data={homeCampaigns} />

      <PledgeOfTheDay history={history} data={pledgeOfTheDay} loading={false} />

     
      <TrendingCauses history={history} loading={false} data={isMobile ? trendingCauseList?.filter((x, i) => i < 2) : trendingCauseList} />
      {/* {
        total > 3 ?
          <section style={{ paddingTop: '0px', marginTop: '-30px' }} className="trending-causes">
            <div className="container">
              <button onClick={() => history.push('/campaigns')} type="button" className="btn-cutom justify-content-center d-flex align-items-center mt-0 bor-width-2">View More</button>
            </div>
          </section> : ''
      } */}
       <HowToDonateWithReadMore />
      <section className="raise-money pt-0">
        <div className="container-lg container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 icons-col text-center">
              {(isMobile && slideIndex == 1) &&
                <div className="col-lg-7 col-xl-6 col-sm-12 text-col d-flex align-items-center">
                  <div className="raise-money-text">
                    <p className="heading main-heading"> <span className='d-block'>Switch & Donate</span> your Bill </p>
                    <p style={{ color: 'black', display: 'block' }}><span className="font-weight-bold">Utility Bills</span> are only good for paying bills. Get more out from your Utility Bills. 
                    <span className='d-block'>You can Donate your utility Bill by not using a cent. Icause utility partner- Cheapbills, will give 30% of its commission towards your Fundraising- when you switch your utilities services. </span>  
                    </p>
                   
                  </div>
                  
                </div>
              }
              {(isMobile && slideIndex == 2) && <div className="col-lg-7 col-sm-12 text-col d-flex align-items-center">
                <div className="raise-money-text">
                  <p className="heading main-heading"><span >Credit Card </span>  and PayPal</p>
                  <p style={{ color: 'black', display: 'block' }}>
                    PayPal provides an easy and safest way for Money transfer. <span className='d-block'>The power of Visa, Master & Amex makes it easier to support your Fundraising. Icause support more payment options than any crowdfunding platform.
                    Fund your Favourite crowdfunding cause—more Ways to Donate Visa, Master, Amex, PayPal.</span>   
                  </p>
                </div>
              </div>}
              {(isMobile && slideIndex == 3) && <div className="col-lg-7 col-sm-12 text-col d-flex align-items-center">
                <div className="raise-money-text">
                  <p className="heading main-heading"> <span> Apple Pay </span> and Google pay</p>
                  <p className='mt-5 ' style={{ color: 'black', display: 'block' }}>We accept both Apple Pay and GPay. It is <span className="font-weight-bold"> Easy to use.</span></p> 
                  <p className='mt-4' style={{paddingTop:"6px" , color: 'black'}}>Make contactless, secure Donation on our Platform. You can now use Apple Pay or GPay on icause platform.</p>
                </div>
              </div>}
              <Slider activeDotClassName="ahsan" {...settings}>
                <div className="item">
                  <div className="row revers-row">
                    <div className="col-lg-5">
                      <div className="icon-box icon-box-1">
                        <p className="title">Utility Bills</p>
                        <ul className="icon-list">
                          <li>
                            <div className="img">
                              <img src={`${imageURL}pay_tv.svg`} alt="utility-icon" />
                            </div>
                            <div className="text">
                              <p>Pay TV</p>
                            </div>
                          </li>
                          <li>
                            <div className="img">
                              <img src={`${imageURL}electricity.svg`} alt="utility-icon" />
                            </div>
                            <div className="text">
                              <p>Electricity & Gas</p>
                            </div>
                          </li>
                          <li>
                            <div className="img">
                              <img src={`${imageURL}health_insurance.svg`} alt="utility-icon" />
                            </div>
                            <div className="text">
                              <p>Health Insurance</p>
                            </div>
                          </li>
                          <li>
                            <div className="img">
                              <img src={`${imageURL}broadband.svg`} alt="utility-icon" />
                            </div>
                            <div className="text">
                              <p>Broadband</p>
                            </div>
                          </li>
                          <li>
                            <div className="img">
                              <img style={{ height: '40px', marginLeft: '4px' }} src={`${imageURL}phone.svg`} alt="utility-icon" />
                            </div>
                            <div className="text">
                              <p>Mobile</p>
                            </div>
                          </li>
                          <li className="last-item">
                            <div className="img">
                              <img src={`${imageURL}utility-icon-5.png`} alt="utility-icon" />
                            </div>
                            <div className="text">
                              <p>Total</p>
                            </div>
                          </li>
                        </ul>
                        {/* <button
                          type="button" className="gen-btn d-block d-sm-none mb-4">
                          <div className="showBtnHide">Learn More</div>
                        </button> */}
                      </div>
                    </div>
                    {!isMobile && <div className="col-lg-7 col-xl-6 col-sm-12 text-col d-flex align-items-center">
                      <div className="raise-money-text">
                      <p className="heading main-heading">Save on your bills and donate!</p>
                      <p style={{ color: 'black' }}>Only icause offers you the chance to donate to a cause and make a saving at the same time, and it’s so simple! </p> 
                      <p style={{ color: 'black' }}>Simply switch your service provider through our utility partner – cheapbills.com.au – and 30% of the commission will be donated to your chosen cause </p>
                        {/* <p className="heading main-heading">Switch and Donate your Bill</p> */}
                        {/* <p style={{ color: 'black' }}><span className="font-weight-bold">Utility Bills</span> are only good for paying bills. Get more out from your Utility Bills. </p>
                        <p className='d-none d-md-block' style={{ color: 'black' }}>
                          You can Donate your utility Bill by not using a cent. Icause utility partner- Cheapbills, will give 30% of its commission towards your Fundraising- when you switch your utilities services.
                        </p>
                        <div id="textMore" className="showSlider">
                          <p style={{ color: 'black' }}>Find more by going to the "Donate your Bills" section. It is an easy process. Select the service, and it will give an amount you can use for the Donation—condition applies. </p>
                        </div> */}
                        <button onClick={() => handleReadMore()} type="button" className="gen-btn"><div className="showBtn">Learn Less</div><div className="showBtnHide">Learn More</div></button>
                      </div>
                    </div>}

                  </div>
                </div>

                <div className="item">
                  <div className="row ">
                    
                    <div className="col-lg-5">
                      <div className="icon-box icon-box-2">
                        <ul className="icon-list">
                          <li>
                            <div className="img">
                              {/* <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/paypal-icon.png" alt="utility-icon" className="img-fluid" /> */}
                              <svg id="paypal_4_" data-name="paypal (4)" xmlns="http://www.w3.org/2000/svg" width="102.492" height="120.001" viewBox="0 0 102.492 120.001">
                                <g id="Group_309" data-name="Group 309">
                                  <g id="Group_308" data-name="Group 308">
                                    <path id="Path_1746" data-name="Path 1746" d="M124.624,9.053C119.03,2.715,108.9,0,95.952,0H58.362a5.378,5.378,0,0,0-5.317,4.5L37.392,102.983a3.21,3.21,0,0,0,3.188,3.7H63.785l5.827-36.675-.18,1.155a5.357,5.357,0,0,1,5.3-4.5H85.76c21.668,0,38.625-8.73,43.583-33.983.15-.75.382-2.19.382-2.19C131.134,21.142,129.717,14.805,124.624,9.053Z" transform="translate(-37.352 0)" />
                                  </g>
                                </g>
                                <g id="Group_311" data-name="Group 311" transform="translate(31.143 35.273)" opacity="0.16">
                                  <g id="Group_310" data-name="Group 310">
                                    <path id="Path_1747" data-name="Path 1747" d="M237.327,150.5c-5.385,24.863-22.567,38.018-49.838,38.018h-9.885l-7.38,46.71H186.26a4.7,4.7,0,0,0,4.65-3.945l.188-.99,3.69-23.183.24-1.275a4.693,4.693,0,0,1,4.643-3.945H202.6c18.952,0,33.787-7.635,38.122-29.722C242.465,163.3,241.625,155.866,237.327,150.5Z" transform="translate(-170.225 -150.496)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="paypal-text">Paypal</p>
                          </li>
                          <li>
                            <div className="img">
                              {/* <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/credit-card-icon.png" alt="utility-icon" className="img-fluid" /> */}
                              <svg id="Component_48_1" data-name="Component 48 – 1" xmlns="http://www.w3.org/2000/svg" width="175.999" height="125.333" viewBox="0 0 175.999 125.333">
                                <g id="Group_313" data-name="Group 313" transform="translate(18 59.5)">
                                  <g id="Group_312" data-name="Group 312">
                                    <path id="Path_1748" data-name="Path 1748" d="M154.707,213.333H3.292A3.11,3.11,0,0,0,0,216.625v46.083a16.3,16.3,0,0,0,16.458,16.458H141.54A16.3,16.3,0,0,0,158,262.708V216.625A3.11,3.11,0,0,0,154.707,213.333ZM23.042,239.666H49.375a3.292,3.292,0,1,1,0,6.583H23.042a3.292,3.292,0,1,1,0-6.583Zm46.083,19.75H23.042a3.292,3.292,0,1,1,0-6.583H69.124a3.292,3.292,0,1,1,0,6.583Zm55.958,0a11.121,11.121,0,0,1-6.583-1.975,11.121,11.121,0,0,1-6.583,1.975,13.167,13.167,0,1,1,0-26.333,11.121,11.121,0,0,1,6.583,1.975,11.121,11.121,0,0,1,6.583-1.975,13.167,13.167,0,0,1,0,26.333Z" transform="translate(0 -213.333)" fill="#d5d5d5" />
                                  </g>
                                </g>
                                <g id="Group_315" data-name="Group 315" transform="translate(18 20)">
                                  <g id="Group_314" data-name="Group 314">
                                    <path id="Path_1749" data-name="Path 1749" d="M141.541,85.333H16.458A16.3,16.3,0,0,0,0,101.791v6.583a3.11,3.11,0,0,0,3.292,3.292H154.707A3.11,3.11,0,0,0,158,108.375v-6.583A16.3,16.3,0,0,0,141.541,85.333Z" transform="translate(0 -85.333)" fill="#d5d5d5" />
                                  </g>
                                </g>
                                <g id="Group_313-2" data-name="Group 313" transform="translate(0 39.5)">
                                  <g id="Group_312-2" data-name="Group 312">
                                    <path id="Path_1748-2" data-name="Path 1748" d="M154.707,213.333H3.292A3.11,3.11,0,0,0,0,216.625v46.083a16.3,16.3,0,0,0,16.458,16.458H141.54A16.3,16.3,0,0,0,158,262.708V216.625A3.11,3.11,0,0,0,154.707,213.333ZM23.042,239.666H49.375a3.292,3.292,0,1,1,0,6.583H23.042a3.292,3.292,0,1,1,0-6.583Zm46.083,19.75H23.042a3.292,3.292,0,1,1,0-6.583H69.124a3.292,3.292,0,1,1,0,6.583Zm55.958,0a11.121,11.121,0,0,1-6.583-1.975,11.121,11.121,0,0,1-6.583,1.975,13.167,13.167,0,1,1,0-26.333,11.121,11.121,0,0,1,6.583,1.975,11.121,11.121,0,0,1,6.583-1.975,13.167,13.167,0,0,1,0,26.333Z" transform="translate(0 -213.333)" />
                                  </g>
                                </g>
                                <g id="Group_315-2" data-name="Group 315">
                                  <g id="Group_314-2" data-name="Group 314">
                                    <path id="Path_1749-2" data-name="Path 1749" d="M141.541,85.333H16.458A16.3,16.3,0,0,0,0,101.791v6.583a3.11,3.11,0,0,0,3.292,3.292H154.707A3.11,3.11,0,0,0,158,108.375v-6.583A16.3,16.3,0,0,0,141.541,85.333Z" transform="translate(0 -85.333)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p>Credit Card</p>
                          </li>
                        </ul>
                        {/* <button type="button" className="gen-btn d-block d-sm-none" >
                          <div className="showBtnHidePay">Learn More</div>
                        </button> */}
                      </div>
                    </div>
                    {!isMobile && <div className="col-lg-7 col-sm-12 text-col d-flex align-items-center">
                      <div className="raise-money-text">
                       <p className="heading main-heading">More ways to donate!</p>
                        <p style={{ color: 'black' }}> Donate directly, securely and easily through PayPal, Visa, Mastercard or Amex. We also accept both Gpay and Apple pay.</p> 
                      
                        {/* <p className="heading main-heading">Credit card And PayPal</p> */}
                        {/* <p style={{ color: 'black' }}>Fund your Favourite crowdfunding cause—more Ways to Donate Visa, Master, Amex, PayPal.</p>
                        <div id="PayPalText" className="showPay">
                          <p style={{ color: 'black' }}>PayPal provides an easy and safest way for Money transfer. The power of Visa, Master & Amex makes it easier to support your Fundraising. Icause support more payment options than any crowdfunding platform.</p>
                        </div> */}
                        <button type="button" className="gen-btn d-none d-sm-block" onClick={() => handleReadMorePayPal()}>
                          <div className="showBtnPay">Learn Less</div>
                          <div className="showBtnHidePay">Learn More</div>
                        </button>

                      </div>
                    </div>}
                  </div>

                </div>
                <div className="item">
                  <div className="row revers-row">
                    <div className="col-lg-5">
                      <div className="icon-box icon-box-3">
                        <ul className="icon-list">
                          <li>
                            <div className="img">
                              {/* <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/apple-icon.png" alt="utility-icon" className="img-fluid" /> */}
                              <svg id="Component_50_1" data-name="Component 50 – 1" xmlns="http://www.w3.org/2000/svg" width="98.522" height="119.5" viewBox="0 0 98.522 119.5">
                                <g id="apple" opacity="0.1">
                                  <g id="Group_284" data-name="Group 284" transform="translate(46.015)">
                                    <g id="Group_283" data-name="Group 283">
                                      <path id="Path_1692" data-name="Path 1692" d="M270.39,0c-5.976.413-12.96,4.238-17.031,9.219-3.713,4.519-6.767,11.23-5.576,17.752,6.529.2,13.276-3.713,17.185-8.778C268.625,13.479,271.392,6.809,270.39,0Z" transform="translate(-247.522)" />
                                    </g>
                                  </g>
                                  <g id="Group_286" data-name="Group 286" transform="translate(0 26.236)">
                                    <g id="Group_285" data-name="Group 285" transform="translate(0)">
                                      <path id="Path_1693" data-name="Path 1693" d="M129.835,131.21c-5.738-7.195-13.8-11.37-21.416-11.37-10.053,0-14.305,4.813-21.29,4.813-7.2,0-12.673-4.8-21.367-4.8-8.54,0-17.633,5.219-23.4,14.144-8.105,12.568-6.718,36.2,6.417,56.325,4.7,7.2,10.978,15.3,19.188,15.37,7.307.07,9.366-4.687,19.265-4.736s11.776,4.8,19.069,4.722c8.218-.063,14.838-9.037,19.538-16.239a80.762,80.762,0,0,0,7.237-13.591C114.072,168.613,111.025,141.585,129.835,131.21Z" transform="translate(-37.336 -119.84)" />
                                    </g>
                                  </g>
                                </g>
                                <g id="apple-2" data-name="apple" transform="translate(2.779 7.41)">
                                  <g id="Group_284-2" data-name="Group 284" transform="translate(46.015)">
                                    <g id="Group_283-2" data-name="Group 283">
                                      <path id="Path_1692-2" data-name="Path 1692" d="M270.39,0c-5.976.413-12.96,4.238-17.031,9.219-3.713,4.519-6.767,11.23-5.576,17.752,6.529.2,13.276-3.713,17.185-8.778C268.625,13.479,271.392,6.809,270.39,0Z" transform="translate(-247.522)" />
                                    </g>
                                  </g>
                                  <g id="Group_286-2" data-name="Group 286" transform="translate(0 26.236)">
                                    <g id="Group_285-2" data-name="Group 285" transform="translate(0)">
                                      <path id="Path_1693-2" data-name="Path 1693" d="M129.835,131.21c-5.738-7.195-13.8-11.37-21.416-11.37-10.053,0-14.305,4.813-21.29,4.813-7.2,0-12.673-4.8-21.367-4.8-8.54,0-17.633,5.219-23.4,14.144-8.105,12.568-6.718,36.2,6.417,56.325,4.7,7.2,10.978,15.3,19.188,15.37,7.307.07,9.366-4.687,19.265-4.736s11.776,4.8,19.069,4.722c8.218-.063,14.838-9.037,19.538-16.239a80.762,80.762,0,0,0,7.237-13.591C114.072,168.613,111.025,141.585,129.835,131.21Z" transform="translate(-37.336 -119.84)" />
                                    </g>
                                  </g>
                                </g>
                              </svg>

                            </div>
                            <p>Pay</p>
                          </li>
                          <li>
                            <div className="img">


                              {/* <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/google-plus-icon.png" alt="utility-icon" className="img-fluid" /> */}
                              
                              <svg id="Component_49_1" data-name="Component 49 – 1" xmlns="http://www.w3.org/2000/svg" width="106.231" height="110.665" viewBox="0 0 106.231 110.665">
                                <g id="google-plus" opacity="0.1">
                                  <path id="Path_1691" data-name="Path 1691" d="M52.586,109.672c30.346,0,50.5-21.3,50.5-51.366a44.932,44.932,0,0,0-.855-8.75H52.593V67.632H82.441C81.221,75.309,73.4,90.3,52.593,90.3c-17.928,0-32.568-14.85-32.568-33.213s14.633-33.22,32.568-33.22a29.543,29.543,0,0,1,20.95,8.105l14.275-13.7A50.289,50.289,0,0,0,52.586,4.5a52.586,52.586,0,1,0,0,105.172Z" transform="translate(0 -4.5)" />
                                </g>
                                <g id="google-plus-2" data-name="google-plus" transform="translate(3.141 5.492)">
                                  <path id="Path_1691-2" data-name="Path 1691" d="M52.586,109.672c30.346,0,50.5-21.3,50.5-51.366a44.932,44.932,0,0,0-.855-8.75H52.593V67.632H82.441C81.221,75.309,73.4,90.3,52.593,90.3c-17.928,0-32.568-14.85-32.568-33.213s14.633-33.22,32.568-33.22a29.543,29.543,0,0,1,20.95,8.105l14.275-13.7A50.289,50.289,0,0,0,52.586,4.5a52.586,52.586,0,1,0,0,105.172Z" transform="translate(0 -4.5)" />
                                </g>
                              </svg>
                            </div>
                            <p>Pay</p>
                          </li>
                        </ul>

                        {/* <button type="button" className="gen-btn d-block d-sm-none" >
                          <div className="showBtnHidePay">Learn More</div>
                        </button> */}

                      </div>
                    </div>
                    {!isMobile && <div className="col-lg-7 col-sm-12 text-col d-flex align-items-center">
                      <div className="raise-money-text">
                        <p className="heading main-heading"> <span> Apple Pay </span> and Google pay</p>

                        <p style={{ color: 'black' }}>We accept both Apple Pay and GPay. It is <span className="font-weight-bold"> Easy to use.</span></p>
                        <div id="apple" className="showApple">
                          <p style={{ color: 'black' }}>Make contactless, secure Donation on our Platform. You can now use Apple Pay or GPay on icause platform.</p>
                        </div>

                        <button type="button" className="gen-btn d-none d-sm-block" onClick={() => { handleReadMoreApple(); }}>
                          <div className="showBtnApple">Learn Less</div>
                          <div className="showBtnHideApple">Learn More</div>
                        </button>
                      </div>
                    </div>}
                  </div>

                </div>
              </Slider>
            </div>

          </div>
        </div>
      </section>

      <GetTheAppSections {...props} loading={false} data={homepageContent} />
    

      <DonateYourBillSection
        isMobile={isMobile}
        loading={loadingForBillSection}
        data={donateBillSectionContent}
        selectedBills={selectedBills}
        check={check}
        handleSelect={handleSelect}
        selectedBillsToDisplay={selectedBillsToDisplay}
        finalAmountOfSelectedBills={finalAmountOfSelectedBills}
        checkbox={check}
        setBills={(bill) => setBillType(bill, selectedBills, setBills)}
      />

      <div className="after-donate-bill" style={{ textAlign: 'center' }}>
        {
          finalAmountOfSelectedBills > 0 && check &&
          <Button
            style={{ height: '48px', width: '200px' }}
            className="btn btn-success btn-block"
            onClick={() => {
              if (check) {
                const [campaign] = pledgeOfTheDay || [];
                if (campaign && campaign.id) {
                  history.push({
                    pathname: `/donate-money/${campaign.id}`,
                    state: {
                      selectedMethods: selectedBills,
                      check: check,
                    }
                  });
                } else {
                  notification.error({
                    message: 'CampaignID does not exist for Pledge of the Day !'
                  });
                }
              }
            }}
            type='primary'>
            Donate
          </Button>
        }
      </div>
    

      <RecentCauses history={history} loading={loadingForRecentCauses}  data={isMobile ? limitedRecentCauses?.filter((x, i) => i < 2) : limitedRecentCauses} />

{/* {
  totalRecentCauses > 3 ?
    <section style={{ paddingTop: '0px', marginTop: '-30px' }} className="trending-causes">
      <div className="container">
        <button onClick={() => history.push('/campaigns')} type="button" className="btn-cutom justify-content-center d-flex align-items-center mt-5">View More</button>
      </div>
    </section> : ''
} */}
      

      <WebsiteBenefits />
      <section className="become-section">
        <div className="container container-lg">
          <div className="row">
            <div className="col-md-12 text-center">
            <h2 className="main-heading pb-3">Don’t wait – every great change starts with a single action!</h2>
             <h6 className='mb-5'>Join thousands of people who are taking the first step and making a real difference. There is someone out there that needs our help – if you’ve got a cause that you’re passionate about, start your fundraiser today!	</h6>
              {/* <h2 className="main-heading pb-3"><span> Become a </span> member </h2> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12 col-xl-11 become-cards-wrap">
              <div className="row row-scroll">
                <div className="become-section-col">
                  <a href='/school'>
                    <div className="card mb-m mb-sm-3 member-card">
                      <img src={`${imageURL}become-member-card-1.png`} alt="become" />
                      <div className="card-body">
                        <h5 className="card-title">School<span className="fa fa-arrow-right float-right"></span></h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="become-section-col second-slide">
                  <a href='/sports'>
                    <div className="card mt-md-5 mb-3 member-card offset-card">
                      <img src={`${imageURL}become-member-card-2.png`} alt="become" />
                      <div className="card-body">
                        <h5 className="card-title">Sports<span className="fa fa-arrow-right float-right"></span></h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="become-section-col third-slide">
                  <a href='/charity'>
                    <div className="card mb-m mb-sm-3 member-card">
                      <img src={`${imageURL}become-member-card-3.png`} alt="become" />
                      <div className="card-body">
                        <h5 className="card-title">Charity<span className="fa fa-arrow-right float-right"></span></h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="become-section-col">
                  <a href='/community'>
                    <div className="card mt-md-5 mb-3 member-card offset-card">
                      <img src={`${imageURL}become-member-card-4.png`} alt="become" />
                      <div className="card-body">
                        <h5 className="card-title">Community<span className="fa fa-arrow-right float-right"></span></h5>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
              <div className="col-md-12 text-center">
                <button
                  onClick={() => {
                    if (user && user.id) {
                      history.push('/homepage');
                    } else {
                      history.push('/auth/login');
                    }
                  }}
                  className="btn btn-success mt-3 home-donate desk-view">
                    It all starts here!
                  {/* Get started */}
                </button>
                <div className="ul-mbl-show next-pre-button">
                  <span href="#!" className="previous round"><i className="fas fa-chevron-left"></i></span>
                  <span href="#!" className="next round"><i className="fas fa-chevron-right"></i></span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='donate-section home-donate-section pt-4 d-none d-sm-block'>
        <div className='container container-lg'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-6'>
              <div className="img-wrap">
                <img className='w-100 custom-img-mob' src={`${imageURL}donate-now.png`} alt='donate' />
              </div>
            </div>
            <div className='col-md-6 m-3 m-sm-0'>
              <h2 className="main-heading mt-4 mt-md-0">Someone somewhere is looking for our help!</h2>
              <p style={{ color: 'black' }} className='mt-4 pt-2'>
                There is a cause out there that needs our help- it could be climate change, human rights abuse, animal welfare, or just your local School that needs a helping hand with Fundraising.
              </p>
              <Button
                style={{ color: 'white', height: '48px' }}
                className='btn btn-success my-4 d-sm-block d-none big-custom-btn'
                onClick={() => {
                  history.push(
                    `/donate-money/${pledgeOfTheDayData && pledgeOfTheDayData.id}`
                  );
                }}
              >
                It all starts here!
              </Button>
            </div>
            <div className="col-12 d-sm-none d-block text-center my-2">
              <Button
                style={{ color: 'white', height: '48px' }}
                className='btn btn-success my-4'
                onClick={() => {
                  history.push(
                    `/donate-money/${pledgeOfTheDayData && pledgeOfTheDayData.id}`
                  );
                }}
              >
                It all starts here! Start raising funds now
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};



export default Homepage;
