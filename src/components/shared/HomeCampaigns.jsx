

import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router';

const HomeCampaigns = ({isMobile}) => {
  // const { pledgeOfTheDayData } = props;
  const [/*src*/, setSrc] = useState(null);
  const history = useHistory();

  const setSource = (set) => {
    if (set) {
      setSrc('https://www.youtube.com/embed/j7KKZ6v5o34 ')
    } else {
      setSrc('')
    }
  }

  var vid = document.getElementById("myVideo");
  function pauseVid() {
    if (vid.pause) {
      vid.pause();
    }
  }

  return (
    <div>
      <Carousel autoPlay={false} showThumbs={false} interval={5000} infiniteLoop={true} showStatus={false} className="homepage-banner header-banner">
        <section className="bannerForHomeCampaigns">
          <div className="container-lg container">
            <div className="row  ">
              <div className="col-lg-8 col-md-12 col-sm-12 banner-text-col ">
                <h1 className="mb-0">
                Make your crowdfunding dream a reality.
                </h1>
                <p className="dask-banner-pera mb-md-4 mb-2">Discover a new way to raise funds and donate.  </p>
                {/* <h1 className="mb-0">Turn Your Crowdfunding Idea In Reality</h1> */}
                
                {/* <p className="dask-banner-pera mb-md-4 mb-2">Switch For A Cause.  </p> */}
                <div className="text-left d-block d-md-flex">
                  {/* <button
                    // style={{ float: 'left' }}
                    onClick={() => {
                      history.push("/campaigns");
                    }}
                    type="button"
                    className="btn btn-outline-light ">
                    Donate now
                </button> */}
               
                  <button
                    // style={{ float: 'left' }} 
                    onClick={() => history.push('/starting_fund')} type="button" className="btn btn-success  ml-0 ml-md-2 btn_hover p-0">Start fundraising</button>
                      <a onClick={() => setSource(true)} href="#!" className="banner-video" data-toggle="modal" data-target="#exampleModalCenter">
                    <div className="video-icon"><i className="fas fa-play"></i></div>
                    <div><h6 className="text-white pl-2 m-0">Watch Video</h6></div>
                  </a>          
                </div>
                {/* <div className="d-block">
                  <a onClick={() => setSource(true)} href="#!" className="banner-video" data-toggle="modal" data-target="#exampleModalCenter">
                    <div className="video-icon"><i className="fas fa-play"></i></div>
                    <div><h6 className="text-white pl-2 m-0">Watch Video</h6></div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="bannerForHomeCampaigns second-slide">
          <div className="container-lg container">
            <div className="row  ">
              <div className="col-lg-8 col-md-12 col-sm-12 banner-text-col ">
                <h1 className="mb-0">
                Make your crowdfunding dream a reality.
                </h1>
                <p className="dask-banner-pera mb-md-4 mb-2">
                Discover a new way to raise funds and donate.  
                </p>
                 {/* <h1 className="mb-0">Turn Your Crowdfunding Idea In Reality</h1> */}
                
                {/* <p className="dask-banner-pera mb-md-4 mb-2">Switch For A Cause.  </p> */}

                <div className="text-left d-block d-md-flex">
                  {/* <button
                    // style={{ float: 'left' }}
                    onClick={() => {
                      history.push(
                        `/campaigns`
                      );
                    }}
                    type="button"
                    className="btn btn-outline-light ">
                    Donate now
                </button> */}
               
                  <button
                    onClick={() => history.push("/campaigns")} type="button" className="btn btn-success  ml-0 ml-md-2 btn_hover p-0">Start fundraising</button>
                 <a onClick={() => setSource(true)} href="#!" className="banner-video" data-toggle="modal" data-target="#exampleModalCenter">
                    <div className="video-icon"><i className="fas fa-play"></i></div>
                    <div><h6 className="text-white pl-2 m-0">Watch Video</h6></div>
                  </a>
                </div>
                {/* <div className="d-block">
                  <a onClick={() => setSource(true)} href="#!" className="banner-video" data-toggle="modal" data-target="#exampleModalCenter">
                    <div className="video-icon"><i className="fas fa-play"></i></div>
                    <div><h6 className="text-white pl-2 m-0">Watch Video</h6></div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>

        </section>
      </Carousel>

      <div onClick={() => {setSource(false); pauseVid();}} className="modal fade home-banner-video" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">

          <div className="modal-content">
            <div className="modal-header align-items-center">
              <h4 className="modal-title font-weight-bold" id="exampleModalLongTitle">How it Works | Icause</h4>
              <div> <button type="button" className="btn btn-success ">Become Partner</button>
                <button onClick={() => {setSource(false); pauseVid();}} type="button" className="close btn-lg" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div className="modal-body home-modal-video">
              <video id="myVideo" width="100%" height="600" controls>
                <source src="https://icause.s3.us-east-2.amazonaws.com/videos/icause.mp4" type="video/mp4" />
              </video>
              {/* <iframe src="https://icause.s3.us-east-2.amazonaws.com/videos/icause.mp4?autoplay=false" title="iframe"></iframe> */}
            </div>
            <div className="modal-footer border-0">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCampaigns;
