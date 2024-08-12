const initialState = {
  loadingForHomeCampaigns: false,
  loadingForTrendingCauses: false,
  loadingForRecentCauses: false,
  loadingForGetAppSection: false,
  loadingForBillSection: false,
  loadingForPledgeOfTheDay: false,
  pledgeOfTheDay: [],
  homeCampaigns: {},
  trendingCauses: {},
  recentCauses: {},
  homepageContent: [],
  donateBillSectionContent: []
};

const homepage = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_SMS_HOMEPAGE_REQUEST':
    case 'SEND_SMS_HOMEPAGE_FAILED':
    case 'SEND_SMS_HOMEPAGE_SUCCESS':
    case 'GET_PLEDGE_OF_THE_DAY_FAILED':
    case 'GET_PLEDGE_OF_THE_DAY_SUCCESS':
    case 'GET_PLEDGE_OF_THE_DAY_REQUEST':
    case 'GET_DONATE_YOUR_BILL_SECTION_REQUEST':
    case 'GET_DONATE_YOUR_BILL_SECTION_SUCCESS':
    case 'GET_DONATE_YOUR_BILL_SECTION_FAILED':
    case 'GET_HOMEPAGE_CONTENT_REQUEST':
    case 'GET_HOMEPAGE_CONTENT_SUCCESS':
    case 'GET_HOMEPAGE_CONTENT_FAILED':
    case 'GET_RECENT_CAUSES_REQUEST':
    case 'GET_RECENT_CAUSES_SUCCESS':
    case 'GET_RECENT_CAUSES_FAILED':
    case 'GET_TRENDING_CAUSES_REQUEST':
    case 'GET_TRENDING_CAUSES_SUCCESS':
    case 'GET_TRENDING_CAUSES_FAILED':
    case 'GET_CAMPAIGNS_FOR_SLIDER_REQUEST':
    case 'GET_CAMPAIGNS_FOR_SLIDER_SUCCESS':
    case 'GET_CAMPAIGNS_FOR_SLIDER_FAILED': {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default homepage;
