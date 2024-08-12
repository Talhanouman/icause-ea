import React from 'react';
import MetaTags from 'react-meta-tags';

const EvenLearnMore = (props) => {
  return (
    <div className="poppin-wrap">
      <MetaTags>
            <meta name="description" content="Make a difference and create an event for any cause or fundraising. Raise funds online for your favourite charity, school, sports club and in community in just a few easy steps." />
      </MetaTags>
      <section className="banner school-banner gen-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-12">  
             <h1>
             icause for events
               {/* Event Planning */}
               </h1>
               <p>Make your event count</p>
            </div>
          </div>
        </div>
      </section>
      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3">
        <div className='container'>
          <div className='row'>
            
            <div className='col-lg-6 col-md-6 pl-md-5'>
              <div className="text-box">
                
              <h1 className="mb-3">
              Hassle-free event planning
                {/* Make your Event Count */}
                </h1>
                <p className="m-0">
                We’ve made planning your fundraising event pain-free. 
                  {/* Share the event   this year by making a difference to your favourite cause  you care about. To get started and link all your social media including facebook, twitter, Instagram for live feed. */}
                  </p>
                  <p>Our icause Event Manager makes it fast and simple to create and share your next event, and our social sharing feature means you can easily share your events on your social platforms to make sure you get noticed.</p>
            <li>Create your Event</li>
            <p>
            To start simply register with icause using Facebook or your email address and we’ll guide you through the rest.
              {/* To start, register with Facebook/gmail or your email. */}
              </p>
            <li>Choose your type of event</li>
            <p>
            Use one of our event templates, or customise your personal event page.
              {/* Put a smile on the face of someone who really deserves it. */}
              </p>

              <li>Build your team</li>
            <p>Add and manage team members through your icause dashboard.  </p>
            
            <li>Promote your event</li>
            <p>Share your event straight out of your icause page through social platforms, email or SMS.  </p>
            
            <li>	Track your success</li>
            <p>Use your online icause dashboard or the app to keep track of ticket and merchandise sales in one easy click.  </p>
            
            {/* <li>Send an invitation</li>
            <p>Send your invitation to your friends and family to start raising funds.</p> */}
              </div>
            </div>

            <div className='col-lg-6 col-md-6 pl-md-5'>
              <div className="text-box">
                
                <h1 className="mb-3">Create your page</h1>   
                
               <p>Creating your page is easy – in just a few simple steps your campaign will be up and running. </p> 
           
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-4">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className="text-box">
                <h1 className="mb-3">Why make a pledge?</h1>
                <p className="">“why not help someone fundraising?” It’s the dreaded question that we never have a good answer for! There’s no better present than supporting your favourite fundraising.</p>
                <li>Send your unique campaign link to friends and family so they can support in a couple of clicks.</li>
<li>Your friends and family can choose to donate directly or upload a bill to support.</li>
<li>	The funds you raise will automatically be paid to your chosen fundraising at the close of your campaign.</li>
<li>Your online portal makes it quick, easy and completely transparent to track your funds.</li>

              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvenLearnMore;
