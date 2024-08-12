

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
import { useHistory } from 'react-router';
import {getQueryParamFromURL} from '../../../utils/helpers'
const DonateMoney = (props) => {
	const { getCampaignDetails, location, match, getRecentCauses, donateMoney, getUser, user } = props;
	const { campaignDetails, recentCauses, loadingForRecentCauses, loadingForCampaignDetails } = donateMoney;
	const { campaign_info } = campaignDetails || {};
	const { campaignDetails: campaign } = campaign_info || {};
	const limitedRecentCauses = recentCauses && recentCauses.length ? recentCauses.filter((value, index) => index <= 2) : [];
	const { params } = match || {};
	const campaignId = params && params.id ? Number(params.id) : null;
	const { state } = location || {};
	const { selectedMethods } = state || {};
	const history = useHistory();

	useEffect(() => {
		let api_token = getQueryParamFromURL.api_token;
		let campaignID = getQueryParamFromURL.campaignID;
		if (!(campaignId > 0) && !campaignID) {
			notification.error({
				message: 'GET CAMPAIGN DETAILS',
				description: `${campaignId || 'N/A'} is not a valid campaign id!`,
				duration: 5
			});
			history.push('/homepage');
		} else {
			if(campaignID){
				getCampaignDetails(campaignID).then(async ({ payload }) => {

					if(!user.id && api_token){
						api_token && await getUser(api_token)
					}
					const { campaignDetails } = payload;
					const { campaign_info } = campaignDetails;
					const { campaignDetails: campaign } = campaign_info;
					const { category } = campaign;
					getRecentCauses(category, campaignID);
				})
			}
			else{
				getCampaignDetails(campaignId).then(({ payload }) => {
					const { campaignDetails } = payload;
					const { campaign_info } = campaignDetails;
					const { campaignDetails: campaign } = campaign_info;
					const { category } = campaign;
					getRecentCauses(category, campaignId);
				})
			}
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
		<div className="donate-money-pg-wrap">
			<CampaignDetails data={campaign} loading={loadingForCampaignDetails} />
			<section className="how-to-donate donate-money choose-method-wrap ">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<ul className="nav nav-pills nav-fill top-tabs">
								<li onClick={() => setMethod({ donationMethod: 'uploadUtilityBills', paymentMethod: 'utilityBill' })} className="nav-item">
									<div style={{ cursor: 'pointer' }} className={selectedMethod.donationMethod === 'uploadUtilityBills' ? 'nav-link active' : 'nav-link'}>
									Upload your bill
										{/* Upload utility bill */}
										</div>
								</li>
								<li onClick={() => setMethod({ donationMethod: 'donateMoney', paymentMethod: 'card' })} className="nav-item">
									<div style={{ cursor: 'pointer' }} className={selectedMethod.donationMethod === 'donateMoney' ? 'nav-link active' : 'nav-link'}>
									Donate now
										{/* Donate Money */}
										</div>
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
												getCampaignDetails={getCampaignDetails}
											/> :
											<PaypalPayment
												{...props}
												campaignDetails={campaignDetails}
												campaignId={campaignId}
												getCampaignDetails={getCampaignDetails}
											/>
									}
								</div> : 
								<UtilityBillPayment 
									{...props}
									getCampaignDetails={getCampaignDetails}
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

export default injectStripe(DonateMoney);
