import React from 'react';

import { Button, Form, Modal } from 'antd';

import { useNavigate } from 'react-router-dom';

import ServicesGiveNum from '../../../components/DropdownComponent/ServicesGiveNum';

import './styles.scss';

const GiveNewNum = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const showModal = () => {
    setIsOpenModal(true);
  };
  const handleCancelModal = () => {
    setIsOpenModal(false);
  };
  // const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleCancel = () => {
    // form.resetFields();
    navigate('/givenumber');
  };
  return (
    <>
      <div className="GNN--title">
        <h2>Quản lý cấp số</h2>
      </div>

      <div className="GNN">
        <div className="GNN--wrapper">
          <h1>CẤP SỐ MỚI</h1>
          <h4>Dịch vụ khách hàng lựa chọn</h4>

          <ServicesGiveNum />

          <div className="GNN--btn__group">
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={handleCancel}
                className="GNN--btn__group--default btn--outline"
                type="primary"
              >
                Hủy bỏ
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={showModal}
                className="GNN--btn__group--default btn--normal"
                type="primary"
                htmlType="submit"
              >
                In số
              </Button>
              <Modal className="GNN-modal" open={isOpenModal} onCancel={handleCancelModal}>
                <div className="GNN-modal__top">
                  <h4>Số thứ tự được cấp</h4>
                  <h1>2001201</h1>
                  <h5>DV: Khám răng hàm mặt (tại quầy số 1)</h5>
                </div>

                <div className="GNN-modal__footer">
                  <p style={{ paddingTop: '16px' }}>
                    <span>Thời gian cấp: </span>
                    <span>09:30 11/10/2021</span>
                  </p>
                  <p>
                    <span>Hạn sử dụng: </span>
                    <span>17:30 11/10/2021</span>
                  </p>
                </div>
              </Modal>
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveNewNum;
