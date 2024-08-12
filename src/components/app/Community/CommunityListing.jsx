

import React, { useEffect, useRef, useState } from 'react';
import MetaTags from 'react-meta-tags';
import CompanyListingsSection from '../../shared/CompanyListingsSection';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';
import SearchCompanySection from '../../shared/SearchCompanySection';

const CommunityListing = (props) => {
	const companyType = 'community';
	const { location, setPage, setSearchFilter, getPledgeOfTheDay, user, communityListings, getFeaturedCampaigns, shareCompany, followCompanyType, history, getCommunityListings, getCommunityListingsByPostcode, getStatesByPostCode } = props;
	const { filter, communities, pagination, featuredCampaigns, loading, states } = communityListings;
	
	
	// const [pledgeOfTheDayData] = pledgeOfTheDay || [];
	const { data } = featuredCampaigns || {};
	const { state } = location || {};
	const listRef = useRef(null);
	const [typePag, setTypePag] = useState("");
	const [codePag, setCodePag] = useState("");
	const executeScroll = () => listRef.current.scrollIntoView();

	useEffect(() => {
		setSearchFilter(state && state.keyword ? state.keyword : '');
		getPledgeOfTheDay();
		getCommunityListings(companyType, user && user.id ? user.id : navigator.userAgent);
		getFeaturedCampaigns(companyType);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps 

	const getDataAndScrollToSection = (type, code) => {
		setCodePag(code);
		setTypePag(type);
		getCommunityListingsByPostcode(type, code);
		executeScroll();
	}

	const handleClear = () => {
		setCodePag("");
		setTypePag("");
	}

	return (
		<div className="poppin-wrap">
			<MetaTags>
				<meta name="description" content="our community directory allows you to see which sports clubs you can donate to on our platform." />
			</MetaTags>
			<SearchCompanySection
				companyType={companyType}
				user={user}
				filter={filter}
				setSearchFilter={setSearchFilter}
				getCompanyTypeListings={getCommunityListings}
				getCompanyListingsByPostcode={getDataAndScrollToSection}
				getStatesByPostCode={getStatesByPostCode}
				states={states}
				handleClear={handleClear}
			/>
			<section className="school-list-sec-2">
				<div className="container">
					<div className="gen-text-box iCause-Partners">
						<h4 className="marker-text">community that you help</h4>
						<h3 className="heading">
						Support your local community
							{/* Charity Listing */}
							</h3>
						<p className="font-weight-bold">
						Fundraising with a difference
							{/* Get Started and search for the Charity you care about. */}
							</p>
							
							<p>Community is an important part of our daily lives, and sometimes, the local community needs our support. icause is the perfect platform to raise funds for your local community.</p>
						<p>What are you waiting for? Make a difference today, it’s easy!</p>
						<ul>
							<li>Enter your community’s name or postcode in the search bar above.</li>
							<li>Select your community’s page.</li>
							<li>Like, share, follow and comment.</li>
							<li>Invite friends, family, colleagues and community members.</li>
							<li>Donate directly or send a note to your school.</li>
							<li>Set up monthly or once-off financial support.</li>
							{/* <li>Enter your Charity name or postcode.</li>
							<li>Select your Charity page. </li>
							<li>Like, share, follow and comment. </li>
							<li>Donate Directly or Send a Note to the club.</li>
							<li>Set up monthly or once-off financial Support. </li> */}
							{/* <li>You can even send an inquiry directly to the club themself and they will reply back directly. </li>
							<li>Similar to a Facebook page, a community club can run a campaign from their own Icause page. </li> */}
						</ul>
						{/* <button className="btn btn-success my-2 my-sm-0 text-uppercase" type="submit" onClick={() => {
							history.push(
								`/donate-money/${pledgeOfTheDayData && pledgeOfTheDayData.id}`
							);
						}}>Donate Now</button> */}
					</div>
				</div>
			</section>
			<div ref={listRef} >
				<CompanyListingsSection
					setPage={setPage}
					pagination={pagination}
					data={communities}
					loading={loading}
					companyType={companyType}
					user={user}
					history={history}
					type={typePag}
					code={codePag}
					shareCompany={shareCompany}
					followCompanyType={followCompanyType}
					getCompanyTypeListings={typePag && codePag ? getCommunityListingsByPostcode : getCommunityListings}
				/></div>
			<FeaturedCampaigns data={data} loading={loading} />

		</div >
	);
};

export default CommunityListing;
