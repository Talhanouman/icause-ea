import React from 'react';
import MetaTags from 'react-meta-tags';

const NotFound = (props) => {
  return (
    <div className="about-pg-wrap">
      <MetaTags>
            <meta name="description" content="iCause is the perfect place to raise funds online for a personal campaign, charity or organisational fundraisers. We’re passionate about helping you reach your fundraising goals." />
      </MetaTags>
      <section className='my-5 about-sec-5' style={{ paddingBottom: '50px'}}>
        <div className='container-fluid' style={{ padding: '50px 0',background: '#3cb64f' }}>
          <div className='row align-items-center  '>
            <div >
              
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 custom-text-width order-md-2 order-sm-1 text-col'>
              <h2 className="main-heading mt-4 mb-4 mt-md-0" style={{ textAlign: 'center',color: '#ffff' }}>404</h2>
              <h2 className="main-heading mt-4 mb-4 mt-md-0" style={{ textAlign: 'center',color: '#ffff' }}>Page Not Found</h2>
            </div>

          </div>
        </div>
    
      </section>

      
    </div>
  );
}

export default NotFound;
