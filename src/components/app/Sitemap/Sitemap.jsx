import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router';

const Sitemap = (props) => {
  const history = useHistory();

  return (
    <div className="about-pg-wrap">
      <MetaTags>
            <meta name="description" content="iCause is the perfect place to raise funds online for a personal campaign, charity or organisational fundraisers. We’re passionate about helping you reach your fundraising goals." />
      </MetaTags>
      <section className='my-5 about-sec-5 site-map'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='iCause-Partners inner col-lg-6 col-md-12 col-sm-12 custom-text-width order-md-2 order-sm-1 text-col'>
              <h3 className="main-heading mt-4 mb-4 mt-md-0">Sitemap</h3>
              <p>School</p>
              <li><a href="#!" onClick={() => {history.push('/school') }}>School</a></li> 
              <li><a href="#!" onClick={() => {history.push('/school-listing') }}>School Listing</a></li> 
              <li><a href="#!" onClick={() => {history.push('/school-details/198') }}>School Detail</a></li> 
              <li><a href="#!" onClick={() => {history.push('/learn-more-school') }}>School Learn More</a></li> 
              <li><a href="#!" onClick={() => {history.push('/school-donate/138') }}>School Donate</a></li>
              <br/>
              <p>Sports</p>
              <li><a href="#!" onClick={() => {history.push('/sports') }}>Sports</a></li> 
              <li><a href="#!" onClick={() => {history.push('/sport-listing') }}>Sports Listing</a></li> 
              <li><a href="#!" onClick={() => {history.push('/sport-details/97') }}>Sports Detail</a></li> 
              <li><a href="#!" onClick={() => {history.push('/learn-more-sport') }}>Sports Learn More</a></li> 
              <li><a href="#!" onClick={() => {history.push('/sport-donate/82') }}>Sports Donate</a></li>
              <br/>
              <p>Charity</p>
              <li><a href="#!" onClick={() => {history.push('/charity') }}>Charity</a></li> 
              <li><a href="#!" onClick={() => {history.push('/charity-listing') }}>Charity Listing</a></li> 
              <li><a href="#!" onClick={() => {history.push('/charity-details/202') }}>Charity Detail</a></li> 
              <li><a href="#!" onClick={() => {history.push('/learn-more-charity') }}>Charity Learn More</a></li> 
              <li><a href="#!" onClick={() => {history.push('/charity-donate/101') }}>Charity Donate</a></li>
              <br/>
              <p>Community</p>
              <li><a href="#!" onClick={() => {history.push('/community') }}>Community</a></li> 
              <li><a href="#!" onClick={() => {history.push('/community-listing') }}>Community Listing</a></li> 
              <li><a href="#!" onClick={() => {history.push('/community-details/113') }}>Community Detail</a></li> 
              <li><a href="#!" onClick={() => {history.push('/learn-more-community') }}>Community Learn More</a></li> 
              <li><a href="#!" onClick={() => {history.push('/community-donate/85') }}>Community Donate</a></li>
              <br/>
              <p>Event</p>
              <li><a href="#!" onClick={() => {history.push('/event-manager') }}>Create an event</a></li> 
              <li><a href="#!" onClick={() => {history.push('/learn-more-event') }}>Event Learn More</a></li> 
              <br/>
              <p>Donate For</p>
              <li><a href="#!" onClick={() => {history.push('/other-category/1') }}>Health & Medical</a></li> 
              <li><a href="#!" onClick={() => {history.push('/other-category/2') }}>Pets & Animals</a></li> 
              <li><a href="#!" onClick={() => {history.push('/other-category/3') }}>Accident</a></li> 
              <li><a href="#!" onClick={() => {history.push('/other-category/6') }}>Bucket List</a></li> 
              <li><a href="#!" onClick={() => {history.push('/other-category/5') }}>In Memory</a></li>
              <li><a href="#!" onClick={() => {history.push('/other-category/8') }}>Travel</a></li>
              <li><a href="#!" onClick={() => {history.push('/other-category/9') }}>Faith</a></li>
              <br/>
              <p>Blog</p>
              <li><a href="#!" onClick={() => {history.push('/blogs') }}>Blogs</a></li> 
              <li><a href="#!" onClick={() => {history.push('/blog-details/6') }}>Blog Detail</a></li> 
              <br/>
              <p>News</p>
              <li><a href="#!" onClick={() => {history.push('/news') }}>News</a></li> 
              <li><a href="#!" onClick={() => {history.push('/news-detail/39') }}>News Detail</a></li> 
              <br/>
              <p>Campaign</p>
              <li><a href="#!" onClick={() => {history.push('/campaigns') }}>Campaigns</a></li> 
              <li><a href="#!" onClick={() => {history.push('/campaign-details/177') }}>Campaign Detail</a></li> 
              <br/>
              <p>Travel</p>
              <li><a href="#!" onClick={() => {history.push('/other-category/8') }}>Travel</a></li> 
              <li><a href="#!" onClick={() => {history.push('/travel-detail') }}>Travel Detail</a></li> 
              <br/>
              <p>Faith</p>
              <li><a href="#!" onClick={() => {history.push('/other-category/9') }}>Faith</a></li> 
              <li><a href="#!" onClick={() => {history.push('/faith-detail') }}>Faith Detail</a></li> 
              <br/>
              <p>Pages</p>
              <li><a href="#!" onClick={() => {history.push('/homepage') }}>Home</a></li>             
              <li><a href="#!" onClick={() => {history.push('/starting_fund') }}>Start a fundraise</a></li>
              <li><a href="#!" onClick={() => {history.push('/guarantee') }}>Icause guarantee</a></li>
              <li><a href="#!" onClick={() => {history.push('/why-icause') }}>Why icause</a></li>
              <li><a href="#!" onClick={() => {history.push('/become-a-partner') }}>Become Partner</a></li>
              <li><a href="#!" onClick={() => {history.push('/become-investor') }}>Become Investor</a></li>
              <li><a href="#!" onClick={() => {history.push('/security') }}>Security</a></li>
              <li><a href="#!" onClick={() => {history.push('/contact-us') }}>Contact us</a></li>
              <li><a href="#!" onClick={() => {history.push('/about') }}>About us</a></li>
              <li><a href="#!" onClick={() => {history.push('/career') }}>Career</a></li>
              <li><a href="#!" onClick={() => {history.push('/faq') }}>Help & Faq</a></li>
              <li><a href="#!" onClick={() => {history.push('/donate-money') }}>Donate Money</a></li>
              <li><a href="#!" onClick={() => {history.push('/details') }}>Detail</a></li>
              <li><a href="#!" onClick={() => {history.push('/auth/login') }}>Login</a></li>
              <li><a href="#!" onClick={() => {history.push('/auth/signup') }}>SignUp</a></li>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Sitemap;
