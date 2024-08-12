import React, { useEffect, useRef, useState } from 'react';
import MetaTags from 'react-meta-tags';
import FeaturedCampaigns from '../../shared/FeaturedCampaigns';
import CompanyListingsSection from '../../shared/CompanyListingsSection';
import SearchCompanySection from '../../shared/SearchCompanySection';

const SchoolListing = (props) => {
	const companyType = 'school';
	const { location, setSearchFilter, user, getPledgeOfTheDay, schoolListing, history, getFeaturedCampaigns, setPage, followCompanyType, shareCompany, getSchoolListings, getStatesByPostCode, getSchoolListingsByPostcode } = props;
	const { filter, schools, featuredCampaigns, loading, pagination, states } = schoolListing;
	
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
		getSchoolListings(companyType, user && user.id ? user.id : navigator.userAgent);
		getFeaturedCampaigns(companyType);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps 

	const getDataAndScrollToSection = (type, code) => {
		setCodePag(code);
		setTypePag(type);
		getSchoolListingsByPostcode(type, code);
		executeScroll();
	}

	const handleClear = () => {
		setCodePag("");
		setTypePag("");
	}

	return (
		<div className="poppin-wrap">
			<MetaTags>
				<meta name="description" content="our school directory allows you too see which schools you can donate to on our platform." />
			</MetaTags>
			<SearchCompanySection
				companyType={companyType}
				user={user}
				filter={filter}
				setSearchFilter={setSearchFilter}
				getCompanyTypeListings={getSchoolListings}
				getCompanyListingsByPostcode={getDataAndScrollToSection}
				getStatesByPostCode={getStatesByPostCode}
				states={states}
				handleClear={handleClear}
			/>
			<section className="school-list-sec-2">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8 iCause-Partners">
							<div className="gen-text-box">
								<h4 className="marker-text">School that you help</h4>
								<h3 className="heading">
								Support your school’s fundraiser
									{/* Fundraising with a difference! */}
									</h3>
								<p>
								If you're planning a school fundraiser, icause is the perfect platform to engage your school community and meet your fundraising goals.
									{/* If you're planning a school fundraising, Icause is the perfect Platform to engage your school community and meet your fundraising goals. */}
									</p>
								<p className="font-weight-bold">
								Fundraising with a difference
									{/* School Listing: */}
									 </p>
								<p className="font-weight-bold">
								
								What are you waiting for? Support your local school, it’s easy!
									{/* Get Started and search your Favourite School */}
									</p>
								<ul>
									<li>Enter your school’s name or postcode in the search bar above.</li>
									<li>Select your school’s page.</li>
									<li>Like, share, follow and comment.</li>
									<li>Invite friends, family, colleagues and ex alumni.</li>
									<li>Donate directly or send a note to your school.</li>
									<li>
									Set up monthly or once-off financial support.
									</li>
									<li></li>
									{/* <li>Enter your School's name or postcode.</li>
									<li>Select your school page </li>
									<li>Like, share, follow and comment.</li>
									<li>Invite Friends, Family, colleagues and ex alumni's  </li>
									<li>Donate Directly or send a Note to your School. </li>
									<li>Set up monthly or once-off financial Support </li> */}
								</ul>
								{/* <button className="btn btn-success my-2 my-sm-0 text-uppercase" type="submit" onClick={() => {
									history.push(
										`/donate-money/${pledgeOfTheDayData && pledgeOfTheDayData.id}`
									);
								}}>Donate Now</button> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div ref={listRef} >
				<CompanyListingsSection
					setPage={setPage}
					pagination={pagination}
					data={schools}
					history={history}
					shareCompany={shareCompany}
					loading={loading}
					companyType={companyType}
					type={typePag}
					code={codePag}
					user={user}
					getCompanyTypeListings={typePag && codePag ? getSchoolListingsByPostcode : getSchoolListings}
					followCompanyType={followCompanyType}
				/>
			</div>
			<FeaturedCampaigns data={data} loading={loading} />
		</div>
	);
};

export default SchoolListing;
