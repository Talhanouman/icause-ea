import React, { useEffect, useState } from 'react';
import { notification, Spin } from 'antd';
import {
  injectStripe
} from 'react-stripe-elements';

import CompanyDetailsDonateSection from '../../shared/CompanyDetailsDonateSection';
import FeaturedCompaniesForDonation from '../../shared/FeaturedCompaniesForDonation';

import CardPayment from '../../shared/IndustryDonation/CardPayment';
import PaypalPayment from '../../shared/IndustryDonation/PaypalPayment';
import UtilityBillPayment from '../../shared/IndustryDonation/UtilityBillPayment';

const CharityDonate = (props) => {
	const companyType = 'charity';
	const { match, getFeaturedIndustries, getDonationTypes, shareCompany, likeCompanyType, getCharity, charityDonate, user } = props;
	const { charity, loading, featuredCharities, donationTypes } = charityDonate;
	const { params } = match || {};
	const charityId = params && params.id ? Number(params.id) : null;

	useEffect(() => {
		if (charityId) {
			getDonationTypes();
			getCharity(charityId, user && user.id ? user.id : navigator.userAgent);
			getFeaturedIndustries(companyType);
		} else {
			notification.error({
				message: 'GET CHARITY DETAILS',
				description: 'charityId is not valid'
			})
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const [selectedMethod, setMethod] = useState({
    donationMethod: 'donateMoney',
    paymentMethod: 'card'
  });

	return (
		<div>
			<section style={{ backgroundImage: "url(" + charity?.cover_image + ")" }} className="faq-banner charity-donation-banner gen-banner">
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
					data={charity}
					loading={loading}
					companyId={charityId}
					user={user}
          likeCompanyType={likeCompanyType}
          shareCompany={shareCompany}
					getCompanyDetails={getCharity}
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

				<section className="how-to-donate donate-money choose-method-wrap category-donate-sec">
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
                            getCompanyDetails={getCharity}
                            industryId={charityId}
                          /> :
                          <PaypalPayment
                            {...props}
                            getCompanyDetails={getCharity}
                            industryDetails={charity}
                            industryId={charityId}
                          />
                      }
                    </div> :
                    <UtilityBillPayment
                      {...props}
                      getCompanyDetails={getCharity}
                      loading={loading}
                      donationTypes={donationTypes}
                      industryId={charityId}
                    />
                }
              </div>
            </div>
          </div>
        </section>

				<FeaturedCompaniesForDonation
					data={featuredCharities}
					companyType={companyType}
				/>
			</Spin>
		</div>
	);
};

export default injectStripe(CharityDonate);
