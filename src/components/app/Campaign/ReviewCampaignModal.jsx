

import React from 'react';
import { Modal, Form, Input, Rate, Button } from 'antd';

const { TextArea } = Input;

const onFinish = (props, values, form, setReviewModalVisibility) => {
  const { getReviewsForCampaigns, addReviewForCampaign, campaignId } = props;
  addReviewForCampaign({ ...values, campaignId }).then(() => {
    setReviewModalVisibility(false);
    getReviewsForCampaigns(campaignId);
    form.resetFields();
  });
};

const ReviewCampaignModal = (props) => {
  const [form] = Form.useForm();
  const { campaignDetails } = props;
  const { loadingForAddingReview } = campaignDetails;
  const { isReviewsModalVisible, setReviewModalVisibility } = props;
  return (
    <div>
      <Modal
        title='Add a Review'
        footer={null}
        maskClosable={false}
        visible={isReviewsModalVisible}
        onOk={() => setReviewModalVisibility(false)}
        onCancel={() => setReviewModalVisibility(false)}>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          onFinish={(values) => onFinish(props, values, form, setReviewModalVisibility)}
        >
          <Form.Item
            label='Rating'
            name="rating"
            rules={[
              {
                required: true,
                message: 'Please select rating',
              },
            ]}>
            <Rate />
          </Form.Item>
          <Form.Item
            label='Title'
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input a title for campaign review!',
              },
            ]}>
            <Input className="form-control" placeholder='Title' />
          </Form.Item>
          <Form.Item
            label='Review'
            name="text"
            rules={[
              {
                required: true,
                message: 'Please provide a review for campaign !',
              },
            ]}>
            <TextArea rows={5} className="form-control" placeholder='Reviews' />
          </Form.Item>
          <Form.Item>
            <Button loading={loadingForAddingReview} style={{ color: 'white' }} className="btn btn-success   text-uppercase mt-4 d-block w-100" htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReviewCampaignModal;
