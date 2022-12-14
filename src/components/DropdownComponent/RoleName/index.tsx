import React from 'react';

import { Button, Dropdown, Menu, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import icons from '../../../shared/assests/icons';
import './styles.scss';

const RoleName = () => {
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
          label: 'Kế toán',
          key: '1',
        },
        {
          label: 'Bác sĩ',
          key: '2',
        },
        {
          label: 'Quản lý',
          key: '3',
        },
        {
          label: 'Admin',
          key: '3',
        },
      ]}
    />
  );

  return (
    <>
      <Space wrap className="connection">
        <Dropdown overlay={menu}>
          <Button className="connection-btn">
            <Space className="connection-custom">
              Kế toán
              <div className="connection-btn__icon">
                <img src={icons.downIcon} alt="downIcon" />
              </div>
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

export default RoleName;
