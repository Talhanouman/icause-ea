import React, { useEffect } from 'react';
import { Spin } from 'antd';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';
import TopCampaingsForCategory from '../../shared/TopCampaingsForCategory';
import { imageURLS3 } from '../../../constants/constants';

const OtherCategory = (props) => {
  const {
    match,
    history,
    getPledgeOfTheDay,
    getSubCategoryDetails,
    getTopCampaignsByCategoryId,
    getFeaturedCampaignsForCategoryId,
    subCategoryDetails,
    getCustomerReviews,
    getSubCategories,
  } = props;
  const { params } = match || {};
  let subCategory = params && params.category ? params.category : null;
  const pathName = history?.location?.pathname?.split('/')?.[1];

  let subCategoryId = 0;
  let imageUrl = 'https://icause.s3.us-east-2.amazonaws.com/campaigns/cover/Health_medical-banner-1.jpg';
  if (subCategory === 'animals') {
    subCategoryId = 2;
    imageUrl = `${imageURLS3}campaigns/cover/pets_animal-banner-1.jpg`;
  } else if (subCategory === 'accident') {
    subCategoryId = 3;
    imageUrl = `${imageURLS3}campaigns/cover/accident-banner-3.jpg`;
  } else if (subCategory === 'bucketlist') {
    subCategoryId = 6;
    imageUrl = `${imageURLS3}campaigns/cover/bucket-list-banner-3.jpg`;
  } else if (subCategory === 'inmemory') {
    subCategoryId = 5;
    imageUrl = `${imageURLS3}learn_more/inmemory/shutterstock_1143491999.jpg`;
  } else if (subCategory === 'environment') {
    subCategoryId = 7
    imageUrl = `${imageURLS3}campaigns/cover/banner-3-environment.jpg`;
  } else if (subCategory === 'travel') {
    subCategoryId = 8
    imageUrl = `${imageURLS3}campaigns/cover/banner-image1.jpg`;
  }
  else if (subCategory === 'faith') {
    subCategoryId = 9
    imageUrl = `${imageURLS3}campaigns/cover/faith-banner-1.jpg`;
  } else {
    subCategoryId = 0
  }

  const {
    loading,
    topCampaigns,
    featuredCampaigns,
    subCategoryHash,
    subCategories: dataOfSubCategories,
    pledgeOfTheDay,
  } = subCategoryDetails;

  const [data] = subCategoryHash || [];
  const [pledgeOfTheDayData] = pledgeOfTheDay || [];
  const {
    img,
    text4,
    web_des,
    web_title
  } = data || {};
  let subCategoryImage = '';
  if (img) {
    subCategoryImage = `${img}`;
  }

  // let subCategoryImage2 = '';
  // if (img2) {
  //   subCategoryImage2 = `${process.env.REACT_APP_BACKEND_BASE_URL}/${img2}`;
  // }

  useEffect(() => {
    getSubCategoryDetails(subCategoryId);
    getTopCampaignsByCategoryId(subCategoryId);
    getFeaturedCampaignsForCategoryId(subCategoryId)
    getPledgeOfTheDay(subCategoryId);
    getSubCategories(subCategoryId);
    getCustomerReviews();
  }, [subCategoryId, pathName, subCategory]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="start-fund-other other-cat-wrap start-fund-wrap">
      <Spin spinning={loading}>
        <TopCampaingsForCategory
          history={history}
          loading={loading}
          data={topCampaigns}
          pledgeOfTheDayData={pledgeOfTheDayData}
        />

        <FeaturedCampaigns
          data={featuredCampaigns}
          loading={loading}
          text4={text4}
        />
        <section className="past-year">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-12 mx-auto text-center">
                <h3 className="main-heading mt-4 mb-4 mt-md-0">Our Mission</h3>
                <p>iCause is Australia's new way to raise money through online fundraisers and crowdfunding. Donate directly to your favourite cause or receive a free review of your bills and use the savings to donate. </p>
                <h5>Our Goals & Strategy </h5>
                <div className="price-wraper">
                  <div className="left">
                    <p>  By the Year 2021 </p>
                    <h5 className="text-gren">$10 million </h5>
                    <p> By the Year 2021 </p>
                  </div>
                  <div className="right">
                    <p>By the Year 2024</p>
                    <h5 className="text-gren">$100 million </h5>
                    <p> By the Year 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='donate-section every-year pt-5 iCause-Partners'>
          <div className='container'>
            <div className='row align-items-center  '>
              <div className='col-lg-6 col-md-12  '>
                <h1 style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: web_title || '' }} className="main-heading mt-4 mt-md-0">
                </h1>
                <div style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: web_des || '' }} className='mt-4 pt-2'></div>

                <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-success mb-3 mb-sm-0 mt-3">Start Fundraising</button>

              </div>

             

               <div className='col-lg-6 col-md-6 px-4'>
              <div className="card category-imgs img-card">
                {subCategoryImage && 
                       <img src={subCategoryImage} className="img-fluid" alt="img" />
                }
              </div>

            </div>
          </div>
          </div>
        </section>

        <section className="Whatever-your-need text-center ">
          <div className="col-xl-7 col-lg-7  pt-0 pt-lg-0 mx-auto">
            <div className="text-box">
              <h3 className="main-heading mt-4 mb-4 mt-md-0">
                {
                  pathName === "animals" ? " How can I help?"
                    : (pathName === "accident" || pathName === "bucketlist") ? "How can I help?"
                      : pathName === "inmemory" ? "How can I help?"
                        : pathName === "environment" ? "Join us to save the planet!"
                          : pathName === "faith" ? "How can I help?"
                            : pathName === "travel" ? "How can I help?"
                              : "Your Health and Medical is covered with Icause"
                }
              </h3>
              <p style={{ color: 'black' }}>
                {
                  pathName === "animals" ? " If you’re passionate about an animal cause, either in your own backyard or on a global scale, crowdfunding will make a real difference. Check out the range of animal causes that icause is proud to support below. We will be adding more categories too so stay tuned."
                    : pathName === "accident" ? "If you, or one of your loved ones, is facing the financial stress of an accident, you don’t need to suffer alone, a crowdfunding campaign can help! Check out the range of accident and injury-related causes that icause is proud to support below. We will be adding more categories too so stay tuned."
                      : pathName === "bucketlist" ? "If your buck list dreams feel like they’re slipping further away, start an icause crowdfunding campaign to get back on track! Check out the range of buck list adventures that icause is proud to support below. We will be adding more categories too so stay tuned."
                        : pathName === "inmemory" ? "If you've lost a loved one, or know someone who has, you’ll know the burden of financial pressure that comes with the grief! icause is proud to support grieving families honour their loved ones. "
                          : pathName === "environment" ? "When it comes to the environment, there are plenty of causes that need help! Check out the range of environmental causes that icause is proud to support below. We will be adding more categories too so stay tuned."
                            : pathName === "faith" ? "You can raise money for your faith by supporting your local place of worship or other initiatives through an icause campaign. Check out the range of faith-based causes that icause is proud to support below. We will be adding more categories too so stay tuned."
                              : pathName === "travel" ? "From Tasmania to Timbuktu, we’ve all got places we can only dream of visiting. icause is here to help make dreams come true! Check out the range of travel goals that icause is proud to support below. We will be adding more categories too so stay tuned."
                                : "Check out the range of health and medical causes that Icause is proud to support below. We will be adding more categories too so stay tuned."
                }
              </p>
              <ul>
                {
                  dataOfSubCategories && dataOfSubCategories.length ?
                    dataOfSubCategories.map(({ name, id }, index) => {
                      return (
                        <li key={index}>
                          <a href="#!">{name}</a>
                        </li>
                      );
                    }) : ''
                }
              </ul>
            </div>
          </div>
        </section>

        <section className="donate-section bg-litgray pt-4">
          <div className='container text-center'>
            <div className='row d-flex align-items-center  '>
              <div className='col-lg-6 col-md-5'>
                <h3 className="main-heading  mb-4 mt-md-0">iCause Fundraising Stories</h3>
                <p style={{ color: 'black' }} className="">Work in progress! We have started our journey. Let's create our success stories together.
                  If you have a fundraising idea. Let us help you to kick start a crowdfunding campaign.

                </p>
                <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-success  ">Start Fundraising</button>
              </div>
              <div className='col-lg-6 col-md-5 trending-causes'>
                <div className="card"> <img src={imageUrl} className="img-fluid" alt="" /> </div>
              </div>
            </div>
          </div>
        </section>
        {/* <CustomerReviews
          data={customerReviews}
          loading={loading}
        />
        */}
      </Spin>
    </div>
  );
}

export default OtherCategory;