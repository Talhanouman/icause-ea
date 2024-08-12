
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../shared/VideoPlayer';
import ApplyJobModal from './ApplyJobModal';
import { imageURL, imageURLS3} from '../../../constants/constants';

const Career = (props) => {
  const { getCurrentOpenings, applyJob, career } = props;
  const { openings, loading } = career;

  const [jobsExpansionList, setJobsExpList] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const [isFirstContentExpanded, /*setIsFirstContentExpanded*/] = useState(false);

  useEffect(() => {
    getCurrentOpenings();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="career-pg-wrap">
      <section className="career-banner gen-banner-2 header-banner">
        <div className="container">
          <div className="banner-text">
            <h1 className="heading">Join Our Team at iCause</h1>
            <p>There are a billion good intentions tucked inside each and every one of us. At iCause, we believe that the impulse to help a person,
              {isFirstContentExpanded && ' fix a neighborhood, or change a nation should never be ignored. In fact, it should be shared with the entire world. Check out current job openings, join our team, and be a part of the change.'}  </p>

            {/* <button type="button" onClick={() => setIsFirstContentExpanded(!isFirstContentExpanded)} className="btn-cutom banner-read-more read-more1">
                  {isFirstContentExpanded ? 'read less' : 'read more'}
                </button> */}
          </div>
        </div>
      </section>

      <section className="contact-sec-2 sec-py-50">
        <div className="container">
          <div className="gen-text-box">
            <div className="top-icon mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="50.324" height="47.062" viewBox="0 0 50.324 47.062">
                <path id="care-about-environment" d="M.69,32.711A22.8,22.8,0,0,1,39.844,20.244l.176-3.755a1.121,1.121,0,1,1,2.239.105l-.311,6.633c0,.019,0,.037,0,.056a1.122,1.122,0,0,1-.714.948h-.008l-.006,0H41.21a1.12,1.12,0,0,1-1.263-.36l-.033-.045a20.559,20.559,0,0,0-37,9.191,1.121,1.121,0,0,1-2.22-.312Zm33.018-7.473a14.927,14.927,0,0,0-6.283-3.6,14.146,14.146,0,0,1,1.087,2.153,32.318,32.318,0,0,1,2.029,10.831,1.121,1.121,0,1,1-2.24.073q-.031-.959-.105-1.87a48.256,48.256,0,0,1-4.9.249q-2.443,0-4.824-.239c-.079,1.02-.122,2.1-.122,3.228,0,7.393,3.091,13.6,4.748,15.287l.018.018h0a1.118,1.118,0,0,1,.305.835v0h0q0,.04-.008.079h0a1.117,1.117,0,0,1-.083.3h0a1.12,1.12,0,0,1-1.026.671h-.047l-.031,0A17.23,17.23,0,0,1,23.339,18.83h0A17.15,17.15,0,0,1,35.259,23.62a1.121,1.121,0,1,1-1.551,1.618ZM8.63,38.951a45.626,45.626,0,0,0,7.849,1.8,30.524,30.524,0,0,1-.367-4.691c0-1.166.049-2.343.147-3.5a44.074,44.074,0,0,1-7-1.632,15.01,15.01,0,0,0-.626,8.027Zm8.3,4.12a48.547,48.547,0,0,1-7.546-1.543,15.041,15.041,0,0,0,10.453,9.109A27.841,27.841,0,0,1,16.93,43.071Zm2.322-21.433a15.056,15.056,0,0,0-9.062,7.231,41.874,41.874,0,0,0,6.319,1.458A23.111,23.111,0,0,1,19.252,21.638Zm4.086-.566c-1.635,0-3.778,3.52-4.622,9.532q2.259.226,4.582.226a45.993,45.993,0,0,0,4.649-.235C27.125,24.825,25.088,21.072,23.338,21.072ZM24.357,56.41A20.429,20.429,0,0,1,3.145,40.074a1.121,1.121,0,0,0-2.216.072L.009,46.706a1.121,1.121,0,1,0,2.22.311l.249-1.775A22.762,22.762,0,0,0,23.263,58.681c.4,0,.809-.011,1.213-.032a1.121,1.121,0,0,0-.119-2.238ZM48.2,50.355c-.517,1.542-.976,2.889-1.4,4.12-.467,1.345-.943,2.682-1.416,3.975a2.511,2.511,0,0,1-2.169,1.7,1.123,1.123,0,0,1-.17.013H31.359a2.6,2.6,0,0,1-2.516-2.68c0-.02,0-.039,0-.059A5.04,5.04,0,0,0,27.32,53.79a9.517,9.517,0,0,1-.819-1,27.234,27.234,0,0,1-3.15-6.549c-.357-.964-.723-1.952-1.247-3.178a10.97,10.97,0,0,1-.716-2.8A4.7,4.7,0,0,1,22.412,36.9a2.707,2.707,0,0,1,1.936-.891,4.208,4.208,0,0,1,2.409.649,7.818,7.818,0,0,1,2.367,2.945,9.74,9.74,0,0,1,.637,1.714c.094.315.183.613.276.836a5.678,5.678,0,0,0,.263.558c.116.211.23.312.335.3a1.709,1.709,0,0,0,1.047-1.25,33.946,33.946,0,0,0,1.592-7.4c.1-2.532.193-4.923,1.566-6.37a4.356,4.356,0,0,1,5.106-1.172l.062.026a1.121,1.121,0,0,1,.665,1.007c.016.3.044.634.077.99a3.19,3.19,0,0,1,1.6.118,4.967,4.967,0,0,1,2.738,2.986,17.155,17.155,0,0,1,1,2.677,1.114,1.114,0,0,1,.735-.175,2.915,2.915,0,0,1,1.826,1.095,12.852,12.852,0,0,1,1.54,4.119C50.668,42.776,49.792,45.611,48.2,50.355Zm-.224-10.342A10.411,10.411,0,0,0,46.784,36.8a1.956,1.956,0,0,0-.267-.132,1.116,1.116,0,0,1-.367-.131c-.016.127-.034.26-.054.4-.035.248-.083.526-.146.85-.149.749-.283,1.481-.412,2.19a45.64,45.64,0,0,1-1.047,4.793,1.121,1.121,0,0,1-2.147-.644,44.1,44.1,0,0,0,.989-4.552c.131-.717.267-1.458.418-2.221.055-.28.1-.519.126-.727.182-1.287.2-1.392-.845-3.785a3.054,3.054,0,0,0-1.4-1.758,1,1,0,0,0-.644,0,20.24,20.24,0,0,1,.007,5.938c-.628,2.827-1.146,5.111-1.612,6.648a1.121,1.121,0,0,1-2.145-.65c.442-1.46.972-3.8,1.569-6.484a22.71,22.71,0,0,0-.146-6.135c-.063-.589-.124-1.156-.169-1.68a2.137,2.137,0,0,0-2.022.81c-.792.835-.874,2.909-.952,4.915a37.277,37.277,0,0,1-1.694,7.988,3.794,3.794,0,0,1-2.963,2.807,2.548,2.548,0,0,1-2.52-1.451,7.91,7.91,0,0,1-.37-.78,10.9,10.9,0,0,1-.353-1.052,7.951,7.951,0,0,0-.479-1.324,5.727,5.727,0,0,0-1.647-2.13,1.981,1.981,0,0,0-1-.258h-.064a.474.474,0,0,0-.364.169,2.6,2.6,0,0,0-.434,1.735,9.373,9.373,0,0,0,.539,2.026c.545,1.276.937,2.336,1.284,3.271a25.139,25.139,0,0,0,2.9,6.072,7.734,7.734,0,0,0,.632.764,7.222,7.222,0,0,1,2.1,5.079q0,.044,0,.089v.024c0,.267.163.438.274.438H42.92a1.112,1.112,0,0,1,.125-.007c.072,0,.176-.072.233-.23.469-1.283.941-2.608,1.4-3.942.424-1.222.881-2.562,1.395-4.1C47.557,45.227,48.375,42.6,47.979,40.013Z" transform="translate(0.002 -13.098)" />
              </svg>
            </div>
            <h3 className="marker-text">Know about iCause</h3>
            <h4 className="heading">About iCause</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <div className="text-center mt-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="246" height="72" viewBox="0 0 246 72">
                <g id="Group_595" data-name="Group 595" transform="translate(-577 -1619)">
                  <text id="Since_2008" data-name="Since 2008" transform="translate(701 1662)" fontSize="40" fontFamily="Playfair Display" fontStyle="italic" letterSpacing="0.03em"><tspan x="-99.94" y="0">Since 2008</tspan></text>
                  <text id="Australia_Charity_Foundation_Member" data-name="Australia Charity Foundation Member" transform="translate(577 1687)" fill="#2a2a2a" fontSize="14" fontFamily="Roboto-Regular, Roboto" letterSpacing="0.03em"><tspan x="0" y="0">Australia Charity Foundation Member</tspan></text>
                </g>
              </svg>
            </div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
          <div className="gen-text-box gen-text-2nd">
            <h3 className="marker-text">Where you can trust!</h3>
            <h4 className="heading">Why Choose iCause</h4>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
            <p style={{ color: '#000' }} className="quote-text">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text "</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
          </div>
        </div>
      </section>

      <section className="become-partner-sec-6 become-investor-sec-4 sec-py-50 contact-sec-3">
        <div className="container">
          <div className="row">
            <div className="col-9 d-flex align-items-center">
              <div className="gen-text-box pl-3">
                <p className="marker-text">Who we are</p>
                <h4 className="heading">Life at iCause</h4>
              </div>
            </div>
            <div className='col-lg-10 col-md-10 mx-auto careers-video-mod'>
            <VideoPlayer videoId={'j7KKZ6v5o34'} image="Careers.jpeg"
                  basePath={`${imageURLS3}about_us/`}/>
            </div><br />
            <div className="col-12">
              <div className="gen-text-box text-center">
                <p className="font-roboto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-sec-4 sec-py-50">
        <div className="container">
          <div className="row">
            {
              openings && openings.length ?
                openings.map((job, index) => {
                  const { title, short_des, long_des, icon, status } = job;
                  let jobIcon = 'https://www.w3schools.com/images/lamp.jpg';
                  if (icon) {
                    jobIcon = `${icon}`;
                  }
                  return (
                    <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3 job-card-col">
                      {
                        (!status) ?
                          <div className="job-card">
                            <div className="job-icon">
                              <img src={jobIcon} alt="Lamp" width="40" height="40" />
                            </div>
                            <div>
                              <h5 className="job-title">{title}</h5>
                              <p style={{ color: 'black' }}>{jobsExpansionList.find(({ id }) => id === index) ? long_des : short_des}</p>
                              <button className="card-read"
                                onClick={() => {
                                  let list = [...jobsExpansionList];
                                  const isPresent = list.find(({ id }) => id === index);
                                  if (isPresent) {
                                    list = list.filter(({ id }) => id !== index);
                                  } else {
                                    list.push({
                                      id: index, expanded: true
                                    });
                                  }
                                  setJobsExpList(list);
                                }}
                                style={{ paddingLeft: 0, background: 'none', border: '0px solid' }}>
                                {jobsExpansionList.find(({ id }) => id === index) ? 'Read Less' : 'Read More'}
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => {
                                  setModalVisibility(true);
                                  setSelectedJob(job);
                                }}
                                type="submit"
                                className="btn btn-success apply-btn"
                              >Apply Now</button>
                            </div>
                          </div> :
                          <div className="job-card empty-card">
                            <p style={{ color: 'black' }}>This job no longer Available</p>
                          </div>
                      }
                    </div>
                  );
                }) : ''
            }
          </div>
        </div>
      </section>

      <section className="accordion  accordion-two faq-sec-3 career-sec-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="main-heading mt-md-0 text-left mb-4">You will find.</h3>
              <div className="accordion pt-2 pb-0" id="accordionExample">
                <div className="card bg-white">
                  <div className="card-header" id="heading1">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapse1">Office Environment <i className="fa fa-plus"></i></button>
                    </h2>
                  </div>
                  <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordionExample">
                    <div className="card-body">
                      <p style={{ color: 'black' }}>With weekly massages, standing desks, fully-stocked kitchens, daily lunches, team off-sites, and monthly social events, we ensure employees are fueled for the good fight while offering opportunities to connect and learn from each other. Plus, many of our offices are dog friendly.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading2">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse2">Working Hours and leaves<i className="fa fa-plus"></i></button>
                    </h2>
                  </div>
                  <div id="collapse2" className="collapse  " aria-labelledby="heading2" data-parent="#accordionExample">
                    <div className="card-body">
                      <p style={{ color: 'black' }}>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading3">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse3">Learning new Tech and Polish Skills<i className="fa fa-plus"></i></button>
                    </h2>
                  </div>
                  <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                    <div className="card-body">
                      <p style={{ color: 'black' }}>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading4">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4">Performance Evaluation Process<i className="fa fa-plus"></i></button>
                    </h2>
                  </div>
                  <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                    <div className="card-body">
                      <p style={{ color: 'black' }}>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading9">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse9">Available Work from home<i className="fa fa-plus"></i></button>
                    </h2>
                  </div>
                  <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
                    <div className="card-body">
                      <p style={{ color: 'black' }}>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading5">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse5">Privacy and Security<i className="fa fa-plus"></i></button>
                    </h2>
                  </div>
                  <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                    <div className="card-body">
                      <p style={{ color: 'black' }}>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ApplyJobModal
        loading={loading}
        applyJob={applyJob}
        getCurrentOpenings={getCurrentOpenings}
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        isModalVisible={isModalVisible}
        setModalVisibility={setModalVisibility}
      />
    </div>
  );
};

export default Career;
