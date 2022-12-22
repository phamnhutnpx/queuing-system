import React from 'react';

import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import icons from '../../../../shared/assests/icons';

import './styles.scss';

const UpdateRole = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    form.resetFields();
    navigate('/setting/role');
  };

  return (
    <>
      <div className="addRole">
        <div className="addRole--title">
          <h2>Danh sách vai trò</h2>
        </div>

        <Form
          form={form}
          className="addRole--group__wrapper"
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="addRole--group__content">
            <div className="addRole--group__title">
              <h3>Thông tin thiết bị</h3>
            </div>

            <div className="form--group">
              {/* content left */}
              <div className="form--group__information">
                <Form.Item
                  className="form--group__item"
                  label="Tên vai trò"
                  name="roleName"
                  rules={[{ required: true, message: 'Vui lòng Nhập tên vai trò!' }]}
                >
                  <Input className="form--group__input1" placeholder="Nhập tên vai trò" />
                </Form.Item>

                <Form.Item className="form--group__item" label="Mô tả:" name="desc">
                  <Input className="form--group__input2" placeholder="Nhập mô tả" />
                </Form.Item>
                <div className="form--group__description">
                  Là trường thông tin bắt buộc
                  <span>
                    <img src={icons.requiredIcons} alt="required" />
                  </span>
                </div>
              </div>

              {/* content right */}
              <div className="form--group__actions">
                <div className="form--group__title">
                  Phân quyền chức năng
                  <span>
                    <img src={icons.requiredIcons} alt="required" />
                  </span>
                </div>

                <div className="content">
                  <div className="content--title1">
                    <h2>Nhóm chức năng A</h2>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Tất cả</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Chức năng x</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Chức năng y</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Chức năng z</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </div>

                  <div className="content--title2">
                    <h2>Nhóm chức năng B</h2>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="E">Tất cả</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="F">Chức năng x</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="G">Chức năng y</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="H">Chức năng z</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </div>
                </div>
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
              Cập nhật
            </Button>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default UpdateRole;
