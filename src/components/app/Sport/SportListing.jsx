

import React, { useEffect, useRef, useState } from 'react';
import MetaTags from 'react-meta-tags';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';
import CompanyListingsSection from '../../shared/CompanyListingsSection';
import SearchCompanySection from '../../shared/SearchCompanySection';

const SportListing = (props) => {
	const companyType = 'sport';
	const { location, user, setSearchFilter,getPledgeOfTheDay, sportListing, shareCompany, followCompanyType, history, getFeaturedCampaigns, setPage, getOrganizationListings, getStatesByPostCode, getSportListingsByPostcode } = props;
	const { filter, sport, pagination, featuredCampaigns, loading, states } = sportListing;
	
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
		getOrganizationListings(companyType, user && user.id ? user.id : navigator.userAgent);
		getFeaturedCampaigns(companyType);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps


	const getDataAndScrollToSection = (type, code) => {
		setCodePag(code);
		setTypePag(type);
		getSportListingsByPostcode(type, code);
		executeScroll();
	}

	const handleClear = () => {
		setCodePag("");
		setTypePag("");
	}

	return (
		<div className="poppin-wrap">
			<MetaTags>
				<meta name="description" content="our sports directory allows you to see which sports clubs you can donate to on our platform." />
			</MetaTags>
			<SearchCompanySection
				companyType={companyType}
				user={user}
				filter={filter}
				setSearchFilter={setSearchFilter}
				getCompanyTypeListings={getOrganizationListings}
				getCompanyListingsByPostcode={getDataAndScrollToSection}
				getStatesByPostCode={getStatesByPostCode}
				states={states}
				handleClear={handleClear}
			/>
			<section className="school-list-sec-2">
				<div className="container">
					<div className="gen-text-box iCause-Partners">
						<h4 className="marker-text">Sports club that you help</h4>
						<h3 className="heading sport-list-head">
						Take your club to the next level
							{/* Transforming how thousands of Australians fundraise for sports funding */}
							</h3>
						<p>
						If your local club is raising funds, icause is the perfect platform to make sure you meet your fundraising goals.
							{/* Give your Support to your local club. Your contribution will make a difference! */}
							</p>
						<p className="font-weight-bold">
						Fundraising with a difference
							{/* Sports Club Listing:  */}
							</p>
						<p className="font-weight-bold">
						What are you waiting for? Support your local club, it’s easy!
							{/* Get Started and search your Favourite Local Sport Club */}
							</p>
						<ul>
							<li>Enter your club’s name or postcode in the search bar above.</li>
							<li>Select your club’s page.</li>
							<li>Like, share, follow and comment.</li>
							<li>Invite friends, family, colleagues and ex alumni.</li>
							<li>Donate directly or send a note to your school.</li>
							<li>Set up monthly or once-off financial support.</li>
							{/* <li>Enter your Sports name or postcode.</li>
							<li>Select your sports club page </li>
							<li>Like, share, follow and comment. </li>
							<li>Donate Directly or Send a Note to the club.</li>
							<li>Set up monthly or once-off financial Support. </li> */}
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
					data={sport}
					loading={loading}
					companyType={companyType}
					user={user}
					history={history}
					shareCompany={shareCompany}
					type={typePag}
					code={codePag}
					followCompanyType={followCompanyType}
					getCompanyTypeListings={typePag && codePag ? getSportListingsByPostcode : getOrganizationListings}
				/>
			</div>
			<FeaturedCampaigns data={data} loading={loading} />
		</div>
	);
};

export default SportListing;
