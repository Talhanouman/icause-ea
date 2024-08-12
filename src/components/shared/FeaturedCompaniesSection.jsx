import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHistory } from 'react-router';
import { imageURL } from '../../constants/constants';

const FeaturedCompaniesSection = (props) => {
  const { data, companyType, parentPage } = props;
  const history = useHistory()
  
  return (
    <section className="volunteers-team school-sec-7 pb-0">
      {
        data && data.length ?
          <span>
            <div className='container'>
            <div className='row '>
            <div className='col-12 col-md-6'>
            {/* <h5 className="text-grn  mb-0 ">School fundraising with a difference</h5>
            <h3 className="main-heading mb-4  mb-5">Donate you your school {companyType}</h3> */}
            <h5 className="text-grn  mb-0 ">Help them for hapiness!</h5>
            <h3 className="main-heading mb-0  mb-md-5">Featured {companyType}</h3>
            </div>
            <div className='col-12 col-md-6'>
            {
                parentPage === 'industryMain' ?
                <div className="mt-4 text-center text-md-right  d-none d-md-block">
                  <button 
                 
                  onClick={() => {
                    
                    history.push(`${companyType}-listing`)}
                  } 
                  type="button" className="btn btn-outline-dark">VIEW ALL</button>
                </div> : ''
              }
            </div>
            </div>
            </div>
            <div className="container mt-3">
              <OwlCarousel className={`owl-carousel owl-theme ${data.length > 4 && "campaignTrendingCards"}`} margin={28} dots={true} responsive={{ 0: { items: 1 }, 415: { items: 1 }, 680: { items: 3 }, 992: { items: 4 } }} nav={false}>
                {
                  data.map(({ company_name, cover_image, id, avatar }, index) => {
                    let imageCover = `${imageURL}1.PNG`;
                    if (avatar) {
                      imageCover = `${avatar}`;
                    }
                    return (
                      <div key={index} className="card border-0 text-center">
                        <a href={`/${companyType.toLowerCase()}-details/${id}`}>
                          <img src={imageCover} className="img-fluid" alt="" />
                          <p style={{ color: 'black' }} className="mb-0 mt-3">Recent Added</p>
                          <h4 style={{ color: 'black' }}>{company_name}</h4>
                        </a>
                      </div>
                    );
                  })
                }
              </OwlCarousel>
              <div className="mt-4 text-center text-md-right  d-block d-md-none">
                  <button 
                 
                  onClick={() => {
                    
                    history.push(`${companyType}-listing`)}
                  } 
                  type="button" className="btn btn-outline-dark">VIEW ALL</button>
                </div> 
              {/* {
                parentPage === 'industryMain' ?
                <div className="mt-4 text-center">
                  <button 
                  onClick={() => {
                    
                    history.push(`${companyType}-listing`)}
                  } 
                  type="button" className="btn btn-outline-dark">VIEW ALL</button>
                </div> : ''
              } */}
              
            </div>
          </span> : ''
      }
    </section>
  );
};

export default FeaturedCompaniesSection;