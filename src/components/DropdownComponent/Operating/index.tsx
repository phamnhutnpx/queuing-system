import React from 'react';

import { Button, Dropdown, Menu, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import icons from '../../../shared/assests/icons';
import './styles.scss';

const Operating = () => {
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
          label: 'Hoạt động',
          key: '2',
        },
        {
          label: 'Ngưng hoạt động',
          key: '3',
        },
      ]}
    />
  );

  return (
    <>
      <Space wrap>
        <Dropdown overlay={menu}>
          <Button className="operating-btn">
            <Space className="operating-custom">
              Tất cả
              <div className="operating-btn__icon">
                <img src={icons.downIcon} alt="downIcon" />
              </div>
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

export default Operating;
