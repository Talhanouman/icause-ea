import axios from 'axios';
import { notification } from 'antd';



export const followCompanyType = (campaign_id, status, type, userOrBrowserInfo) => (dispatch) => {
  dispatch({
    type: 'GET_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/follow',
    method: 'POST',
    data: {
      from: userOrBrowserInfo.toString(),
      to: campaign_id.toString(),
      status,
      type: 'campaign'
    }
  }).then(() => {
    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_REQUEST',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'FOLLOW CAMPAIGN TYPE',
      description: error.message
    });

    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_REQUEST',
      payload: { loading: false }
    });
  })
}



export const likeCompanyType = (campaign_id, status, type, userOrBrowserInfo) => (dispatch) => {
  dispatch({
    type: 'GET_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/like',
    method: 'POST',
    data: {
      from: userOrBrowserInfo.toString(),
      to: campaign_id.toString(),
      status,
      type: 'campaign'
    }
  }).then(() => {
    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_REQUEST',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'LIKE CAMPAIGN',
      description: error.message
    });

    return dispatch({
      type: 'LIKE_COMPANY_CHARITY_FAILED',
      payload: { loading: false }
    });
  })
}



export const getCampaignDetails = (campaignId, user_id) => (dispatch, getState) => {
  dispatch({
    type: 'GET_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_campaign_by_id',
    method: 'POST',
    params: {
      campaign_id: campaignId,
      user_id:user_id || 1
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_SUCCESS',
      payload: {
        campaign: { ...data },
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET CAMPAIGN DETAILS',
      description: error.message
    });

    return dispatch({
      type: 'GET_CAMPAIGN_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const shareCampaign = (campaign_id, userIdOrBrowserInfo, shared_on) => (dispatch, getState) => {
  dispatch({
    type: 'SHARE_CAMPAIGN_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/share',
    method: 'POST',
    params: {
      from: userIdOrBrowserInfo.toString(),
      to: campaign_id.toString(),
      type: 'campaign',
      shared_on
    }
  }).then(() => {
    return dispatch({
      type: 'SHARE_CAMPAIGN_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'SHARE CAMPAIGN',
      description: error.message
    });

    return dispatch({
      type: 'SHARE_CAMPAIGN_FAILED',
      payload: { loading: false }
    });
  })
}

export const getReviewsForCampaigns = (campaignId) => (dispatch, getState) => {
  dispatch({
    type: 'GET_REVIEWS_FOR_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_reviews_by_campaign_id',
    method: 'POST',
    params: {
      campaign_id: campaignId
    }
  }).then(({ data: response }) => {
    const { data } = response;
    return dispatch({
      type: 'GET_REVIEWS_FOR_CAMPAIGN_DETAILS_SUCCESS',
      payload: {
        reviews: data,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET REVIEWS',
      description: error.message
    });

    return dispatch({
      type: 'GET_REVIEWS_FOR_CAMPAIGN_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const addReviewForCampaign = ({ campaignId, rating, text, title }) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_REQUEST',
    payload: { loadingForAddingReview: true }
  });
  return axios({
    url: '/api/user_review',
    method: 'POST',
    params: {
      campaign_id: campaignId,
      rating,
      text,
      title
    }
  }).then(({ data }) => {
    const { flag } = data;
    if (flag) {
      const { message } = data;
      notification.success({
        message: 'ADD REVIEW',
        description: message.message
      })
      return dispatch({
        type: 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_SUCCESS',
        payload: {
          loadingForAddingReview: false
        }
      });
    } else {
      return dispatch({
      type: 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_FAILED',
      payload: { loadingForAddingReview: false }
    });
    }
  }).catch((error) => {
    notification.error({
      message: 'ADD REVIEW',
      description: error.message
    });

    return dispatch({
      type: 'ADD_REVIEW_FOR_CAMPAIGN_DETAILS_FAILED',
      payload: { loadingForAddingReview: false }
    });
  })
}

export const getRecentCauses = (categoryId, campaignId) => (dispatch) => {
  dispatch({
    type: 'GET_RECENT_CAUSES_FOR_CAMPAIGN_DETAILS_PAGE_REQUEST',
    payload: { loadingForRecentCauses: true }
  });
  return axios({
    url: '/api/getCampaignByCategoryID',
    method: 'POST',
    data: {
      categoryID: categoryId,
      campaignID: campaignId
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { campaigns } = data;
    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_CAMPAIGN_DETAILS_PAGE_SUCCESS',
      payload: {
        recentCauses: campaigns || [],
        loadingForRecentCauses: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_RECENT_CAUSES_FOR_CAMPAIGN_DETAILS_PAGE_FAILED',
      payload: { loadingForRecentCauses: false }
    });
  })
}

export const getCommentsForCampaigns = (campaignId) => (dispatch) => {
  dispatch({
    type: 'GET_COMMENTS_FOR_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/get_comments_by_campaign_id',
    method: 'POST',
    data: {
      campaignID: campaignId
    }
  }).then(({ data: response }) => {
    const { data } = response;
    const { comments } = data || {};
    return dispatch({
      type: 'GET_COMMENTS_FOR_CAMPAIGN_DETAILS_SUCCESS',
      payload: {
        comments,
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'GET_COMMENTS_FOR_CAMPAIGN_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const postCommentForCampaign = (campaignId, comment) => (dispatch) => {
  dispatch({
    type: 'POST_COMMENT_FOR_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/addCommentForCampaign',
    method: 'POST',
    data: {
      campaign_id: campaignId,
      comment
    }
  }).then(({ data }) => {
    return dispatch({
      type: 'POST_COMMENT_FOR_CAMPAIGN_DETAILS_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'GET RECENT CAUSES',
      description: error.message
    });

    return dispatch({
      type: 'POST_COMMENT_FOR_CAMPAIGN_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

export const anonymosulyPostCommentForCampaign = (campaignId, comment) => (dispatch) => {
  dispatch({
    type: 'ANONYMOUS_POST_COMMENT_FOR_CAMPAIGN_DETAILS_REQUEST',
    payload: { loading: true }
  });
  return axios({
    url: '/api/add_comment_for_campaign',
    method: 'POST',
    data: {
      campaign_id: campaignId,
      comment
    }
  }).then(({ data }) => {
    return dispatch({
      type: 'ANONYMOUS_POST_COMMENT_FOR_CAMPAIGN_DETAILS_SUCCESS',
      payload: {
        loading: false
      }
    });
  }).catch((error) => {
    notification.error({
      message: 'POST COMMENT',
      description: error.message
    });

    return dispatch({
      type: 'ANONYMOUS_POST_COMMENT_FOR_CAMPAIGN_DETAILS_FAILED',
      payload: { loading: false }
    });
  })
}

