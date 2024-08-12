import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imageURL } from '../../constants/constants';

const FeaturedCompaniesForDonation = (props) => {
  const { data, companyType } = props;
  return (
    <section className="volunteers-team school-sec-7 mt-5">
      {
        data && data.length ?
          <span>
            <h5 className="text-grn text-center mb-0">Help them for hapiness!</h5>
            <h3 className="main-heading mb-4 text-center">Featured {companyType}</h3>
            <div className="container mt-3">
              <OwlCarousel className="owl-carousel owl-theme campaignTrendingCards" margin={28} dots={true} responsive={{ 0: { items: 1 }, 415: { items: 2 }, 680: { items: 3 }, 992: { items: 4 } }} nav={false}>
                {
                  data && data.length ?
                    data.map(({ company_name, cover_image, id }, index) => {
                      let imageCover = `${imageURL}1.PNG`;
                      if (cover_image) {
                        imageCover = `${cover_image}`;
                      }
                      return (
                        <div key={index} className="card border-0 text-center">
                          <a href={`/${companyType.toLowerCase()}-details/${id}`}>
                            <img src={imageCover} className="img-fluid" alt="" />
                            <p className="mb-0 mt-3">Recent Added</p>
                            <h4>{company_name}</h4>
                          </a>
                        </div>
                      );
                    }) : ''
                }
              </OwlCarousel>
            </div>
          </span> : ''
      }
    </section>
  );
};

export default FeaturedCompaniesForDonation;