import React, { useState } from 'react';
import { Modal, Form, Input, Select, Upload, notification, Spin } from 'antd';
import moment from 'moment';
import { isEmpty } from 'lodash';

const { Option } = Select;

const onFinish = ({ props, values, id, fileResume, video, setResumeFile, setModalVisibility, setSelectedJob, setVideo }) => {
	if (isEmpty(fileResume)) {
		notification.error({
			message: 'APPLY JOB',
			description: 'Resume is required'
		});
	} else if (isEmpty(video)) {
		notification.error({
			message: 'APPLY JOB',
			description: 'Video is required'
		});
	} else {
		const { getCurrentOpenings, applyJob } = props;
		applyJob({ ...values, id, video, fileResume }).then(() => {
			getCurrentOpenings();
			setResumeFile({});
			setVideo({});
			setSelectedJob({});
			setModalVisibility(false);
		});
	}
};

const ApplyJobModal = (props) => {
	const {
		isModalVisible,
		setModalVisibility,
		setSelectedJob,
		selectedJob,
		loading
	} = props;
	const { id, benefits, experienced, location, responsibilities, title, long_des, created_at } = selectedJob;
	const [form] = Form.useForm();
	const [fileResume, setResumeFile] = useState({});
	const [video, setVideo] = useState({});

	const uploadFileProps = {
		accept: '.pdf',
		name: 'file',
		headers: {
			authorization: 'authorization-text',
		},
		onChange({ fileList }) {
			const [fileResume] = fileList || [];
			const { originFileObj } = fileResume || {};
			setResumeFile(originFileObj || {});
		}
	}
	const uploadVideoProps = {
		accept: '.mp4',
		onChange({ fileList }) {
			const [video] = fileList || [];
			const { originFileObj } = video || {};
			setVideo(originFileObj || {});
		}
	}
	return (
		<Modal className="job-modal"
			title={null}
			footer={null}
			width='80%'
			destroyOnClose={true}
			maskClosable={false}
			visible={isModalVisible}
			onOk={() => setModalVisibility(false)}
			onCancel={() => {
				setModalVisibility(false);
				setSelectedJob({});
				setResumeFile({});
				setVideo({});
			}}>
			<div>
				<Spin spinning={loading}>
				<div id="jobModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								<div className="container">
									<div className="row">
										<div className="col-lg-8 col-md-8 col-sm-12">
											<div className="gen-text-box mb-4">
												<h3 className="marker-text">Apply this job</h3>
												<h4 className="heading">{title}</h4>
											</div>
											<div className="modal-text">
												<h5>JOB DESCRIPTION:</h5>
												<p>{long_des}</p>

												<h5>RESPONSIBILITIES:</h5>
												<p dangerouslySetInnerHTML={{ __html: responsibilities || '' }}></p>

												<h5>BENEFITS:</h5>
												<p dangerouslySetInnerHTML={{ __html: benefits || '' }}></p>
												<Form
													form={form}
													layout="vertical"
													name="basic"
													className="gen-form mt-5"
													onFinish={(values) => onFinish({ props, values, id, fileResume, video, setModalVisibility, setSelectedJob, setResumeFile, setVideo })}
												>
													<div className="modal-text">
														<h5>JOB DESCRIPTION:</h5>
													</div>
													<div className="row">
														<div className="col-lg-6 col-md-6 col-sm-6 col-12">
															<div className="form-group">
																<Form.Item
																	name="first_name"
																	rules={[
																		{
																			required: true,
																			message: 'Please input first name!',
																		},
																	]}>
																	<Input placeholder='First Name:' />
																</Form.Item>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6 col-12">
															<div className="form-group">
																<Form.Item
																	name="last_name"
																	rules={[
																		{
																			required: true,
																			message: 'Please input last name!',
																		},
																	]}>
																	<Input placeholder="Last Name:" />
																</Form.Item>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6 col-12">
															<div id='apply-job-select' className="form-group">
																<Form.Item
																	name="experience"
																	rules={[
																		{
																			required: true,
																			message: 'Please select experience!',
																		},
																	]}>
																	<Select placeholder='Experience'>
																		<Option value='0'>0 year</Option>
																		<Option value='1'>1 year</Option>
																		<Option value='1+'>1 year plus</Option>
																		<Option value='2+'>2 year plus</Option>
																	</Select>
																</Form.Item>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6 col-12">
															<div className="form-group">
																<Form.Item
																	name="phone_number"
																	rules={[
																		{
																			required: true,
																			message: 'Please input Phone number!',
																		},
																	]}>
																	<Input type="tel" placeholder="Phone Number:" />
																</Form.Item>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-group">
																<Form.Item
																	name="address"
																	rules={[
																		{
																			required: true,
																			message: 'Please input address!',
																		},
																	]}>
																	<Input placeholder="Address:" />
																</Form.Item>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-group mb-0">
																<button htmltype='submit' className="form-apply-btn btn btn-success">Apply Now</button>
															</div>
														</div>
													</div>
												</Form>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-12">
											<div className="modal-info-box modal-info-box-1">
												<div className="info-group">
													<div className="info-icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
															<path id="calendar" d="M14,2h-.667V.667A.667.667,0,0,0,12.667,0H12a.667.667,0,0,0-.667.667V2H4.667V.667A.667.667,0,0,0,4,0H3.334a.667.667,0,0,0-.667.667V2H2A2,2,0,0,0,0,4V14a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Zm.667,12a.668.668,0,0,1-.667.667H2A.668.668,0,0,1,1.334,14V6.693H14.667Zm0,0" transform="translate(0)" />
														</svg>
													</div>
													<div className="info-text">
														<p>Date Posted:</p>
														<p>{created_at ? moment(created_at).format('DD-MM-YYYY') : ''}</p>
													</div>
												</div>
												<div className="info-group">
													<div className="info-icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="14.482" height="20.831" viewBox="0 0 14.482 20.831">
															<path id="placeholder" d="M.991,0A7.249,7.249,0,0,0-6.25,7.241C-6.25,12.259,1,20.831,1,20.831s7.234-8.819,7.234-13.59A7.249,7.249,0,0,0,.991,0ZM3.175,9.361a3.08,3.08,0,0,1-2.185.9,3.08,3.08,0,0,1-2.185-.9,3.093,3.093,0,0,1,0-4.369A3.069,3.069,0,0,1,.991,4.087a3.07,3.07,0,0,1,2.185.905A3.093,3.093,0,0,1,3.175,9.361Zm0,0" transform="translate(6.25)" />
														</svg>
													</div>
													<div className="info-text">
														<p>Location:</p>
														<p>{location}</p>
													</div>
												</div>
												<div className="info-group mb-0">
													<div className="info-icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="17.203" height="16.41" viewBox="0 0 17.203 16.41">
															<g id="star" transform="translate(0 -11.796)">
																<g id="Group_598" data-name="Group 598" transform="translate(0 11.796)">
																	<path id="Path_7108" data-name="Path 7108" d="M17.178,18.027a.5.5,0,0,0-.407-.343l-5.333-.775L9.053,12.077a.5.5,0,0,0-.9,0L5.765,16.909l-5.333.775a.5.5,0,0,0-.279.86l3.859,3.762L3.1,27.617a.5.5,0,0,0,.731.531L8.6,25.641l4.77,2.508a.5.5,0,0,0,.731-.531l-.911-5.311,3.859-3.762A.5.5,0,0,0,17.178,18.027Z" transform="translate(0 -11.796)" />
																</g>
															</g>
														</svg>
													</div>
													<div className="info-text">
														<p>Experienced:</p>
														<p>{experienced}</p>
													</div>
												</div>
											</div>
											<div className="modal-info-box modal-info-box-2">
												<p>Upload Video:</p>
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
												<div className="video-box">
													<Upload
														maxCount={1}
														beforeUpload={() => false}
														{...uploadVideoProps}
													>
														<button style={{ border: '0px solid', background: 'none' }}>
															<div className="video-icon">
																<svg xmlns="http://www.w3.org/2000/svg" width="40.032" height="23.52" viewBox="0 0 40.032 23.52">
																	<g id="video-camera" transform="translate(0 -96.512)">
																		<g id="Group_600" data-name="Group 600" transform="translate(0 96.512)">
																			<g id="Group_599" data-name="Group 599">
																				<path id="Path_7109" data-name="Path 7109" d="M22.644,96.512H4.38A4.393,4.393,0,0,0,0,100.892v14.76a4.393,4.393,0,0,0,4.38,4.38H22.644a4.393,4.393,0,0,0,4.38-4.38v-14.76A4.365,4.365,0,0,0,22.644,96.512Z" transform="translate(0 -96.512)" fill="#d7e0e8" />
																			</g>
																		</g>
																		<g id="Group_602" data-name="Group 602" transform="translate(29.214 98.85)">
																			<g id="Group_601" data-name="Group 601">
																				<path id="Path_7110" data-name="Path 7110" d="M349.081,123.918a2.231,2.231,0,0,0-.745.307l-6.833,3.942v10.161l6.876,3.942a2.6,2.6,0,0,0,3.591-.964,2.676,2.676,0,0,0,.35-1.314V126.458A2.636,2.636,0,0,0,349.081,123.918Z" transform="translate(-341.504 -123.847)" fill="#d7e0e8" />
																			</g>
																		</g>
																	</g>
																</svg>
															</div>
														</button>
												</Upload>
												</div>
											</div>
											<div className="modal-info-box modal-info-box-3 mb-0">
												<p>Upload Resume:</p>
												<p>It is a long established fact that a reader will be distracted by the readable.</p>
												<Upload
													maxCount={1}
													beforeUpload={(f) => false}
													{...uploadFileProps}
												>
													<button style={{ height: '40px', background: '#000', color: '#fff', textTransform: 'uppercase', fontSize: '13px', fontWeight: 500, border: 'none', outline: 'none', boxShadow: 'none', width: '90px' }}>UPLOAD</button>
												</Upload>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</Spin>
			</div>
		</Modal>
	);
};

export default ApplyJobModal;