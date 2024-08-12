
import React, { useEffect, useRef, useState } from 'react';
import MetaTags from 'react-meta-tags';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';
import CompanyListingsSection from '../../shared/CompanyListingsSection';
import SearchCompanySection from '../../shared/SearchCompanySection';

const CharityListing = (props) => {
	const companyType = 'charity';
	const { location, setSearchFilter, getPledgeOfTheDay, charityListings, user, getFeaturedCampaigns, setPage, followCompanyType, shareCompany, getCharityListings, history, getStatesByPostCode, getCharityListingsByPostcode } = props;
	const { filter, charities, featuredCampaigns, loading, pagination, states } = charityListings;
	
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
		getCharityListings(companyType, user && user.id ? user.id : navigator.userAgent);
		getFeaturedCampaigns(companyType);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps 

	const getDataAndScrollToSection = (type, code) => {
		setCodePag(code);
		setTypePag(type);
		getCharityListingsByPostcode(type, code);
		executeScroll();
	}

	const handleClear = () => {
		setCodePag("");
		setTypePag("");
	}

	return (
		<div className="poppin-wrap">
			<MetaTags>
				<meta name="description" content="our charity directory allows you to see which charities you can donate to on our platform." />
			</MetaTags>
			<SearchCompanySection
				companyType={companyType}
				user={user}
				filter={filter}
				setSearchFilter={setSearchFilter}
				getCompanyTypeListings={getCharityListings}
				getCompanyListingsByPostcode={getDataAndScrollToSection}
				getStatesByPostCode={getStatesByPostCode}
				states={states}
				handleClear={handleClear}
			/>
			<section className="school-list-sec-2">
				<div className="container">
					<div className="gen-text-box iCause-Partners">
						<h4 className="marker-text">Support your favourite charity</h4>
						<h3 className="heading">
						Fundraising with a difference
							{/* Get Started and search for the Charity you care. */}
							</h3>
							<p>If you’re passionate about making a change through your favourite charity, icause is the perfect platform to support a cause that is important to you.</p>
					<p>What are you waiting for? Make a difference today, it’s easy!</p>
						<ul>
							<li>Enter your charity’s name or postcode in the search bar above.</li>
							<li>Select your charity’s page.</li>
							<li>Like, share, follow and comment</li>
							<li>Invite friends, family, colleagues and community members.</li>
							<li>Donate directly or send a note to your school.</li>
							<li>Set up monthly or once-off financial support.</li>
							
							{/* <li>Enter your Charity name or postcode. </li>
							<li>Select your Charity page. </li>
							<li>Like, share, follow and comment. </li>
							<li>Donate Directly or Send a Note to the club.</li>
							<li>Set up monthly or once-off financial Support. </li> */}
							{/* <li>You can even send an inquiry directly to the school themself and they will reply back directly. </li>
							<li>Similar to a Facebook page, a charity can run a campaign from their own Icause page. </li> */}
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
					history={history}
					pagination={pagination}
					data={charities}
					shareCompany={shareCompany}
					loading={loading}
					companyType={companyType}
					user={user}
					type={typePag}
					code={codePag}
					getCompanyTypeListings={typePag && codePag ? getCharityListingsByPostcode : getCharityListings}
					followCompanyType={followCompanyType}
				/></div>

			<FeaturedCampaigns data={data} loading={loading} />
		</div >
	);
};

export default CharityListing;
