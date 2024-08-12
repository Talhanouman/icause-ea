
import React, { useState } from 'react';
import { extend } from 'lodash';
import { Form, Input, Checkbox, Spin, notification } from 'antd';
import ReactFlagsSelect from 'react-flags-select';
import CountryCodes from 'country-codes-list';
import MetaTags from 'react-meta-tags';
import VideoPlayer from '../../shared/VideoPlayer';
import { imageURL, imageURLS3} from '../../../constants/constants';

const { TextArea } = Input;

const getCountryCode = (region) => {
	const codes = CountryCodes.customList('countryCode', '+{countryCallingCode}');
	const countryCodes = {};
	Object.entries(codes).forEach((entry) => {
		const [countryCode, countryPin] = entry;
		extend(countryCodes, {
			[countryCode]: { secondary: countryPin }
		});
	});
	return countryCodes;
};

const getCode = (region) => {
	const codes = CountryCodes.customList('countryCode', '+{countryCallingCode}');
	let value = '';
	Object.entries(codes).forEach((entry) => {
		const [countryCode, countryPin] = entry;
		if (countryCode === region) {
			value = countryPin;
		}
	});
	return value;
};

const getCountry = (region) => {
	const countries = CountryCodes.customList('countryCode', '{countryNameEn}')
	let countryName = '';
	Object.entries(countries).forEach((entry) => {
		const [countryCode, countryPin] = entry;
		if (countryCode === region) {
			countryName = countryPin;
		}
	});
	return countryName
};

const onFinish = (props, values, { resetFields }, history, region, country, setRegion, setCountry) => {
	if (!region) {
		notification.error({
			message: 'Become an Investor',
			description: 'Please Select Country code'
		});
	} else if (!country) {
		notification.error({
			message: 'Become an Investor',
			description: 'Please Select Country'
		});
	} else {
		const value = getCountry(country);
		const value2 = getCode(region);
		const { phone_number } = values;
	
		const { registerInvestor } = props;
		registerInvestor({
			...values,
			country: value,
			phone_number: value2 + phone_number
		}).then(() => {
			setCountry('');
			setRegion('');
			resetFields();
		});
	}
};

const BecomeAnInvestor = (props) => {
	const { history, loading } = props;

	const [region, setRegion] = useState('');
	const [country, setCountry] = useState('');
	const codes = getCountryCode(region);
	const [form] = Form.useForm();

	return (
		<div className="be-partner-wrap be-investor-wrap">
			 <MetaTags>
            <meta name="description" content="Become an investor of Icause a unique crowdfunding platform in the world changing the way fundraising is done. do your part in making the world a better place." />
             </MetaTags>
			<section className="become-partner-banner become-investor-banner gen-banner-2">
				<div className="container">
					<div className="banner-text pb-5">
						<h1 className="heading">
						Become an investor
							 {/* We are Revolutionising the crowdfunding Space. */}
							 </h1>
						<p>
						We are revolutionising the crowdfunding space.
							{/* Contact us to learn more */}
							</p>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-2">
				<div className="container">
					<div className="become-partner-2-wrap">
						<h2 className="title">
						This page will take you through everything you need to know to become an investor:
							{/* Become An Investor */}
							</h2>
						<ul>
							<li>
								<div className="icon">
									<svg id="Question_10_" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
										<g id="Group_500" data-name="Group 500" transform="translate(16.072 9.217)">
											<path id="Path_2120" data-name="Path 2120" d="M215.57,130.141h-2.285v-1.754A3.44,3.44,0,0,1,215,125.418a1.143,1.143,0,1,0-1.713-.99H211a3.428,3.428,0,1,1,5.142,2.968,1.148,1.148,0,0,0-.572.99Z" transform="translate(-211 -121)" />
										</g>
										<g id="Group_501" data-name="Group 501" transform="translate(18.357 20.643)">
											<path id="Path_2121" data-name="Path 2121" d="M241,271h2.285v2.285H241Z" transform="translate(-241 -271)" />
										</g>
										<g id="Group_502" data-name="Group 502" transform="translate(0)">
											<path id="Path_2122" data-name="Path 2122" d="M19.5,32.068a12.564,12.564,0,0,1-11.218-6.92A9.115,9.115,0,0,1,8.281,7,12.493,12.493,0,0,1,30.719,7a9.115,9.115,0,0,1,0,18.153A12.564,12.564,0,0,1,19.5,32.068Zm0-29.783a10.321,10.321,0,0,0-9.424,6.264l-.291.669-.729.017a6.928,6.928,0,0,0-6.77,6.837,6.928,6.928,0,0,0,6.77,6.837l.729.017.291.669a10.27,10.27,0,0,0,18.848,0l.291-.669.729-.017a6.928,6.928,0,0,0,6.77-6.837,6.928,6.928,0,0,0-6.77-6.837l-.729-.017-.291-.669A10.321,10.321,0,0,0,19.5,2.285Z" transform="translate(0)" />
										</g>
										<g id="Group_503" data-name="Group 503" transform="translate(4.646 32.145)">
											<path id="Path_2123" data-name="Path 2123" d="M64.428,428.855a3.428,3.428,0,1,1,3.428-3.428A3.432,3.432,0,0,1,64.428,428.855Zm0-4.57a1.143,1.143,0,1,0,1.143,1.143A1.144,1.144,0,0,0,64.428,424.285Z" transform="translate(-61 -422)" />
										</g>
									</svg>
								</div>
								<p>About iCause</p>
							</li>
							<li>
								<div className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="39.004" height="39.004" viewBox="0 0 39.004 39.004">
										<g id="Group_626" data-name="Group 626" transform="translate(159.999 -7)">
											<path id="Path_7142" data-name="Path 7142" d="M-159.227,24.779a.627.627,0,0,1-.47-.212.627.627,0,0,1-.152-.492,19.634,19.634,0,0,1,3.33-8.748l.262-.376-1.253-1.252-1.42,1.42a.623.623,0,0,1-.443.184h0a.623.623,0,0,1-.24-.048.625.625,0,0,1-.387-.579V7.627A.627.627,0,0,1-159.372,7h7.049a.625.625,0,0,1,.579.387.625.625,0,0,1-.136.683l-1.42,1.42,1.253,1.252.376-.262a19.624,19.624,0,0,1,8.747-3.33.626.626,0,0,1,.078,0,.626.626,0,0,1,.414.157.627.627,0,0,1,.212.469v9.551a.627.627,0,0,1-.47.607,9,9,0,0,0-6.38,6.38.627.627,0,0,1-.607.47Zm1.718-12.593a.624.624,0,0,1,.444.184l2.085,2.084a.628.628,0,0,1,.052.828,18.266,18.266,0,0,0-3.455,7.588l-.131.656h8.359l.13-.364a10.32,10.32,0,0,1,6.19-6.19l.364-.13V8.483l-.656.131a18.262,18.262,0,0,0-7.588,3.455.621.621,0,0,1-.384.132.623.623,0,0,1-.443-.184l-2.085-2.085a.632.632,0,0,1-.065-.811l.63-.87h-4.681v4.683l.87-.631A.619.619,0,0,1-157.509,12.186Z" />
											<path id="Path_7143" data-name="Path 7143" d="M118.457,24.779a.627.627,0,0,1-.607-.47,9,9,0,0,0-6.38-6.38.627.627,0,0,1-.47-.607V7.772a.627.627,0,0,1,.7-.622,19.628,19.628,0,0,1,8.747,3.33l.376.262,1.253-1.252-1.42-1.42A.627.627,0,0,1,121.1,7h7.049a.627.627,0,0,1,.627.627v7.049a.626.626,0,0,1-1.069.443l-1.42-1.42-1.253,1.252.262.377a19.627,19.627,0,0,1,3.33,8.748.626.626,0,0,1-.622.7Zm-6.2-7.937.364.13a10.32,10.32,0,0,1,6.19,6.19l.13.364H127.3l-.131-.656a18.265,18.265,0,0,0-3.454-7.588.628.628,0,0,1,.052-.828l2.085-2.085a.627.627,0,0,1,.81-.065l.87.631V8.253h-4.681l.631.87a.623.623,0,0,1-.065.81l-2.085,2.085a.626.626,0,0,1-.827.052,18.261,18.261,0,0,0-7.589-3.455l-.656-.131Z" transform="translate(-249.775)" />
											<path id="Path_7144" data-name="Path 7144" d="M121.1,295.779a.627.627,0,0,1-.443-1.07l1.42-1.42-1.252-1.253-.376.262a19.627,19.627,0,0,1-8.748,3.33.626.626,0,0,1-.7-.622v-9.551a.626.626,0,0,1,.47-.606,9.006,9.006,0,0,0,6.38-6.38.627.627,0,0,1,.607-.47h9.551a.626.626,0,0,1,.622.7,19.627,19.627,0,0,1-3.33,8.748l-.262.376,1.252,1.253,1.42-1.42a.626.626,0,0,1,1.069.443v7.049a.627.627,0,0,1-.627.627Zm-.222-5.2a.622.622,0,0,1,.443.184l2.085,2.085a.623.623,0,0,1,.066.81l-.631.87h4.681v-4.68l-.87.629a.627.627,0,0,1-.81-.065l-2.085-2.085a.628.628,0,0,1-.052-.827,18.269,18.269,0,0,0,3.455-7.589l.131-.656h-8.359l-.13.364a10.322,10.322,0,0,1-6.19,6.191l-.364.13V294.3l.656-.131a18.26,18.26,0,0,0,7.588-3.455A.621.621,0,0,1,120.883,290.578Z" transform="translate(-249.775 -249.775)" />
											<path id="Path_7145" data-name="Path 7145" d="M-159.372,295.779a.627.627,0,0,1-.627-.627V288.1a.625.625,0,0,1,.387-.579.624.624,0,0,1,.239-.048.622.622,0,0,1,.443.183l1.42,1.42,1.252-1.253-.262-.376a19.623,19.623,0,0,1-3.33-8.747.628.628,0,0,1,.152-.492.627.627,0,0,1,.469-.212h9.551a.627.627,0,0,1,.607.47,9,9,0,0,0,6.38,6.38.626.626,0,0,1,.47.607v9.551a.627.627,0,0,1-.212.47.627.627,0,0,1-.415.157h0a.629.629,0,0,1-.078,0,19.63,19.63,0,0,1-8.748-3.33l-.376-.262-1.252,1.253,1.42,1.42a.624.624,0,0,1,.136.683.625.625,0,0,1-.579.387Zm.627-1.253h4.682l-.631-.87a.623.623,0,0,1,.065-.809l2.085-2.085a.623.623,0,0,1,.443-.184.621.621,0,0,1,.384.132,18.262,18.262,0,0,0,7.588,3.455l.656.131v-8.359l-.364-.13a10.32,10.32,0,0,1-6.19-6.19l-.13-.364h-8.359l.131.656a18.263,18.263,0,0,0,3.455,7.588.628.628,0,0,1-.052.828l-2.085,2.085a.623.623,0,0,1-.443.184.62.62,0,0,1-.367-.118l-.87-.631Z" transform="translate(0 -249.775)" />
											<path id="Path_7146" data-name="Path 7146" d="M53.977,195.661a.627.627,0,0,1-.627-.627,2.81,2.81,0,0,1,1.427-2.532,1.723,1.723,0,1,0-2.524-1.526.627.627,0,0,1-1.253,0,2.976,2.976,0,1,1,4.361,2.635,1.587,1.587,0,0,0-.758,1.423A.627.627,0,0,1,53.977,195.661Z" transform="translate(-194.474 -166.824)" />
											<circle id="Ellipse_126" data-name="Ellipse 126" cx="0.5" cy="0.5" r="0.5" transform="translate(-140.999 31)" />
										</g>
									</svg>
								</div>
								<p>
								About crowdfunding
									{/* Why iCause */}
									</p>
							</li>
							<li>
								<div className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="47.49" height="47.488" viewBox="0 0 47.49 47.488">
										<g id="round-table" transform="translate(-0.001 0.001)">
											<path id="Path_2131" data-name="Path 2131" d="M47.912,246.068a6.981,6.981,0,0,0-.767-8.962l-3.1-3.1a19.227,19.227,0,0,0,.557-7.2.7.7,0,1,0-1.383.154,17.841,17.841,0,0,1-.323,5.9l-1-1a2.7,2.7,0,0,0-3.825,3.825l2.614,2.613a17.913,17.913,0,0,1-19.15,8.1l1-1a2.7,2.7,0,0,0-3.825-3.824l-2.617,2.617a18.021,18.021,0,0,1-6.016-6.087c-.007-.015-.013-.03-.021-.045-.295-.5-.563-1.009-.8-1.519a17.667,17.667,0,0,1-.88-2.27.708.708,0,0,0-.041-.1,17.861,17.861,0,0,1-.706-6.853.7.7,0,0,0-1.386-.125,19.235,19.235,0,0,0,.674,7.093l-3,3a6.979,6.979,0,0,0-.8,8.92l-.07.07a2.768,2.768,0,0,0,0,3.916l1.29,1.29a2.771,2.771,0,0,0,3.915,0l.062-.062a6.934,6.934,0,0,0,4.016,1.279,7.076,7.076,0,0,0,1.287-.118.7.7,0,0,0-.253-1.368,5.568,5.568,0,0,1-4.047-.795l1.465-1.465a2.751,2.751,0,0,0,.728-1.281,2.641,2.641,0,0,0,3.368-.3l1.8-1.8,0,0,3-3a1.316,1.316,0,0,1,1.859,0,1.313,1.313,0,0,1,0,1.856l-1.855,1.855-.008.008L16.3,249.659a5.691,5.691,0,0,1-.587.512.7.7,0,1,0,.839,1.109,7.01,7.01,0,0,0,.732-.638l3.1-3.1a19.266,19.266,0,0,0,10.384-.08l3.008,3.009a6.961,6.961,0,0,0,4.655,2.039q.142.006.283.006a6.953,6.953,0,0,0,3.982-1.249l.07.07a2.772,2.772,0,0,0,3.915,0l1.29-1.29a2.768,2.768,0,0,0,0-3.916ZM3.268,241.989A5.573,5.573,0,0,1,4.9,238.262l2.5-2.5A19.155,19.155,0,0,0,8.581,238.3L7.2,239.679a2.639,2.639,0,0,0-.328,3.331,2.753,2.753,0,0,0-1.289.728L4.124,245.2a5.569,5.569,0,0,1-.856-3.206Zm6.536,5.97-2.022,2.022h0l-.508.508a1.379,1.379,0,0,1-1.948,0l-1.29-1.29a1.377,1.377,0,0,1,0-1.948l.5-.5.005-.005,2.028-2.028a1.378,1.378,0,0,1,1.944,0l1.232,1.232.062.062a1.378,1.378,0,0,1,0,1.948Zm4.1-1.582a1.245,1.245,0,0,1-1.762,0l-1.343-1.343-.007-.007-.6-.6-.689-.689,0,0-1.309-1.309a1.245,1.245,0,0,1,0-1.762l1.142-1.142a19.388,19.388,0,0,0,2.153,2.707l-.358.358a.7.7,0,0,0,.984.984l.369-.369a19.311,19.311,0,0,0,2.607,2Zm25.156-13.536a1.315,1.315,0,0,1,1.857,0l5.248,5.248a5.62,5.62,0,0,1,.749,6.976L45.444,243.6a2.755,2.755,0,0,0-1.281-.726,2.637,2.637,0,0,0-.3-3.37L39.055,234.7a1.316,1.316,0,0,1,0-1.858ZM38.723,242.9l.362.362a.7.7,0,0,0,.984-.984l-.375-.375a19.364,19.364,0,0,0,2-2.605l1.186,1.186a1.246,1.246,0,0,1,0,1.762L41.532,243.6l0,0-1.29,1.29,0,0-1.31,1.311a1.248,1.248,0,0,1-1.762,0l-1.15-1.15a19.275,19.275,0,0,0,2.711-2.149Zm-.234,8.215a5.575,5.575,0,0,1-3.727-1.633l-2.51-2.51c.466-.175.926-.369,1.375-.579.391-.182.781-.382,1.166-.594l1.386,1.385a2.642,2.642,0,0,0,3.329.328,2.753,2.753,0,0,0,.73,1.29l1.457,1.457a5.578,5.578,0,0,1-3.206.857Zm8.5-2.057-1.29,1.29a1.379,1.379,0,0,1-1.948,0l-2.53-2.53a1.377,1.377,0,0,1,0-1.946l1.293-1.294a1.379,1.379,0,0,1,1.946,0l2.034,2.034h0l.5.5a1.377,1.377,0,0,1,0,1.948Zm0,0" transform="translate(-1.698 -205.203)" />
											<path id="Path_2132" data-name="Path 2132" d="M7.295,20.826A2.7,2.7,0,0,0,11.119,17L8.494,14.376a17.933,17.933,0,0,1,2.4-3.082.751.751,0,0,0,.057-.051.7.7,0,0,0,.062-.073l.082-.083A17.956,17.956,0,0,1,14.532,8.4a.7.7,0,0,0,.1-.05c.495-.292,1-.562,1.517-.8a17.8,17.8,0,0,1,2.271-.879.684.684,0,0,0,.116-.049,17.871,17.871,0,0,1,9.132-.334L26.663,7.292a2.7,2.7,0,1,0,3.824,3.824l2.622-2.622a18.028,18.028,0,0,1,6.142,6.324A26.092,26.092,0,0,1,40.8,18.345a.684.684,0,0,0,.047.15v0c.14.462.417.413.635.413h0a.7.7,0,0,0,.491-.2l3.3-3.3a6.98,6.98,0,0,0,.8-8.92l.07-.07a2.769,2.769,0,0,0,0-3.916l-1.29-1.29a2.772,2.772,0,0,0-3.916,0l-.062.062a6.984,6.984,0,0,0-8.964.768L28.819,5.135A19.261,19.261,0,0,0,18.4,5.207L15.412,2.213a6.981,6.981,0,0,0-8.921-.8l-.07-.07a2.773,2.773,0,0,0-3.916,0L1.216,2.637a2.768,2.768,0,0,0,0,3.916l.063.063a6.981,6.981,0,0,0,.767,8.963Zm31.083-13.2.029.029,2.6,2.6a1.245,1.245,0,0,1,0,1.762l-1.144,1.144a19.4,19.4,0,0,0-2.151-2.709l.358-.357a.7.7,0,1,0-.984-.984l-.368.368a19.3,19.3,0,0,0-2.6-2L35.294,6.31a1.248,1.248,0,0,1,1.763,0ZM45.926,10.7a5.571,5.571,0,0,1-1.633,3.727l-2.521,2.52A24.929,24.929,0,0,0,40.606,14.4l1.388-1.388a2.638,2.638,0,0,0,.329-3.331,2.752,2.752,0,0,0,1.29-.728L45.07,7.492a5.567,5.567,0,0,1,.856,3.206ZM42.9,1.794a1.373,1.373,0,0,1,.974.4l1.29,1.29a1.378,1.378,0,0,1,0,1.948l-.506.506,0,0-2.02,2.02a1.379,1.379,0,0,1-1.948,0l-1.29-1.29a1.379,1.379,0,0,1,0-1.948L41.921,2.2a1.371,1.371,0,0,1,.974-.4Zm-10,1.233a5.621,5.621,0,0,1,6.978-.749L38.407,3.744a2.75,2.75,0,0,0-.726,1.282,2.642,2.642,0,0,0-3.37.3L29.5,10.132a1.315,1.315,0,0,1-1.858,0,1.312,1.312,0,0,1,0-1.857ZM6.312,12.194a1.246,1.246,0,0,1,0-1.762l3.954-3.954a1.247,1.247,0,0,1,1.762,0l1.136,1.136a19.4,19.4,0,0,0-2.709,2.152L10.1,9.416a.7.7,0,0,0-.984.984l.362.361a19.281,19.281,0,0,0-2,2.607ZM10.7,1.564A5.572,5.572,0,0,1,14.428,3.2l2.5,2.5a19.234,19.234,0,0,0-2.538,1.175L13.012,5.5a2.641,2.641,0,0,0-3.33-.328,2.75,2.75,0,0,0-.73-1.29L7.495,2.42A5.571,5.571,0,0,1,10.7,1.564ZM2.2,3.621l1.29-1.29a1.38,1.38,0,0,1,1.948,0l.5.5.008.007L7.969,4.861a1.378,1.378,0,0,1,0,1.948L6.679,8.1a1.379,1.379,0,0,1-1.948,0L2.2,5.569a1.377,1.377,0,0,1,0-1.948Zm.082,4L3.747,9.083a2.754,2.754,0,0,0,1.281.726,2.636,2.636,0,0,0,.3,3.369l4.807,4.806a1.313,1.313,0,0,1-1.857,1.858L3.03,14.594a5.618,5.618,0,0,1-.748-6.976Zm0,0" transform="translate(0 0)" />
											<path id="Path_2133" data-name="Path 2133" d="M117.267,279.193l-3.414,3.026a1.307,1.307,0,0,0-.111,1.843l1.881,2.122.006.007.005,0,1.8,2.036a1.307,1.307,0,0,0,1.843.111l3.414-3.026a1.307,1.307,0,0,0,.111-1.843l-3.7-4.169A1.307,1.307,0,0,0,117.267,279.193Zm.859,1.1,1.341,1.513-3.265,2.937L114.84,283.2Zm.3,6.954-1.3-1.463,3.265-2.937,1.318,1.487Zm0,0" transform="translate(-102.893 -253)" />
											<path id="Path_2134" data-name="Path 2134" d="M285.635,130.062l-4.9,4.341a1.412,1.412,0,0,0-.12,1.993l3.555,4.01a1.4,1.4,0,0,0,.972.473l.087,0a1.4,1.4,0,0,0,.935-.355l4.9-4.341a1.412,1.412,0,0,0,.12-1.993l-3.555-4.01A1.414,1.414,0,0,0,285.635,130.062Zm4.512,5.068a.017.017,0,0,1-.007.014h0l-4.9,4.341a.016.016,0,0,1-.015.005.019.019,0,0,1-.014-.007l-3.555-4.01a.018.018,0,0,1-.005-.015.02.02,0,0,1,.007-.014l4.9-4.341a.021.021,0,0,1,.014-.005.02.02,0,0,1,.016.007l3.555,4.01A.017.017,0,0,1,290.147,135.129Zm0,0" transform="translate(-254.265 -117.677)" />
										</g>
									</svg>
								</div>
								<p>
								Our people
									{/* Peoples */}
									</p>
							</li>
							<li>
								<div className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="50.49" height="50.488" viewBox="0 0 50.49 50.488">
										<g id="job-interview" transform="translate(0 -0.01)">
											<g id="Group_504" data-name="Group 504" transform="translate(0 0.01)">
												<path id="Path_2135" data-name="Path 2135" d="M37.257,14.015H52.244l3.124,3.124a1.122,1.122,0,0,0,1.916-.794V13.857a2.924,2.924,0,0,0,1.964-2.752V2.919A2.913,2.913,0,0,0,56.339.01H37.257a2.913,2.913,0,0,0-2.909,2.909v.6a.74.74,0,1,0,1.479,0v-.6a1.432,1.432,0,0,1,1.43-1.43H56.339a1.432,1.432,0,0,1,1.43,1.43v8.187a1.435,1.435,0,0,1-1.132,1.4,1.056,1.056,0,0,0-.832,1.031v1.948l-2.638-2.638a1.048,1.048,0,0,0-.747-.31H37.257a1.432,1.432,0,0,1-1.43-1.43V6.981a.74.74,0,1,0-1.479,0v4.125A2.913,2.913,0,0,0,37.257,14.015Z" transform="translate(-30.961 -0.01)" />
												<path id="Path_2136" data-name="Path 2136" d="M49.75,113.73a.739.739,0,0,0,.74-.74v-.569a5.182,5.182,0,0,0-3.7-4.945l-4.01-1.177a1.472,1.472,0,0,0-.4-.26l-.836-.373a1.758,1.758,0,0,0-.694-.152v-1.76A6.1,6.1,0,0,0,43.291,99.6a1.581,1.581,0,0,0,1.15-1.519V92.791a2.336,2.336,0,0,0-2.194-2.329,2.336,2.336,0,0,0-2.325-2.136H34.431a4.412,4.412,0,0,0-4.407,4.407v5.35a1.581,1.581,0,0,0,1.15,1.519,6.1,6.1,0,0,0,2.439,4.152v1.757a1.757,1.757,0,0,0-.686.154l-.82.368a1.471,1.471,0,0,0-.393.259l-4.034,1.184a5.182,5.182,0,0,0-3.7,4.945v4.016a5.027,5.027,0,0,0-1.767-.931c-.065-.019.314.057-5.758-1.1v-.016a19.289,19.289,0,0,0,2.834-.747c2.053-.713,3.39-2.825,2.344-6.316a12.39,12.39,0,0,1-.522-3.558,8.2,8.2,0,0,0-8.195-8.192h0a8.205,8.205,0,0,0-8.195,8.2,12.386,12.386,0,0,1-.522,3.555c-1.036,3.455.26,5.592,2.343,6.316a19.285,19.285,0,0,0,2.831.747c-6.046,1.17-5.692,1.1-5.756,1.116A5.059,5.059,0,0,0,0,120.335v6.983A2.786,2.786,0,0,0,2.787,130.1h.006l44.91-.045a2.79,2.79,0,0,0,2.787-2.787V116.448a.74.74,0,1,0-1.479,0v1.711H40.366l-1.308-5.834.708-1.269a1.533,1.533,0,0,0,.772-.4l2.273-2.213a1.473,1.473,0,0,0,.334-.492l3.228.948a3.7,3.7,0,0,1,2.639,3.526v.569a.739.739,0,0,0,.74.74Zm-18.247-21a2.931,2.931,0,0,1,2.928-2.928h5.491a.855.855,0,0,1,.854.854,1.279,1.279,0,0,0,1.278,1.278h.054a.855.855,0,0,1,.854.854v2.74H42.6a.37.37,0,0,1-.369-.369v-.607a1.912,1.912,0,0,0-2.509-1.814,7.985,7.985,0,0,1-4.978,0,1.909,1.909,0,0,0-2.509,1.814v.607a.37.37,0,0,1-.369.369H31.5v-2.8Zm1.112,6.4a1.018,1.018,0,0,0-1.013-.953.1.1,0,0,1-.1-.1V97.01h.361a1.85,1.85,0,0,0,1.848-1.848v-.607a.43.43,0,0,1,.568-.409,9.47,9.47,0,0,0,5.9,0,.43.43,0,0,1,.566.409v.607A1.85,1.85,0,0,0,42.6,97.009h.362v1.074a.1.1,0,0,1-.1.1,1.018,1.018,0,0,0-1.012.953,4.626,4.626,0,0,1-9.234,0Zm5.224,12.335H36.612l-.476-.818,1.152-.962,1.046.894Zm1.01,6.688H35.611l1.168-5.208h.9Zm-1.564-10.366-2.194-1.639v-1.6a6.1,6.1,0,0,0,4.281,0v1.619Zm-3.754-.779a.279.279,0,0,1,.282.031l2.287,1.709-1.063.888a.046.046,0,0,1-.018.009h-.009a.045.045,0,0,1-.032-.011l-2.259-2.263ZM7.024,112.246c-1.87-.649-1.978-2.605-1.412-4.494A13.871,13.871,0,0,0,6.2,103.77a6.716,6.716,0,0,1,13.431,0,13.864,13.864,0,0,0,.584,3.979c.566,1.889.458,3.844-1.412,4.494a18.028,18.028,0,0,1-11.776,0Zm7.948,2.359v.262a2.276,2.276,0,0,1-4.123-.016V114.6A19.6,19.6,0,0,0,14.973,114.6Zm9.373,13.786a.19.19,0,0,1-.183.19h-.026l-21.346.043h0a1.307,1.307,0,0,1-1.308-1.308v-6.983A3.573,3.573,0,0,1,4,116.935l5.7-1.1a3.76,3.76,0,0,0,6.426.016l5.7,1.086a3.554,3.554,0,0,1,2.519,3.4Zm1.11-15.97A3.694,3.694,0,0,1,28.1,108.9l3.253-.955a1.471,1.471,0,0,0,.319.477l2.272,2.275.007.007a1.522,1.522,0,0,0,.737.4l.718,1.233L34.1,118.159H25.456Zm23.555,7.217v7.635A1.309,1.309,0,0,1,47.7,128.58H25.814a1.7,1.7,0,0,0,.011-.19v-8.056a5.024,5.024,0,0,0-.049-.7H49.011Zm-9.5-10.048a.045.045,0,0,1-.031.013l-.017,0-.012-.007-.984-.841,2.194-1.7a.279.279,0,0,1,.285-.034l.828.369Z" transform="translate(0 -79.617)" />
											</g>
										</g>
									</svg>
								</div>
								<p>Forecast</p>
							</li>
							<li>
								<div className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="55.974" height="47.488" viewBox="0 0 55.974 47.488">
										<g id="sale-report" transform="translate(0 -38.809)">
											<g id="Group_625" data-name="Group 625" transform="translate(0 38.809)">
												<path id="Path_7118" data-name="Path 7118" d="M54.125,45.692h-36.2V40a1.2,1.2,0,0,0-1.2-1.2H14.649a.82.82,0,1,0,0,1.64h1.634V59.2H1.64V43.273l2.825-2.825h6.359a.82.82,0,0,0,0-1.64H4.281a1.188,1.188,0,0,0-.846.35L.35,42.244a1.188,1.188,0,0,0-.35.846V59.647a1.2,1.2,0,0,0,1.2,1.2h4.39v24.12A1.336,1.336,0,0,0,6.92,86.3H43.183a.82.82,0,0,0,0-1.64H7.226V60.843H9.514A10.238,10.238,0,0,0,22.241,74.434a.82.82,0,0,0,.517-1.038l-2.632-7.852h1.63a.82.82,0,1,0,0-1.64H18.986a.82.82,0,0,0-.777,1.081L20.93,73.1a8.632,8.632,0,0,1-10.545-8.379,8.48,8.48,0,0,1,.936-3.882h5.406a1.2,1.2,0,0,0,1.2-1.2V56.192a8.51,8.51,0,0,1,7.132,2.464A8.547,8.547,0,0,1,27.548,63.9H25.582a.82.82,0,0,0,0,1.64h2.825a.82.82,0,0,0,.82-.82,10.221,10.221,0,0,0-11.3-10.183V51.929H54.334V84.657H47.009a.82.82,0,1,0,0,1.64h7.63a1.336,1.336,0,0,0,1.334-1.334V47.54a1.851,1.851,0,0,0-1.849-1.849Zm.209,4.6H17.923V47.332h36.2a.209.209,0,0,1,.209.209v2.749Z" transform="translate(0 -38.809)" />
												<path id="Path_7119" data-name="Path 7119" d="M85.225,400.963a1.179,1.179,0,0,0-1.177,1.177V404.4a1.179,1.179,0,0,0,1.177,1.177h2.263a1.178,1.178,0,0,0,1.177-1.177V402.14a1.179,1.179,0,0,0-1.177-1.177Zm1.8,2.977H85.688V402.6h1.337Z" transform="translate(-74.86 -361.371)" />
												<path id="Path_7120" data-name="Path 7120" d="M134.976,414.58a.82.82,0,1,0,0,1.64H147.6a.82.82,0,0,0,0-1.64Z" transform="translate(-119.49 -373.499)" />
												<path id="Path_7121" data-name="Path 7121" d="M299.817,405.58h2.263a1.178,1.178,0,0,0,1.177-1.177V402.14a1.179,1.179,0,0,0-1.177-1.177h-2.263a1.179,1.179,0,0,0-1.177,1.177V404.4A1.179,1.179,0,0,0,299.817,405.58Zm.463-2.977h1.337v1.337H300.28Z" transform="translate(-265.992 -361.371)" />
												<path id="Path_7122" data-name="Path 7122" d="M349.569,416.22h12.623a.82.82,0,0,0,0-1.64H349.569a.82.82,0,0,0,0,1.64Z" transform="translate(-310.623 -373.499)" />
												<path id="Path_7123" data-name="Path 7123" d="M213.178,294.109a.82.82,0,0,0-.82-.82h-9.421a.82.82,0,0,0-.777,1.081l2.994,8.932a.819.819,0,0,0,1.038.517A10.23,10.23,0,0,0,213.178,294.109Zm-6.742,7.857-2.359-7.038H211.5A8.59,8.59,0,0,1,206.435,301.966Z" transform="translate(-180.021 -265.468)" />
												<path id="Path_7124" data-name="Path 7124" d="M357.465,243.015h-13.2a.82.82,0,1,0,0,1.64h13.2a.82.82,0,1,0,0-1.64Z" transform="translate(-305.896 -220.691)" />
												<path id="Path_7125" data-name="Path 7125" d="M357.465,271.336h-13.2a.82.82,0,0,0,0,1.64h13.2a.82.82,0,0,0,0-1.64Z" transform="translate(-305.896 -245.915)" />
												<path id="Path_7126" data-name="Path 7126" d="M357.465,299.658h-13.2a.82.82,0,0,0,0,1.64h13.2a.82.82,0,0,0,0-1.64Z" transform="translate(-305.896 -271.141)" />
												<path id="Path_7127" data-name="Path 7127" d="M357.465,327.98h-13.2a.82.82,0,1,0,0,1.64h13.2a.82.82,0,1,0,0-1.64Z" transform="translate(-305.896 -296.367)" />
												<path id="Path_7128" data-name="Path 7128" d="M344.262,357.942h13.2a.82.82,0,0,0,0-1.64h-13.2a.82.82,0,0,0,0,1.64Z" transform="translate(-305.896 -321.593)" />
												<path id="Path_7129" data-name="Path 7129" d="M316.344,244.655h.4a.82.82,0,0,0,0-1.64h-.4a.82.82,0,1,0,0,1.64Z" transform="translate(-281.03 -220.691)" />
												<path id="Path_7130" data-name="Path 7130" d="M316.344,272.976h.4a.82.82,0,0,0,0-1.64h-.4a.82.82,0,1,0,0,1.64Z" transform="translate(-281.03 -245.915)" />
												<path id="Path_7131" data-name="Path 7131" d="M316.344,301.3h.4a.82.82,0,0,0,0-1.64h-.4a.82.82,0,1,0,0,1.64Z" transform="translate(-281.03 -271.141)" />
												<path id="Path_7132" data-name="Path 7132" d="M316.344,329.62h.4a.82.82,0,1,0,0-1.64h-.4a.82.82,0,1,0,0,1.64Z" transform="translate(-281.03 -296.367)" />
												<path id="Path_7133" data-name="Path 7133" d="M316.344,357.942h.4a.82.82,0,0,0,0-1.64h-.4a.82.82,0,1,0,0,1.64Z" transform="translate(-281.03 -321.593)" />
												<path id="Path_7134" data-name="Path 7134" d="M296.9,184.5a2.311,2.311,0,0,0-2.308-2.308h-17.76a2.308,2.308,0,0,0,0,4.617h17.76A2.311,2.311,0,0,0,296.9,184.5Zm-9.808.669H276.834a.669.669,0,0,1,0-1.337H287.1Zm1.64-1.337h5.86a.669.669,0,1,1,0,1.337h-5.86Z" transform="translate(-244.514 -166.512)" />
												<path id="Path_7135" data-name="Path 7135" d="M38.523,68.167a.82.82,0,0,0-1.64,0v2.946h-.74V67.2a.82.82,0,1,0-1.64,0v3.914h-.74V69.135a.82.82,0,0,0-1.64,0v1.978h-.37a.82.82,0,0,0,0,1.64h9.519a.82.82,0,0,0,0-1.64H40.9v-4.56a.82.82,0,1,0-1.64,0v4.56h-.74V68.167Z" transform="translate(-27.552 -62.79)" />
												<path id="Path_7136" data-name="Path 7136" d="M32.272,143.642h-.517a.82.82,0,0,0,0,1.64h.517a.82.82,0,0,0,0-1.64Z" transform="translate(-27.553 -132.181)" />
												<path id="Path_7137" data-name="Path 7137" d="M32.272,168.274h-.517a.82.82,0,0,0,0,1.64h.517a.82.82,0,0,0,0-1.64Z" transform="translate(-27.553 -154.12)" />
												<path id="Path_7138" data-name="Path 7138" d="M32.272,192.907h-.517a.82.82,0,0,0,0,1.64h.517a.82.82,0,0,0,0-1.64Z" transform="translate(-27.553 -176.061)" />
												<path id="Path_7139" data-name="Path 7139" d="M64.034,168.274H57.309a.82.82,0,0,0,0,1.64h6.726a.82.82,0,0,0,0-1.64Z" transform="translate(-50.313 -154.12)" />
												<path id="Path_7140" data-name="Path 7140" d="M64.034,143.642H57.309a.82.82,0,0,0,0,1.64h6.726a.82.82,0,0,0,0-1.64Z" transform="translate(-50.313 -132.181)" />
												<path id="Path_7141" data-name="Path 7141" d="M64.034,192.907H57.309a.82.82,0,0,0,0,1.64h6.726a.82.82,0,1,0,0-1.64Z" transform="translate(-50.313 -176.061)" />
											</g>
										</g>
									</svg>
								</div>
								<p>
								Express your interest
									{/* Fill a Form */}
									</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-3 sec-py-50">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-7 col-sm-12">
							<div className="gen-text-box iCause-Partners">
								<h3 className="marker-text">Invest with a company making a difference in the world</h3>
								<h4 className="heading">About Icause</h4>
								<p>
									<p>icause is a crowdfunding platform on a mission to make the world a better place by transforming how crowdfunding is done.</p>
									{/* Icause is a crowdfunding platform on a mission to make the world a better place and transform how crowdfunding is done in Australia and around the globe. */}
									</p>					
								<ul>
									<li>We know people sometimes just don’t have the funds to support a cause they care about, which is why we created Switch & Donate, a unique way for people to donate using their utility bills.</li>
									<li>We also offer more payment options through Visa, Mastercard, Amex, GPay, Apple Pay, PayPal, and more.</li>
									<li>Our platform gives fundraisers a complete marketing tool so that users can easily set up their campaign, track revenue and get noticed by sending SMS & emails to supporters, or through social sharing.</li>
									<li>Our app is available on both IOS and Android and lets you manage your campaign wherever you are.</li>
									<li>We take security seriously – we use highly secure payment gateways through Paypal and Stripe.</li>
									{/* <li>Switch & Donate Bills:  A first in Crowdfunding in the world. People can donate their utility bills to a cause- charity, community club, fundraiser, etc.</li>
									<li>Creating more payment options through Visa, Master, Amex, Google Pay, Apple Pay, PayPal, and more.</li>
									<li>Offering a complete marketing tool that allows users to set up their campaign, track revenue, send SMS & email to supporters.</li>
									<li>Available on both IOS and Android.</li>
									<li>Highly secure payment gateways through Paypal and Stripes.</li> */}
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-5 col-sm-12">
							<div className="img-wrap">
								<img src={`${imageURL}become-partner-3-img-1.png`} className="img-fluid" alt="img" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-5 become-investor-sec-3 sec-py-70">
				<div className="container d-flex justify-content-end">
					<div className="gen-text-box iCause-Partners">
						<p className="marker-text">
						About crowdfunding
							{/* Why we are */}
							</p>
						<h4 className="heading">
						Marketing size and potential growth
						
							{/* Market Size And the Growth potential  */}
							</h4>
						<p className="mb-1">The Global Crowdfunding Market in 2020 – $ 17.2 Billion.</p>
						<p className="mb-1">The Global Crowdfunding Market by 2026 will reach $34 Billion. An annual compound growth of over  17 % between 2021- 2026.</p>
						<p className="font-weight-bold mb-1">Market Size:</p>
					<ul>
						<li>Australia - 25 Million</li>
						<li>USA - 330 Million</li>
						<li>UK - 68 Million</li>
						<li>Canada - 47.5 Million</li>
						<li>NewZealand - 5 Million </li>
						</ul>
						{/* <a href="#!">Become an Investor </a><br/>
						<span>To find out more about Icause and becoming an investor contact us directly at Investor.Relations@icause.com.au </span> */}
					</div>
				</div>
			</section>

			<section className="become-partner-sec-6 become-investor-sec-4 sec-py-50">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 col-md-12 d-flex align-items-center mx-auto">
							<div className="gen-text-box pl-3 iCause-Partners">
								<p className="marker-text">
									{/* Around our Circle */}
									</p>
								<h4 className="heading">
								We're passionate about fundraising
									{/* Peoples who Belong to iCause */}
									</h4>
									<p>We are a one-of-a-kind fundraising platform. We believe the crowdfunding platform is the future of raising money.</p>
								<p>We have invested heavily in user experience and state of the art technology. Our customer dashboard gives complete transparency to our users to track their revenue, events, calendar, invoices, donor list and send out SMS & email blasts. But we’re passionate about leading the way in crowdfunding - we will continue to upgrade and improve the platform to make sure our fundraisers always receive the best.</p>
								{/* <p className="font-weight-bold">Why invest in us:</p>
								<p>We are one of a kind fundraising platform. We believe the crowdfunding platform is the future of raising money.</p>
								<p>We have invested heavily in user experience and state of the art technology. Our customer design dashboard gives complete transparency to our users to track their revenue, events, calendar, invoice, donor list and SMS & email blast. We will continue to upgrade and improve it as we go along.</p> */}
								<p className="font-weight-bold">
								Our values:
									{/* We value */}
									</p> 
								<ul>
									<li>Our Team</li>
									<li>Our Technology</li>
									<li>Our Scalability and Market Penetration.</li>
									<li>Our Point of difference</li>
								</ul>
								<p>If you want to know about our business, and how you can play an essential role in our growth contact us or fill out the form below to express your interest. </p>
								{/* <p>If you want to know about our business, and how you can play an essential role in  <a href="investor@icause.com.au" style={{color:'black'}}>our growth contact us</a>  or fill the form below for expression of interest.  Request our personalised investor Deck Video. </p> */}
							</div>
						</div>
						
						<div className='col-lg-10 col-md-10 mx-auto inverster-video-img'>
						<VideoPlayer videoId={'j7KKZ6v5o34'} image="investor_center.jpeg"
                  basePath={`${imageURLS3}about_us/`}/>
                            </div>
						
					</div>
				</div>
			</section>

			<section className="become-investor-sec-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="graph-wrap">
								<div className="graph">
									<img src= "https://icause.s3.us-east-2.amazonaws.com/about_us/pie-chart.png" className="img-fluid" alt="img" />
								</div>
								<div className="graph-info d-flex align-items-center">
									<div className="w-100">
										<p className="font-weight-bold">Market Size </p>
										<p><span className="label-box red"></span><span>UK- 68 Million </span></p>
										<p><span className="label-box green"></span><span>Australia – 25 Million</span></p>
										{/* <p><span className="label-box yellow"></span><span>Canada 37.5 Million</span></p> */}
										<p><span className="label-box blue"></span><span> US- 330 Million</span></p>
										{/* <p><span className="label-box gray"></span><span> Newzealand 5 Million </span></p> */}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
							<div className="gen-text-box">
								<p className="marker-text">
								Our plan is to grow!
									{/* Quick Funds Transfer */}
									</p>
								<h4 className="heading">Forecast</h4>
								<p>Our plan will see us expand into more markets around the globe. The pie graph shows the total population of each country. It also indicates the growth potential and market size.</p>
								{/* <p>The Pie graph shows the total population of each country. It also indicated the growth potential and market size.</p> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-7 become-investor-sec-6 sec-py-50">
				<div className="container">
					<div className="gen-text-box pl-3">
						<p className="marker-text">
						Leave your details to find out more
							{/* We are here for your help */}
							</p>
						<h4 className="heading">Expression Of Interest.</h4>
						<Spin spinning={loading}>
						<Form
							className="gen-form"
							form={form}
							name='basic'
							onFinish={(values) => onFinish(props, values, form, history, region, country, setRegion, setCountry)}
						>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label>First Name:</label>
										<Form.Item
											name="first_name"
											rules={[
												{
													required: true,
													message: 'Please input first name!',
												},
											]}>
											<Input type="text" placeholder="Enter First Name Here..." />
										</Form.Item>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label>Last Name:</label>
										<Form.Item
											name="last_name"
											rules={[
												{
													required: true,
													message: 'Please input last name!',
												},
											]}>
											<Input type="text" placeholder="Enter Last Name Here..." />
										</Form.Item>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label>Email Address:</label>
										<Form.Item
											name="email"
											rules={[
												{
													type: 'email',
													required: true,
													message: 'Please input email!',
												},
											]}>
											<Input placeholder="Enter Email Here..." />
										</Form.Item>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group mb-0">
										<label>Phone Number:</label>
									</div>
									<div className="row">
										<div className="col-lg-5 col-md-4 col-sm-4 col-3">
											<div className="form-group">
											<Form.Item
											name="emadsadsadsil"
											rules={[
												{
													required: true,
													message: 'Please select country code!',
												},
											]}>
											<ReactFlagsSelect
													placeholder='Country Code'
													selected={region}
													onSelect={code => {
														form.setFieldsValue({'emadsadsadsil': 'ds'})
														setRegion(code)
													}}
													customLabels={codes}
												/>
										</Form.Item>
												
											</div>
										</div>
										<div className="col-lg-7 col-md-8 col-sm-8 col-9">
											<div className="form-group">
												<Form.Item
													name="phone_number"
													rules={[
														{
															required: true,
															message: 'Please input phone number',
														},
													]}>
													<Input placeholder="(001) 665 9985" />
												</Form.Item>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label>Business Name:</label>
										<Form.Item
											name="business_name"
											rules={[
												{
													required: true,
													message: 'Please input business name!',
												},
											]}>
											<Input placeholder="Enter Business Name Here..." />
										</Form.Item>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label>Select Country:</label>
										<Form.Item
											name="businedasdasss_name"
											rules={[
												{
													required: true,
													message: 'Please select your Country',
												},
											]}>
											<ReactFlagsSelect
											placeholder='Select your Country'
											selected={country}
											onSelect={code => {
												form.setFieldsValue({'businedasdasss_name': 'ddass'})
												setCountry(code)
											}}
										/>
										</Form.Item>
										
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="form-group">
										<label>Website Address (If available):</label>
										<Form.Item
											name="website"
											rules={[
												{
													required: true,
													message: 'Please input website address !',
												},
											]}>
											<Input placeholder="Enter Website Address Here..." />
										</Form.Item>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label>Enter Description:</label>
										<Form.Item
											name="des"
											rules={[
												{
													required: true,
													message: 'Please provide a description!',
												},
											]}>
											<TextArea placeholder="Provide a Description" rows={5} />
										</Form.Item>
									</div>
								</div>
								<div className="col-12 d-flex">
									<div className="form-group radio-group">
											<Form.Item
												name="agreement"
												valuePropName="checked"
												rules={[
													{
														validator: (_, value) =>
															value ? Promise.resolve() : Promise.reject(new Error('Please agree to terms and conditions!')),
													},
												]}>
												<Checkbox />
											</Form.Item>
										<label htmlFor="condition">I Agree with the Website <a href="#!">Terms & Conditions</a></label>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-12 btn-center-form">
									<button htmltype='submit' className="btn btn-success">SUBMIT NOW</button>
								</div>
							</div>
						</Form>
						</Spin>
					</div>
				</div>
			</section>

			<section className="contact-sec-7">
				<div className="container">
					<div className="row">
						<div className="col-lg-11 mx-auto">
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

export default BecomeAnInvestor;
