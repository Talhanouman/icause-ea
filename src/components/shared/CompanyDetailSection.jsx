import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { imageURL } from '../../constants/constants';
import ShareIndustryModal from '../shared/ShareIndustryModal';
import imageImport from './loaderImage.png'

const validateEmail = ({ email }) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const followCompany = (props, id, isFollowed, user, companyType) => {
  const { followCompanyType, getCompanyTypeListings } = props;
  followCompanyType(id, isFollowed ? 'unfollow' : 'follow', companyType, user && user.id ? user.id : navigator.userAgent).then(() => {
    getCompanyTypeListings(id, user && user.id ? user.id : navigator.userAgent);
  });
};

const likeCompany = (props, id, isLiked, user, companyType) => {
  const { likeCompanyType, getCompanyTypeListings } = props;
  likeCompanyType(id, isLiked ? 'unlike' : 'like', companyType, user && user.id ? user.id : navigator.userAgent).then(() => {
    getCompanyTypeListings(id, user && user.id ? user.id : navigator.userAgent);
  });
};

const CompanyDetailSection = (props) => {
  const { data, numberOfPeople, getIndustryDetails, shareCompany, subscribe, companyType, user, Video, sinceHeading, total_studentsHeading } = props;
  const {
    since,
    total_students,
    no_of_attendees,
    funded: raised,
    goal,
    shares,
    id,
    isFollowed,
    isLiked,
    weeks_left,
    avatar,
    company_name,
    about_company,
    how_it_works,
    likes
    // cover_image 
  } = data || {};
  const history = useHistory()

  // let coverImage = '/images/school-logo.jpg';
  // if (cover_image) {
  //   coverImage = `${process.env.REACT_APP_BACKEND_BASE_URL}/${cover_image}`;
  // }
  let avatarImage = imageImport
  // `${imageURL}school-logo.jpg`;
  if (avatar) {
    avatarImage = `${avatar}`;
  }
  const [email, setEmail] = useState('');
  const isValidEmail = validateEmail({ email });
  const [isShareModalVisible, setShareModalVisibility] = useState(false);

  return (
    <section className="blog-datil school-detail-sec-2">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-md-8 col-sm-12 iCause-Partners">
            <div className="school-stats">
              <div className="school-logo">
                <img src={avatarImage} className="img-fluid" alt="img" />
              </div>
              <div className="stats-outer-wrap">
                <div className="stats-wrap">
                  <div className="stat-box">
                    <p className="tag Capital">{sinceHeading}</p>
                    <p className="number">{since}</p>
                  </div>
                  <div className="stat-box">
                    <p className="tag Capital">{total_studentsHeading}</p>
                    <p className="number">{total_students}</p>
                  </div>
                  <div className="stat-box">
                    <p className="tag Capital">NO. OF ATTENDEES</p>
                    <p className="number">{no_of_attendees}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="school-detail-text">
              <h4 className="mt-3">About us</h4>
              <p className='company-name'>{company_name}</p>
              <p dangerouslySetInnerHTML={{ __html: about_company }} />

              <h4>How it works</h4>
              <p dangerouslySetInnerHTML={{ __html: how_it_works }} />
            </div>
            {Video && <Video />}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="campaignSec1-text">
              <div className="btns-wrap">
                <button type="button" onClick={() => history.push(`/${companyType.toLowerCase()}-donate/${id}`)} className="btn-success">
                  {/* <a style={{ color: 'white' }}> */}
                  <img src={`${imageURL}donate-icon.png`} alt="icon" className="img-fluid" />
                  DONATE NOW
                  {/* </a> */}
                </button>
                <button onClick={() => setShareModalVisibility(true)} type="button" className="schol-det-share-icon"><svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="19.98" viewBox="0 0 24 19.98">
                  <path id="arrow-2" data-name="arrow" d="M23.772,10.462l-8.5-8.25A.75.75,0,0,0,14,2.75V7A14.267,14.267,0,0,0,0,21.25a.739.739,0,0,0,.572.708.715.715,0,0,0,.177.022.788.788,0,0,0,.678-.4A12.754,12.754,0,0,1,12.582,15H14v4.25a.75.75,0,0,0,1.272.538l8.5-8.25a.749.749,0,0,0,0-1.076Z" transform="translate(0 -2)" />
                </svg>
                  <span className="share-btn-text">SHARE</span></button>
              </div>
              <div className="donation-info-wrap">
                <div className="donation-info-box">
                  <h3>${raised} raised</h3>
                  <h4>of ${goal} goal</h4>
                </div>
                <ul className="donation-stats-box mb-3">
                  <li>
                    <h4>{likes}</h4>
                    <h5>Supporter</h5>
                  </li>
                  <li>
                    <h4>{shares}</h4>
                    <h5 style={{textTransform:'uppercase'}}>Shares</h5>
                  </li>
                  <li>
                    <h4>{weeks_left}</h4>
                    <h5 style={{textTransform:'uppercase'}}>Weeks Left</h5>
                  </li>
                </ul>
                <div className="btns-wrap btns-wrap-2 mt-4 ">
                  <button
                    onClick={() => user && user.id ? likeCompany(props, id, isLiked, user, companyType) : history.push("/auth/login")}
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="18" viewBox="0 0 19.2 18">
                      <g id="like_3_" data-name="like (3)" transform="translate(0 -0.75)">
                        <path id="Path_2376" data-name="Path 2376" d="M1.4,20h2a1.4,1.4,0,0,0,1.4-1.4V9.4A1.4,1.4,0,0,0,3.4,8h-2A1.4,1.4,0,0,0,0,9.4v9.2A1.4,1.4,0,0,0,1.4,20Z" transform="translate(0 -1.45)" fill="#3cb64f" />
                        <path id="Path_2377" data-name="Path 2377" d="M11.725.75c-.8,0-1.2.4-1.2,2.4,0,1.9-1.841,3.43-3.025,4.218v9.91a18.647,18.647,0,0,0,7.825,1.471H16.6a3.2,3.2,0,0,0,3.152-2.656l.9-5.2A3.2,3.2,0,0,0,17.5,7.15H13.725a7.725,7.725,0,0,0,.6-3.2,2.938,2.938,0,0,0-2.6-3.2Z" transform="translate(-1.5)" fill="#3cb64f" />
                      </g>
                    </svg>
                    {isLiked ? 'Unlike' : 'Like'}
                  </button>
                  <button
                    onClick={() => user && user.id ? followCompany(props, id, isFollowed, user, companyType) : history.push("/auth/login")}
                    type="button">
                    <svg fill={isFollowed ? 'red' : ''} xmlns="http://www.w3.org/2000/svg" width="19.104" height="16.996" viewBox="0 0 19.104 16.996">
                      <path id="heart" d="M17.589,1.663A5.137,5.137,0,0,0,13.767,0a4.806,4.806,0,0,0-3,1.036A6.141,6.141,0,0,0,9.552,2.3,6.138,6.138,0,0,0,8.339,1.036,4.805,4.805,0,0,0,5.337,0,5.137,5.137,0,0,0,1.516,1.663,5.971,5.971,0,0,0,0,5.741,7.11,7.11,0,0,0,1.9,10.4a40.4,40.4,0,0,0,4.743,4.452c.657.56,1.4,1.195,2.176,1.871a1.121,1.121,0,0,0,1.477,0c.773-.676,1.519-1.312,2.176-1.872A40.38,40.38,0,0,0,17.209,10.4,7.11,7.11,0,0,0,19.1,5.741a5.971,5.971,0,0,0-1.515-4.078Zm0,0" transform="translate(0)" />
                    </svg>
                    {isFollowed ? 'UnFollow' : 'Follow'}
                  </button>
                </div>
              </div>
            </div>
            <div className="need-our-one need-our-bg blog-sec-2-img">
              <div>
                <h4>{numberOfPeople} Peoples<span className="d-block  "> Need Ours Help</span></h4>
                <button type="button" onClick={() => history.push('/auth/login')} className="btn btn-success  ml-2  ">Donate Now</button>
              </div>
            </div>
            <div className="subscribe mt-4">
              <h5>Subscribe for Our News Letter!</h5>
              <p>By subscribing you agree to receive special news and related offers from iCasue.</p>
              <input onChange={({ target }) => setEmail(target.value)} value={email} type="email" name="" className="form-control mt-4" placeholder="You@example.com" />
              <button
                onClick={() => {
                  subscribe({ email }).then(() => setEmail(''));
                }}
                type="button"
                disabled={!isValidEmail}
                className="btn btn-success  mt-2 btn_hover">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShareIndustryModal
        industryId={id}
        user={user}
        shareCompany={shareCompany}
        getIndustryDetails={getIndustryDetails}
        isShareModalVisible={isShareModalVisible}
        setShareModalVisibility={setShareModalVisibility}
      />
    </section>
  );
};

export default CompanyDetailSection;