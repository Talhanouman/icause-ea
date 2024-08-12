

import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { notification, Spin } from 'antd';
import {
	injectStripe
} from 'react-stripe-elements';

import FeaturedCompaniesForDonation from '../../shared/FeaturedCompaniesForDonation';
import CompanyDetailsDonateSection from '../../shared/CompanyDetailsDonateSection';

import CardPayment from '../../shared/IndustryDonation/CardPayment';
import PaypalPayment from '../../shared/IndustryDonation/PaypalPayment';
import UtilityBillPayment from '../../shared/IndustryDonation/UtilityBillPayment';

const CommunityDonate = (props) => {
	const companyType = 'community';
	const { match, getDonationTypes, getFeaturedIndustries, shareCompany, likeCompanyType, getCommunity, communityDonate, user, how_it_works } = props;
	const { community, donationTypes, loading, featuredCommunities } = communityDonate;
	const { params } = match || {};
	const communityId = params && params.id ? Number(params.id) : null;

	useEffect(() => {
		if (communityId) {
			getDonationTypes();
			getCommunity(communityId, user && user.id ? user.id : navigator.userAgent);
			getFeaturedIndustries(companyType);
		} else {
			notification.error({
				message: 'GET COMMUNITY DETAILS',
				description: 'communityId is not valid'
			})
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const [selectedMethod, setMethod] = useState({
    donationMethod: 'donateMoney',
    paymentMethod: 'card'
  });
	return (
		<div className="poppin-wrap">
			<MetaTags>
            	<meta name="description" content="Icause can assist your community in Australia with a fundraising campaign that makes a difference.  " />
     	 	</MetaTags>
			<section style={{ backgroundImage: "url(" + community?.cover_image + ")" }} className="faq-banner community-donation-banner gen-banner">
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
					data={community}
					loading={loading}
					companyId={communityId}
					user={user}
					shareCompany={shareCompany}
					likeCompanyType={likeCompanyType}
					getCompanyDetails={getCommunity}
				/>
				<section className="category-donate-sec-3">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<div className="category-donate-3-text">
									<p className="heading">How it works</p>
									<p dangerouslySetInnerHTML={{ __html: how_it_works }} />
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
														getCompanyDetails={getCommunity}
														industryId={communityId}
													/> :
													<PaypalPayment
														{...props}
														getCompanyDetails={getCommunity}
														industryDetails={community}
														industryId={communityId}
													/>
											}
										</div> :
										<UtilityBillPayment
											{...props}
											getCompanyDetails={getCommunity}
											loading={loading}
											donationTypes={donationTypes}
											industryId={communityId}
										/>
								}
							</div>
						</div>
					</div>
				</section>
				<FeaturedCompaniesForDonation
					data={featuredCommunities}
					companyType={companyType}
				/>
			</Spin>
		</div>
	);
};

export default injectStripe(CommunityDonate);
