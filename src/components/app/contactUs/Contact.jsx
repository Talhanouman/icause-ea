

import React from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Spin } from 'antd';
import MetaTags from 'react-meta-tags';
import VideoPlayer from '../../shared/VideoPlayer';
import { imageURL, imageURLS3} from '../../../constants/constants';


const { TextArea } = Input;

const onFinish = (props, values, form) => {
	const { sendMessageForContact } = props;
	sendMessageForContact(values).then(() => form.resetFields());
};

const ContactUs = (props) => {
	const history = useHistory();
	const { loading } = props;
	const [form] = Form.useForm();
	return (
		<div className="contact-pg-wrap">
			<MetaTags>
				<meta name="description" content="Sign in to iCause to start an online fundraiser, track your current campaign or donate to your favourite cause or charity. iCause makes making a difference easy." />
			</MetaTags>
			<section className="banner-bg1 banner-second contact-banner header-banner">
				<div className="container-fluid  ">
					<div className="row d-flex align-items-center ">
						<div className="col-xl-12 col-lg-8 col-md-9 col-sm-12 contact-banner-col"> <img src={`${imageURL}contact-banner.jpg`} className="img-fluid" alt="" /> </div>
					</div>
				</div>
				<div className="banner-content contact-banner-text box-1">
					<h1>Contact us</h1>
					<h4>We are here to help you! You can reach out to us through email, message or chat.</h4>
					<a href="https://www.icause.com.au/faq" style={{ color: 'black' }}>For frequently asked questions</a>
					<p>We’re passionate about your fundraising. We can help you plan and run your campaign and be your partner along every step of the journey.  </p>
					<p>Contact us today to find out how we can help you to launch your crowdfunding campaign, raise funds for charity or to find out more about our unique option to donate using your utility bill. </p>
					{/* <p className="">We’re passionate about your fundraising and about helping to make the world a better place.</p>
					<p>Remember every bit counts and every person who does their bit no matter how small truly does make a difference in our world.</p>
					<p>We’ll help launch your crowdfunding campaign, help you raise funds and help you overall with your cause. </p> */}
					{/* <p className="email-1 mb-0 mt-3">Contact us:</p> */}
					<p>Get in touch using the form below or at <a className="" style={{ color: 'blue' }} href="mailto:info@icause.com.au">info@icause.com.au</a></p>
					{/* <a className="email-2 " style={{ color: 'blue' }} href="mailto:info@icause.com.au">info@icause.com.au</a> */}
					<ul className="socail-icons">
						<li><a href="/homepage" title=""><i className="fa fa-facebook"></i></a></li>
						<li><a href="/homepage" title=""><i className="fa fa-twitter"></i></a></li>
						<li><a href="/homepage"><i className="fab fa-linkedin"></i></a></li>
						<li><a href="/homepage" title="">&nbsp;<i className="fa fa-youtube" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</section>
			<section className="choose-a-fundraiser contact-sec-2">
				<div className="container-fluid">
					<div className="row d-flex align-items-center text-center">
						<div className="col-lg-4 col-md-4 col-sm-6 border-rigt banner-bottom">
							<h4>1. Choose a Fundraiser</h4>
							<p>Browse our fundraising ideas for inspiration</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 border-rigt banner-bottom">
							<h4>2. Create a Campaign</h4>
							<p>Simply sign up with your email or Facebook to get started</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 banner-bottom">
							<h4>3. Invite your Friends</h4>
							<p>Send out your unique link to start receiving  donations</p>
						</div>
					</div>
				</div>
			</section>
			<section className="who-need contact-sec-3 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-md-10 contact-sec-3-text">
							<h5 className="text-grn ">A help to those who need it</h5>
							<h3 className="main-heading mb-4 mt-md-0">Each Donation is Very Essential</h3>
						</div>
						<div className='col-lg-10 col-md-10 '>
							<VideoPlayer videoId={'j7KKZ6v5o34'} image="contact.jpg"
                  basePath={`${imageURLS3}about_us/`}/>
						</div>
					</div>
					<div className="row">
						{/* <div className="col-md-10 py-5 contact-sec-3-text mx-auto" >
							<p>We know that with the best of intentions, it’s not always possible to give as much as you’d like. That’s why we’ve created a unique way to donate. Not only can you donate directly to your chosen cause, but you can also choose to use your utility bill to donate – it’s easy to do and you might make a saving for yourself in the process. Find out how you can donate with your bill here.</p>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
							<p>Text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<br></br> Various versions have evolved over the years, sometimes by accident,<br></br> sometimes on purpose (injected humour and the like).</p>
						</div> */}
					</div>
				</div>
			</section>
			{/* <section className="honestly contact-sec-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-11 mx-auto">
							<div className="row  ">
								<div className="col-lg-4 col-md-3 col-sm-4 mx-auto">
									<img src={`${imageURL}contact-sec-4-img-1`}png" className="img-fluid w-100" alt="" />
								</div>
								<div className="col-lg-8 col-md-9 d-flex align-items-center">
									<div className="honestly-content text-box">
										<h5>Helped out Worldwide with iCause</h5>
										<h3 className="main-heading  mb-0 mt-md-0 text-white">Honestly, iCause Saved  myBrother Life !</h3>
										<p className="text-white mt-3">Australia has shown over and over again that we’re a giving nation; from supporting   a local club to inspiring global change, we know that it all starts with the first step. We’ve created iCause to give every Australian the chance to help.</p>
										<ul>
											<li><p>164 <span>Participants</span></p></li>
											<li><p>29k<span>Money Collected</span></p></li>
											<li><p>30k<span>Our Goal</span></p></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<section className="mp-4 drop-line pb-5 contact-sec-5">
				<div className="container">
					{/* <div className="row">
						<div className="col-md-10 mx-auto pb-5 contact-sec-5-text iCause-Partners" >
							<p>We know that with the best of intentions, it’s not always possible to give as much as you’d like. That’s why we’ve created a unique way to donate. Not only can you donate directly to your chosen cause, but you can also choose to use your utility bill to donate – it’s easy to do and you might make a saving for yourself in the process. Find out how you can donate with your bill here.</p>
							<p>You will know that chat is available at the time you’re contacting us if you see both of the options shown above. If you do not see the option to click “Chat Now”, please either email our team or check back after one hour to see if chat is available.</p>
							<p>Please keep in mind, the GoFundMe Help Center is filled with several articles that may have the answer you are looking for. Before contacting our team, please use the search bar at the top of the page and search for keywords that are related to your question. Here are some examples:</p>
							<ul className="">
								<li>"Where are my donations?" - Keywords: Missing donations.</li>
								<li>"How can I remove my name from my donation?" - Keywords: Anonymous donation.</li>
								<li>"I need a refund" - Keywords: Refunds.</li>
								<li>"How do I close my GoFundMe fundraiser?" - Keywords: Deactivate fundraiser.</li>
							</ul>
						</div>
					</div> */}
					<div className="row mt-4">
						<div className="col-lg-10  contact-form">
							<div className="drop-title d-flex justify-content-between flex-wrap align-items-center mb-3">
								<div className="left-title">
									<h5 className="border-left mb-0">We are here for your help</h5>
									<h3 className="main-heading   mt-md-0">Drop us a line.</h3>
								</div>
								{/* <div className="right-title">
									<h6 className="mb-0">Email us at</h6>
									<h5 className="main-heading   mt-md-0 " style={{ color: 'blue' }}>info@icause.com</h5>
								</div> */}
							</div>
							<Spin spinning={loading}>
								<Form
									form={form}
									layout="vertical"
									name="basic"
									onFinish={(values) => onFinish(props, values, form)}
								>
									<div className="form-group">
										<label> your name</label>
										<Form.Item
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name !',
												},
											]}>
											<Input type="text" className="form-control" placeholder="e.g. Mark" />
										</Form.Item>
									</div>
									<div className="form-group">
										<label> your email</label>
										<Form.Item
											name="email"
											rules={[
												{
													required: true,
													message: 'Please input your email !',
												},
											]}>
											<Input type="email" className="form-control" placeholder="e.g. markcarson@gmail.com" />
										</Form.Item>
									</div>
									<div className="form-group">
										<label> your Message</label>
										<Form.Item
											name="body"
											rules={[
												{
													required: true,
													message: 'Please input your message!',
												},
											]}>
											<TextArea className="form-control" rows={4} />
										</Form.Item>
									</div>
									<button
										htmltype='submit'
										className="btn btn-outline-dark mt-3">
										SEND NOW
									</button>
								</Form>
							</Spin>
						</div>
					</div>
				</div>
			</section>
			<section className="faq-contact contact-sec-6 mb-0 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 ">
							<div className="row">
								<div className="col-12">
									<div className="top-text">
										<h5>General Inquiries</h5>
										<h3 onClick={() => history.push('/faq')}>FAQ's</h3>
									</div>
								</div>
							</div>
							<div id="accordion" className="myaccordion faq-wrap row">
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-1" aria-expanded="false" aria-controls="faq-1">
													<p>Who is icause and why should I trust?</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-1" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Icause is crowd fundraising platform. Owned as operated by an Australian entity: Raise Capital Holding based in Melbourne CBD.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-2" aria-expanded="false" aria-controls="faq-2">
													<p>Why Icause:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-2" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Icause is a revolutionized crowdfunding platform which allows you to donate more than money. You can you can switch and donate your Utility bill or use paypal, visa & master and Google pay and Apple pay.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-3" aria-expanded="false" aria-controls="faq-3">
													<p>Who Icause support?</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-3" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Icause support all individuals and organizations who wants to do good in society. We don’t support any discriminatory, hate, racist campaigns. In case such campaigns are made on our platform. We reserve the right to hold the money and cancel your campaign.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-4" aria-expanded="false" aria-controls="faq-4">
													<p>Refund policy: </p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-4" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Icause will not hold your money as long it doesn’t fall in derogatory speech mention in above section. In case you haven’t reach your target, you will still be able to withdrawal the money. However please read our payment terms and campaign duration section.  </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-5" aria-expanded="false" aria-controls="faq-5">
													<p>How icause makes money:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-5" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Icause is for Profit organization. We charge a small platform fee of 5%. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-6" aria-expanded="false" aria-controls="faq-6">
													<p>Why it is not Free:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-6" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>As mentioned in above section Icause is for Profit. We have a team of employees. Also, the cost involved in maintaining the website and app. Ensuring the platform is protected all the time. Most importantly allowing user to use our dashboard- which a marketing tool to send emails and SMS.</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12">


									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-12" aria-expanded="false" aria-controls="faq-12">
													<p>Do I get unlimited access Email and SMS?</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-12" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>For email yes. You can upload up to 100,000 emails in one time on your dashboard to send all your supports or donors.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-7" aria-expanded="false" aria-controls="faq-7">
													<p>How do I track my payment?</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-7" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>You can track all your payments from dashboard; which includes donations, withdrawal bill , source of payment for example, paypal, visa, master, apple pay, google pay or bill donation.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-8" aria-expanded="false" aria-controls="faq-8">
													<p>Is it secure:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-8" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Yes is it secure. We are hosted on Amazon AWS, database which is encrypted using 256 bit SSL certificate. For processing payment, we use stripe as a payment gateway.  </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-9" aria-expanded="false" aria-controls="faq-9">
													<p>How should I contact icause:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-9" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Fill in the form or use our website messaging services. Our team will get back to you with 24 hours.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-10" aria-expanded="false" aria-controls="faq-10">
													<p>Payment term:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-10" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>Payment processing time is 14 business day from the finish or the campaign. An auto invoice will be generated on your email or you can view it on your user dashboard.</p>
												<p>Issues related to payment or any other concerns. Email us dispute@icause.com.au</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h2 className="mb-0">
												<button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#faq-11" aria-expanded="false" aria-controls="faq-11">
													<p>Campaign duration:</p>
													<span></span>
												</button>
											</h2>
										</div>
										<div id="faq-11" className="collapse" data-parent="#accordion">
											<div className="card-body">
												<p>To run a campaign minimum term is 30 days. You can further extend the campaign up to three months.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="contact-sec-7">
				<div className="container">
					<div className="row">
						<div className="col-lg-11 ">
							<div className="img-wrap">
								<div>
									<img src={`${imageURL}contact-6-img-6.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-1.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-2.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-3.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-4.png`} className="img-fluid" alt="img" />
								</div>
								<div>
									<img src={`${imageURL}contact-6-img-5.png`} className="img-fluid" alt="img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
