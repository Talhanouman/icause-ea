
import React, { useEffect, useState } from 'react';
import { notification, Spin } from 'antd';
import {
  injectStripe
} from 'react-stripe-elements';

import FeaturedCompaniesForDonation from '../../shared/FeaturedCompaniesForDonation';
import CompanyDetailsDonateSection from '../../shared/CompanyDetailsDonateSection';

import CardPayment from '../../shared/IndustryDonation/CardPayment';
import PaypalPayment from '../../shared/IndustryDonation/PaypalPayment';
import UtilityBillPayment from '../../shared/IndustryDonation/UtilityBillPayment';

const SchoolDonate = (props) => {
  const companyType = 'school';
  const { match, getFeaturedIndustries, getDonationTypes, shareCompany, likeCompanyType, getSchool, schoolDonate, user } = props;
  const { school, loading, featuredSchools, donationTypes } = schoolDonate;
  const { params } = match || {};
  const schoolId = params && params.id ? Number(params.id) : null;

  useEffect(() => {
    if (schoolId) {
      getDonationTypes();
      getSchool(schoolId, user && user.id ? user.id : navigator.userAgent);
      getFeaturedIndustries(companyType);
    } else {
      notification.error({
        message: 'GET SCHOOL DETAILS',
        description: 'schoolId is not valid'
      })
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [selectedMethod, setMethod] = useState({
    donationMethod: 'donateMoney',
    paymentMethod: 'card'
  });
  return (
    <div className="poppin-wrap">
      <section style={{backgroundImage: "url(" + school?.cover_image + ")"}} className="donate-banner faq-banner organization-donate-banner gen-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">

            </div>
          </div>
        </div>
      </section>

      <Spin spinning={loading}>
        <CompanyDetailsDonateSection
          companyType={companyType}
          data={school}
          loading={loading}
          companyId={schoolId}
          user={user}
          shareCompany={shareCompany}
          likeCompanyType={likeCompanyType}
          getCompanyDetails={getSchool}
        />
        <section className="category-donate-sec-3">
          <div className="container">
            <div className="row">
              <div className="col-6">
                {/* <div className="category-donate-3-text">
                  <p className="heading">How it works</p>
                  <p>More ways to donate. Icause give the freedom to donate by multiple ways. Pay by Visa, Master, Amex, Apple Pay, Google pay and PayPal.  </p>
									<p>Alternatively Switch utility Bills to get commission. It is designed as a way of allowing people to donate when they switch to cheaper utility providers.</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="how-to-donate donate-money choose-method-wrap category-donate-sec donate-school">
          <div className="container">
            <h4 className="pb-4 title">Choose one of the following methods</h4>
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills nav-fill">
                  <li onClick={() => setMethod({ donationMethod: 'uploadUtilityBills', paymentMethod: 'utilityBill' })} className="nav-item">
                    <div style={{ cursor: 'pointer' }} className={selectedMethod.donationMethod === 'uploadUtilityBills' ? 'nav-link active' : 'nav-link'}>Upload utility bill</div>
                  </li>
                  <li onClick={() => setMethod({ donationMethod: 'donateMoney', paymentMethod: 'card' })} className="nav-item">
                    <div style={{ cursor: 'pointer' }} className={selectedMethod.donationMethod === 'donateMoney' ? 'nav-link active' : 'nav-link'}>Donate Money</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* <h4 className="mt-4 mb-4">Choose your payment method</h4> */}
                {
                  selectedMethod.donationMethod === 'donateMoney' ?
                    <div className="donate-money-method-wrap">
                      {/* <p className="heading">Choose your Payment Method.</p> */}
                      <div className="row m-0">
                        <div className="col-12">
                          <ul className="nav nav-pills nav-fill procced-form mb-4">
                            <li onClick={() => setMethod({ donationMethod: 'donateMoney', paymentMethod: 'card' })} className="nav-item">
                              <div style={{ cursor: 'pointer' }} className={selectedMethod.paymentMethod === 'card' ? 'nav-link active' : 'nav-link'}>Pay with card</div>
                            </li>
                            <li onClick={() => setMethod({ donationMethod: 'donateMoney', paymentMethod: 'paypal' })} className="nav-item">
                              <div style={{ cursor: 'pointer' }} className={selectedMethod.paymentMethod === 'paypal' ? 'nav-link active' : 'nav-link'}>Paypal</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {
                        selectedMethod.paymentMethod === 'card' ?
                          <CardPayment
                            {...props}
                            getCompanyDetails={getSchool}
                            industryId={schoolId}
                          /> :
                          <PaypalPayment
                            {...props}
                            getCompanyDetails={getSchool}
                            industryDetails={school}
                            industryId={schoolId}
                          />
                      }
                    </div> :
                    <UtilityBillPayment
                      {...props}
                      getCompanyDetails={getSchool}
                      loading={loading}
                      donationTypes={donationTypes}
                      industryId={schoolId}
                    />
                }
              </div>
            </div>
          </div>
        </section>
        <FeaturedCompaniesForDonation
          data={featuredSchools}
          companyType={companyType}
        />
      </Spin>
    </div>
  );
};

export default injectStripe(SchoolDonate);
