import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Layout } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import './style.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} là bắt buộc!',
  types: {
    email: '${label} không phải là email!',
    number: '${label} không phải là số!',
  },
  number: {
    range: '${label} phải là giữa ${min} và ${max}',
  },
};

const AddService = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Layout className="service__add">
      <h2 className="service__title">Quản lý dịch vụ</h2>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        // style={{ background: '#c3c3c3' }}
        className="service__add-form"
      >
        <div className="form__element form__information">
          <p className="title">Thông tin dịch vụ</p>
          <div className="container">
            <div className="w-100">
              <Form.Item
                name={['serviceCode', 'name']}
                label="Mã dịch vụ: "
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['serviceName', 'name']}
                label="Tên dịch vụ: "
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item name={['user', 'introduction']} label="Mô tả: ">
              <Input.TextArea />
            </Form.Item>
          </div>
        </div>
        <div className="form__element form__rulefornumber">
          <div className="title">Quy tắc cấp số</div>
          <div>
            <div>
              <Checkbox onChange={onChange}>Tăng tự động từ:</Checkbox>
              <InputNumber min={1} max={9999} defaultValue={1} />
              &nbsp;đến&nbsp;
              <InputNumber min={1} max={9999} defaultValue={9999} />
            </div>
            <div>
              <Checkbox onChange={onChange}>Prefix:</Checkbox>
              <InputNumber min={1} max={9999} defaultValue={1} />
            </div>
            <div>
              <Checkbox onChange={onChange}>Surfix:</Checkbox>
              <InputNumber min={1} max={9999} defaultValue={1} />
            </div>
            <div>
              <Checkbox onChange={onChange}>Reset mỗi ngày</Checkbox>
            </div>
          </div>
        </div>
        <p>* Là trường thông tin bắt buộc</p>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Hủy bỏ
          </Button>
          <Button type="primary" htmlType="submit">
            Thêm dịch vụ
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default AddService;
