import React from 'react';
import { useHistory } from 'react-router';
import { imageURL } from '../../../constants/constants';

const Guarantee = (props) => {
  const { user } = props;
  const history = useHistory();

  return (
    <div className="gurantee-pg-wrap">
      <section className="banner gurantee-banner">
        <div className="container">
          <div className="row  ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1>
              Our promise.
                {/* Our Warranty ! */}
                </h1>
              <p className="">We're committed to helping you raise funds.
                {/* Switch for a Reason */}
                </p>
              <button type="button"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }}
                className="btn btn-success btn_hover">
                  Let's make this happen!
                  {/* GET STARTED */}
                  </button>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-section iCause-Partners gurantee-sec-2 school-sec-3">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className="card img-card dual-img-card-wrap">
                <img src={`${imageURL}what is the icause warranty.jpg`} className="img-fluid" alt="img" />
               {/* <div className="sm-img">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/donors.jpg" className="img-fluid" alt="img" />
                </div>*/}
              </div>
            </div>
            <div className='col-lg-7 pt-5 pt-lg-0 d-flex align-items-center'>
              <div className="text-box">
                <h5 className="text-grn">A CHARITY WITH MISSION</h5>
                <h3 className="main-heading    mt-md-0">The iCause Warranty</h3>
                {/* <p className="font-weight-bold">“Generosity consists not of the sum given, but the manner in which it is bestowed.”</p> */}
                <p className="">
                We’re passionate about making your fundraising a success. Our guarantee is our promise to you that we’ll do everything we can to make sure you reach your goals and make a difference. We’re here 24 hours a day to support you with your fundraising needs.
                  {/* At iCause, our role in the fundraising process is one we take seriously. We'll do everything we can to make your fundraising totals get higher – and go further. */}
                  </p>
                <button type="button" className="btn btn-outline-dark">READ MORE</button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="donate-section iCause-Partners gurantee-sec-2">
        <div className='container'>
          <div className='row d-flex align-items-center'>

            <div className='col-lg-7 col-md-12 d-flex'>
              <div className="text-box">
                {/* <h5 className="text-grn">A CHARITY WITH MISSION</h5> */}
                <h3 className="main-heading mt-md-0">What is the iCause Warranty?     </h3>
                {/* <p className="font-weight-bold">“Generosity consists not of the sum given, but the manner in which it is bestowed.”</p> */}
                <p className="">The iCause Warranty is our promise to you all. To our fundraisers. To the donors. To every single one of those who benefit from the help that gets channelled through this Platform. We guarantee that we'll do all we can to make great things happen.</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboret dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button type="button" className="btn btn-outline-dark mb-3">READ MORE</button> */}
              </div>
            </div>
            <div className='col-lg-5 col-md-12'>
              <div className="card img-card dual-img dual-img-card-wrap guarantee-dual-image">
                <img src={`${imageURL}are you donors.jpg`} className="img-fluid" alt="img" />
                {/*<div className="sm-img small-img">
                  <img src="https://icause.s3.us-east-2.amazonaws.com/app_images/what is the icause warranty-2.jpg" className="img-fluid" alt="img" />
                </div>*/}
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="donate-section iCause-Partners">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-5 order-md-1 order-sm-2 mb-3 mb-sm-0'>
              <div className="img-box">
                <img src={`${imageURL}last-section-image.jpg`} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className='px-lg-5 col-lg-7  col-md-7 d-flex align-items-center order-md-2 order-sm-1'>
              <div className="text-box lists">
                <h5 className="text-grn font-weight-bold">A CHARITY WITH MISSION</h5>
                <h3 className="main-heading mt-md-0">
                Our guarantee to donors
                  {/* Are You A Donors? */}
                  </h3>
                {/* <p className="font-weight-bold">“Generosity consists not of the sum given, but the manner in which it is bestowed.”</p> */}
                <p className="">
                icause is designed to give every Australian the chance to help. We recognise that with the best of intentions, it’s not always possible to donate as much as you’d like. That’s why we’ve created a unique way to donate, either by donating directly or by using your utility bill. Whichever way you choose, we promise to make all your goodwill count, and if something unexpected happens and there’s a problem, we guarantee to refund your donation.
                  {/* Sometimes, it's just the right time to give something back – so, don't let your bank balance define how you help. iCause is the only crowdfunding website that provides two ways to make a difference. Either donate directly or use your utility bills to help others – whichever way you choose, we guarantee to make all your goodwill count.  */}
                  </p>
                <ul>
                  <li>	Here at iCause, we promise to work around the clock to make sure all beneficiary funds make it to where they're supposed to be.</li>
                  <li>If something unexpected happens and there's a problem, we promise to refund your Donation.</li>
                </ul>
                {/* <button type="button" className="btn btn-outline-dark">READ MORE</button> */}
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className="accordion gurantee-sec-5">
        <div className="container iCause-Partners">
          <div className="top-text">
            <h5 className="text-grn text-center">A CHARITY WITH MISSION</h5>
            <h3 className="main-heading mt-md-0 text-center mb-4">Warranty Conditions</h3>
            {/* <h4>To all the Beneficiaries:</h4>
            <p>At iCause, we promise never to lose sight of the fact that our actions can make a massive difference to those who need a bit of extra help. Our passion for Fundraising means we want every cent possible to get to the causes it's intended to help. And we'll never stop doing our level best to make that happen.</p> */}
           <p style={{ color: 'black' }}  className="font-weight-bold m-0">RAISE CAPITAL HOLDING PTY LTD ACN 650 137 607</p>
           <p style={{ color: 'black' }} className="font-weight-bol m-0">ICAUSE ONLINE PLATFORM – TERMS OF USE</p>
           <hr className="mt-0"></hr>
            <p style={{ color: 'black' }} >The iCause website located at <a href="https://www.icause.com.au/" style={{color:'#3cb64f '}}>www.icause.com.au </a>and the online fundraising and donations platform accessible through our downloadable software application  <b>(Application)</b> is owned, controlled and operated by Raise Capital Holding Pty Ltd ACN 650 137 607 (<b>we, us, our,</b> or <b>iCause</b>).  </p>
            <p style={{ color: 'black' }} >The terms and conditions set out below (<b>Terms of Use</b>) apply to use of the Website and Application (jointly and severally, the <b>Platform</b>) by you (the <b>User, you</b> or <b>your</b>). The Platform is available for you to use conditional on your acceptance of these Terms of Use.</p>
            <p style={{ color: 'black' }} ><b><u>BY ACCESSING OR USING THE PLATFORM, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS OF USE.  IF YOU DO NOT AGREE TO THESE TERMS OF USE, YOU SHOULD STOP ACCESSING OR USING THE PLATFORM IMMEDIATELY</u></b></p>
            <p style={{ color: 'black' }} >iCause reserves the right to amend these Terms of Use at any time. Notice of any amendments will be displayed on the Platform and may be sent to Registered Users by email. Your continued use of the Platform following any change(s) to the Terms of Use shall mean that you accept such change(s) and that you will be bound by the Terms of Use as varied.</p>
           
            <p style={{ color: 'black' }} >By accepting these Terms of Use, you also acknowledge that you have read our Privacy Statement available at <a href="https://www.icause.com.au/privacy-policy" style={{color:'#3cb64f '}}>Privacy & Policy</a> and to the extent permitted by law, you consent to how we collect, handle and use your Personal Information in accordance with our Privacy Statement.</p>
            <p style={{color:'black'}}>Any questions about these Terms of Use can be directed to <a href="#!" style={{color:'#3cb64f '}}> Privacy@icause.com.au </a></p>
            <div className="squareBox lists" >
              <p style={{ color: 'black' }} ><b>PLEASE CAREFULLY NOTE BEFORE READING:</b></p>
              <ul>
              <li>Words that are capitalized, are found in the definition section of these Terms of Use at clause 21.8.</li>
              <li>If you are a Consumer, the Platform Services come with Consumer Guarantees under the ACL. </li>
              <li>If you are a Consumer, nothing in these Terms of Use (including, without limitation, the disclaimers of liability contained in clause 15 and limitations of liability contained in clause 16) is intended to limit or exclude your Consumer Guarantees.</li>
              <li>Subject to any rights which you may have as a Consumer or otherwise at law, your use and access of the Platform is provided on an “as is” basis and entirely at your own risk. </li>
              <li>iCause provides intermediary functions and services connecting Fundraisers and Donors.  The presence of a Fundraiser on the Platform does not indicate any endorsement by iCause of the fundraising activities or charity activities of that Fundraiser or a Campaign.</li>
              <li>Fundraisers must not use the Platform to promote or endorse any commercial undertaking or profit-making Campaign, promote adult material, drugs/substances, termination of life, gambling, immigration, cosmetic surgery, political parties or candidates, or any administration costs in relation to a Fundraiser</li>
              <li>Your ability to hold iCause responsible for any loss or damage that you may suffer from accessing or using the Platform may be significantly restricted.</li>
              <li>You are solely responsible for compliance with all laws and regulations applicable to your use of the Platform. </li>
              <li>There are restrictions that apply to your use of the Platform, and there are significant consequences if you do not comply with such restrictions</li>
              <li>You may be required to indemnify iCause for certain loss or damage that we may suffer from your breaching these Terms of Use</li>
              <li>If you input or upload any User Content to the Platform, you provide iCause with a licence to use the Intellectual Property subsisting in that User Content.</li>
              <li>We collect, handle and use your Personal Information in accordance with our Privacy Statement.</li>
              </ul>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">
              <div id="accordion" className="accordion-wrap">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i className="fa fa-caret-down"></i>The Platform
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" data-parent="#accordion">
                    <div className="card-body warranty-onditions">
                      <p style={{fontWeight:'500'}}>iCause operates the Platform to help people and organisations create, manage, fundraise and donate to fundraising campaigns online. </p>
                      <p style={{fontWeight:'500'}}>Through its operation of the Platform, iCause provides intermediary functions and services connecting Fundraisers and Donors as follows:</p>
                      <p><span className="mr-2">1.1</span>allowing Fundraisers to register and use the Platform to create Campaigns.</p>
                      <p><span className="mr-2">1.2</span> allowing Fundraisers to upload campaign details, information and stories in relation to a Campaign via a portal contained on the Platform</p>
                      <p><span className="mr-2">1.3</span> allowing Fundraisers to plan and manage Campaigns via a campaign portal contained on the Platform.</p>
                      <p><span className="mr-2">1.4</span> allowing Fundraisers to accept Donations and issue receipts to a Donor in relation to a Campaign.</p>
                      <p><span className="mr-2">1.5</span> enabling Donors to make a Donation via a third party bill comparison website by choosing to transfer the Donor’s utility bill, or any other qualifying bill, to a new service provider.</p>
                      <p><span className="mr-2">1.6</span> allowing Donors to donate to a Campaign via the Platform; and.</p>
                      <p><span className="mr-2">1.7</span> allowing Users to post comments on the Platform in relation to a Campaign.</p>
                      <p className="font-weight-bold ">(Platform Services)</p>
                      <p>iCause reserves the right to introduce additional functions and services on the Platform and to alter existing Platform Services at any time without notice to Users</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i className="fa fa-caret-down"></i> Application of Terms of Use and Licence to Use Platform
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">2.1</span>These Terms of Use apply to all Users, whether or not the User is a Registered User.  By visiting, viewing, browsing, accessing, creating a User Account, or otherwise using the Platform, you accept and agree to comply with these Terms of Use.</p>
                      <p><span className="mr-2">2.2</span>These Terms of Use comprises of this document and such other document or policies that we may introduce or amend from time to time, all of which are incorporated in these Terms of Use by reference. We will give you reasonable notice of a new policy or changes to the Terms of Use by posting on our Website or otherwise notifying you in a manner prescribed by us. By continuing to access or use the Platform, or continuing to maintain a User Account, after we have given notice of an introduction of a policy or variation of these Terms of Use, you agree to continue to be bound by the Terms of Use as varied.</p>
                      <p><span className="mr-2">2.3</span>By accessing the Platform and/or creating a User Account, you warrant that you have legal capacity to agree and to be bound by these Terms of Use. </p>
                      <p><span className="mr-2">2.4</span>Subject to, and provided you comply with, the terms of these Terms of Use, iCause agrees to grant you a limited, personal, non-exclusive, non-transferable, conditional and revocable licence to view, access and use the Platform</p>
                      <p><span className="mr-2">2.5</span>We may terminate the licence provided to you under clause 2.4 when you breach these Terms of Use or for any other reason (in our sole discretion).</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header ">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <i className="fa fa-caret-down"></i>User Account
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse">
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">3.1</span>In order to access some of the functionality of the Platform, you must register a user account on the Platform (User Account). If you do not have a User Account, you will not be able to access all of the functionality of the Platform (for example, posting a comment in relation to a Campaign).</p>
                      <p><span className="mr-2">3.2</span>You can register a User Account by providing us with a username, password, email address, date of birth and such other details as we reasonably require from time to time. Alternatively, you may also register by linking your User Account with certain third-party social networking services (Third Party Accounts) such as Google or Facebook (which we may make available from time to time). If you elect to register a User Account via a Third Party Account, you warrant that you are entitled to disclose your Third-Party Account log-in information to us and that we will access, make available, use and store on the Platform any content that you have provided to us through your Third Party Account.</p>
                      <p><span className="mr-2">3.3</span>You will be required to create a unique password to obtain access to your User Account (Password). You are solely responsible for maintaining the confidentiality of your Password and undertake not to allow the security of your User Account to be compromised through misuse of your Password. You must immediately notify iCause of any suspected misuse of your Password.</p>
                      <p><span className="mr-2">3.4</span>Without limiting any other rights which iCause may have to communicate with you, you agree that iCause may send e-mails to the nominated e-mail address for your User Account for notification purposes regarding the Platform (including in relation to any updates to these Terms of Use and Privacy Statement).</p>
                      <p><span className="mr-2">3.5</span>iCause maintains the right at all times in its sole unfettered discretion and without prior notice to refuse to register, terminate or suspend any User Account, and to remove access to, or suspend the use of, any specific functions associated with any User Account (such as Fundraiser functions).</p>
                      <p><span className="mr-2">3.5</span>You agree to not transfer your User Account to any other person, or allow access to your User Account by another person unless expressly authorised by iCause or these Terms of Use.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <i className="fa fa-caret-down"></i>Fundraising
                      </button>
                    </h5>
                  </div>
                  <div id="collapse4" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">4.1</span>To use the Platform as a Fundraiser, you must register a User Account.</p>
                      <p><span className="mr-2">4.2</span>Fundraisers may upload to the Platform details of Campaigns which Donors may offer to make a donation to by placing a Donation on the Website. For each Campaign, Fundraisers must also specify campaign details and information and such other information that iCause may require a Fundraiser to provide based on the Platform’s functions from time to time (Campaign Materials).</p>
                      <p><span className="mr-2">4.3</span>By using the Platform as a Fundraiser, you agree in relation to each Campaign you upload to the Platform, that you are solely responsible for any and all Campaign Materials that you provide to iCause or which otherwise relates to the Campaign; and that you will comply with all Applicable Laws when preparing, offering, promoting and advertising the Campaign and accepting a Donation from Donors via the Platform.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        <i className="fa fa-caret-down"></i>Donating
                      </button>
                    </h5>
                  </div>
                  <div id="collapse5" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">5.1</span>To donate to Campaigns via the Platform, you may (but are not obliged to) register a User Account.</p>
                      <p><span className="mr-2">5.2</span>To donate to a Fundraiser’s Campaign, a Donor must place a Donation for the Campaign on the Platform. Donations are final and binding once placed.</p>
                      <p><span className="mr-2">5.3</span>A Donor may elect to donate to a Fundraiser’s Campaign on a recurrent basis.</p>
                      <p><span className="mr-2">5.4</span>A Donor may also donate to a Fundraiser’s Campaign by choosing to transfer the Donor’s utility bill, or any other qualifying bill (Bill), to a new service provider via a third party website service affiliated with iCause (Bill Comparison Website) appearing on the Platform. The Bill Comparison Website will then provide the Fundraiser with a Donation for the Campaign that is equal to 30% of the commission received by the Bill Comparison Website for the Donor changing to a new service provider via the Bill Comparison Website.</p>
                      <p><span className="mr-2">5.5</span>Where a Donor chooses to make a Donation to a Campaign under clause 5.4 via a Bill Comparison Website, the Donor authorizes iCause to provide the Donor’s contact information to the Bill Comparison Website to facilitate the transfer of the Bill to a new service provider.</p>
                      <p><span className="mr-2">5.6</span>iCause is not obliged to remit any Donation to a Fundraiser for a Campaign and may cancel any Donation in its absolute discretion, if iCause believes that a Donor or the Fundraiser (or a party using the Fundraiser’s User Account), is in breach of these Terms of Use.</p>
                      <p><span className="mr-2">5.7</span>The appearance of a Bill Comparison Website on the Platform does not indicate any endorsement by iCause of any offer, deal or product appearing on that Bill Comparison Website. Each User must make their own enquiries as to the suitability of any offer, deal or product appearing on any Bill Comparison Website. iCause is not responsible for the performance of any Bill Comparison Website and the Donor agrees to comply with any policies relating to a Bill Comparison Website.</p>
                      <p><span className="mr-2">5.8</span>When placing a Donation the Donor must leave the following minimum details: name, email addressand such other details as we reasonably require from time to time</p>
                      <p><span className="mr-2">5.9</span>The following details of the Donation may be published on the Platform: name, location, the amount of the Donation.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        <i className="fa fa-caret-down"></i>Campaign requirements
                      </button>
                    </h5>
                  </div>
                  <div id="collapse6" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">6.1</span>All Fundraisers must ensure that any Campaign they operate via the Platform :</p>
                      <p><span className="mr-2">6.2</span> Must have a duration of no less than 30 days;</p>
                      <p><span className="mr-2">6.4</span>Must state the Campaign fundraising target;</p>
                      <p><span className="mr-2">6.5</span>Contains sufficient information in relation to the Campaign (including, but not limited to, the reason for the Campaign, the location of the Campaign, why the Fundraiser is accepting Donations, a clear definition of who will benefit from the Donation and how any Donation will be used or distributed and a clear outline of who the Donation will be distributed to by the Fundraiser); </p>
                      <p><span className="mr-2">6.6</span>does not endorse or promote adult material, drugs/substances, termination of life, gambling,  political parties or candidates, hate speech, racism, any administration costs in relation to a Fundraiser; and</p>
                      <p><span className="mr-2">6.7</span>Is not a commercial undertaking or profit-making Campaign.</p>
                      <p><span className="mr-2">6.8</span>If a Fundraiser does not achieve a fundraising target in relation to a Campaign within 30 days from the commencement date of that Campaign, the Fundraiser may elect to extend the duration of the Campaign up to a maximum of 3 months from the commencement date of the Campaign</p>
                      <p><span className="mr-2">6.9</span>Where a fundraising target for a Campaign is not reached during the Campaign period as extended by clause 8.2, then iCause will remit the Donation in relation to a Campaign to the Fundraiser in accordance with the payment terms of these Terms of Use. </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        <i className="fa fa-caret-down"></i>Fundraising & Legal Compliance
                      </button>
                    </h5>
                  </div>
                  <div id="collapse7" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p> <span className="mr-2">7.1</span> All Fundraisers using the Platform must obtain any applicable licence, consent or approval to fundraise and accept donations in the state or territory which the Campaign occurs, as required by any Applicable Laws.  It is not the responsibility of iCause to obtain necessary licences, consents or approvals for any Fundraiser to fundraise via the Platform.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        <i className="fa fa-caret-down"></i>No Endorsement of Fundraising
                      </button>
                    </h5>
                  </div>
                  <div id="collapse8" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">8.1</span>The presence of a Fundraiser on the Platform does not indicate any endorsement by iCause of the fundraising activities or charity activities of that Fundraiser. iCause does not endorse any of the information, content and opinions incorporated into the Platform by a Fundraiser..</p>
                      <p><span className="mr-2">8.2</span>It is the sole responsibility of each Donor to investigate, check and confirm the identity of the Fundraiser in relation to a Campaign before it donates.  iCause does not accept any responsibility for the use or misuse of any Donation by any Fundraiser using the Platform Services.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        <i className="fa fa-caret-down"></i>Payments, Fees and Payment Processing
                      </button>
                    </h5>
                  </div>
                  <div id="collapse9" className="collapse">
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">9.1</span>At the time of placing a Donation, the Donor must, via the Platform, provide the Donor’s nominated credit card details or select their preferred payment method designated in their User Account, and pre-authorise iCause to deduct the Campaign Fees in full immediately from the Donor’s nominated credit card.</p>
                      <p><span className="mr-2">9.2</span>In consideration for providing the Platform Services, iCause charges Fundraisers a service fee of 5% of the total amount of money raised by a Fundraiser in relation to each Campaign (Platform Campaign Fee). Fundraisers must pay Platform Campaign Fees in accordance with this clause 9.</p>
                      <p><span className="mr-2">9.3</span>You acknowledge and agree that iCause uses the Payment Provider to provide payment processing services to Users in relation to the Platform (Payment Processing Services), including acting as the Fundraiser’s limited payment collection agent when a Donor.  If you any Payment Processing Services in relation to the Platform, you agree to be bound by the Payment Provider’s terms and conditions, which include but are not limited to, <a href="#!" style={{color:'#3cb64f '}}> https://www.paypal.com/au/webapps/mpp/merchant-fees </a> and <a href="#!" style={{color:'#3cb64f '}}> https://stripe.com/au/pricing </a> , and such other relevant agreements from time to time. You agree to provide iCause accurate and complete information about you when requested (including but not limited to your payment methods), and you authorize iCause to share any such information with the Payment Provider as well as transaction information related to your use of the Payment Processing Services.  iCause is not responsible for the performance of any third party credit card processing or third party payment services.</p>
                      <p><span className="mr-2">9.4</span>Campaign Fees and Platform Campaign Fees are inclusive of all taxes where required by Applicable Law. In addition to the Campaign Fees, the Donor’s bank may charge a processing or similar fee which iCause cannot control and is in no way responsible for (Bank Fee). The Donor agrees to pay all Bank Fees.</p>
                      <p><span className="mr-2">9.5</span>In relation to each Campaign, iCause shall remit to the Fundraiser’s nominated bank account (via the Payment Provider) the Campaign Fees less any Platform Campaign Fees and any fees charged by the Payment Provider in relation to the Payment Processing Services within fourteen (14) business days following the end date of the Campaign, unless otherwise agreed between iCause and the Fundraiser</p>
                      <p><span className="mr-2">9.6</span>Fundraisers are solely responsible and liable for reporting, collecting and remitting any taxes which relate to the collection of the Campaign Fees for a Campaign, to the appropriate governmental tax authority.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        <i className="fa fa-caret-down"></i>Donation Refunds
                      </button>
                    </h5>
                  </div>
                  <div id="collapse10" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">10.1</span>A Donor may only cancel a Donation for a Campaign prior to the end date of the Campaign as listed on the Campaign unless otherwise agreed by iCause.</p>
                      <p><span className="mr-2">10.2</span>If a Donor wishes to cancel a Donation for a Campaign and receive a refund after the end date of the Campaign, iCause may offer to take the steps listed in clause 10.3 in relation to the request, if iCause is satisfied (in its sole discretion) that:</p>
                      <p><span className="mr-2">10.3</span>the Donor has made a valid Donation on the Platform to the Campaign;</p>
                      <p><span className="mr-2">10.4</span>the Donation is not delivered by the Fundraiser to the stated beneficiary or beneficiaries of the Campaign on the Platform;</p>
                      <p><span className="mr-2">10.5</span>the Campaign has been conducted in breach of clause 6 of the Terms of Use; and</p>
                      <p><span className="mr-2">10.6</span>clause 10.4 does not apply in relation to the request.</p>
                      <p><span className="mr-2">10.7</span>Where a Donor requests a refund of a Donation under clause 10.2 and iCause is satisfied that the matters in clause 10.2(a)-(d) have been satisfied, iCause may elect to either:.</p>
                      <p><span className="mr-2">10.8</span> Provide the Donor with a refund for the full amount of the Donation if the Donation was $1,000.00 or less or a part refund to the value of $1,000.00 if the Donation was over $1,000.00; or</p>
                      <p><span className="mr-2">10.9</span>Provide the Donor with a credit for the full amount of the Donation if the Donation was $1,000.00 or a partial credit to the value of $1,000.00 if the Donation was over $1,000.00 which the Donor may then apply to another Campaign on the Platform.</p>
                      <p><span className="mr-2">10.10</span>A Donor may not seek to receive a refund or credit in relation to a Donation after the end date of the Campaign where any of the following apply:</p>
                      <p><span className="mr-2">10.11</span>the Donor has any connection to the Fundraiser or the Campaign</p>
                      <p><span className="mr-2">10.12</span>for any request for a ‘change of mind’ refund or credit; and</p>
                      <p><span className="mr-2">10.13</span>for any change of personal opinion in relation to a Campaign, Campaign Materials or the Fundaiser.</p>
                      <p><span className="mr-2">10.14</span>If a Donor is entitled to a refund of any kind under clause 10, iCause will, via its Payment Processor, refund the Donor as set out in clause 10.3(a). Processing of refunds from Fundraiser’s bank accounts may take up to 14 business days as they are facilitated by the Payment Processor.</p>
                      <p><span className="mr-2">10.15</span>Subject to any rights a Donor may have under clause 15 and even where the Donor receives a refund or credit above under clause 10, iCause is not required to refund Donors for fees charged by Payment Providers in relation to the Donation or any Bank Fees charged to the Donor by the Donor’s bank.  </p>
                      <p><span className="mr-2">10.16</span>Nothing in this clause 0 overrides, excludes, limits or otherwise restricts any Consumer Guarantees applicable to you under the ACL, to the extent that they do, clause 16.1 will prevail.</p>
                      <p><span className="mr-2">10.17</span>Fundraisers acknowledge and agree that terms that apply to the refund of Donations under clause 10 in relation to all Campaigns they operate on the Platform</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                        <i className="fa fa-caret-down"></i>Privacy
                      </button>
                    </h5>
                  </div>
                  <div id="collapse11" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">11.1</span>When operating the Platform, iCause will collect, handle and use your Personal Information in accordance with our Privacy Statement – see <a href="#!" style={{color:'#3cb64f'}}>Privacy@icause.com.au.</a></p>
                      <p><span className="mr-2">11.2</span>By using the Platform including registered a User Account, you acknowledge that you have read our Privacy Statement and consent to our collection, use and disclosure of your personal information in accordance with our Privacy Statement.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                        <i className="fa fa-caret-down"></i>Registered User Conduct
                      </button>
                    </h5>
                  </div>
                  <div id="collapse12" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">12.1</span>Your access to, and use of, the Platform is subject to all conditions specified in these Terms of Use. If you breach any such conditions, we will be entitled to take any reasonable action, including terminating your User Account or taking legal action against you, in our sole discretion..</p>
                      <p><span className="mr-2">12.2</span>You must comply, and are solely responsible for complying, with Applicable Laws that apply to your use of the Platform. Subject to any law to the contrary, we do not otherwise guarantee or warrant that your proposed or actual use of the Platform, complies with Applicable Laws that may apply to your activities on the Platform.</p>
                      <p><span className="mr-2">12.3</span>You agree that you will not</p>
                      <p><span className="mr-2">12.4</span>Use the Platform for any purpose that is illegal, unlawful or prohibited by these Terms of Use; </p>
                      <p><span className="mr-2">12.5</span>Interfere or attempt to interfere with, or obtain or attempt to obtain unauthorised access to, the proper working of the Platform or any Content, including (without limitation) through: </p>
                      <p><span className="mr-2">12.6</span>hacking or use of automated devices, scripts or bots; </p>
                      <p><span className="mr-2">12.7</span>destructive transmission of viruses, malware or any code or other conduct of a disruptive or destructive nature; </p>
                      <p><span className="mr-2">12.8</span>reverse engineering, circumventing, damaging, disassembling, attempting to discover the source code; or </p>
                      <p>other illegitimate means; </p>
                      <p><span className="mr-2">12.9</span> Contact Users for the purpose of sending unsolicited offers, advertisements, spam, junk e-mails;</p>
                      <p><span className="mr-2">12.10</span> Contact Users for the purpose defaming, abusing, threatening or defrauding Users; </p>
                      <p><span className="mr-2">12.111</span>Impersonate any entity or falsely claim an affiliation with any person or entity; </p>
                      <p><span className="mr-2">12.12</span>Scrape or otherwise obtain any data from the Platform for any purpose or use any Content to spam third parties; or</p>
                      <p><span className="mr-2">12.13</span>Contribute or distribute any User Content via the Platform that infringes Applicable Laws or any other legislation or regulations of any applicable jurisdiction (including without limitation the jurisdiction in which you are using the Platform). You agree that any legal consequences arising from a claim or action for infringement of any such legislation or regulation based on contributing or distributing User Content via the Platform are your sole responsibility and you are wholly liable for such claims or actions.</p>
                      <p>You agree that your User Content does not contain any:</p>
                      <p><span className="mr-2">12.14</span>Offensive, defamatory, obscene, blasphemous, hateful, violent, bullying, discriminatory or threatening language, or content that creates a risk of personal injury or property damage or makes any threat to people or public safety; </p>
                      <p><span className="mr-2">12.15</span>Illegal, false, fraudulent, misleading or deceptive conduct, including but not limited to blackmail, extortion, financial or personal scams and attempts to impersonate others </p>
                      <p><span className="mr-2">12.16</span>Content that infringes the personal or proprietary rights of others, including but not limited to Intellectual Property rights and rights to privacy; or </p>
                      <p><span className="mr-2">12.17</span>Spam, publicity or promotion of commercial activities or commercial content not specifically authorised by us with our prior written consent. </p>
                      <p> <span className="mr-2">12.18</span>You are solely responsible for any uploading or sharing of User Content on the Platform in accordance with clause 13. By contributing User Content to the Platform, you must not infringe the rights (including Intellectual Property rights) of any other User or third party or act in a way that constitutes a breach of any agreement you may have with any person. Subject to clause 15, we are not responsible or liable for any User Content that is uploaded to, shared via, displayed on or transmitted via the Platform that does not comply with these Terms of Use.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                        <i className="fa fa-caret-down"></i>Uploading User Content and Comments
                      </button>
                    </h5>
                  </div>
                  <div id="collapse13" className="collapse" data-parent="#accordion">
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">12.1</span>You agree to share or upload Content (including Campaign Materials) to the Platform only if all of the following conditions are met:   </p>
                      <p><span className="mr-2">12.2</span> You are the owner of all Intellectual Property rights in the Content (Content IP) and can license the use of the Content IP to iCause in accordance with clause 14.4;  </p>
                      <p><span className="mr-2">12.3</span> If you are not the owner of the Content IP, you have all necessary licenses, permissions and consents to upload the Content containing Content IP to the Platform and license the use of the Content IP to iCause in accordance with clause 14.4; and</p>
                      <p><span className="mr-2">12.4</span> If the Content contains any Intellectual Property owned by a third party (Third Party Content IP) in conjunction with the Content IP, you have all necessary licenses, permissions and consents to upload the Content containing Third Party Content IP to the Platform  and license the use of the Third Party Content IP to iCause in accordance with clause 14.4. </p>
                      <p><span className="mr-2">12.5</span>iCause retains the right (without providing any notice to you) to remove, block, edit or monitor the User Content, at iCause’s sole discretion. </p>
                      <p><span className="mr-2">12.6</span>After making a Donation, Donors may leave public comments (Comments) in relation to a each Campaign. Comments reflect the opinion of the individual Donor.</p>
                      <p><span className="mr-2">12.7</span>Users agree that they must not manipulate the Comments in any manner, such as instructing another Registered User to write a positive or negative Comment about a Campaign.</p>
                      <p><span className="mr-2">12.8</span>iCause is not responsible for any User Content (including Comments) that is created, uploaded or submitted to, or otherwise appears via, the Platform. We do not endorse, support, represent or guarantee the accuracy, completeness or reliability of User Content appearing on the Platform. Also, we do not endorse or represent the views of opinions contained in any User Content</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                        <i className="fa fa-caret-down"></i>Intellectual Property
                      </button>
                    </h5>
                  </div>
                  <div id="collapse14" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">13.1</span>The Intellectual Property subsisting in any aspect of the Platform including without limitation text, graphics, artwork, logos, software, trade marks, designs, copyright, compilations, algorithms, source code, video recordings and audio recordings, as well as the structure, layout, user interface and “look and feel” of the Platform, but excluding User Content (Platform IP), is exclusively owned and controlled by iCause and/or its third party licensors and/or licensees, and is protected by Australian and international law governing intellectual property rights. The Platform IP remains iCause’s exclusive property throughout the world in perpetuity.</p>
                      <p><span className="mr-2">13.2</span>You are not permitted to save, download, reproduce, display, copy, alter, conceal, adapt, perform, transmit, broadcast, sell, license or otherwise exploit any Platform IP unless you have express prior written authorisation from iCause. Any unauthorised use of Platform IP by Users is strictly prohibited. </p>
                      <p><span className="mr-2">13.3</span>Subject to the rights granted to iCause under clause 14.4, you will retain exclusive ownership and/or control of any Intellectual Property subsisting in any User Content which you share via, or submit or upload to, the Platform.</p>
                      <p><span className="mr-2">13.4</span>Notwithstanding clause 14.3, you grant to iCause a perpetual, non-exclusive, fully paid, royalty-free, transferable, sub-licensable, non-revocable, unlimited, worldwide licence to reproduce, exploit, use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute any User Content which you share via, or submit or upload to, the Platform, in any and all media, at iCause’s sole discretion.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                        <i className="fa fa-caret-down"></i>Consumer Guarantees and Disclaimers
                      </button>
                    </h5>
                  </div>
                  <div id="collapse15" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">14.1</span>Where you acquire our Platform Services as a Consumer, we will provide our Platform Services to you in accordance with any Consumer Guarantees under the ACL. Nothing in these Terms of Use overrides, excludes, limits or otherwise restricts any Consumer Guarantees applicable to you under the ACL, to the extent that they do, this clause 15.1 will prevail</p>
                      <p><span className="mr-2">14.2</span>Where you do not acquire our Platform Services as a Consumer, or clause 15.1 does not apply, then to the extent permitted by law:.</p>
                      {/* <p>• </p> */}
                      <p><span className="mr-2">14.1</span>We do not guarantee or warrant that the Platform Services will be suitable or fit for any particular purpose, including the purpose for which the Platform Services are ordinarily provided;</p>
                      <p><span className="mr-2">14.1</span>We do not guarantee or warrant that access to and use of the Platform will be uninterrupted and fault-free at all times;</p>
                      <p><span className="mr-2">14.1</span> We do not provide any guarantee or warranty that you may view, access or use the User Content via the Platform without infringing the Intellectual Property rights of a third party or for any incomplete, inaccurate, incorrect or out-of-date information in User Content on the Platform; and </p>
                      <p><span className="mr-2">14.1</span> We otherwise exclude any term, condition or warranty that may otherwise be implied into these Terms of Use or otherwise relating to our Platform Services.</p>
                      <p> <span className="mr-2">14.1</span>In addition to clause 14.2, and subject at all times to clause 14.1, you acknowledge and agree that:</p>
                      <p><span className="mr-2">14.1</span> iCause provides intermediary functions and services connecting Fundraisers and Donors and does not accept or provide donations via the Platform;</p>
                      <p><span className="mr-2">14.1</span> iCause does not recommend or endorse any particular Fundraiser or Campaign (including through the use of Comments uploaded by Donors) and does not provide any advice regarding the legitimacy and transparency of any Campaigns and you must exercise your own due diligence on all Fundraisers and Campaigns before making a Donation.;</p>
                      <p><span className="mr-2">14.1</span> Fundraisers are not employed or sub-contracted by iCause or any associate or employee or director or agent of iCause to offer Campaigns to Donors;</p>
                      <p><span className="mr-2">14.1</span> All Campaigns are provided by Fundraisers and not iCause; and</p>
                      <p><span className="mr-2">14.1</span> iCause is not responsible for any conduct of any User which occurs outside the Platform.</p>
                      <p><span className="mr-2">14.1</span>The Platform may integrate with or host hyperlinks to third party web services, or host third party information or content within the Platform. All third party content hosted on the Platform is the responsibility of its author, and iCause does not endorse or represent the views or opinions contained therein. iCause is not responsible for any material contained on third party web services that is hosted on the Platform in any way, and any dealings between you and third parties is your sole responsibility</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                        <i className="fa fa-caret-down"></i>Indemnity
                      </button>
                    </h5>
                  </div>
                  <div id="collapse16" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">15.1</span>As a further condition of using the Platform, you must indemnify iCause against all direct, quantifiable and reasonable Loss suffered by iCause and/or its Representative (whether based in negligence or any other tort, contract, statutory liability or otherwise) as a result of you breaching these Terms of Use, or otherwise from your use of Platform or the Platform Services</p>
                      <p><span className="mr-2">15.1</span>A Fundraiser may consider obtaining and maintaining the necessary amount of insurance cover (including but not limited to public liability insurance) appropriate to his or her obligations under these Terms of Use and Applicable Laws, or otherwise as required by law.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                        <i className="fa fa-caret-down"></i>Liability
                      </button>
                    </h5>
                  </div>
                  <div id="collapse21" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">16.1</span>If you are a Consumer, our liability to you for any Loss or Claim suffered as a result of us failing to comply with any Consumer Guarantees in relation to the Platform Services during the relevant period (Affected Period) is limited at our election to the resupply of the Platform Services for a period equivalent to the period of the breach, or payment of the cost of resupply of the Platform Services equivalent to Affected Period</p>
                      <p><span className="mr-2">16.2</span>Subject to clause 16.1 and any liability we may have to you under clause 16.1, and to the extent permitted by law, iCause and its Representatives exclude, and you release iCause and its Representatives from, all liability (whether arising under these Terms of Use, tort, negligence, statute or in any other way) for all Loss and Clams of any kind whatsoever directly or indirectly sustained by you in relation to any of the following matters (Platform Matters):</p>
                      <p><span className="mr-2">16.3</span>Your use of, or inability to use, the Platform;</p>
                      <p><span className="mr-2">16.4</span> A failure by a User, to comply with these Terms of Use;</p>
                      <p><span className="mr-2">16.5</span> Any failure by iCause, its Payment Provider, or other third parties to provide any information, service, feature or functionality via the Platform</p>
                      <p><span className="mr-2">16.6</span> Any unauthorised submission of information to the Platform; </p>
                      <p><span className="mr-2">16.7</span> Statements or conduct of any third party using the Platform</p>
                      <p><span className="mr-2">16.8</span> Use of third-party services in conjunction with the Platform by you;</p>
                      <p><span className="mr-2">16.9</span> Any communication or interaction between Users via the Platform, whether online or offline; </p>
                      <p><span className="mr-2">16.10</span> A failure by another User you interact or deal with via the Platform  to comply with these Terms of Use;</p>
                      <p><span className="mr-2">16.11</span> Any User Content that is uploaded, submitted, or otherwise appears, via the Platform; </p>
                      <p><span className="mr-2">16.12</span> Where any User fails to comply with any Applicable Laws when using the Platform;</p>
                      <p><span className="mr-2">16.13</span> Where you fail to comply with any Applicable Laws or the Privacy Act when dealing with Personal Information in connection with the Platform; and</p>
                      <p><span className="mr-2">16.14</span> Anything outside the reasonable control of iCause including without limitation natural disasters, pandemics, acts of God, equipment or infrastructure failure, civil riots, war (include cyber attacks), strikes, data breaches, viruses or malicious code. </p>
                      <p><span className="mr-2">16.15</span>	To the extent that any limitations of liability contained in these Terms of Use are ineffective or if any warranties are implied by law that cannot be excluded, then to the maximum extent permitted by law, our total aggregate liability to you is capped at the total monies you have paid (subject to deductions for refunds received) to any User or otherwise via the Platform in the 12 month period prior to the limitation being ineffective or warranty not being able to be excluded.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                        <i className="fa fa-caret-down"></i>Termination
                      </button>
                    </h5>
                  </div>
                  <div id="collapse17" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">17.1</span>We may terminate or suspend your access to the Platform at any time (including any User Account), at our sole discretion and without notice to you effective immediately if we have reason to believe that you have failed to comply with these Terms of Use. For any other reason, we will give you 14 days’ prior written notice. </p>
                      <p><span className="mr-2">17.2</span>If you wish to terminate your User Account, you may send a request to<a href="admin@icause.com.au" style={{color:'#3cb64f'}}> admin@icause.com.au</a></p>
                      <p><span className="mr-2">17.3</span>If we terminate your User Account, you will no longer have access to the functionality of the Platform that requires a User Account. We will also be under no obligation to store the User Content contributed through your User Account or provide you with further access to such User Content.</p>
                      <p><span className="mr-2">17.4</span>Notwithstanding clauses 18.1 to 18.3</p>
                      <p><span className="mr-2">17.5</span>Any Personal Information or non-personal statistical information collected under these Terms of Use and the Privacy Statement may continue to used or disclosed within the scope of the purposes described in the Privacy Statement; and</p>
                      <p><span className="mr-2">17.6</span> We may store any User Content on our servers at our discretion, where our rights under clause 15.4 will continue in perpetuity.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                        <i className="fa fa-caret-down"></i>Jurisdiction & Choice of Law
                      </button>
                    </h5>
                  </div>
                  <div id="collapse18" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">18.1</span>These Terms of Use are governed by and construed in accordance with the laws of the State of Victoria, Australia without giving effect to any conflict of laws principles. Any claim, cause of action or dispute arising out of these Terms of Use will be resolved exclusively in the courts of Victoria, Australia, and where applicable, the Federal Court of Australia or Federal Circuit of Australia, and you agree to submit to the personal jurisdiction of such courts for the purpose of litigating such claims.</p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                        <i className="fa fa-caret-down"></i>Complaints and Dispute Resolution
                      </button>
                    </h5>
                  </div>
                  <div id="collapse19" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">18.1</span>If a Donor and a Fundraiser have a dispute in connection with the Platform including a Campaign, iCause expressly disclaims any responsibility or liability in relation to such disputes.  Subject to the aforementioned, iCause may, but is not obliged to investigate, assist or involve itself in such disputes, at the specific request of a Donor or Fundraiser. In the event that iCause investigates, assists or otherwise involves itself (at its discretion):</p>
                      <p><span className="mr-2">18.2</span> Donor or Fundraiser will be allocated a contact within iCause to manage the complaint or dispute; and.</p>
                      <p><span className="mr-2">18.3</span> both parties will jointly and severally indemnify iCause against any and all costs and expenses incurred by iCause in relation to its investigation, assistance or involvement of the dispute.</p>
                      <p><span className="mr-2">18.4</span>	Any complaints about iCause or a dispute with iCause in relation to these Terms of Use or the Platform Services (Dispute) by a Registered User must first be dealt with in accordance with clauses 20.2 to 20.4, before commencing any court or arbitration proceedings other than for urgent interlocutory relief. </p>
                      <p><span className="mr-2">18.5</span>	The Registered User must give iCause written notice of the dispute adequately identifying and providing details of the Dispute (Dispute Notice). Notwithstanding the existence of a Dispute, both parties shall continue to perform their obligations under these Terms of Use.</p>
                      <p><span className="mr-2">18.6</span>	If a Dispute is not resolved by agreement within 20 business days of iCause receiving a Dispute Notice, either party may refer the Dispute to confidential mediation to be conducted by an independent mediator appointed by agreement between the parties, or failing agreement within 30 business days of iCause receiving the Dispute Notice, by a person appointed by the Chair of Resolution Institute, (ACN 008 651 232, Level 2, 13-15 Bridge Street, Sydney NSW 2000; telephone: 02 9251 3366, email:<a href="#!" style={{color:'#3cb64f '}}> infoaus@resolution.institute </a> or the Chair’s designated representative. The Resolution Institute Mediation Rules shall apply to the mediation unless otherwise agreed. The costs of the mediator shall be borne equally between the disputing parties. </p>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                        <i className="fa fa-caret-down"></i>Miscellaneous
                      </button>
                    </h5>
                  </div>
                  <div id="collapse20" className="collapse" >
                    <div className="card-body warranty-onditions">
                      <p><span className="mr-2">19.1</span>All amounts shown on the Platform are in Australian dollars and exclusive of GST. All prices are subject to change. </p>
                      <p><span className="mr-2">19.2</span>iCause reserves the right to perform maintenance of the Platform (whereby the functionality of the Platform may not be accessible for a certain period of time) without notice to you</p>
                      <p><span className="mr-2">19.3</span>If iCause is involved in a sale, merger or other restructuring, it may need to assign its position under these Terms of Use to a third party, which it will have the right to do so at its sole discretion. iCause will also have the right to assign its position under these Terms of Use in other circumstances with your written consent. You may assign your position under these Terms of Use to a third party with iCause’s prior written consent.</p>
                      <p><span className="mr-2">19.4</span>The rights and obligations under these Terms of Use, which by their nature would reasonably continue beyond the expiration of termination of these Terms of Use, will survive the expiration of termination of these Terms of Use. Without limiting the generality of the foregoing, clauses 14, 15, 16 and 17 will survive the termination of these Terms of Use. </p>
                      <p><span className="mr-2">19.5</span>In the event that any one or more of the provisions contained in these Terms of Use would, for any reason, be held to be invalid, illegal or unenforceable, such invalidity, illegality or unenforceability shall not affect any other provisions of these Terms of Use and these Terms of Use shall be construed as if such provisions had never been contained in these Terms of Use. </p>
                      <p><span className="mr-2">19.6</span>The fact that a party fails to do, or delays in doing, something the party is entitled or obligated to do under these Terms of Use, does not amount to a waiver of any obligation of, or breach of obligation by, any other party. </p>
                      <p><span className="mr-2">19.7</span>In these Terms of Use, except where the context otherwise requires:</p>
                      <p>The singular includes the plural and vice versa;</p>
                      <p><span className="mr-2">19.8</span> Words such as including or for example do not limit the meaning of the words preceding them; </p>
                      <p><span className="mr-2">19.9</span> A reference to a document includes the document as assigned, novated, altered, supplemented or replaced from time to time;</p>
                      <p><span className="mr-2">19.10</span> Parties must perform their obligations to iCause, and we will perform our obligations, on the dates and times fixed by reference to Melbourne, Victoria. </p>
                      <p><span className="mr-2">19.11</span> A reference to any party to these Terms and Conditions, includes that party’s executors, administrators, successors and permitted assigns and substitutes;</p>
                      <p><span className="mr-2">19.12</span> A reference to a person includes a natural person, partnership, body corporate, association, governmental or local authority or agency or other entity;</p>
                      <p><span className="mr-2">19.13</span> A reference to a statute, ordinance, code or other law includes regulations and other instruments under it and consolidations, amendments, re enactments or replacements of any of them;</p>
                      <p><span className="mr-2">19.14</span> A rule of construction does not apply to the disadvantage of a party because the party was responsible for the preparation of this Agreement or any part of it; and</p>
                      <p><span className="mr-2">19.15</span> An obligation or liability assumed by, or a right conferred on, two or more parties binds or benefits them all jointly and severally.</p>
                      <p>The following definitions apply in these Terms of Use: </p>
                      <p><span className="mr-2">19.16</span><b>ACL </b>means the Australian Consumer Law, being Schedule 2 of the Competition and Consumer Act 2010 (Cth).</p>
                      <p><span className="mr-2">19.17</span><b>Applicable Laws </b>means any and all applicable laws, statutes, regulations, instruments and by-laws and all other subordinate legislation or orders made by any authority with jurisdiction in relation to creating campaigns, fundraising and donating on the Platform or that otherwise apply in relation to any User’s use of the Platform .</p>
                      <p><span className="mr-2">19.18</span><b>Donor </b>means a User who agrees to donate money to a Campaign via the Platform.</p>
                      <p><span className="mr-2">19.19</span><b>Campaign </b>means a campaign that a Fundraiser uploads and promotes via the Platform.</p>
                      <p><span className="mr-2">19.21</span><b>Campaign Fees </b>means for a Campaign, all money accepted by a Fundraiser from Donors for the Campaign.</p>
                      <p><span className="mr-2">19.22</span><b>Claim </b>mean any allegation, debt, cause of action, liability, claim, proceeding, suit or demand of any nature, whether present or future, fixed or unascertained, actual or contingent, at law, in equity, under statute or otherwise.</p>
                      <p><span className="mr-2">19.23</span><b>Consumer </b>has the same meaning as set out in the ACL. </p>
                      <p><span className="mr-2">19.24</span><b>Content </b>means all content on the Platform including without limitation text, photographs, logos, names, designs, information, Personal Information, financial information, data, drawings, URL links, video recordings and audio recordings.</p>
                      <p><span className="mr-2">19.25</span><b>Donor </b>means a Registered User or Guest who makes a Donation to a Campaign via the Platform. </p>
                      <p><span className="mr-2">19.26</span><b>Donation </b>means a donation by a Donor to a Fundraiser for a Campaign.</p>
                      <p><span className="mr-2">19.27</span><b>GST </b>is as defined in GST Act.</p>
                      <p><span className="mr-2">19.28</span><b>GST Act </b>means A New Tax System (Goods and Services) Act 1999 (Cth); and GST Laws means the GST Act and all related subsidiary regulations.</p>
                      <p><span className="mr-2">19.29</span><b>Fundraiser </b>means a Registered User who uses the Platform to create fundraising campaigns, fundraise and accept donations via the Platform.</p>
                      <p><span className="mr-2">19.30</span><b>Platform Campaign Fee </b>means a service fee of 5% of the total amount of money raised by a Fundraiser in relation to each Campaign, charged by iCause to Fundraisers in consideration for the Platform Services.  </p>
                      <p><span className="mr-2">19.31</span><b>Guests </b>means people who visit, view, browse, access or otherwise have limited use the Platform but who are not Registered Users.</p>
                      <p><span className="mr-2">19.32</span><b>Intellectual Property </b>means all intellectual property and quasi-intellectual property rights (past, present and future) conferred by law (whether registered or unregistered) including without limitation business names, trade marks, patents, designs, copyright, trade secrets, computer programs, databases, inventions, moral rights and all proprietary rights and all other intellectual property defined in Article 2 of the Convention Establishing the World Intellectual Property Organisation (July 1967).</p>
                      <p><span className="mr-2">19.33</span><b>Loss </b>means loss, damage, liability, charge, expense, payment or cost of any nature or kind, including all legal and other professional costs (calculated on an indemnity basis).</p>
                      <p><b>Payment Provider </b>means the third party engaged by iCause from time to time to facilitate payments on the Platform, which is, at the time of writing these Terms of Use, services known as Stripe and PayPal  and/or related companies in Australia or overseas.</p>
                      <p><span className="mr-2">19.34</span><b>Personal Information </b>means any information or opinion which can reasonably identify an individual. </p>
                      <p><span className="mr-2">19.35</span><b>Platform Services </b>means the services listed in clause 1.2 and any subsidiary services provided by iCause via or in relation to the Platform from time to time. </p>
                      <p><span className="mr-2">19.36</span><b>Privacy Act </b>means the Privacy Act 1988 (Cth) as amended from time to time. </p>
                      <p><span className="mr-2">19.37</span><b>Privacy Statement </b>means the Privacy Statement for the Platform as amended or updated from time to time, a copy of which can be found on the following webpage: <a href="#!" style={{color:'#3cb64f'}} > privacy@icause.com.au </a></p>
                      <p><span className="mr-2">19.38</span><b>Registered User </b>means a user who has registered an account on the Platform including Donors and Fundraisers.</p>
                      <p><span className="mr-2">19.39</span><b>Representatives</b>means iCause’s directors, officers, contractors, employees, consultants, or other Fundraisers.</p>
                      <p><span className="mr-2">19.40</span><b>Users </b>includes Registered Users and Guests.  </p>
                      <p><span className="mr-2">19.41</span><b>User Account</b>has the meaning provided in clause 3.1.  </p>
                      <p><span className="mr-2">19.42</span><b>User Content </b>means any Content shared via, or submitted or uploaded to, the Platform by a User, and includes without limitation, Campaign Materials.</p>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="the-wold-better gurantee-sec-6 bg-pnk custom-dots">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <h1>
              What are you waiting for? 
                {/* Together To Help The World Better! */}
                <span>
                 We’re here to help you make a change.
                   {/* Let's Make This Happen */}
                   </span></h1>
              <p>
              Let’s make this happen!
                {/* Please help us change lives around the world. */}
                </p>
              <button className="btn btn-success my-2 my-sm-0 text-uppercase"
                onClick={() => {
                  if (user && user.id) {
                    history.push('/homepage');
                  } else {
                    history.push('/auth/login');
                  }
                }}
                type="submit">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guarantee;
