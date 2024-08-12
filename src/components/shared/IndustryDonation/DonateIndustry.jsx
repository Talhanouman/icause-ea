

import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import {
	injectStripe
} from 'react-stripe-elements';

import RecentCauses from './RecentCauses';
import CampaignDetails from '../../shared/CampaignDetails';
import CardPayment from './CardPayment';
import PaypalPayment from './PaypalPayment';
import UtilityBillPayment from './UtilityBillPayment'; 

const DonateIndustry = (props) => {
	const { getCampaignDetails, history, location, match, getRecentCauses, donateMoney } = props;
	const { campaignDetails, recentCauses, loadingForRecentCauses, loadingForCampaignDetails } = donateMoney;
	const { campaign_info } = campaignDetails || {};
	const { campaignDetails: campaign } = campaign_info || {};
	const limitedRecentCauses = recentCauses && recentCauses.length ? recentCauses.filter((value, index) => index <= 2) : [];
	const { params } = match || {};
	const campaignId = params && params.id ? Number(params.id) : null;
	const { state } = location || {};
	const { selectedMethods } = state || {};
	useEffect(() => {
		if (!(campaignId > 0)) {
			notification.error({
				message: 'GET CAMPAIGN DETAILS',
				description: `${campaignId || 'N/A'} is not a valid campaign id!`,
				duration: 5
			});
			history.push('/homepage');
		} else {
			getCampaignDetails(campaignId).then(({ payload }) => {
				const { campaignDetails } = payload;
				const { campaign_info } = campaignDetails;
				const { campaignDetails: campaign } = campaign_info;
				const { category } = campaign;
				getRecentCauses(category, campaignId);
			})
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps 

	const [selectedMethod, setMethod] = useState(selectedMethods && selectedMethods.length ? 
		{ 
			donationMethod: 'uploadUtilityBills', 
			paymentMethod: 'utilityBill' 
		} : 
		{
		donationMethod: 'donateMoney',
		paymentMethod: 'card'
	});

	return (
		<div>
			<CampaignDetails data={campaign} loading={loadingForCampaignDetails} />
			<section className="how-to-donate donate-money choose-method-wrap ">
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
												campaignId={campaignId}
											/> :
											<PaypalPayment
												{...props}
												campaignDetails={campaignDetails}
												campaignId={campaignId}
											/>
									}
								</div> : 
								<UtilityBillPayment 
									{...props}
									selectedMethods={selectedMethods}
									campaignId={campaignId}
								/>
							}
						</div>
					</div>
				</div>
			</section>
			<RecentCauses data={limitedRecentCauses} loading={loadingForRecentCauses} />
		</div>
	);
};

export default injectStripe(DonateIndustry);
