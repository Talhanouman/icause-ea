

import React from 'react';
const Banner = (props) => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1>The iCause Warranty</h1>
              <p className="">t iCause, our role in the fundraising process is one we take seriously. We’ll do everything we can to make your fundraising totals get higher – and go further.</p>
              <button type="button" onClick={() => history.push('/auth/login')} className="btn btn-success btn_hover">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
