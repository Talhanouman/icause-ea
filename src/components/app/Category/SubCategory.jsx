

import React, { useEffect } from 'react';
import { Spin } from 'antd';

import CustomerReviews from '../../shared/CustomerReviews';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';
import TopCampaingsForCategory from '../../shared/TopCampaingsForCategory';
import { imageURLS3 } from '../../../constants/constants';

const CategoryFive = (props) => {
  const {
    history,
    match,
    getSubCategories,
    getCustomerReviews,
    getFeaturedCampaignsForCategoryId,
    getCategoryById,
    getPledgeOfTheDay,
    getTopCampaignsByCategoryId,
    subCategory
  } = props;

  const {
    subCategories: dataOfSubCategories,
    loading,
    featuredCampaigns,
    customerReviews,
    topCampaigns,
    categoryHash,
    pledgeOfTheDay
  } = subCategory || {};
  const [data] = categoryHash || [];
  const {
    img,
    web_title,
    web_des
  } = data || {};
  let categoryImage = '';
  if (img) {
    categoryImage = `${img}`;
  }
  const { params } = match || {};
  const categoryId = params && params.id ? Number(params.id) : 1;
  const [pledgeOfTheDayData] = pledgeOfTheDay || [];

  useEffect(() => {
    getCategoryById(categoryId);
    getTopCampaignsByCategoryId(categoryId);
    getPledgeOfTheDay(categoryId)
    getFeaturedCampaignsForCategoryId(categoryId);
    getSubCategories(categoryId);
    getCustomerReviews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="sub-cat-wrap">
      <Spin spinning={loading}>
        <div className="homepage-wrap">
          <TopCampaingsForCategory
            history={history}
            loading={loading}
            data={topCampaigns}
            pledgeOfTheDayData={pledgeOfTheDayData}
          />
        </div>
        <FeaturedCampaigns
          data={featuredCampaigns}
          loading={loading}
        />
        <section className="past-year">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-12 mx-auto text-center">
                <h3 className="main-heading mt-4 mb-4 mt-md-0">Our Mission</h3>
                <p>iCause is Australia's new way to raise money through online fundraisers and crowdfunding. Donate directly to your favourite cause or receive a free review of your bills and use the savings to donate.</p>
                <h5>Our Goal & Strategy </h5>
                <div className="price-wraper">
                  <div className="left">
                    <p>By the Year 2021 </p>
                    <h5 className="text-gren">$10 million</h5>
                    <p>Crowdfunding Target</p>
                  </div>
                  <div className="right">
                    <p>By the Year 2024</p>
                    <h5 className="text-gren">$100 Million</h5>
                    <p>Crowdfunding Target</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="donate-section iCause-Partners custom-partner pt-4 detail-4-sec-4">
          <div className='container'>
            <div className='row d-flex align-items-center  '>
              <div className='col-lg-6 pl-md-5 custom-text-width'>
                <h1 style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: web_title || '' }} className="main-heading mt-4 mt-md-0">
                </h1>
                <div style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: web_des || '' }} className='mt-4 pt-2'></div>


                <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-success mb-3 mb-lg-0 ">Start Fundraising</button>
              </div>
             

              <div className='col-lg-6'>
                <div className="card border-0 category-imgs img-card start-fund-dual-image">
                  {categoryImage &&
                    <img src={categoryImage} className="img-fluid" alt="img" />
                  }
                  
                 
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="Whatever-your-need text-center">
          <div className="col-xl-7 col-lg-7  pt-0 pt-md-5 mx-auto">
            <div className="text-box">
              <h3 className="main-heading mt-4 mb-4 mt-md-0">
              How can I help?
                {/* Your Health and Medical is covered with Icause */}
                </h3>
              <p style={{ color: 'black' }}>
              If you know someone in need of financial support while they face medical issues, crowdfunding will make a real difference. Check out the range of health and medical causes that icause is proud to support below. We will be adding more categories too so stay tuned.
                {/* Check out the range of health and medical causes that Icause is proud to support below. We will be adding more categories too so stay tuned. */}
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
              <div className='col-lg-6 col-md-5   '>
                <h3 className="main-heading  mb-4 mt-md-0">iCause Fundraising Stories</h3>
                {/* <h3 className="main-heading  mb-4 mt-md-0">Get Guardian for this kid</h3> */}
                <p style={{ color: 'black' }} className="">Work in progress! We have started our journey. Let's create our success stories together.
                  If you have a fundraising idea. Let us help you to kick start a crowdfunding campaign.

                </p>
                <button onClick={() => history.push('/auth/login')} type="button" className="btn btn-success  ">Start Fundraising</button>
              </div>
              <div className='col-lg-6 col-md-5 trending-causes'>
                <div className="card"> <img src={`${imageURLS3}campaigns/cover/Health_medical-banner-3.jpg`} className="img-fluid" alt="" /> </div>
              </div>
            </div>
          </div>
        </section>
        <CustomerReviews
          data={customerReviews}
          loading={loading}
        />
      </Spin>
    </div>
  );
};

export default CategoryFive;
