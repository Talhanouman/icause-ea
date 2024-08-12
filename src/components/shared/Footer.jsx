import React from 'react';
import { imageURL } from '../../constants/constants';
const appUrl = window.location.href;

const Footer = ({ history }) => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-top px-5'>
          <div className='container-fluid'>
            <a className="scrolltop hide" href="#scrollTo" id="myID" >&nbsp;</a>
            <div className='row justify-content-md-between justify-content-sm-center'>
              <div className='col-xl-2 col-md-3 col-sm-6 col-6 footer-col-1'>

                <h5 className="mt-2 mt-md-0">Useful links</h5>
                <ul>
                  <li>
                    <a href="#!" onClick={() => history.push("/about")} style={{ outline: 'none', background: 'none' }} > About Icause </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/why-icause')} style={{ outline: 'none', background: 'none' }} >Why Icause</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/guarantee')} style={{ outline: 'none', background: 'none' }} >Icause Guarantee</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/security')} style={{ outline: 'none', background: 'none' }} >Security </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/become-investor')} style={{ outline: 'none', background: 'none' }} >Investor Center</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/become-a-partner')} style={{ outline: 'none', background: 'none' }} >Become a Partner</a>
                  </li>
                </ul>
              </div>

              <div className='col-xl-2 col-md-3 col-sm-6 col-6'>
                <h5>Crowdfunding</h5>
                <ul>
                  <li>
                    <a href="#!" onClick={() => history.push('/health/startFundraising')} style={{ outline: 'none', background: 'none' }} >Health & Medical</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/animals/startFundraising')} style={{ outline: 'none', background: 'none' }} >Animal and Pets</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/accident/startFundraising')} style={{ outline: 'none', background: 'none' }} >Accident</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/bucketlist/startFundraising')} style={{ outline: 'none', background: 'none' }} >Bucket List</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/inmemory/startFundraising')} style={{ outline: 'none', background: 'none' }} >In Memory</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/environment/startFundraising')} style={{ outline: 'none', background: 'none' }} >Environment</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/travel/startFundraising')} style={{ outline: 'none', background: 'none' }} >Travel & tourism </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/faith/startFundraising')} style={{ outline: 'none', background: 'none' }}>Faith </a>
                  </li>
                </ul>
              </div>

              <div className='col-xl-2 col-md-3 col-sm-6 col-6'>
                <h5>Directories</h5>
                <ul>
                  <li>
                    <a href="#!" onClick={() => history.push('/School-listing')} style={{ outline: 'none', background: 'none' }} >List of School</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/Charity-listing')} style={{ outline: 'none', background: 'none' }} >List of Sport Club</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/sport-listing')} style={{ outline: 'none', background: 'none' }} >List of Charities</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/community-listing')} style={{ outline: 'none', background: 'none' }} >List of communities</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/event-manager')} style={{ outline: 'none', background: 'none' }} >Create an Event </a>
                  </li>

                </ul>
              </div>

              <div className='col-xl-2 col-md-3 col-sm-6 col-6'>
                <h5>Resource Centre</h5>
                <ul>
                  <li>
                    <a href="#!" onClick={() => history.push('/blogs')} style={{ outline: 'none', background: 'none' }} >Blogs</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/faq')} style={{ outline: 'none', background: 'none' }} >FAQ & Help</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/news')} style={{ outline: 'none', background: 'none' }} >News & Press</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/career')} style={{ outline: 'none', background: 'none' }} >Careers</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/sitemap')} style={{ outline: 'none', background: 'none' }} >Sitemap</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/privacy-policy')} style={{ outline: 'none', background: 'none' }}>Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => history.push('/contact-us')} style={{ outline: 'none', background: 'none' }} >Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 our-news d-xl-none d-lg-flex d-md-flex d-sm-none">
                <div className="border-bottom">
                  <h2 className="main-heading mb-3">ABN</h2>
                  <h5>Raise Capital Holding Trading as Icause | ABN  56 650 137 607 </h5>

                </div>
              </div>
              <div className='col-xl-4 col-md-6 col-lg-6 col-sm-12 our-news mt-4 mt-sm-0'>
                <h2 className="main-heading mb-3">Subscribe to our newsletter</h2>
                <p className="newsletter-text">You’ll receive updates, tips and information on fundraising and campaigns.</p>
                <div id='custom-search-input'>
                  <div className='input-group mb-4'>
                    <input
                      type='text'
                      className='  search-query form-control'
                      placeholder='Your Email'
                    />
                    <span className='input-group-btn'>
                      <button className='btn btn-success px-3' type='button'>
                        <img src={`${imageURL}footer-right-arrow.png`} className="img-fluid" alt=""></img>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="footer-get-app app-btns flex">
                  <a className="app-btn blu flex vert" href="http:apple.com">
                    <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE4NS4yNTUsNTEyYy03Ni4yMDEtMC40MzktMTM5LjIzMy0xNTUuOTkxLTEzOS4yMzMtMjM1LjIxYzAtMTI5LjQwNCw5Ny4wNzUtMTU3LjczNCwxMzQuNDg3LTE1Ny43MzQgICBjMTYuODYsMCwzNC44NjMsNi42MjEsNTAuNzQyLDEyLjQ4YzExLjEwNCw0LjA4NywyMi41ODgsOC4zMDYsMjguOTc1LDguMzA2YzMuODIzLDAsMTIuODMyLTMuNTg5LDIwLjc4Ni02LjczOCAgIGMxNi45NjMtNi43NTMsMzguMDcxLTE1LjE0Niw2Mi42NTEtMTUuMTQ2YzAuMDQ0LDAsMC4xMDMsMCwwLjE0NiwwYzE4LjM1NCwwLDc0LjAwNCw0LjAyOCwxMDcuNDYxLDU0LjI3Mmw3LjgzNywxMS43NzcgICBsLTExLjI3OSw4LjUxMWMtMTYuMTEzLDEyLjE1OC00NS41MTMsMzQuMzM2LTQ1LjUxMyw3OC4yNjdjMCw1Mi4wMzEsMzMuMjk2LDcyLjA0MSw0OS4yOTIsODEuNjY1ICAgYzcuMDYxLDQuMjQ4LDE0LjM3LDguNjI4LDE0LjM3LDE4LjIwOGMwLDYuMjU1LTQ5LjkyMiwxNDAuNTY2LTEyMi40MTcsMTQwLjU2NmMtMTcuNzM5LDAtMzAuMjc4LTUuMzMyLTQxLjMzOC0xMC4wMzQgICBjLTExLjE5MS00Ljc2MS0yMC44NDUtOC44NjItMzYuNzk3LTguODYyYy04LjA4NiwwLTE4LjMxMSwzLjgyMy0yOS4xMzYsNy44ODFDMjIxLjQ5Niw1MDUuNzMsMjA0Ljc1Miw1MTIsMTg1Ljc1Myw1MTJIMTg1LjI1NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIGQ9Ik0zNTEuMzQzLDBjMS44ODgsNjguMDc2LTQ2Ljc5NywxMTUuMzA0LTk1LjQyNSwxMTIuMzQyQzI0Ny45MDUsNTguMDE1LDMwNC41NCwwLDM1MS4zNDMsMHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L2c+PC9zdmc+" />
                    <p>Download on the <br /> <span className="big-txt"> <strong className="text-nowrap"> App Store</strong></span></p>
                  </a>
                  <a className="app-btn blu flex vert google-btn" href="https://play.google.com/store/apps/details?id=com.app.icause">
                    <img alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="></img>
                    <p>Download on the <br /> <span className="big-txt"> <strong className="text-nowrap"> Play Store</strong></span></p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom px-0 px-lg-5'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-5 d-none d-lg-block text-center text-md-left'>
                <p>Raise Capital Holding Trading as Icause | ABN  56 650 137 607</p>
              </div>
              <div className='col-lg-4 col-md-6 text-center text-md-left text-lg-center'>
                <p>Copyrights 2020-All rights reserved</p>
              </div>
              <div className='col-lg-3 col-md-6 text-center text-md-right'>
                <ul className='social-icon d-inline-block mb-0 mt-3 mt-md-0'>
                  <li onClick={() => {
                    const pageUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + appUrl;
                    window.open(pageUrl, '_blank');
                  }}>
                    <a href='#!'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li onClick={() => {
                    const pageUrl = 'http://www.twitter.com/share?url=' + appUrl;
                    window.open(pageUrl, '_blank');
                  }}>
                    <a href='#!'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href='#!' onClick={() => history.push('/homepage')}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href='#!' onClick={() => history.push('/homepage')}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li> */}
                  <li onClick={() => {
                    const pageUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + appUrl;
                    window.open(pageUrl, '_blank');
                  }}>
                    <a href='#!'>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* SHARE POPUP */}
      <div id="share-popup" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body text-center">
              <h5>Do you like this? Share with your friends!</h5>
              <div className="mt-5">
                <ul className="share_links">
                  <li className="bg_fb"><a href="#!" className="share_icon" rel="tooltip" title="Facebook"><i className="fa fa-facebook"></i></a></li>

                  <li className="bg_insta"><a href="#!" className="share_icon" rel="tooltip" title="Instagram"><i className=" fa fa-instagram"></i></a></li>

                  <li className="bg_linkedin"><a href="#!" className="share_icon" rel="tooltip" title="LinkedIn"><i className="fa fa-linkedin"></i></a></li></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

