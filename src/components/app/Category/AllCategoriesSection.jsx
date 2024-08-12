import React from 'react';

const AllCategoriesSection = (props) => {
  const { data } = props;
  return (
    <section className="donate-your-bills Cause ideas inspiration">
      <div className="container">
        <h2 className="main-heading text-center mb-5">Cause ideas Inspiration</h2>
        <div className="row no-gutters">
          {
            data && data.length ?
              data.map(({ image, name, id }, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6 starting-fund-box">
                    <a href={id === 1 ? `/health/startFundraising` :
                       id === 2 ? `/animals/startFundraising` :
                       id === 3 ? `/accident/startFundraising` :
                       id === 5 ? `/inmemory/startFundraising` :
                       id === 6 ? `/bucketlist/startFundraising` :
                       id === 7 ? `/environment/startFundraising` :
                       id === 8 ? `/travel/startFundraising` :
                       id === 9 ? `/faith/startFundraising` :
                     `/other-category/${id}`
                     }>
                      <div className="bills_box">
                        <img alt='icon' className="img-fluid blacked-icon" src={`${image}`} />
                        <h3>{name}</h3> </div>
                    </a>
                  </div>
                );
              }) : ''
          }
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesSection