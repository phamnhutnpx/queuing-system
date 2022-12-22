import React from 'react';

import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


import icons from '../../../../shared/assests/icons';

import './styles.scss';
import RoleName from '../../../../components/DropdownComponent/RoleName';
import Operating from '../../../../components/DropdownComponent/Operating';

const AddAccount = () => {
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
    navigate('/setting/account');
  };

  return (
    <>
      <div className="addAccount">
        <div className="addAccount--title">
          <h2>Quản lý tài khoản</h2>
        </div>

        <Form
          form={form}
          className="addAccount--group__wrapper"
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="addAccount--group__content">
            <div className="addAccount--group__title">
              <h3>Thông tin tài khoản</h3>
            </div>

            <div className="form--group">
              {/* content left */}
              <div className="form--group__information">
                <Form.Item
                  className="form--group__item"
                  label="Họ tên"
                  name="name"
                  rules={[{ required: true, message: 'Vui lòng họ tên!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập họ tên" />
                </Form.Item>
                <Form.Item
                  className="form--group__item"
                  label="Số điện thoại"
                  name="phonenumber"
                  rules={[{ required: true, message: 'Vui lòng Nhập Số điện thoại!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                  className="form--group__item"
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Vui lòng Nhập email!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập email" />
                </Form.Item>
                <Form.Item
                  className="form--group__item"
                  label="Vai trò"
                  name="role"
                  rules={[{ required: true, message: 'Vui lòng Nhập tên vai trò!' }]}
                >
                  <RoleName />
                </Form.Item>

                <div className="form--group__description">
                  <span>
                    <img src={icons.requiredIcons} alt="required" />
                  </span>
                  &nbsp; Là trường thông tin bắt buộc
                </div>
              </div>

              {/* content right */}
              <div className="form--group__information">
                <Form.Item
                  className="form--group__item"
                  label="Tên đăng nhập"
                  name="name"
                  rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập tên đăng nhập" />
                </Form.Item>
                <Form.Item
                  className="form--group__item"
                  label="Mật khẩu"
                  name="phonenumber"
                  rules={[{ required: true, message: 'Vui lòng Nhập mật khẩu!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item
                  className="form--group__item"
                  label="Nhập lại mật khẩu"
                  name="email"
                  rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập lại mật khẩu" />
                </Form.Item>
                <Form.Item
                  className="form--group__item"
                  label="Tình trạng"
                  name="role"
                  rules={[{ required: true, message: 'Vui lòng chọn tình trạng!' }]}
                >
                  <Operating />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
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
              Thêm
            </Button>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default AddAccount;
