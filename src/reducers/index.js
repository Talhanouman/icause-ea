import { combineReducers } from 'redux';

import user from './user';
import homepage from './homepage';
import donateMoney from './donateMoney';
import blog from './blog';
import campaign from './campaign';
import event from './event';
import contactUs from './contactUs';
import becomePartner from './becomePartner';
import school from './school';
import community from './community';
import sport from './sport';
import charity from './charity';
import news from './news';
import faq from './faq';
import whyIcause from './why-icause';
import career from './career';
import investor from './investor';
import category from './category';
import newsDetail from './newsDetail';

export default combineReducers({
  user,
  newsDetail,
  category,
  whyIcause,
  homepage,
  donateMoney,
  blog,
  campaign,
  event,
  contactUs,
  becomePartner,
  school,
  community,
  sport,
  charity,
  news,
  faq,
  career,
  investor
});
