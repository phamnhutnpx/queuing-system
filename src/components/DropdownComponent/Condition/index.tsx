import React from 'react';

import { Button, Dropdown, Menu, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import icons from '../../../shared/assests/icons';
import './styles.scss';

const Condition = () => {
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
          label: 'Tất cả',
          key: '1',
        },
        {
          label: 'Đang chờ',
          key: '2',
        },
        {
          label: 'Đã sử dụng',
          key: '3',
        },
        {
          label: 'Bỏ qua',
          key: '4',
        },
      ]}
    />
  );

  return (
    <>
      <Space wrap>
        <Dropdown overlay={menu}>
          <Button className="condition-btn">
            <Space className="condition-custom">
              Tất cả
              <div className="condition-btn__icon">
                <img src={icons.downIcon} alt="downIcon" />
              </div>
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

export default Condition;
