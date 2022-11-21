import React from 'react';

import { Button, Dropdown, Menu, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import icons from '../../../shared/assests/icons';
import './styles.scss';

const ServicesGiveNum = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Khám tim mạch',
          key: '1',
        },
        {
          label: 'Khám sản - Phụ khoa',
          key: '2',
        },
        {
          label: 'Khám răng hàm mặt',
          key: '3',
        },
        {
          label: 'Khám tai mũi họng',
          key: '4',
        },
      ]}
    />
  );

  return (
    <>
      <Space wrap className="dropdown--servicesGN">
        <Dropdown overlay={menu}>
          <Button className="dropdown--servicesGN-btn">
            <Space className="dropdown--servicesGN-custom">
              Chọn dịch vụ
              <div className="dropdown--servicesGN-btn__icon">
                <img src={icons.downIcon} alt="downIcon" />
              </div>
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

export default ServicesGiveNum;
