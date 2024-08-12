const initialState = {
  loadingForRecentCauses: false,
  loadingForCampaignDetails: false,
  loadingForDonateMoney: false,
  loadingForDonationTypes: false,
  donationTypes: [],
  recentCauses: [],
  campaignDetails: []
};

const donateMoney = (state = initialState, action) => {
  switch (action.type) {
    case 'DONATE_WITH_PAYPAL_REQUEST':
    case 'DONATE_WITH_PAYPAL_FAILED':
    case 'DONATE_WITH_PAYPAL_SUCCESS':
    case 'UPLOAD_UTILITY_BILL_SUCCESS':
    case 'UPLOAD_UTILITY_BILL_FAILED':
    case 'UPLOAD_UTILITY_BILL_REQUEST':
    case 'GET_DONATION_TYPES_FAILED':
    case 'GET_DONATION_TYPES_SUCCESS':
    case 'GET_DONATION_TYPES_REQUEST':
    case 'INITIALIZE_TOKEN_GENERATION':
    case 'PAY_WITH_CARD_FOR_DONATION_FAILED':
    case 'PAY_WITH_CARD_FOR_DONATION_SUCCESS':
    case 'PAY_WITH_CARD_FOR_DONATION_REQUEST':
    case 'GET_CAMPAIGN_DETAILS_REQUEST':
    case 'GET_CAMPAIGN_DETAILS_SUCCESS':
    case 'GET_CAMPAIGN_DETAILS_FAILED':
    case 'GET_RECENT_CAUSES_FOR_DONATE_MONEY_PAGE_REQUEST':
    case 'GET_RECENT_CAUSES_FOR_DONATE_MONEY_PAGE_SUCCESS':
    case 'GET_RECENT_CAUSES_FOR_DONATE_MONEY_PAGE_FAILED': {
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

export default donateMoney;
