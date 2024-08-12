import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router";
import { imageURL, imageURLS3 } from "../../constants/constants";

const TopCampaigns = (props) => {
  const { pledgeOfTheDayData } = props;
  const history = useHistory();
  const pathName = history.location.pathname;
  // const pathName = history?.location?.pathname?.split('/')?.[1];

  const data = [
    {
      cover_photo:
        pathName === "/health/startFundraising"
          ? `${imageURLS3}campaigns/cover/Health_medical-banner-2.jpg`
          : pathName === "/animals/startFundraising"
          ? `${imageURLS3}campaigns/cover/pets_animal-banner-3.jpg`
          : pathName === "/accident/startFundraising"
          ? `${imageURLS3}campaigns/cover/accident-banner-1.jpg`
          : pathName === "/bucketlist/startFundraising"
          ? `${imageURLS3}campaigns/cover/bucket-list-banner.jpg`
          : pathName === "/inmemory/startFundraising"
          ? `${imageURLS3}campaigns/cover/banner image-1.jpg`
          : pathName === "/environment/startFundraising"
          ? `${imageURLS3}campaigns/cover/banner-1-environment.jpg`
          : pathName === "/travel/startFundraising"
          ? `${imageURLS3}campaigns/cover/banner-image3.jpg`
          : pathName === "/faith/startFundraising"
          ? `${imageURLS3}campaigns/cover/faith-banner-3.jpg`
          : "",

      title:
        pathName === "/health/startFundraising"
          ? "Health & Medical"
          : pathName === "/animals/startFundraising"
          ? "Animals & Pets"
          : pathName === "/accident/startFundraising"
          ? "Accidents"
          : pathName === "/bucketlist/startFundraising"
          ? "Bucket List"
          : pathName === "/inmemory/startFundraising"
          ? " In Memory"
          : pathName === "/environment/startFundraising"
          ? "Environment"
          : pathName === "/travel/startFundraising"
          ? "Travel & Tourism"
          : pathName === "/faith/startFundraising"
          ? "Faith"
          : "",

      story:
        pathName === "/health/startFundraising"
          ? "Support someone in their time of need."
          : pathName === "/animals/startFundraising"
          ? "Make a difference for our furry friends"
          : pathName === "/accident/startFundraising"
          ? "Raise funds to take the financial stress out of accidents."
          : pathName === "/bucketlist/startFundraising"
          ? "Make someone’s wildest dreams come true."
          : pathName === "/inmemory/startFundraising"
          ? "Raise funds in memory of a loved one"
          : pathName === "/environment/startFundraising"
          ? "Be a champion of environmental change"
          : pathName === "/travel/startFundraising"
          ? "Where would you rather be?"
          : pathName === "/faith/startFundraising"
          ? "Raise funds for your place of worship"
          : "",
    },
  ];

  return (
    <div>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={5000}
        infiniteLoop={true}
        showStatus={false}
        className="homepage-banner header-banner"
      >
        {data &&
          data.length &&
          data.map(({ id, cover_photo, story, title }, index) => {
            let firstStorySentence = "";
            let secondStorySentence = "";
            // let restStorySentence = '';

            if (story && story.length >= 80) {
              firstStorySentence = `${story.substring(0, 75)}`;
              secondStorySentence = `${story.substring(75, 100)}`;

              // restStorySentence = `${story.substring(75, story.length)}`;
            } else if (story && story.length < 80) {
              firstStorySentence = story;
            }

            let coverPhoto = `${imageURL}banner.png`;
            if (cover_photo) {
              coverPhoto = `${cover_photo}`;
            }
            return (
              <div key={index}>
                <section
                  style={{ backgroundImage: `url("${coverPhoto}")` }}
                  className="bannerForCategoryCampaigns"
                >
                  <div className="container">
                    <div className="row  ">
                      <div className="col-lg-8 col-md-12 col-sm-12 banner-text-col">
                        <h1 className="mb-0">{title}</h1>
                        <p className="dask-banner-pera mb-4">
                          {/* {story} */}
                          {firstStorySentence}
                          {secondStorySentence}
                        </p>
                        <button
                          style={{ float: "left" }}
                          onClick={() => {
                            history.push(
                              `/donate-money/${
                                pledgeOfTheDayData && pledgeOfTheDayData.id
                              }`
                            );
                          }}
                          type="button"
                          className="btn btn-outline-light mr-2"
                        >
                          Donate now
                        </button>
                        <button
                          style={{ float: "left" }}
                          onClick={() => history.push("/starting_fund")}
                          type="button"
                          className="btn btn-success btn_hover p-0"
                        >
                          Start fundraising
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default TopCampaigns;
