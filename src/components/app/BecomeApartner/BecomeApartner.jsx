import React, { useEffect, useState } from 'react';

import { Form, Input, Checkbox, Spin, Select } from 'antd';
import MetaTags from 'react-meta-tags';
import DataListInput from 'react-datalist-input';
import { imageURL } from '../../../constants/constants';

const { Option } = Select;
const BecomeApartner = (props) => {
	const { history, loading, filter } = props;
	
	const [items, setItems] = useState([]);
	const [states, setStates] = useState([]);
	const [postCode, setPostCode] = useState([]);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [error, setError] = useState('');
	const [selectValue, setSelectedValue] = useState("");
	const [form] = Form.useForm();
	
	const onSelect = (selectedItem) => {
		setSelectedValue(selectedItem);
		setPostCode(selectedItem)
		// getCompanyListingsByPostcode(companyType, +(selectedItem.postcode))
		setItems([]);
	}

	const matchHandler = (currentInput, item) => {
		return true;
	}

	const onFinish = (props, values, { setFields }, history, postCode) => {
		const { verificationAction } = props;
		const { password, confirm_password } = values;
		if (password !== confirm_password) {
			setFields([
				{
					name: 'password',
					errors: ['password and repeat password are not same !'],
				},
				{
					name: 'confirm_password',
					errors: ['password and repeat password are not same !'],
				}
			]);
		} else {
			const { agreement, confirm_password, ...rest } = values; 
			verificationAction({...rest, "phoneNumber": phoneNumber}, history, postCode).then((res) => {
			})
		}
	};
	
	const setSearchFilter = ((value) => {
		setSelectedValue("");
		const { setSearchFilter, getStatesByPostCode } = props;
		setItems([]);
		setSearchFilter(value);
		if (value !== '') {
			getStatesByPostCode(value).then(res => {
				setStates(res?.payload?.states)
			});
		}
		if (value === '') {
			setItems([]);
			// getCompanyTypeListings(companyType, user && user.id ? user.id : navigator.userAgent);
		}
	});

	useEffect(() => {
		if (states?.length) {
			prepareData(states)
		}
	}, [states])


	const prepareData = (data) => {
		let mappedData = data?.map((oneItem) => ({
			// required: what to show to the user
			label: oneItem.code,
			// required: key to identify the item within the array
			key: oneItem.id,
			// feel free to add your own app logic to access those properties in the onSelect function
			someAdditionalValue: oneItem.postcode,
			// or just keep everything
			...oneItem,
		}));
		setItems(mappedData);
		let input = document.getElementsByClassName('autocomplete-input')[0];
		input.blur();
		setTimeout(() => {
			input.click();
		}, 100)

	}

	return (
		<div className="be-partner-wrap">
			 <MetaTags>
            	<meta name="description" content="Become a partner of Icause and reach your fundraising goals faster through our unique donation options. You get your own online portal to track your campaign." />
             </MetaTags>
			<section className="banner become-partner-banner gen-banner-2">
				<div className="container">
					<div className="banner-text">
						<h1 className="heading">Become a Partner</h1>
						<p>Join Our Family and Expand Your Fundraising Horizon.</p>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-2">
				<div className="container">
					<div className="become-partner-2-wrap">
						<h2 className="title">
						Becoming an icause partner is easy:
							{/* How to be a Partner */}
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
								<p>
								Why choose icause
									{/* Why us */}
									</p>
							</li>
							<li>
								<div className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="52.442" height="43.01" viewBox="0 0 52.442 43.01">
										<g id="survey" transform="translate(0 -46.049)">
											<path id="Path_2124" data-name="Path 2124" d="M452.442,354.891a.768.768,0,0,0-1.067.2l-1.765,2.586a5.358,5.358,0,0,0-.929,2.823l-.181,4.854a.768.768,0,0,0,1.535.057l.181-4.854a3.822,3.822,0,0,1,.663-2.015l1.765-2.586A.768.768,0,0,0,452.442,354.891Z" transform="translate(-402.568 -277.094)" />
											<path id="Path_2125" data-name="Path 2125" d="M51.366,69.7l-4.633-7.187V49.156a3.111,3.111,0,0,0-3.107-3.107H8.813a3.111,3.111,0,0,0-3.107,3.107v5.9a.768.768,0,0,0,1.536,0v-5.9a1.573,1.573,0,0,1,1.571-1.571H43.626A1.573,1.573,0,0,1,45.2,49.156V72.364a1.568,1.568,0,0,1-.13.623L43.5,71.294V50.18a.9.9,0,0,0-.9-.9H37.391a.768.768,0,0,0,0,1.536h4.578V69.628L39.4,66.848a2.369,2.369,0,0,0-3.28-.2H23.839a.768.768,0,1,0,0,1.536H35.31a2.364,2.364,0,0,0,.278,1.415l.611,1.1H16.24l.611-1.1a2.356,2.356,0,0,0,.176-.407l.259.192a.768.768,0,0,0,1.039-.116l2.325-2.7a.768.768,0,1,0-1.164-1l-1.86,2.161-.976-.723a2.34,2.34,0,0,0-.216-.246,2.37,2.37,0,0,0-3.4.088l-1.687,1.829V50.814H34.32a.768.768,0,0,0,0-1.536H10.707a.9.9,0,0,0-.9.9V70.343L7.372,72.988a1.568,1.568,0,0,1-.13-.623V58.128a.768.768,0,1,0-1.536,0v4.38L1.073,69.7a6.7,6.7,0,0,0,.1,7.42l2.958,4.335a3.823,3.823,0,0,1,.663,2.015l.181,4.854a.768.768,0,1,0,1.535-.057l-.181-4.854A5.358,5.358,0,0,0,5.4,80.585L2.439,76.251a5.167,5.167,0,0,1-.075-5.722l3.342-5.184v7.02a3.107,3.107,0,0,0,.578,1.8l-.415.45A.768.768,0,1,0,7,75.66l7.165-7.77a.834.834,0,0,1,1.343.97L11.2,76.641a1.577,1.577,0,0,0,.163,1.776,3.821,3.821,0,0,1,.653,3.667,6.2,6.2,0,0,0-.345,1.9l-.083,3.559a.768.768,0,0,0,1.536.036l.083-3.559a4.661,4.661,0,0,1,.26-1.43,5.366,5.366,0,0,0-.918-5.149.05.05,0,0,1-.005-.056L13.6,75.471H38.836L39.9,77.385a.05.05,0,0,1-.005.056,5.366,5.366,0,0,0-.918,5.149,4.658,4.658,0,0,1,.26,1.43l.083,3.559a.768.768,0,0,0,1.536-.036l-.083-3.559a6.191,6.191,0,0,0-.345-1.9,3.821,3.821,0,0,1,.653-3.667,1.578,1.578,0,0,0,.163-1.776l-4.308-7.783a.834.834,0,0,1,1.343-.97l7.165,7.77a.768.768,0,1,0,1.129-1.041l-.415-.45a3.107,3.107,0,0,0,.578-1.8v-7.02l3.342,5.184a5.147,5.147,0,0,1,.337,5,.768.768,0,1,0,1.391.652,6.675,6.675,0,0,0-.437-6.485ZM14.453,73.935l.937-1.692h21.66l.937,1.692Z" />
											<path id="Path_2126" data-name="Path 2126" d="M77.493,178.661v-1.109a.768.768,0,1,0-1.536,0v1.109a.768.768,0,1,0,1.536,0Z" transform="translate(-68.178 -117.346)" />
											<path id="Path_2127" data-name="Path 2127" d="M154.474,115a.768.768,0,0,0-1.083.081l-1.86,2.161-1.123-.832a.768.768,0,1,0-.914,1.234l1.7,1.257a.768.768,0,0,0,1.039-.116l2.325-2.7A.768.768,0,0,0,154.474,115Z" transform="translate(-133.905 -61.722)" />
											<path id="Path_2128" data-name="Path 2128" d="M240.505,128.008H226.05a.768.768,0,1,0,0,1.536h14.455a.768.768,0,0,0,0-1.536Z" transform="translate(-202.211 -73.566)" />
											<path id="Path_2129" data-name="Path 2129" d="M240.505,187.616H226.05a.768.768,0,0,0,0,1.536h14.455a.768.768,0,0,0,0-1.536Z" transform="translate(-202.211 -127.069)" />
											<path id="Path_2130" data-name="Path 2130" d="M157.827,174.572a.768.768,0,0,0-1.086,0l-.816.816-.816-.816a.768.768,0,1,0-1.086,1.086l.816.816-.816.816a.768.768,0,1,0,1.086,1.086l.816-.816.816.816a.768.768,0,1,0,1.086-1.086l-.816-.816.816-.816A.768.768,0,0,0,157.827,174.572Z" transform="translate(-138.048 -115.159)" />
										</g>
									</svg>
								</div>
								<p>
								Expression of interest
									{/* Fill the Form */}
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
								<p>Book a Meeting</p>
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
								<p>
								Talk to us
									{/* Interview */}
									</p>
							</li>
							<li>
								<div className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="63.894" height="41.778" viewBox="0 0 63.894 41.778">
										<g id="teamwork" transform="translate(0 0)">
											<path id="Path_2137" data-name="Path 2137" d="M286.985,38.62h2.251a.936.936,0,0,0,.914-1.141l-1.5-6.671,3.863,7.313a.936.936,0,0,0,.828.5h2.251a.936.936,0,0,0,.9-1.194l-2.777-9.7a.471.471,0,0,1,.021-.314l3.428-7.853,0-.012c.005-.012.009-.024.014-.037s.012-.032.017-.048l0-.012a.12.12,0,0,0,0-.014l.005-.02c0-.014.007-.028.01-.042s0-.018.005-.027,0-.022,0-.034,0-.019,0-.029,0-.028,0-.043,0-.023,0-.035,0-.006,0-.01v0c0-.005,0-.011,0-.016l-.073-8.812c0-.012,0-.023,0-.035a3.993,3.993,0,0,0-1.331-2.81,4.145,4.145,0,0,0-.469-.363,2.753,2.753,0,0,0,.777-1.174l.692-2.042A2.773,2.773,0,0,0,295.1.433L294.3.159a2.77,2.77,0,0,0-3.513,1.734l-.692,2.041a2.771,2.771,0,0,0,.544,2.717L277.6,7.505a.936.936,0,0,0-.875.942,3.818,3.818,0,0,0,3.852,3.787l.934-.006V14.2a.691.691,0,0,1-.69.69h-11.64a.691.691,0,0,1-.69-.69V2.564a.691.691,0,0,1,.69-.691h11.64a.691.691,0,0,1,.69.691V4.414a.936.936,0,0,0,1.872,0V2.564A2.566,2.566,0,0,0,280.823,0h-11.64a2.565,2.565,0,0,0-2.562,2.564V14.2a2.565,2.565,0,0,0,2.562,2.563h11.64a2.565,2.565,0,0,0,2.563-2.563v-1.99l5.271-.037.287,6.566-6.255,6.506a2.814,2.814,0,0,0-.444,3.365l3.875,9.426a.935.935,0,0,0,.865.58Zm5.036-11.952a2.341,2.341,0,0,0-.1,1.578l2.434,8.5h-.445l-4.934-9.341-.008-.014-.094-.179a.955.955,0,0,0-.1-.155.538.538,0,0,1-.1-.482l1.929-6.53,4.291.058Zm-.156-22.133.692-2.042a.895.895,0,0,1,1.138-.562l.808.273a.9.9,0,0,1,.562,1.138l-.692,2.042a.9.9,0,0,1-1.138.562l-.808-.273a.9.9,0,0,1-.562-1.138Zm-9.408,5.813h-.017l-1.876.013a1.952,1.952,0,0,1-1.752-1.06l14.206-.931A2.149,2.149,0,0,1,295.3,10.4l.065,7.837-4.569-.062-.263-6.014.734,0a.936.936,0,0,0-.007-1.872h-.006Zm1.431,17.366a.947.947,0,0,1,.143-1.159l3.881-4.037-1.045,3.538a2.415,2.415,0,0,0,.126,1.664l-.239.254a.871.871,0,0,0-.077.093,1.633,1.633,0,0,0-.226,1.486l1.616,7.2h-.454l-3.661-8.906a.879.879,0,0,0-.064-.129Zm0,0" transform="translate(-233.349)" />
											<path id="Path_2138" data-name="Path 2138" d="M471.779,319.777H468.05a.936.936,0,1,0,0,1.872h3.729a.936.936,0,0,0,0-1.872Zm0,0" transform="translate(-408.821 -279.871)" />
											<path id="Path_2139" data-name="Path 2139" d="M417.833,319.777H414.1a.936.936,0,0,0,0,1.872h3.729a.936.936,0,0,0,0-1.872Zm0,0" transform="translate(-361.608 -279.871)" />
											<path id="Path_2140" data-name="Path 2140" d="M13.669,27.736l.05-3.706,1.843,1.025a2.191,2.191,0,0,0,.282.13v.556a2.508,2.508,0,0,0,2.5,2.5H29.574a2.508,2.508,0,0,0,2.5-2.5V14.514a2.508,2.508,0,0,0-2.5-2.505H18.348a2.508,2.508,0,0,0-2.5,2.505v4.9l-3.359-2.153a2.751,2.751,0,0,0,.815-1.712l.2-2.146A2.772,2.772,0,0,0,11,10.383l-.849-.08a2.77,2.77,0,0,0-3.018,2.5l-.2,2.146a2.757,2.757,0,0,0,.513,1.879,3.359,3.359,0,0,0-.349.339l-.427.484a4.924,4.924,0,0,0-1.229,3.213l-.06,7.27-.527,4.084a.936.936,0,0,0,1.857.239l.43-3.334,4.266-.058-1.3,3.777-.012.036L5.651,45.754H5l1.2-9.284a.936.936,0,1,0-1.856-.24L3.005,46.57a.936.936,0,0,0,.929,1.056H6.318a.935.935,0,0,0,.885-.631l4.163-12.07L14.358,38.1l-1.882,8.382a.936.936,0,0,0,.914,1.141H15.64a.936.936,0,0,0,.866-.58l3.873-9.426a2.812,2.812,0,0,0-.439-3.361Zm4.679-13.855H29.574a.633.633,0,0,1,.633.633V25.742a.633.633,0,0,1-.633.632H18.348a.633.633,0,0,1-.632-.632V25.21l3.867-.476a4.414,4.414,0,0,0,3.871-4.376.936.936,0,0,0-1.035-.931l-6.7.714V14.514a.633.633,0,0,1,.632-.633ZM8.8,15.122,9,12.976a.9.9,0,0,1,.892-.813.851.851,0,0,1,.086,0l.849.08a.9.9,0,0,1,.81.978l-.2,2.146a.895.895,0,0,1-.85.811A3.312,3.312,0,0,0,9.36,16.04a.9.9,0,0,1-.562-.917ZM7.315,20.876a3.047,3.047,0,0,1,.761-1.991L8.5,18.4a1.461,1.461,0,0,1,.767-.459c.054.008.108.016.163.021l.768.072a1.51,1.51,0,0,1,.186.1l5.619,3.6.013.008a2.16,2.16,0,0,0,.444.207l.041.015a2.176,2.176,0,0,0,.884.089l5.958-.635a2.541,2.541,0,0,1-1.992,1.452l-4.7.579a.291.291,0,0,1-.179-.035l-3.2-1.777-.036-.02-2.168-1.206a.936.936,0,1,0-.91,1.636l1.7.944L11.8,27.184l-4.542.061ZM18.737,36.72a.935.935,0,0,0-.065.129l-3.659,8.906h-.454l1.615-7.194a1.629,1.629,0,0,0-.226-1.487.872.872,0,0,0-.077-.093l-3.815-4.054,1.058-3.066,5.48,5.7.009.009a.942.942,0,0,1,.135,1.15Zm0,0" transform="translate(-2.624 -9.005)" />
											<path id="Path_2141" data-name="Path 2141" d="M4.665,319.777H.936a.936.936,0,0,0,0,1.872H4.665a.936.936,0,1,0,0-1.872Zm0,0" transform="translate(0 -279.871)" />
											<path id="Path_2142" data-name="Path 2142" d="M80.716,319.777H76.987a.936.936,0,0,0,0,1.872h3.729a.936.936,0,1,0,0-1.872Zm0,0" transform="translate(-66.561 -279.871)" />
											<path id="Path_2143" data-name="Path 2143" d="M182.561,182.038h-2.1a3.06,3.06,0,0,0,.248-1.209V165.479a3.085,3.085,0,0,0-3.081-3.081h-8.707a.936.936,0,0,0,0,1.872h8.707a1.211,1.211,0,0,1,1.209,1.209v15.349a1.211,1.211,0,0,1-1.209,1.209H162.278a1.211,1.211,0,0,1-1.209-1.209V165.479a1.211,1.211,0,0,1,1.209-1.209h2.061a.936.936,0,1,0,0-1.872h-2.061a3.085,3.085,0,0,0-3.081,3.081v15.349a3.06,3.06,0,0,0,.248,1.209h-2.461a.936.936,0,0,0,0,1.872h25.578a.936.936,0,0,0,0-1.872Zm0,0" transform="translate(-136.574 -142.132)" />
										</g>
									</svg>
								</div>
								<p>
								Become a partner
									{/* You're Partner! */}
									</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			
      <section className="become-partner-sec-3 sec-py-50">
          <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-sm-12 order-md-1 order-sm-2 order-2">
                    <div className="">
                        <img src={`${imageURL}bacome-partner-partner-with-icause.jpg`} className="img-fluid" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7 col-sm-12 d-flex align-items-center order-md-2 order-sm-1 order-1">
                      <div className="gen-text-box">
                          <h3 className="marker-text">
						  Why choose icause?
							  {/* Fill the Form */}
							  </h3>
                          <h4 className="heading">
						  Become a partner and help make a difference
							  {/* Partner with Icause and help make a difference */}
							  </h4>
						  <p>We are proud to partner with charities, schools, hospitals, clubs and corporations to help raise funds and make a difference. </p>
						  <p>We have created a new and unique way to inspire your supporters; through your campaign portal, your supporters can choose to donate funds directly or use their utility bills to support your cause. This unique option means that supporters who aren't in a position to donate financially can still be your biggest supporters – all they need to do is upload a bill, and we'll do the rest! Find out more about donating with a bill here.</p>
						  <p>When you become one of our partners, you gain access to a powerful fundraising platform that will help you connect with your supporters and achieve your goals faster. </p>
					  </div>
                  </div>
              </div>
          </div>
      </section>

			<section className="become-partner-sec-5 sec-py-70">
				<div className="container">
					<div className="gen-text-box">
						<p className="marker-text">Partner benefits </p>
						<h4 className="heading">
						We're here to make your fundraising easy!
							{/* Benefits of Icause: */}
							</h4>
							<p>We’re passionate about helping you reach your fundraising goals, and we’ve thought of everything to make it happen</p>
						<ul className="circle-before check-icon-list">
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>A new way to reach your supporters</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> A unique way to donate</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Complete transparency and control</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Fast payment of funds</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Campaign dashboard access</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Security guarantee</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> App for IOS and Android devices</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Fundraising tracker</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Complete marketing tool</li>
						<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img> Reach out to all Social Media platforms with a single post.</li>
					
									{/* <li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>A new way to reach your supporters</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>A unique way to donate</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Transparency</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Fast payment of funds</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Dashboard Access</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Security guarantee</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>App for IOS and Android devices</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Fundraising tracker</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Complete Marketing tool</li>
									<li><img src={`${imageURL}check-icon.png`} alt="icon" className="img-fluid mr-2"></img>Reach out to all Social Media platforms with a single post. </li> */}
						</ul>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-6 sec-py-50">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-5 col-sm-12">
							<div className="img-wrap">
								<img src={`${imageURL}become-partner-6-img-1.png`} className="img-fluid" alt="img" />
							</div>
						</div>
						<div className="col-lg-5 col-md-7 col-sm-12 d-flex align-items-center">
							<div className="gen-text-box">
								<p className="marker-text">
								Let’s make this happen!
									{/* Interview */}
									</p>
								<h4 className="heading">
								Book a meeting
									{/* How to Join and Become A Partner?  */}
									</h4>
									<p>We know that fundraising is different for everyone, that’s why the best way to partner with us is to book a meeting to discuss your unique fundraising needs with one of our passionate team.</p>
								<p>Simply fill in the form below or email partnership@icause.com.au and we’ll be in touch.</p>
								{/* <p>Becoming one of our partners is easy –follow the link to create your Icause account, verify your details, confirm your email, connect your business and you'll be up and running in no time. Enter your organization's details, nominated bank accounts for the funds to be deposited and details about your fundraising campaign. </p>
								<p>Once your campaign page is set up, the best way to raise funds is to invite your supporters to donate. We've made it easy! You can choose a bulk invite through SMS or email or share your post on social media through your dashboard.</p>
								<p>We know that fundraising is different for everyone. In case you have trouble signing up or have more questions just contact us using the Partnership form below or email partnership@icause.com.au</p> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="become-partner-sec-7 sec-py-50 pb-0">
				<div className="container">
					<div className="gen-text-box pl-3">
						<p className="marker-text">
						We're ready to hear from you!
							{/* We are here for your help */}
							</p>
						<h4 className="heading">
						Express your interest
							{/* Ready to be Partner? */}
							</h4>
						<Spin spinning={loading}>
							<Form
								className="gen-form"
								form={form}
								name='basic'
								onFinish={(values) => onFinish(props, values, form, history, postCode)}
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
											<label>Email:</label>
											<Form.Item
												name="email"
												rules={[
													{
														required: true,
														message: 'Please input email!',
													},
												]}>
												<Input type="email" placeholder="Enter Email Here..." />
											</Form.Item>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<div className="row">
												<div className="col_3" style={{ color: "#ff4d4f", marginLeft: "8px", marginRight: "-8px", fontSize: "14px" }}>*</div>
												<div className="col_6"><label>Phone Number</label></div>
											</div>
											<input
												style={{ height: "44px", borderRadius: "0px", border: "none", width: "100%", outline: "none" }}
												value={phoneNumber}
												placeholder='&nbsp; e.g. (04) 12343521'
												name="phoneNumber"
												onChange={(event) => {
													const input = event.target;
													let value = input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/);
													input.value = !value[2] ? value[1] : '(' + value[1] + ') ' + value[2] + (value[3] ? '' + value[3] : '') + (value[4] ? '' + value[4] : '');
													setPhoneNumber("  " + input.value);
													setError("");
												}}
											/>
											{error && <p style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "5px", marginBottom: "20px" }}>{error}</p>}
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label>ABN Number:</label>
											<DataListInput
												placeholder={`Search`}
												items={items}
												onSelect={onSelect}
												match={matchHandler}
												onInput={setSearchFilter}
												value={selectValue?.label ? selectValue?.label : filter && filter.name ? filter.name.toLowerCase() : ''}
												type="search"
												inputClassName="form-control"
												suppressReselect={false}
											/>
											<svg id="search_1_" className="search-icon" data-name="search (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
												<g id="Group_6443" data-name="Group 6443" transform="translate(0)">
													<path id="Path_36602" data-name="Path 36602" d="M.122,18.7l5.81-5.81A7.932,7.932,0,1,1,7.11,14.068L1.3,19.878a.417.417,0,0,1-.589,0l-.589-.589A.417.417,0,0,1,.122,18.7Zm11.961-4.533a6.25,6.25,0,1,0-6.25-6.25A6.257,6.257,0,0,0,12.083,14.167Z" transform="translate(0 0)" />
												</g>
											</svg>
											{/* <Form.Item
												name="abn"
												rules={[
													{
														required: true,
														message: 'Please input ABN number!',
													},
												]}>
												<Input type="text" placeholder="Enter ABN Number Here (e.g. 66 168 166 667)" />
											</Form.Item> */}
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div id='custom-select' className="form-group">
											<label>Industry:</label>
											<Form.Item
												id='customSelect'
												name="industry"
												rules={[
													{
														required: true,
														message: 'Please select industry!',
													},
												]}>
												<Select placeholder='Select your Industry..'>
													<Option key='1' value='school'>School</Option>
													<Option key='2' value='sport'>Sport</Option>
													<Option key='3' value='charity'>Charity</Option>
													<Option key='4' value='community'>Community</Option>
												</Select>
											</Form.Item>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label>Password:</label>
											<Form.Item
												name="password"
												rules={[
													{
														required: true,
														message: 'Please input password!',
													},
												]}>
												<Input type="password" placeholder="Enter your Password.." />
											</Form.Item>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<label>Confirm Password:</label>
											<Form.Item
												name="confirm_password"
												rules={[
													{
														required: true,
														message: 'Please input confirm password!',
													},
												]}>
												<Input type="password" placeholder="Repeat your Password.." />
											</Form.Item>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group radio-group d-flex alig-items-center">
											<Form.Item
												name="agreement"
												valuePropName="checked"
												rules={[
													{
													  validator: (_, value) =>
														value ? Promise.resolve() : Promise.reject(new Error('Please agree to terms and conditions!')),
													},
												  ]}
												>
												<Checkbox />
											</Form.Item>
											<label htmlFor="condition" style={{ position: "absolute", marginLeft: "30px" }}>
												I Agree with the Website
												<a href="#!"> Terms & Conditions</a>
											</label>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group radio-group d-flex alig-items-center">
									<p>Already a User?  <a href="/auth/login">Login</a>
									</p>
									</div>

									</div>
								</div>
								<div style={{ textAlign: 'center' }}>
									<button htmlType='submit'
										onClick={() => {
											setError("");
											if (!phoneNumber) {
												setError("Please enter phone number!")
											}
										}}
										className="btn btn-success my-2 my-sm-0 text-uppercase" type='primary'>Register</button>
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

export default BecomeApartner;
