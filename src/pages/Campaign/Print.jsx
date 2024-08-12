import React, { useEffect, useState } from 'react';
import { notification, Spin, Button, Rate, Switch } from 'antd';
import { orderBy } from 'lodash';
import moment from 'moment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ShareCampaignModal from '../../components/shared/ShareCampaignModal';
import ReviewCampaignModal from '../../components/app/Campaign/ReviewCampaignModal';
import { imageURL } from '../../../src/constants/constants';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import * as actions from '../../actions/campaign/campaignDetails';

function Print(props) {
    useEffect(()=>{
        window.print()
    },[])

   const { campaignDetails, user, likeCompanyType, followCompanyType } = props;
	const [isSwitchEnabled, setSwitch] = useState(false);
	const [isDonationsViewExpanded, setDonationsViewExpanded] = useState(false);
	const [isCommentsViewExpanded, setCommentsViewExpanded] = useState(false);
	const [isDonationsSorted, setDonationSort] = useState(false);
	const [comment, setComment] = useState('');
	const [isShareModalVisible, setShareModalVisibility] = useState(false);
	const [isReviewsModalVisible, setReviewModalVisibility] = useState(false);
	const [isDescriptionExpanded, setDescriptionExpansion] = useState(false);
	const [isReviewsExpanded, setReviewsExpansion] = useState(false);
	const currentUrl = window.location.href;

	const { comments, reviews, campaign, loading, loadingForRecentCauses } = campaignDetails || {};

	const { recentCauses } = campaignDetails || [];
	const { match, location, history, getRecentCauses, anonymosulyPostCommentForCampaign, postCommentForCampaign, getReviewsForCampaigns, getCommentsForCampaigns, getCampaignDetails } = props;
	const { campaign_info } = campaign || {};

	const { campaignDetails: campaignDetail, donations, userDetails } = campaign_info || {};
	const { donations: actualDonations } = donations || {};

	const { weeks_left, shares, likeCount, cover_photo, funded, amount, title, id, progress, story, short_story,qr_url,photo1 } = campaignDetail || {};

	const { first_name, last_name, address } = userDetails || {};
	const { params } = match || {};
	const campaignId = params && params.id ? Number(params.id) : null;

	const { isLiked, isFollowed } = campaignDetails?.campaign?.campaign_info?.campaignDetails || {}

	const formattedShortStory = story ? ((story.length >= 400 && (!isDescriptionExpanded)) ? `${story.substring(0, 400)}...` : story) : 'N/A';
	let campaignCoverPhoto = `${imageURL}Trending-img-2.png`;
	// let authorAvatar = '/images/user-icon.png';
	if (cover_photo) {
		campaignCoverPhoto = `${cover_photo}`;
	}
	// if (avatar) {
	// 	authorAvatar = `${process.env.REACT_APP_BACKEND_BASE_URL}${avatar}`;;
	// }
	let formattedDonations = actualDonations || [];
	let formattedComments = comments || [];
	let formattedReviews = reviews || [];

	if (isDonationsSorted) {
		formattedDonations = orderBy(formattedDonations, ({ amount }) => Number(amount), ['desc']);
	}

	if (!isDonationsViewExpanded) {
		formattedDonations = formattedDonations && formattedDonations.length && formattedDonations.filter((donation, index) => index <= 4);
	}
	if (!isCommentsViewExpanded) {
		formattedComments = formattedComments && formattedComments.length && formattedComments.filter((comments, index) => index <= 3);
	}
	if (!isReviewsExpanded) {
		formattedReviews = formattedReviews && formattedReviews.length && formattedReviews.filter((reviews, index) => index <= 3);
	}

	useEffect(() => {
		if (campaignId) {
			getCampaignDetails(campaignId, user?.id).then(({ payload }) => {
				const { campaign } = payload || {};
				const { campaign_info } = campaign || {};
				const { campaignDetails } = campaign_info || {};
				const { category } = campaignDetails || {};
				getRecentCauses(category, campaignId);
			})
			getCommentsForCampaigns(campaignId);
			getReviewsForCampaigns(campaignId);
		} else {
			notification.error({
				message: 'GET CAMPAIGN DETAILS',
				description: 'CampaignId is not valid'
			})
		}
	}, [user.id]); // eslint-disable-line react-hooks/exhaustive-deps

	const copyToClipBoard = () => {
		var copyText = document.getElementById("myInput");
		copyText.select();
		copyText.setSelectionRange(0, 99999)
		document.execCommand("copy");
	}


	const likeCompany = (props, id, isLiked, user, companyType) => {
		likeCompanyType(id, isLiked, companyType, user && user.id ? user.id : navigator.userAgent).then(() => {
			getCampaignDetails(campaignId, user?.id);
		});
	};


	const followCompany = (props, id, isFollowed, user, companyType) => {
		followCompanyType(id, isFollowed ? 'unfollow' : 'follow', companyType, user && user.id ? user.id : navigator.userAgent).then(() => {
			getCampaignDetails(campaignId, user?.id);
		});
	};

	const [appUrl] = window.location.href.split('campaign-details');


	return (
		<>
			<Helmet>
				<title>Campaigns</title>
				<meta name="description" content={short_story} />
				<meta name="twitter:card" content={short_story} />
				<meta name="twitter:site" content={short_story} />
				<meta name="twitter:creator" content={short_story} />
				<meta name="twitter:title" content="Campaigns" />
				<meta name="twitter:description" content={short_story} />
				<meta name="twitter:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
				<meta property="og:title" content="Campaigns" />
				<meta property="og:description" content={short_story} />
				<meta property="og:image" content="https://icause.s3.us-east-2.amazonaws.com/app_images/logo.png" />
			</Helmet>
			<div className="cam-det-pg-wrap campgion-det-breadcrum">
				<div className="c-breadcrumb">
					<div className="container">
						<ul>
							<li><a href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="12.994" height="12.006" viewBox="0 0 12.994 12.006">
								<path id="Forma_1" data-name="Forma 1" d="M122.834,116.855a.573.573,0,0,0-.051-.846l-5.807-4.849a.75.75,0,0,0-.944.01l-5.827,5.1a.569.569,0,0,0-.028.845l.146.145a.659.659,0,0,0,.875.064l.436-.372V122.4a.62.62,0,0,0,.634.605h2.271a.62.62,0,0,0,.634-.605v-3.812h2.9V122.4a.584.584,0,0,0,.6.6h2.407a.62.62,0,0,0,.634-.6v-5.372l.268.225c.148.124.459.025.695-.223Z" transform="translate(-110.003 -110.997)" fill="#d3d3d3" />
							</svg>
							</a></li>
							<li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 8 17">
								<text id="_" data-name="&gt;" transform="translate(4 13)" fill="#a59c9c" font-size="12" font-family="Poppins-Regular, Poppins"><tspan x="-3.234" y="0">&gt;</tspan></text>
							</svg>
							</li>
							<li><a href="#!">Cause No 1342</a></li>
						</ul>
					</div>
				</div>
				<Spin spinning={loading}>
					<section className="pledge-of-the-day bg-white campaignSec1">
						<div className="container">
							<div className="row" id="compaign">
								<div className="col-lg-7 col-md-12 col-sm-12">
									<div className="campaignSec1-left-img">
										<img className="img-fluid w-100 mb-4 mb-md-0" src={campaignCoverPhoto} alt="" />
									</div>
									<div className="campaignSec1-left">
										<p className="case">CAUSE NO {id}</p>
										<p className="title">{title}</p>
										<div className="progress-outer-wrap">
											<div className="progres progress-wrap">
												<div className="progress-inner">
													<div className="progress-bar" role="progressbar" style={{ width: progress }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="progress-info">
												<h4 style={{ color: '#28a745' }}><span className='mr-1'>Raised:</span>${funded}</h4>
												<h4><span className='mr-1'>Goal:</span>${amount}</h4>
											</div>
										</div>
										<div className="campaign-detail">
											<p className="quote">“{short_story}”</p>
											<p>{formattedShortStory}</p>
											{/* {
												formattedShortStory && formattedShortStory.length && formattedShortStory.length >= 100 &&
												<button onClick={() => setDescriptionExpansion(!isDescriptionExpanded)} style={{ border: '0px solid', background: 'none' }} className="readmore">
													{isDescriptionExpanded ? 'Read Less' : 'Read More'}
													<i className={isDescriptionExpanded ? 'fa fa-arrow-circle-up' : 'fa fa-arrow-circle-down'}></i>
												</button>
											} */}
											{/* <div>
												<input style={{ height: "40px", border: "unset" }} type="text" value={currentUrl} id="myInput" className="url-input" />&nbsp;&nbsp;
												<button style={{
													width: "100px", height: "43px", background: "#3cb64f", border: "unset", color: "#fff"
												}} onClick={copyToClipBoard}><FileCopyIcon /> Copy</button>
											</div> */}



											<div className="author">
												<div className="desc">
													<div className="img">
														<svg xmlns="http://www.w3.org/2000/svg" width="18.309" height="21.896" viewBox="0 0 18.309 21.896">
															<g id="Component_51_1" data-name="Component 51 – 1" transform="translate(0.754)">
																<rect id="Rectangle_1767" data-name="Rectangle 1767" width="11" height="14" rx="5.5" transform="translate(3.531)" fill="#3cb64f" />
																<path id="Path_36603" data-name="Path 36603" d="M2947.6-22057s7.6-8.4,16.8,0" transform="matrix(1, 0.017, -0.017, 1, -3332.099, 22023.051)" fill="none" stroke="#3cb64f" stroke-linecap="round" stroke-width="2" />
															</g>
														</svg>


														{/* <img className="" src={authorAvatar} alt="author" /> */}
													</div>
													<div className="name">
														<p>By {`${first_name} ${last_name}`}</p>
														<p>{address}</p>
													</div>
												</div>
												<div className="socials">
													<ul style={{
														display:'flex',
														justifyContent:'center',
														alignItems:'center'
													}} className="align-items-center">
														<li><p className="m-0">Share</p></li>

														<li style={{marginLeft:10, cursor:'pointer'}} onClick={() => {
															const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl + `campaign-detail/${campaignId}`;
															window.open(pageUrl, '_blank');
														}}><i className="fa fa-facebook"></i></li>
														{/* <li><FacebookShareButton openShareDialogOnClick={true} url={'https://github.com/'} > <FacebookIcon size={32} round={true} /></FacebookShareButton></li> */}
														<li style={{marginLeft:10, cursor:'pointer'}} onClick={() => {
															const pageUrl = 'http://www.twitter.com/share?url=' + appUrl + `campaign-detail/${campaignId}`;
															window.open(pageUrl, '_blank');
														}}><i className="fa fa-twitter"></i></li>
														{/* <li><a href="/homepage"><i className="fab fa-instagram" aria-hidden="true"></i>&nbsp;</a></li>
														<li><a href="/homepage"><i className="fa fa-youtube" aria-hidden="true"></i>&nbsp;</a></li> */}
														<li style={{marginLeft:10, cursor:'pointer'}} onClick={() => {
															const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl + `news-detail/${campaignId}`;
															window.open(pageUrl, '_blank');
														}}><i className="fab fa-linkedin-in" aria-hidden="true"></i>&nbsp;</li>
													</ul>
												</div>
											</div>
										</div>

										{/* <div className='campaignSec1-text px-md-5 mt-4'>
											<div className="btns-wrap">
												<button onClick={() => history.push(`/donate-money/${id}`)} type="button" className="btn-success">
													<img src={`${imageURL}donate-icon.png`} alt="icon" className="img-fluid" />
													DONATE NOW
												</button>
												<button onClick={() => setShareModalVisibility(true)} type="button" className=""><img src={`${imageURL}share-icon.png`} alt="icon" className="img-fluid" />SHARE</button>
											</div>
										</div> */}

										{/* <div className="comments-wrap">
											<p className="title">Comments <span>({comments && comments.length ? comments.length : 0})</span></p>
											<form>
												<ul className="list-unstyled">
													<li className="media mb-4">
														<div className="icon">
															<img src={`${imageURL}user-icon-2.png`} alt="icon" className="img-fluid" />
														</div>
														<div className="media-body">
															<input type="text" value={comment} className="form-control" onChange={({ target }) => setComment(target.value)} placeholder="Write your comment here" />
														</div>
													</li>
												</ul>
												<div className="form-row align-items-center mx-0">
													<div className="form-group col-sm-6 pl-0">
														<div className="custom-control custom-switch">
									
															<div>
																<Switch onChange={() => setSwitch(!isSwitchEnabled)} checked={isSwitchEnabled} />
																<span style={{ fontSize: 16, marginLeft: 10 }}>
																	Post anonymously
																</span>
															</div>
														</div>
													</div>
													<div className="form-group col-sm-6 text-right btn-mbl-align m">
														<Button
															onClick={() => {
																if ((user && user.id) && (!isSwitchEnabled)) {
																	postCommentForCampaign(campaignId, comment).then(() => {
																		getCommentsForCampaigns(campaignId);
																		setComment('');
																	});
																} else if (!isSwitchEnabled) {
																	notification.warning({
																		message: 'POST COMMENT',
																		description: 'You need to login to continue'
																	})
																	history.push({
																		pathname: '/auth/login',
																		state: { redirectUrl: location.pathname }
																	});
																} else if (isSwitchEnabled) {
																	anonymosulyPostCommentForCampaign(campaignId, comment).then(() => {
																		getCommentsForCampaigns(campaignId);
																		setComment('');
																		setSwitch(false);
																	});
																}
															}}
															style={{ color: 'white' }}
															disabled={!(comment.length)}
															className="btn btn-success px-4 post-btn">
															Post comment
														</Button>
													</div>
												</div>
											</form>
											<ul style={comments && comments.length && comments.length > 4 ? { height: '534px', overflowY: 'auto' } : {}} className="list-unstyled older-comments">
												{
													formattedComments && formattedComments.length ? formattedComments.map(({ userName, body, created_at, avatar }, index) => {
														let cover = `${imageURL}user-icon-2.png`;
														if (avatar) {
															cover = `${avatar}`;
														}
														return <li key={index} className="media">
															<div className="icon">
																<img src={cover} alt="icon" className="img-fluid" />
															</div>
															<div className="media-body">
																<h6 className="mt-0 mb-3">{userName} - <span>{moment(created_at).fromNow()}</span></h6>
																<p className="mb-2">{body}</p>
															</div>
														</li>;
													}) : ''
												}
											</ul>
											{
												comments && comments.length && comments.length > 4 ?
													<div className="text-center">
														<button type="button" onClick={() => setCommentsViewExpanded(!isCommentsViewExpanded)} className="view-more">
															{isCommentsViewExpanded ? 'VIEW LESS' : 'VIEW MORE'}
														</button>
													</div> : ''
											}
										</div> */}
									</div>
								</div>
								<div className="col-lg-5 col-md-12 col-sm-12">
									<div className="campaignSec1-text">
										{/* <div className="btns-wrap">
											<button onClick={() => history.push(`/donate-money/${id}`)} type="button" className="btn-success">
												<img src={`${imageURL}donate-icon.png`} alt="icon" className="img-fluid" />
												DONATE NOW
											</button>
											<button onClick={() => setShareModalVisibility(true)} type="button" className=""><img src={`${imageURL}share-icon.png`} alt="icon" className="img-fluid" />SHARE</button>
										</div> */}
										<div className="donation-info-wrap">
											<div className="donation-info-box">
												<h3>${funded} raised</h3>
												<h4>of ${amount} goal</h4>
											</div>
											<ul style={{ marginBottom: 0 }} className="donation-stats-box">
												<li>
													<h4>{likeCount}</h4>
													<h5>Supporter</h5>
												</li>
												<li>
													<h4>{shares}</h4>
													<h5>Shares</h5>
												</li>
												<li>
													<h4>{weeks_left > 0 ? weeks_left : 0}</h4>
													<h5>Weeks Left</h5>
												</li>
											</ul>
                                            <div className='qrcode-card'>
                <div className='card' >
              
                  <h6 className='font-weight-bold text-center'>Scan QR Code</h6>
                  <img  className='qr-img mt-5 mb-5' src={qr_url}></img>
                </div>
              </div>
											{/* <div className="btns-wrap btns-wrap-2 mt-4">
												<button
													style={{ backgroundColor: 'transparent', color: "#3cb64f" }}
													onClick={() => user && user.id ? likeCompany(props, id, isLiked ? 'dislike' : 'like', user, "campaign") : history.push("/auth/login")}
													type="button">
													<svg style={{ marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="19.2" height="18" viewBox="0 0 19.2 18">
														<g id="like_3_" data-name="like (3)" transform="translate(0 -0.75)">
															<path id="Path_2376" data-name="Path 2376" d="M1.4,20h2a1.4,1.4,0,0,0,1.4-1.4V9.4A1.4,1.4,0,0,0,3.4,8h-2A1.4,1.4,0,0,0,0,9.4v9.2A1.4,1.4,0,0,0,1.4,20Z" transform="translate(0 -1.45)" fill="#3cb64f" />
															<path id="Path_2377" data-name="Path 2377" d="M11.725.75c-.8,0-1.2.4-1.2,2.4,0,1.9-1.841,3.43-3.025,4.218v9.91a18.647,18.647,0,0,0,7.825,1.471H16.6a3.2,3.2,0,0,0,3.152-2.656l.9-5.2A3.2,3.2,0,0,0,17.5,7.15H13.725a7.725,7.725,0,0,0,.6-3.2,2.938,2.938,0,0,0-2.6-3.2Z" transform="translate(-1.5)" fill="#3cb64f" />
														</g>
													</svg>
													{isLiked ? 'Unlike' : 'Like'}
												</button>
												<button
													onClick={() => user && user.id ? followCompany(props, id, isFollowed, user, "campaign") : history.push("/auth/login")}
													type="button">
													<svg style={{ marginRight: 10 }} fill={isFollowed ? 'red' : ''} xmlns="http://www.w3.org/2000/svg" width="19.104" height="16.996" viewBox="0 0 19.104 16.996">
														<path id="heart" d="M17.589,1.663A5.137,5.137,0,0,0,13.767,0a4.806,4.806,0,0,0-3,1.036A6.141,6.141,0,0,0,9.552,2.3,6.138,6.138,0,0,0,8.339,1.036,4.805,4.805,0,0,0,5.337,0,5.137,5.137,0,0,0,1.516,1.663,5.971,5.971,0,0,0,0,5.741,7.11,7.11,0,0,0,1.9,10.4a40.4,40.4,0,0,0,4.743,4.452c.657.56,1.4,1.195,2.176,1.871a1.121,1.121,0,0,0,1.477,0c.773-.676,1.519-1.312,2.176-1.872A40.38,40.38,0,0,0,17.209,10.4,7.11,7.11,0,0,0,19.1,5.741a5.971,5.971,0,0,0-1.515-4.078Zm0,0" transform="translate(0)" />
													</svg>
													{isFollowed ? 'UnFollow' : 'Follow'}
												</button>
											</div> */}
											{/* <div className="people-donated-box">
												<div className="head">
													<h6>People just donated <span>({actualDonations && actualDonations.length ? actualDonations.length : 0})</span></h6>
												</div>
												<div style={actualDonations && actualDonations.length && actualDonations.length > 1 ? { height: '473px', overflowY: 'auto' } : {}} className="box-body">
													<ul className="nav nav-tabs" id="donationTab" role="tablist">
														<li onClick={() => setDonationSort(false)} className="nav-item" role="presentation">
															<a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
														</li>
														<li onClick={() => setDonationSort(true)} className="nav-item" role="presentation">
															<a className="nav-link" id="top-tab" data-toggle="tab" href="#top" role="tab" aria-controls="top" aria-selected="false">Top Donations</a>
														</li>
													</ul>
													<div className="tab-content" id="donationTabContent">
														<div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
															<ul>
																{
																	formattedDonations && formattedDonations.length ?
																		formattedDonations.map(({ name, created_at, amount, avatar }, index) => {
																			let cover = `${imageURL}user-icon.png`;
																			if (avatar) {
																				cover = `${avatar}`;
																			}
																			return (
																				<li key={index}>
																					<div className="name"><img style={{ height: '34px', width: '34px' }} src={cover} alt="icon" className="img-fluid" /><p>{`${name || ''}`}</p></div>
																					<div className="price"><p>${amount} - <span>{moment(created_at).fromNow()}</span></p></div>
																				</li>
																			);
																		}) : ''
																}
															</ul>
															{
																actualDonations && actualDonations.length && actualDonations.length > 5 ?
																	<div className="text-center">
																		<button type="button" onClick={() => setDonationsViewExpanded(!isDonationsViewExpanded)} className="view-more">
																			{isDonationsViewExpanded ? 'VIEW LESS' : 'VIEW MORE'}
																		</button>
																	</div> : ''
															}
														</div>
														<div className="tab-pane fade" id="top" role="tabpanel" aria-labelledby="top-tab">
															<ul>
																{
																	formattedDonations && formattedDonations.length ?
																		formattedDonations.map(({ name, amount, id, avatar }, index) => {
																			return (
																				<li key={index}>
																					<div className="name"><img src={`${imageURL}user-icon.png`} alt="icon" className="img-fluid" /><p>{name}</p></div>
																					<div className="price"><p>${amount} -<span>1 hr</span></p></div>
																				</li>
																			);
																		}) : ''
																}
															</ul>
															{
																actualDonations && actualDonations.length && actualDonations.length > 4 ?
																	<div className="text-center">
																		<button type="button" onClick={() => setDonationsViewExpanded(!isDonationsViewExpanded)} className="view-more">
																			{isDonationsViewExpanded ? 'VIEW LESS' : 'VIEW MORE'}
																		</button>
																	</div> : ''
															}
														</div>
													</div>
												</div>
											</div> */}

											{/* <div className="people-commented-box">
												<div className="head">
													<h6>
														People Reviews
														<span>({reviews && reviews.length ? reviews.length : 0})</span>
														<button onClick={() => setReviewModalVisibility(true)} style={{ float: 'right' }} type="button" className="view-more">
															ADD
														</button>
													</h6>
												</div>
												<div className="box-body">
													<ul style={reviews && reviews.length && reviews.length > 4 ? { height: '534px', overflowY: 'auto' } : {}}>
														{
															formattedReviews && formattedReviews.length ?
																formattedReviews.map(({ rating, text, title, avatar, created_at, from }, index) => {
																	let cover = `${imageURL}user-icon-2.png`;
																	if (avatar) {
																		cover = `${avatar}`;
																	}
																	return (
																		<li key={index}>
																			<div className="img">
																				<img src={cover} alt="icon" className="img-fluid" />
																			</div>
																			<div className="text">
																				<h5>{from} - <span>{moment(created_at).fromNow()}</span></h5>
																				<div className="rating">
																					<Rate disabled value={rating} />
																				</div>
																				<p className="bold">{title}</p>
																				<p>{text}</p>
																			</div>
																		</li>
																	);
																}) : ''
														}
													</ul>
													{
														reviews && reviews.length && reviews.length > 4 ?
															<div className="text-center">
																<button onClick={() => setReviewsExpansion(!isReviewsExpanded)} type="button" className="view-more">
																	{isReviewsExpanded ? 'VIEW LESS' : 'VIEW MORE'}
																</button>
															</div> : ''
													}

												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <section className="trending-causes bg-gray campaignSec2 trending-card-2">
						<div className="container">
							<h3 className="main-heading text-center sm-title pt-4">Help them for hapiness!</h3>
							<h2 className="main-heading text-center bg-title">Recent Causes</h2>
							<Spin spinning={loadingForRecentCauses}>
								{
									recentCauses && recentCauses.length ?
										<OwlCarousel className="owl-carousel owl-theme campaignTrendingCards" margin={30} dots={false} responsive={{ 0: { items: 1 }, 525: { items: 2 }, 880: { items: 3 }, }} nav={false}>
											{
												recentCauses.map(({ id, story, cover_photo: coverPhoto, address, end_date, deadline, title, progress, amount }, index) => {
													const daysGone = deadline ? `${Math.abs(moment(deadline).diff(moment(), 'days'))} days left` : 'N/A';
													const formattedAddress = address ? (address.length >= 35 ? `${address.substring(0, 30)}...` : address) : 'N/A';
													const formattedStory = story ? (story.length >= 40 ? `${story.substring(0, 40)}...` : story) : 'N/A';
													const formattedTitle = title ? (title.length >= 25 ? `${title.substring(0, 23)}...` : title) : 'N/A';
													let cover = `${imageURL}become-partner-4-img-1.png`;
													if (coverPhoto) {
														cover = `${coverPhoto}`;
													}
													return <div key={index} className="card trending-cause-card">
														<div className="img">
															<img src={cover} className="img-fluid" alt="" />
															<a href="#!" onClick={() => {
																history.push(
																	{
																		pathname: `/donate-money/${id}`,
																		state: {
																			type: "campaign"
																		}
																	}
																);
															}} style={{ textAlign: 'center', paddingTop: 14 }} className="donate-btn">DONATE NOW</a>
														</div>
														<div className="desc">
															<div className="text-card"> <span>{formattedAddress}</span> <span>{daysGone}</span> </div>
															<a style={{ color: 'black' }} href={`/campaign-details/${id}`}>
																<h1>{formattedTitle}</h1>
																<p>{formattedStory}</p>
																<div className="text-card m-0"> <span>Last donation</span> <span>{end_date ? moment(end_date).fromNow() : ''}</span> </div>
																<div className="progres">
																	<div className="progress-inner">
																		<div className="progress-bar" role="progressbar" style={{ width: `${progress || 0}` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
																	</div>
																	<div className="treanding-cause-bottom">
																		<h4 className="left-text-s"><span>Raised</span>${amount}</h4>
																		<h4 className="left-right-s">{progress}</h4>
																	</div>
																</div>
															</a>
														</div>
													</div>
												})
											}
										</OwlCarousel> : ''
								}
							</Spin>
						</div>
					</section> */}
				</Spin>
			
			</div>
		</>
	);
}

export default connect(({ campaign, user }) => ({ campaignDetails: campaign.campaignDetails, user }), actions)(Print)