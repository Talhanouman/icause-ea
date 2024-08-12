import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import AppLayout from '../layouts/AppLayout';

import Homepage from '../pages/Homepage';
import CampaignListings from '../pages/Campaign/CampaignListings';
import SearchedCampaign from '../pages/Campaign/SearchedCampaign';
import CampaignDetails from '../pages/Campaign/CampaignDetails';
import DetailsList from '../pages/DetailsList';
import DonateMoney from '../pages/DonateMoney';
import BlogDetails from '../pages/Blogs/BlogDetails';
import Blogs from '../pages/Blogs/Blogs';
import GuestBlog from '../pages/GuestBlog';
import Crowdfunding from '../pages/Crowdfunding';
import SubCategoryDetails from '../pages/Category/SubCategoryDetails';
import CategoryListing from '../pages/Category/CategoryListing';
import SubCategory from '../pages/Category/SubCategory';
import OtherCategory from '../pages/Category/OtherCategory';
import EventManager from '../pages/Events/EventManager';
import EventLearnMore from '../pages/Events/EventLearnMore';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Guarantee from '../pages/Guarantee';
import School from '../pages/School/School';
import SchoolDetails from '../pages/School/SchoolDetails';
import SchoolLearnMore from '../pages/School/SchoolLearnMore';
import SchoolDonate from '../pages/School/SchoolDonate';
import CharityDetails from '../pages/Charity/CharityDetails';
import CharityLearnMore from '../pages/Charity/CharityLearnMore';
import CommunityDetail from '../pages/Community/CommunityDetail';
import SportDetail from '../pages/Sport/SportDetail';
import SportLearnMore from '../pages/Sport/SportLearnMore';
import WhyIcause from '../pages/WhyIcause';
import Faq from '../pages/Faq';
import News from '../pages/News';
import NewsDetail from '../pages/NewsDetail';
import Security from '../pages/Security';
import BecomeApartner from '../pages/BecomeApartner';
import BecomeAnInvestor from '../pages/BecomeAnInvestor';
import Career from '../pages/Career';
import EventDetails from '../pages/EventDetails';
import SchoolListing from '../pages/School/SchoolListing';

import Sport from '../pages/Sport/Sport';
import SportListing from '../pages/Sport/SportListing';
import SportDonate from '../pages/Sport/SportDonate';

import Charity from '../pages/Charity/Charity';
import CharityListing from '../pages/Charity/CharityListing';
import Community from '../pages/Community/Community';
import CommunityListing from '../pages/Community/CommunityListing';
import CharityDonate from '../pages/Charity/CharityDonate';
import CommunityDonate from '../pages/Community/CommunityDonate';

import EnvironmentDetail from '../pages/EnvironmentDetail';
import TravelDetail from '../pages/TravelDetail';
import FaithDetail from '../pages/FaithDetail';
import Sitemap from '../pages/Sitemap';
import NotFound from '../pages/NotFound';
import ScrollToTopMove from '../utils/helpers'

import Loader from '../components/customComponents/Loader';
import ReactPixel from 'react-facebook-pixel';

import * as actions from '../actions/user';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CommunityLearMore from '../components/app/Community/CommunityLearMore';
import {getQueryParamFromURL} from '../utils/helpers'
import Print from '../pages/Campaign/Print';


const ContainerRoute = ({ component: Component,...rest }) => (<>
  <Route {...rest} render={props => (
    <Component {...props} />
  )} />
</>);

const AppRoute = (props) => {
  const { user, getUser, history, checkUserLoginStatusOnDashboard, getUser2 } = props;
  const [loadingForFetchingUser, setLoadingForFetchingUser] = useState(false);
  const [loadingForFetching, setLoadingForFetching] = useState(false);
  const [pleaeWait, setPleaseWait] = useState(false)
  const [authToken, setAuthToken] = useState(localStorage.getItem('loginToken'));

  const advancedMatching = {}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
  };
  ReactPixel.init('372819087866846', advancedMatching, options);


  useEffect(() => {
    if (authToken && (user && user.id) && loadingForFetching) {
      setPleaseWait(true)
      checkUserLoginStatusOnDashboard(user)
        .then(() => setLoadingForFetching(false))
        .catch(() => setLoadingForFetching(false))
      setLoadingForFetching(false);
      setTimeout(() => {
        setPleaseWait(false)
      }, 3000)
    }
    const getUA = () => {
      let device = "Unknown";
      const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
        "onePlus": /onePlus/i,
      }
      Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
      return device;
    }
    if (user.id) {
      history.listen(e => {
        ReactPixel.track("user_track", {
          pathName: e.pathname,
          deviceName: getUA(),
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          userID: user.id,
          loginToken: user.loginToken,
          loginAt: user.login_at,
          stripeCustomerID: user.stripe_customer_id
        });
      })
    }

  }, [user, loadingForFetching]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const expire = localStorage.getItem('expire');
    if (loadingForFetching && expire) {
      localStorage.removeItem("loginToken");
      localStorage.removeItem('expire');
      setLoadingForFetching(false);
    }
  }, [loadingForFetching])

 
  if (loadingForFetchingUser || loadingForFetching || pleaeWait) {
    return (<Spin tip="Please Wait" spinning={true} indicator={Loader} style={{ 'marginTop': '20%' }}> </Spin>);
  }

  return (
    <AppLayout history={history}>
      <ScrollToTopMove />
      <Switch>
        <Route exact path="/homepage">
          <Redirect to="/print" />
        </Route>
        <ContainerRoute exact path='/' history={history} component={Homepage} />
        <ContainerRoute exact path='/crowd-funding' history={history} component={Crowdfunding} />
        <ContainerRoute exact path='/guest-blog' history={history} component={GuestBlog} />
         <ContainerRoute exact path='/print/:id' history={history} component={Print} />
        <ContainerRoute path='/news' history={history} component={News} />
        <ContainerRoute path='/news-detail/:id' history={history} component={NewsDetail} />
        <ContainerRoute path='/security' history={history} component={Security} />
        <ContainerRoute path='/faq' history={history} component={Faq} />
        <ContainerRoute path='/campaigns' history={history} component={CampaignListings} />
        <ContainerRoute path='/searched-campaigns/:searchedQuery' history={history} component={SearchedCampaign} />
        <ContainerRoute path='/details' history={history} user={user} component={DetailsList} />
        <ContainerRoute path='/campaign-details/:id' history={history} user={user} component={CampaignDetails} />
        <ContainerRoute path='/donate-money/:id' history={history} user={user} component={DonateMoney} />
        <ContainerRoute path='/blog-details/:id' history={history} user={user} component={BlogDetails} />
        <ContainerRoute path='/blogs' history={history} user={user} component={Blogs} />
        <ContainerRoute path='/starting_fund' history={history} user={user} component={CategoryListing} />
        <ContainerRoute path='/event-manager' history={history} user={user} component={EventManager} />
        <ContainerRoute path='/learn-more-event' history={history} user={user} component={EventLearnMore} />
        <ContainerRoute path='/about' history={history} user={user} component={About} />
        <ContainerRoute path='/contact-us' history={history} user={user} component={ContactUs} />
        <ContainerRoute path='/school' history={history} user={user} component={School} />
        <ContainerRoute path='/school-donate/:id' history={history} user={user} component={SchoolDonate} />
        <ContainerRoute path='/school-details/:id' history={history} user={user} component={SchoolDetails} />
        <ContainerRoute path='/charity-details/:id' history={history} user={user} component={CharityDetails} />
        <ContainerRoute path='/community-details/:id' history={history} user={user} component={CommunityDetail} />
        <ContainerRoute path='/guarantee' history={history} user={user} component={Guarantee} />
        <ContainerRoute path='/why-icause' history={history} user={user} component={WhyIcause} />
        <ContainerRoute path='/become-a-partner' history={history} user={user} component={BecomeApartner} />
        <ContainerRoute path='/sub-category/:id' history={history} user={user} component={SubCategoryDetails} />
        <ContainerRoute path='/health/startFundraising' history={history} user={user} component={SubCategory} />
        <ContainerRoute path='/:category/startFundraising' history={history} user={user} component={OtherCategory} />
        <ContainerRoute path='/become-investor' history={history} user={user} component={BecomeAnInvestor} />
        <ContainerRoute path='/career' history={history} user={user} component={Career} />
        <ContainerRoute path='/event-details/:id' history={history} user={user} component={EventDetails} />
        <ContainerRoute path='/school-listing' history={history} user={user} component={SchoolListing} />
        <ContainerRoute path='/sports' history={history} user={user} component={Sport} />
        <ContainerRoute path='/sport-listing' history={history} user={user} component={SportListing} />
        <ContainerRoute path='/sport-donate/:id' history={history} user={user} component={SportDonate} />
        <ContainerRoute path='/sport-details/:id' history={history} user={user} component={SportDetail} />
        <ContainerRoute path='/charity' history={history} user={user} component={Charity} />
        <ContainerRoute path='/charity-listing' history={history} user={user} component={CharityListing} />
        <ContainerRoute path='/charity-donate/:id' history={history} user={user} component={CharityDonate} />
        <ContainerRoute path='/community' history={history} user={user} component={Community} />
        {/* done */}

        <ContainerRoute path='/community-listing' history={history} user={user} component={CommunityListing} />
        <ContainerRoute path='/community-donate/:id' history={history} user={user} component={CommunityDonate} />
        <ContainerRoute path='/environment-detail' history={history} user={user} component={EnvironmentDetail} />
        <ContainerRoute path='/travel-detail' history={history} user={user} component={TravelDetail} />
        <ContainerRoute path='/faith-detail' history={history} user={user} component={FaithDetail} />
        <ContainerRoute path='/learn-more-charity' history={history} user={user} component={CharityLearnMore} />
        <ContainerRoute path='/learn-more-community' history={history} user={user} component={CommunityLearMore} />
        <ContainerRoute path='/learn-more-school' history={history} user={user} component={SchoolLearnMore} />
        <ContainerRoute path='/learn-more-sport' history={history} user={user} component={SportLearnMore} />
        <ContainerRoute path='/sitemap' history={history} user={user} component={Sitemap} />
        <ContainerRoute path='/notfound' history={history} user={user} component={NotFound} />
        <ContainerRoute path='/privacy-policy' history={history} user={user} component={PrivacyPolicy} />
        <Redirect from='*' to='/notfound' />
      </Switch>
    </AppLayout>
  );
}

export default connect(({ user }) => ({ user }), actions)(withRouter(AppRoute));
