
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

const SportDonate = (props) => {
	const companyType = 'organization';
	const { match, getDonationTypes, getFeaturedIndustries, shareCompany, likeCompanyType, getOrganization, sportDonate, user } = props;
	const { sport, loading, organization, donationTypes, featuredOrganizations } = sportDonate;
	const { params } = match || {};
	const organizationId = params && params.id ? Number(params.id) : null;

	useEffect(() => {
		if (organizationId) {
			getDonationTypes();
			getOrganization(organizationId, user && user.id ? user.id : navigator.userAgent);
			getFeaturedIndustries(companyType);
		} else {
			notification.error({
				message: 'GET ORGANIZAION DETAILS',
				description: 'organizationId is not valid'
			})
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const [selectedMethod, setMethod] = useState({
    donationMethod: 'donateMoney',
    paymentMethod: 'card'
  });

	return (
		<div className="poppin-wrap">
			<section  style={{backgroundImage: "url(" + organization?.cover_image + ")"}} className="faq-banner organization-donate-banner gen-banner">
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
					data={sport}
					loading={loading}
					companyId={organizationId}
					user={user}
          shareCompany={shareCompany}
          likeCompanyType={likeCompanyType}
					getCompanyDetails={getOrganization}
				/>

				<section className="category-donate-sec-3">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<div className="category-donate-3-text">
									<p className="heading">How it works</p>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
									<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
								</div>
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
                            getCompanyDetails={getOrganization}
                            industryId={organizationId}
                          /> :
                          <PaypalPayment
                            {...props}
                            getCompanyDetails={getOrganization}
                            industryDetails={sport}
                            industryId={organizationId}
                          />
                      }
                    </div> :
                    <UtilityBillPayment
                      {...props}
                      getCompanyDetails={getOrganization}
                      loading={loading}
                      donationTypes={donationTypes}
                      industryId={organizationId}
                    />
                }
              </div>
            </div>
          </div>
        </section>
				<FeaturedCompaniesForDonation
					data={featuredOrganizations}
					companyType={companyType}
				/>

			</Spin>
		</div>
	);
};

export default injectStripe(SportDonate);
