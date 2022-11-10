import React from 'react';

import { Button, Form, Input, Select, Tag } from 'antd';
import icons from '../../../shared/assests/icons';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const UpdateDevice = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    form.resetFields();
    navigate('/device');
  };

  const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  return (
    <>
      <div className="device--group__update">
        <h2>Quản lý thiết bị</h2>

        <Form
          form={form}
          className="device--group__update__wrapper"
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div
            style={{
              padding: '16px 24px 0',
              width: '100%',
              height: '556px',
            }}
          >
            <div className="device--group__update__title">
              <h3>Thông tin thiết bị</h3>
            </div>

            <div className="form--group">
              <div className="form--group__items">
                <Form.Item
                  shouldUpdate
                  className="form--group__item"
                  label="Mã thiết bị: "
                  name="deviceId"
                  rules={[{ required: true, message: 'Vui lòng nhập mã thiết bị!' }]}
                >
                  <Input className="form--group__input" placeholder="Nhập mã thiết bị" />
                </Form.Item>

                <Form.Item
                  className="form--group__item"
                  label="Tên thiết bị:"
                  name="deviceName"
                  rules={[{ required: true, message: 'Vui lòng nhập tên thiết bị!' }]}
                >
                  <Input className="form--group__input" placeholder="Nhập tên thiết bị" />
                </Form.Item>

                <Form.Item
                  className="form--group__item"
                  label="Địa chỉ IP:"
                  name="IPaddress"
                  rules={[{ required: true, message: 'Vui lòng nhập địa chỉ IP!' }]}
                >
                  <Input className="form--group__input" placeholder="Nhập địa chỉ IP" />
                </Form.Item>
              </div>

              <div className="form--group__items form--group__select">
                <img className="form--group__select--img" src={icons.downIcon} alt="dropdownIcon" />

                <Form.Item
                  className="form--group__item "
                  label="Loại thiết bị:"
                  name="deviceType"
                  rules={[{ required: true, message: 'Vui lòng nhập loại thiết bị!' }]}
                >
                  <Select
                    showArrow={false}
                    className="form--group__input"
                    placeholder="Chọn loại thiết bị"
                  >
                    <Select.Option value="Kiosk">Kiosk</Select.Option>
                    <Select.Option value="Display counter">Display counter</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  className="form--group__item"
                  label="Tên đăng nhập:"
                  name="username"
                  rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                >
                  <Input className="form--group__input" placeholder="Nhập tài khoản" />
                </Form.Item>

                <Form.Item
                  className="form--group__item"
                  label="Mật khẩu:"
                  name="password"
                  rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                  <Input placeholder="Nhập mật khẩu" className="form--group__input" />
                </Form.Item>
              </div>
            </div>

            <Form.Item
              className="form--group__item"
              label="Dịch vụ sử dụng:"
              name="services"
              rules={[{ required: true, message: 'Vui lòng nhập dịch vụ sử dụng:!' }]}
            >
              <React.Fragment>
                <Input className="form--group__service" />

                <div className="form--group__service--tags">
                  <Tag closable onClose={log}>
                    Khám tim mạch
                  </Tag>
                  <Tag closable onClose={log}>
                    Khám sản phụ khoa
                  </Tag>
                  <Tag closable onClose={log}>
                    Khám răng hàm mặt
                  </Tag>
                  <Tag closable onClose={log}>
                    Khám tai mũi họng
                  </Tag>
                  <Tag closable onClose={log}>
                    Khám hô hấp
                  </Tag>
                  <Tag closable onClose={log}>
                    Khám tổng quát
                  </Tag>
                </div>
              </React.Fragment>
            </Form.Item>

            <div className="form--group__description">Là trường thông tin bắt buộc</div>
          </div>

          <div className="form--group__btn">
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={handleCancel}
                className="form--group__btn--default btn--outline"
                type="primary"
              >
                Hủy bỏ
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                className="form--group__btn--default btn--normal"
                type="primary"
                htmlType="submit"
              >
                Cập nhật
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateDevice;
